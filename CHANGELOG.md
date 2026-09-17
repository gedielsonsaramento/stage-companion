# CHANGELOG — 08G-C3

## Plugin 0.3.56
- Observação de `live`/`state` na saída 0 para detectar projeção nativa.
- Reparo do `main-video.src` com `/assets/<guid>` durante vídeo; restauração para `slide` ao terminar.
- Visitantes e Oportunidade de Louvor recolhem automaticamente enquanto conteúdo nativo está projetado e retornam depois.
- Alertas/Veículos/Mensagens permanecem disponíveis durante projeção.
- Estrobo opcional por envio para Alerta, Veículo e Mensagem; duração usa `flashSeconds` do plugin.
- Layout de Veículo: placa, modelo/cor, problema; migração automática do estado C2.
- Novo elemento `sc-vehicle-problem-text`.

## Servidor/PWA 0.8G-R9
- Botão ⚡ vermelho de estrobo nas três telas de ação.
- Veículo inicia com estrobo ligado por compatibilidade; Alerta e Mensagem iniciam desligados.
- Swipe e preservação de rascunhos mantidos.
- Configuração/token/autostart/tray mantidos.

## Tema 08G-C3
- Base visual C2/08F preservada.
- `main-video` mantém o layout e passa a aceitar `video` e `backgroundVideo`.
- Novo campo `sc-vehicle-problem-text`; demais elementos Stage Companion mantidos.

## Documentação do repositório
- README principal ampliado com arquitetura, instalação rápida, segurança e índice de documentação.
- Guias separados para instalação, operação, interface, plugin, servidor, PWA, tema de Retorno, arquitetura, API/segurança, desenvolvimento e troubleshooting.
- Inclusão de roadmap, política de segurança e guia de contribuição.
