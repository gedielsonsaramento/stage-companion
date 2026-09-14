import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import path from 'node:path';import {fileURLToPath,pathToFileURL} from 'node:url';
const dom=process.env.STAGE_DOM_MODULE;if(!dom)throw Error('Set STAGE_DOM_MODULE to linkedom worker.js');const {parseHTML}=await import(pathToFileURL(dom));
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');const html=fs.readFileSync(path.join(root,'server/app/index.html'),'utf8');const {window,document}=parseHTML(html);let fail=0;const sent=[];
Object.defineProperty(document,'activeElement',{value:document.body,writable:true});
for(const el of document.querySelectorAll('button,input,textarea')){el.focus=()=>document.activeElement=el;el.blur=()=>document.activeElement=document.body;}
class XHR{open(method,url){this.method=method;this.url=url}setRequestHeader(){}send(body){sent.push({url:this.url,body:body&&JSON.parse(body)});this.status=this.method==='POST'&&fail===502?502:200;this.responseText=JSON.stringify(this.method==='POST'&&fail?{ok:false,message:'Falha simulada'}:{ok:true,data:{config:{churchName:'AD Madureira',alertPresets:['Chamar atenção'],messagePresets:[]},state:{draftVisitors:[],draftWorship:[]}}});this.readyState=4;this.onreadystatechange()}}
const context={document,window,XMLHttpRequest:XHR,console,setInterval:()=>{},setTimeout:()=>{},Date};vm.runInNewContext(html.match(/<script>([\s\S]*?)<\/script>/)[1],context);
const $=id=>document.getElementById(id);const visible=id=>$(id).style.display==='block';const click=id=>$(id).onclick.call($(id));
function swipe(id,dx,dy,target='.sheetBack',cancel=false){const el=$(id).querySelector(target);function emit(type,x,y){const e=new window.Event(type,{bubbles:true,cancelable:true});e.touches=type==='touchend'||type==='touchcancel'?[]:[{clientX:x,clientY:y}];el.dispatchEvent(e)}emit('touchstart',100,100);emit('touchmove',100+dx,100+dy);emit(cancel?'touchcancel':'touchend',100+dx,100+dy)}
for(const [open,sheet,field,value,send] of [['openAlert','alertSheet','customAlert','Atenção na portaria','sendCustomAlert'],['openVehicle','vehicleSheet','plate','ABC1D23','sendVehicle'],['openMessage','messageSheet','messageText','Teste mensagem','sendMessage']]){
 click(open);$(field).value=value;
 if(sheet==='vehicleSheet'){$('model').value='Onix';$('color').value='Branco';$('problem').value='Farol aceso'}
 swipe(sheet,0,35);assert(visible(sheet),'short gesture stays');swipe(sheet,100,15);assert(visible(sheet),'horizontal stays');swipe(sheet,0,100,'.sheetBack',true);assert(visible(sheet),'cancelled touch stays');swipe(sheet,0,100,'#'+field);assert(!visible(sheet),'down swipe from field closes');click(open);assert.equal($(field).value,value,'draft preserved after field swipe');
 swipe(sheet,0,100);assert(!visible(sheet),'down swipe closes');click(open);assert.equal($(field).value,value,'draft preserved');
 if(sheet==='vehicleSheet'){assert.equal($('problem').value,'Farol aceso');assert.equal($('model').value,'Onix');assert.equal($('color').value,'Branco')}
 for(const status of [502,200]){fail=status;click(send);assert(visible(sheet),'failed request stays');assert.equal($(field).value,value)}
 fail=0;click(send);assert(!visible(sheet),'successful request closes');
}
click('openAlert');$('alertPresets').querySelector('button').onclick();swipe('alertSheet',0,100);click('openAlert');assert($('alertPresets').querySelector('.selected'),'preset survives');$('alertSheet').scrollTop=60;swipe('alertSheet',0,100,'h2');assert(visible('alertSheet'),'scrolling does not dismiss');$('alertSheet').scrollTop=0;swipe('alertSheet',0,100,'h2');assert(!visible('alertSheet'),'down gesture on blank/title area works');
click('openMessage');$('messageText').value='Rascunho';$('messageSheet').querySelector('.sheetBack').onclick();assert(!visible('messageSheet'));assert.equal($('messageText').value,'Rascunho');
assert(sent.some(x=>x.url==='/api/vehicle'&&x.body.problem==='Farol aceso'));assert(!document.getElementById('flashSeconds'));
console.log('PASS: DOM events for all 3 sheets; drafts, problem, presets, short/horizontal/cancelled swipes, scroll protection and field-start swipe, success/failure and clickable indicator.');
