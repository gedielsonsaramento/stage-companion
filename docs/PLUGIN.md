# Plugin Spresenter

## Identidade

```text
Nome: Stage Companion DEV
ID: com.stagecompanion.dev
Versão: 0.3.56
Revisão do projeto: 08G-C3
Spresenter mínimo: 0.3.48
Background: true
```

O plugin é o componente que conhece o estado do Stage Companion e escreve nos elementos do tema de Retorno.

## Permissões

O manifest atual declara:

```text
outputs:read
live:read
live:write
```

O token externo usado pelo servidor não pertence ao plugin; ele é validado pela API do Spresenter. Para chamar actions do plugin, o token do servidor usa `plugins:invoke`.

## Abas da interface

### Painel

Reúne Visitantes, Oportunidade de Louvor, visibilidade da faixa, limpeza após o culto e ações rápidas.

### Voluntários

Mostra o servidor detectado, IP, porta, QR Code e URL da PWA.

### Alertas/Mensagens

Permite editar presets de alerta e atalhos de mensagem, uma opção por linha.

### Personalização

Armazena identidade da igreja e preferências visuais usadas pela PWA.

## Estado operacional

O estado mantém informações como:

```text
active
showPublishedVisitors
showPublishedWorship
draftVisitors
publishedVisitors
draftWorship
publishedWorship
displayLabel
displayText
vehicleDetail
vehicleProblem
```

Os nomes exatos podem evoluir entre revisões. A C3 contém migração de estado legado para não perder informações do formato de Veículo usado na C2.

## Configuração

A configuração inclui itens como:

```text
churchName
alertPresets
messagePresets
flashSeconds
backgroundDataUrl
preferências visuais
```

O valor padrão de `flashSeconds` validado na C3 é 30 segundos.

A PWA consulta configuração necessária para operar, mas não recebe a possibilidade de alterar configurações sensíveis como o tempo global de Estrobo quando essa função deve ficar reservada ao plugin.

## Actions

O plugin registra actions por `spresenter.requests.on(...)`. O servidor as acessa pela API do Spresenter.

Actions confirmadas/validadas na revisão atual incluem:

```text
pwa-state
pwa-config
pwa-send-vehicle
pwa-send-message
```

O projeto também possui actions para alertas, visitantes, oportunidade de louvor, registro do companion/server e controles operacionais. Ao adicionar uma action, registre-a no nível superior da lógica do plugin para que esteja disponível assim que o processo for iniciado.

## Live elements

O plugin não redesenha a tela inteira. Ele atualiza elementos individuais do tema.

Exemplo conceitual:

```text
spresenter.live.setElement(output, layer, "sc-alert-text", { text: "..." })
```

A lista de IDs deve permanecer sincronizada com o JSON do tema.

## Veículo C3

O fluxo atual separa:

```text
displayText      -> PLACA
vehicleDetail    -> MODELO • COR
vehicleProblem   -> PROBLEMA
```

O teste de regressão garante uppercase de modelo/cor e preserva o texto livre do problema.

## Estrobo

Cada envio pode escolher `flash: true` ou `flash: false`. Quando ligado, o plugin exibe `sc-flash` e agenda o desligamento de acordo com `flashSeconds`.

O Estrobo é um reforço opcional, não uma substituição do conteúdo do alerta.

## Projeção nativa

A C3 assina eventos `live` e `state`. Quando conteúdo nativo da saída está ativo:

- `sc-visitors-label` e `sc-visitors-text` são ocultados;
- `sc-worship-label` e `sc-worship-text` são ocultados;
- alertas urgentes podem permanecer visíveis.

Quando a projeção termina, as listas publicadas voltam se a faixa estiver ativa.

## `main-video`

`main-video` é a exceção relevante à regra de mexer apenas em `sc-*`. A C3 pode atualizar sua propriedade `src` quando detecta um asset de vídeo para reparar a reprodução no Retorno.

Os testes verificam que nenhum outro elemento nativo seja alterado pelo plugin durante esse fluxo.

## Mostrar/Ocultar faixa

A mensagem `toggle-visibility` alterna o estado `active` sem remover `publishedVisitors` ou `publishedWorship`.

Isso permite esconder temporariamente o Stage Companion e restaurar exatamente o conteúdo publicado.

## Sincronização

O botão **SINCRONIZAR** força a reaplicação do estado/configuração relevante. Deve ser usado depois de troca de tema, atualização ou quando a UI/Retorno parece estar fora de sincronia.

## Regra de compatibilidade

Atualizações do plugin devem manter o ID `com.stagecompanion.dev` enquanto forem compatíveis com a mesma instalação. Trocar o ID cria, na prática, outro plugin e pode quebrar atualização, storage e chamadas do servidor.
