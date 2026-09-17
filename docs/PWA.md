# PWA — interface dos voluntários

A PWA é a interface móvel do Stage Companion. Ela roda no navegador do celular e é servida diretamente pelo executável Windows do projeto.

## Objetivo de design

A interface foi projetada para ser simples e rápida para voluntários de recepção/portaria. Por isso, informações de configuração ficam concentradas no plugin do computador; no celular aparecem apenas os controles necessários para o fluxo do culto.

A linguagem visual atual usa cartões translúcidos no estilo **Liquid Glass**, fundo com blur/ofuscamento configurável e botões grandes para uso em telas pequenas.

## Acesso

A PWA é acessada pelo QR Code da aba **Voluntários** do plugin. A URL usa o IP local do computador e a porta do servidor, por exemplo:

```text
http://192.168.2.59:8090/
```

O endereço pode mudar quando o DHCP da rede entrega outro IP ao computador. Por isso, o plugin detecta e exibe o endereço atual automaticamente.

## Tela principal

A tela principal apresenta:

- identidade da igreja;
- relógio/estado de conexão;
- cadastro e lista de Visitantes;
- cadastro e lista de Oportunidade de Louvor;
- botões **Alerta**, **Veículo** e **Mensagem**.

Visitantes e Louvor são listas independentes. O voluntário pode editar os nomes antes de enviar ao Retorno.

## Painéis de ação

Alerta, Veículo e Mensagem abrem como painéis sobre a tela principal.

Cada painel possui um indicador visual discreto no topo para mostrar que pode ser arrastado para baixo.

### Swipe para voltar

O comportamento esperado é:

1. tocar em Alerta, Veículo ou Mensagem;
2. digitar ou selecionar informações;
3. deslizar o painel de cima para baixo;
4. retornar à tela principal sem apagar o rascunho digitado.

O gesto deve funcionar quando o painel está no topo da rolagem. Se o conteúdo interno estiver rolado para baixo, o primeiro movimento deve continuar sendo usado para rolar o conteúdo até o topo, evitando fechar a tela por engano.

### Retorno automático após envio

Depois de um envio bem-sucedido, a interface pode fechar o painel e voltar à tela principal para agilizar a operação.

## Alerta

A tela de Alerta oferece mensagens pré-definidas e possibilidade de envio. A lista de opções é configurada no plugin em **Alertas/Mensagens**.

Ao lado do envio existe o controle vermelho de Estrobo. Sem Estrobo, a mensagem é enviada normalmente. Com Estrobo, o elemento correspondente no Retorno recebe o efeito pelo tempo definido no plugin.

## Veículo

A tela de Veículo contém:

- Placa;
- Modelo;
- Cor;
- Problema.

O campo Problema é livre e descreve o motivo do aviso. O botão vermelho com raio ativa/desativa o Estrobo do envio.

Os dados digitados devem ser preservados se o voluntário fizer swipe para voltar sem enviar.

## Mensagem

A tela de Mensagem permite texto livre e atalhos configurados no plugin. Ela também possui a opção de Estrobo.

## Estado de conexão

A PWA mostra o estado **Conectado** quando consegue conversar com o servidor Stage Companion. Esse estado não significa, sozinho, que o Spresenter esteja projetando corretamente; ele confirma a comunicação celular → servidor.

Para o fluxo completo funcionar, também é necessário que servidor → Spresenter → plugin esteja operacional.

## Segurança

A PWA não recebe nem armazena a chave da API do Spresenter. Ela chama apenas endpoints do servidor Stage Companion na rede local. O servidor mantém o token protegido no Windows e faz as chamadas ao plugin.

## PWA e rede local

A arquitetura atual é local. O celular precisa conseguir alcançar o IP/porta do PC de projeção. Redes Wi-Fi com isolamento entre clientes podem impedir essa comunicação mesmo quando os dois dispositivos mostram o mesmo nome de rede.

## Atualização da PWA

Depois de instalar uma nova versão do servidor, recarregue a página no celular. Se o navegador continuar mostrando uma interface antiga, feche e abra novamente a PWA ou limpe os dados/cache desse site específico.

O projeto inclui `manifest.webmanifest` e `sw.js`, mas a revisão atual deve priorizar sempre a atualização correta da interface usada no culto em vez de depender de cache antigo.

## Compatibilidade visual

O design usa melhorias progressivas. Em navegadores mais antigos, efeitos de blur/transparência podem ser reduzidos, mas a função principal deve continuar acessível. O foco do projeto é operação funcional em celulares Android comuns, não apenas aparelhos recentes.
