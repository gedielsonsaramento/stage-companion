# Stage Companion 0.4.38 — HF5-RC4-UI4-HF4 (CANDIDATA)

**Alteração:** reduzir o cabeçalho da interface de `Stage Companion DEV` + a descrição completa da versão para `SC · v0.4.38`, com identificação integral disponível na dica do cabeçalho, no manifesto e no diagnóstico.

**Origem:** pacote 0.4.37-HF5-RC4-UI4-HF3, SHA256 `f05735b1925fd8d19231b6b6f8f21fd78b81a6f1ae6ecdcbaf9ee03d0cdedaba`.

**SHA256 candidata:** `cedeb2ee7d3d7a575b57f2ce4e8cb58ea618225b11341b22bbee977190748726`.

Arquivos alterados: `dist/ui/index.html` (HTML e CSS da apresentação), `manifest.json` (versão/descrição), `dist/code.js` (**apenas literais da versão/build para os logs**) e README. Demais nove arquivos originais permaneceram idênticos. Nenhum algoritmo, mensagem, tema, servidor, EXE ou PWA foi modificado.

**Verificações estáticas executadas:** CRC do ZIP, parse do manifesto, `node --check` do código principal, seis blocos script inline do HTML e helpers JavaScript, comparação das partes inalteradas e equivalência lógica do `code.js` após reversão das duas substituições de identificação.

**Pendências:** testar a candidata no Spresenter fora do culto; confirmar visual compacto na primeira aba e nas demais, reordenar Harpa e Oportunidade na Setlist, confirmar resposta vermelha dos botões e dois PCs. Caso algum teste falhe, manter/retomar a 0.4.37.

**Importante:** este documento é um registro de build local. Não significa que o pacote ZIP da 0.4.38 foi publicado como artefato ou release no GitHub.

## Testes locais adicionais executados

Com `dist/code.js` da candidata 0.4.38, utilizando os testes incluídos no pacote completo de 23/11:

- `test_attention_ui4.js`: 3 cenários passaram (visitantes, alerta e todos), com intervalos de 10 e 30 segundos.
- `test_worship_repair.js`: 3 cenários passaram (grupo único, bloqueio de duplicação e movimento seguro).
- `test_worship_ui4hf2.js`: 6 cenários passaram (controle de duplicados, ordem física, fusão/reordenação, preservação em falha, grupo faltante e ordem de pastas por cantor).

**Resultado:** 12 cenários locais aprovados, além das verificações estáticas já registradas. **Ainda não são testes de campo** e não autorizam a substituição da 0.4.37 no culto.

## Pacote completo preparado

Também foi gerado o `StageCompanion-COMPLETO-2026-11-24-UI4-HF4-CANDIDATO.zip`, com SHA256 `0b21a5f6ba27168630905c21789b1003fb59cbc5d2b2fce133e4db94c99baaa4`. EXE, Samsung e tema do pastor mantêm os bytes do pacote anterior. O novo tema compacto do RT Músicos segue isolado, sem homologação.

O ZIP do plugin, o ZIP completo e o kit de publicação controlada foram arquivados na Biblioteca `Stage companion`. O fato de estarem na Biblioteca não significa que seus binários foram enviados ao GitHub.
