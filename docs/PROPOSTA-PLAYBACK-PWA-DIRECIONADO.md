# Stage Companion — proposta de Player de Mídia por PWA identificada

**Estado: proposta para etapa futura. Não está implementada nem homologada.**

## Objetivo solicitado

Um computador mantém a PWA Stage Companion aberta e é identificado/configurado explicitamente com o papel **Playback**. O operador pode selecionar um link de playback da Oportunidade de Louvor ou outra mídia suportada e enviar **Play, Pausa e Parar** somente a essa PWA. Outras instâncias da PWA, inclusive portaria/recepção e outro computador conectado, **não podem iniciar nem interromper a mídia** por causa desses comandos.

## Identificação e roteamento

- A instância PWA usa um `client_id` gerado e persistido com cuidado, com nome editável, função (ex.: `playback`) e sessão autenticada.
- O operador vincula o destino por `client_id` concreto, e não por nome, endereço IP ou apenas pela tag `playback`; tags são rótulos, não autorização.
- Só uma sessão pode ocupar o slot de **Playback ativo** por vez, com seleção/transferência explícita, confirmação e aviso caso o destino desconecte.
- Cada comando inclui `command_id` único, `target_client_id`, `media_id` ou URL aprovada, tipo de operação, timestamp e proteção de autorização.
- O servidor encaminha mensagens para o destino identificado por canal autenticado (por exemplo WebSocket); todos os outros clientes ignoram o evento por padrão.
- Confirmar recebimento (`ACK`), estado real do player (`playing`, `paused`, `stopped`, `error`) e expiração de comando; não anunciar sucesso só por ter enviado uma requisição.
- Não fazer a PWA tocar automaticamente ao carregar. O navegador pode exigir interação inicial no computador de Playback para liberar áudio/vídeo.

## Fluxo proposto

1. Abrir PWA no computador que vai reproduzir.
2. Ativar o modo **Playback** naquele computador e autorizar o pareamento com o operador.
3. Selecionar esse cliente concreto no painel de operação.
4. Selecionar o playback vinculado ao hino, ou uma mídia local/remota compatível.
5. Enviar Reproduzir/Pausar/Parar com feedback real — **somente o cliente pareado reage**.
6. Ao perder conexão, não repetir o comando `play` sozinho na reconexão sem conferir estado.

## Limites técnicos

- Controle de áudio/vídeo tocado pela própria PWA não é controle automático da mídia do Spresenter nem da Setlist; são sistemas distintos.
- Links do YouTube dependem das regras da plataforma, suporte a embed/player API e interação exigida pelo navegador; não presumir controle sobre qualquer link arbitrário.
- Vídeo/áudio local exige origem autorizada, permissões de acesso, HTTPS no modo externo e checagem CORS/MIME quando necessário.
- Em navegadores móveis podem ocorrer suspensão de abas em segundo plano e limitações de autoplay. Preferir computador dedicado com tela ativa.

## Aceite mínimo

Com três PWAs abertas (1 Playback, 2 comuns), Play/Pausa/Parar deve atuar somente no computador identificado como Playback; mudar o cliente ativo deve transferir explicitamente a autorização; PWA não identificada ou desconectada não deve reproduzir; feedback e logs precisam mostrar o destino real. Nenhuma rotina de Harpa/Setlist, Chat/Links, saída de pastor ou RT Músicos pode ser afetada.

**Prioridade:** última ideia registrada em 24/11/2026, após os ajustes pendentes de interface, avisos para músicos, anexos e homologação da baseline.
