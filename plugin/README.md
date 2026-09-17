# Stage Companion — Revisão 08G-C3

Plugin **0.3.56** · Servidor/PWA **0.8G-R9** · Tema **Retorno — Stage Companion 08G C3**.

## O que foi corrigido

- **Vídeo preto no Retorno:** o plugin observa a projeção nativa e, ao detectar um vídeo, informa ao elemento `main-video` a fonte direta `/assets/<guid>`. Ao encerrar o vídeo, restaura `src: slide`.
- **Visitantes/Louvor sobre a apresentação:** enquanto houver conteúdo nativo projetado, Visitantes e Oportunidade de Louvor são ocultados automaticamente. Alertas, Veículos e Mensagens continuam podendo aparecer por serem comunicações urgentes. Ao terminar a projeção, as listas voltam sozinhas.
- **Estrobo opcional:** Alerta, Veículo e Mensagem ganharam controle de estrobo no plugin e na PWA. O tempo continua definido somente no plugin; padrão 30 s. Veículo inicia com estrobo ligado para preservar o comportamento anterior.
- **Veículo no Retorno:** ordem corrigida para PLACA em destaque, MODELO/COR em caixa alta e PROBLEMA abaixo. Estados antigos C2 são migrados automaticamente.
- Configuração, token protegido, IP/QR e autostart do servidor continuam reaproveitados.

## Arquivos

- `StageCompanion-DEV-Teste08G-C3.zip`
- `StageCompanion-Servidor-08G-R9.exe`
- `Retorno-StageCompanion-08G-C3.spresenter-theme.json`
- `StageCompanion-08G-C3-Codigo-Fonte.zip`
- `INSTALL.md`, `CHANGELOG.md`, `SHA256SUMS-08G-C3.txt`
