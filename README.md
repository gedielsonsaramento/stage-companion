# Stage Companion — 08G-C3

Stage Companion integra **Spresenter + plugin + servidor Windows + PWA + tema de Retorno** para enviar visitantes, oportunidade de louvor, alertas, veículos e mensagens ao retorno do palco.

## Revisão atual

- Plugin: **0.3.56**
- Servidor/PWA: **0.8G-R9**
- Tema: **Retorno — Stage Companion 08G C3**

## Recursos principais

- Visitantes e Oportunidade de Louvor em listas independentes.
- Listas centralizadas e preenchendo de baixo para cima.
- Alertas, Veículos e Mensagens enviados pelo plugin ou PWA.
- Estrobo opcional com tempo configurável no plugin; padrão 30 segundos.
- Veículo no Retorno na ordem: **PLACA → MODELO/COR → PROBLEMA**.
- Correção do vídeo no Retorno usando a fonte do conteúdo projetado pelo Spresenter.
- Visitantes/Louvor são ocultados automaticamente durante conteúdo nativo projetado e restaurados depois.
- Botão MOSTRAR/OCULTAR FAIXA preserva o conteúdo publicado.
- Servidor Windows com autostart, bandeja, IP/porta automáticos e QR para voluntários.
- A chave API fica protegida no Windows e não é enviada ao celular.
- Atualizações preservam configuração/token quando feitas no mesmo usuário do Windows.

## Estrutura

- `plugin/` — plugin Spresenter `com.stagecompanion.dev`.
- `server/` — servidor Windows em Go e PWA incorporada.
- `themes/Retorno-StageCompanion-08G-C3.spresenter-theme.json` — tema do Retorno.
- `tests/` — testes do plugin, PWA e tema.
- `INSTALL.md` — instalação e configuração.
- `CHANGELOG.md` — histórico da revisão.
- `BUILD-WINDOWS.cmd` — compilação local do servidor Windows.
- `.github/workflows/build-windows.yml` — CI para validar, compilar e disponibilizar artefatos.

## API do Spresenter

Para uma instalação nova, crie no Spresenter uma chave com o escopo **`plugins:invoke`**. O servidor local usa, por padrão:

- Host: `127.0.0.1`
- Porta: `5050`

A PWA não recebe a chave; ela conversa com o servidor local Stage Companion, que encaminha as ações ao plugin.

## Build

O workflow do GitHub Actions reconstrói o código-fonte completo do arquivo de bootstrap, executa os testes, compila o EXE Windows x64 e gera o ZIP instalável do plugin.

Para compilar localmente, consulte `INSTALL.md` e use `BUILD-WINDOWS.cmd`.

## Estado

Esta é uma versão de desenvolvimento/teste. A validação final precisa ser feita no Spresenter real e em celulares da mesma rede antes de uma publicação estável para a comunidade.
