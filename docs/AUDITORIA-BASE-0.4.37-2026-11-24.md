# Stage Companion — fonte aprovada recuperada e auditada (24/11/2026)

> REGISTRO DE PROVENIÊNCIA: os arquivos listados foram recuperados da Biblioteca do projeto e inspecionados. **Não equivale a publicar os binários ou atualizar o código-fonte na branch main do GitHub**.

## Pacotes de referência

| Artefato preservado | SHA-256 | Tamanho |
|---|---|---|
| `StageCompanion-Plugin-0.4.37-HF5-RC4-UI4-HF3-CANDIDATO.zip` | `f05735b1925fd8d19231b6b6f8f21fd78b81a6f1ae6ecdcbaf9ee03d0cdedaba` | 140416 bytes |
| `StageCompanion-COMPLETO-2026-11-23-UI4-HF3-CANDIDATO.zip` | `4b87b3369fe15fd984307e20b05961a117bef235c55e84420ca21ed8adbf6b5d` | 15520320 bytes |

## Conteúdo inspecionado

O ZIP do plugin contém 13 arquivos, incluindo `manifest.json` com `version: 0.4.37`, `dist/code.js`, `dist/ui/index.html`, CSS, utilitários do clipe, QR, chat e feedback. O pacote completo contém 107 itens, incluindo fontes Go do EXE, servidor Python Samsung/Termux, temas do pastor e RT Músicos, scripts de instalação, logs de testes, documentação e arquivo de recuperação.

Não substituir a baseline funcional aprovada sem um novo pacote derivado e ensaiado. As funções de organização e reordenação da Setlist (Harpa e Oportunidade de Louvor), e o feedback vermelho dos botões, foram aprovadas pelo operador e devem passar novamente por regressão.

## Estado GitHub

No momento desta auditoria, a branch `main` ainda publica a árvore histórica 08G-C3 / plugin 0.3.56. **Somente a documentação foi atualizada por esta operação; o código da 0.4.37 e o EXE não foram enviados ao GitHub.** O pacote integral permanece na Biblioteca privada. Um upload de código exige revisão de segredos, escolha de estrutura e envio separado, seguido de verificação do commit. Não anunciar GitHub como fonte executável da 0.4.37 até isso ocorrer.

## Próxima candidata visual

A `0.4.38 — HF5-RC4-UI4-HF4` foi derivada do ZIP 0.4.37, modificando somente o cabeçalho do HTML, a identificação textual da versão/build e a documentação. Código de lógica do `dist/code.js` permanece byte a byte equivalente após reversão dos literais de versão. **Candidata não homologada em campo**.
