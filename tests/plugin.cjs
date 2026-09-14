const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.resolve(__dirname,'..');
const requests={},patches=[],messages=[],store=new Map(),events={};let now=0;const timers=[];
let liveLayers=[],liveStates=[];
store.set('stage-companion-config-v3',{churchName:'Igreja existente',fontScale:120,stageHeight:30,backgroundDataUrl:'data:image/jpeg;base64,AAAA',alertPresets:['Chamar atenção'],messagePresets:['Teste']});
// Legacy C2 vehicle state to validate migration.
store.set('stage-companion-state-v3',{active:true,displayLabel:'VEÍCULO',displayText:'Farol aceso',vehicleDetail:'ABC1D23 • ONIX • BRANCO',draftVisitors:['Ana'],publishedVisitors:['Ana'],draftWorship:['José'],publishedWorship:['José']});
const sdk={manifest:{name:'Stage Companion'},storage:{get:async k=>store.get(k),set:async(k,v)=>store.set(k,v)},live:{
 setElement:async(o,l,id,body)=>{patches.push({time:now,id,body});},read:async()=>liveLayers,readState:async()=>liveStates
},requests:{on:(n,f)=>requests[n]=f,error:(code,m)=>{let e=new Error(m);e.status=code;return e}},ui:{postMessage:m=>messages.push(m)},on:(name,cb)=>{events[name]=cb;return()=>{delete events[name]}}};
const context={spresenter:sdk,console,Date:class extends Date{static now(){return now}},setTimeout:(f,ms)=>timers.push({f,at:now+ms}),encodeURIComponent};
vm.runInNewContext(fs.readFileSync(path.join(root,'plugin/dist/code.js'),'utf8'),context);
async function flush(){for(let i=0;i<80;i++)await Promise.resolve()}
async function advance(ms){let end=now+ms;await flush();for(;;){timers.sort((a,b)=>a.at-b.at);if(!timers.length||timers[0].at>end)break;const t=timers.shift();now=t.at;t.f();await flush()}now=end;await flush()}
function last(id){return patches.filter(p=>p.id===id).slice(-1)[0]}
(async()=>{
 await flush();
 const config=(await requests['pwa-config']()).config;assert.equal(config.flashSeconds,30);assert.equal(config.churchName,'Igreja existente');
 let migrated=(await requests['pwa-state']()).state;assert.equal(migrated.displayText,'ABC1D23');assert.equal(migrated.vehicleDetail,'ONIX • BRANCO');assert.equal(migrated.vehicleProblem,'Farol aceso');

 // C3 vehicle: plate first, model/color uppercase, problem below. Explicit flash false.
 const r=await requests['pwa-send-vehicle']({plate:'xyz9z99',model:'Onix',color:'Branco',problem:'Bloqueando a saída',flash:false});
 assert.equal(r.state.displayText,'XYZ9Z99');assert.equal(r.state.vehicleDetail,'ONIX • BRANCO');assert.equal(r.state.vehicleProblem,'Bloqueando a saída');
 assert.equal(last('sc-alert-text').body.text,'XYZ9Z99');assert.equal(last('sc-vehicle-detail-text').body.text,'ONIX • BRANCO');assert.equal(last('sc-vehicle-problem-text').body.text,'Bloqueando a saída');
 assert(!last('sc-flash')||last('sc-flash').body.visible===false,'vehicle flash can be disabled');

 // Optional strobe on messages, using configured duration.
 await requests['pwa-send-message']({text:'Urgente',flash:true});await flush();assert(last('sc-flash').body.visible);await advance(30000);assert.equal(last('sc-flash').body.visible,false);

 // Projection: hide visitor/worship but keep urgent message. Repair video src.
 liveLayers=[{asset:{type:'video',guid:'video-guid-123'}}];liveStates=[{show:true,opacity:1}];events.live({output:'0'});await advance(100);
 assert.equal(last('main-video').body.src,'/assets/video-guid-123');
 assert.equal(last('sc-visitors-label').body.visible,false);assert.equal(last('sc-visitors-text').body.visible,false);assert.equal(last('sc-worship-label').body.visible,false);assert.equal(last('sc-worship-text').body.visible,false);
 assert.equal(last('sc-alert-text').body.visible,true,'urgent message remains visible over projection');

 // Projection ends: restore video placeholder and lists automatically.
 liveLayers=[];liveStates=[];events.state({output:'0'});await advance(100);
 assert.equal(last('main-video').body.src,'slide');assert.equal(last('sc-visitors-label').body.visible,true);assert.equal(last('sc-worship-label').body.visible,true);

 // Hide/show remains a toggle and preserves data.
 const before=(await requests['pwa-state']()).state;await sdk.ui.onmessage({type:'toggle-visibility'});let s=(await requests['pwa-state']()).state;assert.equal(s.active,false);assert.deepEqual(Array.from(s.publishedVisitors),Array.from(before.publishedVisitors));await sdk.ui.onmessage({type:'toggle-visibility'});s=(await requests['pwa-state']()).state;assert.equal(s.active,true);

 const theme=JSON.parse(fs.readFileSync(path.join(root,'Retorno-StageCompanion-08G.spresenter-theme.json')));const ids=theme.elements.map(e=>e.id);assert.equal(new Set(ids).size,ids.length);assert(ids.includes('sc-vehicle-problem-text'));assert(ids.includes('main-video'));
 const mainVideo=theme.elements.find(e=>e.id==='main-video');assert(mainVideo.assetTypeVisibility.includes('video'));assert(mainVideo.assetTypeVisibility.includes('backgroundVideo'));
 assert(patches.every(p=>ids.includes(p.id)),'all patched ids exist in theme');
 assert(patches.filter(p=>!p.id.startsWith('sc-')).every(p=>p.id==='main-video'),'only main-video native element may be patched');
 assert(!requests['pwa-save-config'],'PWA cannot change flash settings');assert(!messages.some(m=>m.type==='plugin-error'));
 console.log('PASS C3: C2 migration, vehicle order, optional strobe, video src repair, projection overlay suppression, list restore and hide/show toggle.');
})().catch(e=>{console.error(e);process.exit(1)});
