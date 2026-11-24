# Stage Companion 0.4.38 — HF5-RC4-UI4-HF4 (CANDIDATA)

**Alteração:** reduzir o cabeçalho da interface de `Stage Companion DEV` + a descrição completa da versão para `SC · v0.4.38`, com identificação integral disponível na dica do cabeçalho, no manifesto e no diagnóstico.

**Origem:** pacote 0.4.37-HF5-RC4-UI4-HF3, SHA256 `f05735b1925fd8d19231b6b6f8f21fd78b81a6f1ae6ecdcbaf9ee03d0cdedaba`.

**SHA256 candidata:** `cedeb2ee7d3d7a575b57f2ce4e8cb58ea618225b11341b22bbee977190748726`.

Arquivos alterados: `dist/ui/index.html` (HTML e CSS da apresentação), `manifest.json` (versão/descrição), `dist/code.js` (**apenas literais da versão/build para os logs**) e README. Demais nove arquivos originais permaneceram idênticos. Nenhum algoritmo, mensagem, tema, servidor, EXE ou PWA foi modificado.

**Verificações estáticas executadas:** CRC do ZIP, parse do manifesto, `node --check` do código principal, seis blocos script inline do HTML e helpers JavaScript, comparação das partes inalteradas e equivalência lógica do `code.js` após reversão das duas substituições de identificação.

**Pendências:** testar a candidata no Spresenter fora do culto; confirmar visual compacto na primeira aba e nas demais, reordenar Harpa e Oportunidade na Setlist, confirmar resposta vermelha dos botões e dois PCs. Caso algum teste falhe, manter/retomar a 0.4.37.

**Importante:** este documento é um registro de build local. Não significa que o pacote ZIP da 0.4.38 foi publicado como artefato ou release no GitHub.
