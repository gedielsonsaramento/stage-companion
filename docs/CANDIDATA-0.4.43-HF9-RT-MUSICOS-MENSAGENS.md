# Stage Companion — candidata 0.4.43 HF9 + tema HF3G

Data: 26/11/2026. Status: **candidata de laboratório, NÃO homologada em campo**.

## Base preservada

- Plugin **0.4.42 / HF8** já demonstrou números da Harpa dinamicamente no RT Músicos quando o tema possui linhas inicialmente montadas.
- Tema **HF3F** foi reportado pelo operador como funcional para estrofes, Harpa e estrobo.
- **HF3G** é cópia do HF3F com **somente uma camada extra** `sc-musicians-notice`, visível desde a criação, vazia e transparente. Os 14 elementos preexistentes têm estrutura e propriedades idênticas às do HF3F.

## O que muda no HF9

- Plugin **0.4.43** reabilita `ENVIAR AO RT MÚSICOS` e `RETIRAR AVISO` na aba Alertas/Mensagens.
- Reutiliza **presets já cadastrados e salvos localmente** no plugin: sem reset ou migração do armazenamento.
- Aviso temporário se sobrepõe aos números **na mesma caixa**; não apaga, modifica nem reordena a Harpa. Ao expirar (5–120 s) ou retirar manualmente, a camada fica vazia e transparente, mas permanece **montada com `visible:true`**.
- Pisca opcional do próprio aviso com alternância de fundo/borda, independente das camadas `sc-attention-*` de estrobo já aprovadas.
- O comando continua usando a API `live.setElement(output='0', layer=-1, id='sc-musicians-notice')`; a API confirma apenas aceitação, não exibição. **Isolamento do retorno do pastor deve ser confirmado em campo.**
- Diagnósticos: `MUSICIANS_NOTICE_INIT_HF9`, `MUSICIANS_NOTICE_TX_HF9`, `MUSICIANS_NOTICE_END_HF9`.

## Arquivos e SHA256

- `StageCompanion-Plugin-0.4.43-HF9-MENSAGENS-RT-MUSICOS-TESTE.zip`: `eb81b2afe7d9cc031affbf773870bfb83663c5ec4d0d0f71438a5ee019d23031`.
- `RT-Musicos-HF3G-Harpa-Estrobo-Estrofes-Mensagens-TESTE.spresenter-theme.json`: `48b516c8ec88c2ed3474c60eaa618754e20172dfdcdf6d0a2040ed34681e593a`.
- `StageCompanion-RT-Musicos-HF3G-HF9-KIT-TESTE.zip`: `9b7ee4de77e0ccbd8df3ed5ade575a63d3a3aa26b14a9fa6f73f0e191aadbc0a`.

## Verificações locais

- JavaScript do núcleo via `node --check`; sintaxe dos seis scripts inline da interface; JSON do tema e manifesto; integridade dos arquivos ZIP.
- Teste isolado com simulação das chamadas de API: enviar uma mensagem, piscar, retirar, esperar o temporizador e confirmar que **nenhuma chamada oculta/desmonta** a camada. A camada `sc-musicians-notice` foi a única atualizada no teste.
- Comparação elemento a elemento do HF3G e HF3F: todos os 14 existentes preservados; só a nova camada foi adicionada. Apenas `dist/code.js`, `dist/ui/index.html`, `manifest.json` foram alterados no plugin.

## Limitações

- **Não homologado no Spresenter real.** Estado enviado e ACK não equivalem a renderização confirmada.
- Mensagens cadastradas e exibição do aviso são locais ao plugin do PC que executa a ação; **não** replicam automaticamente para outro PC, PWA ou servidor.
- Implementação de destino Pastor/Ambos e sincronização centralizada segue pendente para outra candidata.
- Código candidato não substitui a versão principal do repositório.

## Roteiro de ensaio

1. Salvar backup de plugin 0.4.42 e tema HF3F.
2. Em ambiente de testes, instalar plugin 0.4.43 e importar tema HF3G **somente** na saída RT Músicos.
3. Confirmar Harpa (números, riscos, vermelho), estrofes e estrobo.
4. Aba Alertas/Mensagens > RT Músicos: escolher aviso já cadastrado, duração 5 segundos, sem pisca e clicar ENVIAR AO RT MÚSICOS.
5. Confirmar que mensagem ocupa a mesma caixa, **não** aparece no retorno do pastor e após 5 segundos os números voltam atualizados.
6. Testar Piscar caixa, RETIRAR AVISO, novo hino durante aviso e diagnóstico.
7. Se houver regressão, voltar plugin 0.4.42 + tema HF3F; não atualizar EXE, Samsung, ASUS ou PWA.

