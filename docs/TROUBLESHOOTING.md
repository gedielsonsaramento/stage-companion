# Solução de problemas

## Plugin mostra servidor conectado, mas o celular não abre a PWA

Verifique nesta ordem:

1. celular e PC estão na mesma rede;
2. o IP mostrado em **Voluntários** ainda pertence ao PC;
3. a porta mostrada no plugin é a mesma da URL;
4. o servidor está ativo na bandeja do Windows;
5. o firewall permite conexão de entrada para o executável/porta local;
6. a rede Wi-Fi não usa isolamento entre clientes.

Não desative o firewall inteiro como solução permanente.

## PWA abre, mas aparece desconectado

A PWA conseguiu carregar os arquivos, mas não está conseguindo conversar corretamente com o servidor.

Tente:

- recarregar a página;
- confirmar que o EXE continua ativo;
- verificar se o IP mudou;
- abrir novamente pelo QR Code atualizado;
- testar o botão **VERIFICAR SERVIDOR** no plugin.

## Servidor aparece, mas o plugin diz que não está conectado

Confirme que o Spresenter está aberto e que o plugin Stage Companion está habilitado. O servidor pode iniciar antes do Spresenter e permanecer aguardando.

Se o problema persistir, abra a configuração do servidor e confirme host `127.0.0.1`, porta `5050` e token válido com `plugins:invoke`.

## Depois de atualizar, preciso criar outra chave?

Normalmente não. Se a atualização foi feita no mesmo usuário do Windows e a configuração existente continua válida, o servidor deve reaproveitar o token protegido.

Crie outra chave apenas se houver erro real de autenticação, token revogado/perdido ou mudança de usuário/PC.

## QR Code mostra IP antigo

Use **ATUALIZAR QR** e **VERIFICAR SERVIDOR**. O IP pode mudar após reinício do roteador, troca de rede ou renovação DHCP.

Se o servidor detectou o novo IP mas o celular ainda usa um atalho antigo, leia o QR novamente.

## PWA mostra interface antiga depois da atualização

Recarregue a página. Se ainda aparecer a versão anterior:

- feche a aba/PWA e abra novamente;
- limpe o cache/dados somente do endereço local do Stage Companion;
- confirme que o EXE novo realmente substituiu a versão anterior.

## Swipe para baixo não fecha Alerta/Veículo/Mensagem

O gesto foi projetado para funcionar quando o painel está no topo da rolagem.

Se o painel estiver rolado internamente, deslize primeiro até o topo. Depois inicie o gesto de cima para baixo. O rascunho deve ser preservado ao voltar.

Se somente o botão **Voltar/Cancelar** funcionar em uma build nova, registre o modelo do celular, navegador e versão do servidor/PWA.

## Visitantes aparecem, mas Oportunidade de Louvor não

Confirme se a lista de Louvor foi realmente **enviada** ao Retorno, e não apenas adicionada à lista em edição.

Depois confira se o tema aplicado na saída contém os elementos `sc-worship-*`. Uma saída usando tema antigo pode mostrar Visitantes mas não os elementos mais recentes.

## Oportunidade de Louvor/Visitantes aparecem em posição errada

Provavelmente a saída está usando outra revisão do tema ou um JSON modificado.

Confirme o tema **Retorno — Stage Companion 08G C3** em cada saída de Retorno. Stage, Preview e saída HTML podem ter temas independentes.

## As listas ficam por cima de uma apresentação

Na C3, Visitantes e Louvor devem recolher durante conteúdo nativo ativo.

Se isso não acontecer:

1. confirme que o plugin é 0.3.56/C3;
2. clique **SINCRONIZAR**;
3. confirme que o tema C3 está aplicado;
4. teste se o problema ocorre em vídeo, slide, imagem, música ou todos;
5. anote qual saída de Retorno está sendo observada.

## Vídeo aparece como bloco preto no Retorno

A C3 inclui um reparo específico para `main-video`.

Confira:

- plugin C3 instalado;
- tema C3 aplicado;
- o JSON contém `main-video`;
- o tipo do asset é `video` ou `backgroundVideo`;
- o problema acontece também no Preview interno ou somente em uma saída específica.

Esse recurso ainda precisa de validação prática contínua porque depende do comportamento do Spresenter com mídia e tema.

## Veículo mostra somente o problema

A C3 separa os dados:

```text
PLACA
MODELO • COR
PROBLEMA
```

Se placa/modelo/cor não aparecem, provavelmente plugin e tema estão em versões diferentes. Confirme que o tema possui:

```text
sc-vehicle-detail-text
sc-vehicle-problem-text
```

Depois atualize plugin e tema juntos.

## Estrobo não para

O padrão é 30 segundos e o teste automatizado valida o desligamento depois desse período.

Se continuar piscando:

- use **SINCRONIZAR**;
- envie uma mensagem normal sem Estrobo;
- confirme o valor configurado no plugin;
- registre se o problema ocorre em Alerta, Veículo, Mensagem ou nos três.

## OCULTAR FAIXA funciona, mas não volta

Na C3 o controle é um alternador. Depois de ocultar, o botão deve mudar para **MOSTRAR FAIXA**. Os dados publicados não devem ser apagados.

Se o texto do botão não mudar, confirme a versão do plugin e atualize o painel.

## Fundo personalizado não atualiza

O campo de upload deve aceitar uma nova imagem mesmo depois de remover a anterior. Se houver problema:

- remova o fundo;
- escolha o arquivo novamente;
- clique em outra aba e retorne à Personalização;
- use **SINCRONIZAR**;
- confirme se a PWA foi recarregada.

## Servidor não inicia com o Windows

Confira se o executável instalado continua no local esperado pelo usuário atual e se existe a entrada de inicialização automática.

Depois reinicie o Windows e aguarde alguns segundos antes de abrir o Spresenter. O ícone deve aparecer na bandeja mesmo enquanto aguarda o Spresenter.

## SmartScreen avisa sobre o EXE

Builds sem assinatura digital podem gerar avisos do Windows. Para distribuição pública estável, o projeto deve considerar assinatura de código.

Nunca baixe executáveis de fontes diferentes do repositório/release oficial do projeto.

## Como registrar um bug útil

Inclua:

- revisão do projeto;
- versão do plugin;
- versão do servidor;
- versão do Spresenter;
- sistema operacional;
- navegador/modelo do celular quando envolver PWA;
- qual saída de Retorno apresenta o problema;
- passos exatos para reproduzir;
- screenshot ou vídeo sem tokens/chaves visíveis.
