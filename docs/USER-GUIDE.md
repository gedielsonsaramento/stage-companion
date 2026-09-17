# Guia de uso

Este documento descreve o uso diário do Stage Companion durante o culto.

## 1. Aba Painel

A aba **Painel** é o centro operacional do plugin no computador.

### Visitantes — Lista em edição

Digite o nome no campo **Nome do visitante** e use **Enter** ou o botão **ADICIONAR**.

Os nomes ficam em uma lista de edição. É possível remover itens antes de publicar. Quando a lista estiver pronta, use **ENVIAR LISTA PARA O RETORNO**.

O envio publica a lista no bloco central do Retorno.

### Oportunidade de Louvor — Lista em edição

O fluxo é separado da lista de Visitantes. Digite o nome de quem deseja louvar, pressione **Enter** ou use **ADICIONAR**, revise a lista e envie ao Retorno.

O conteúdo é mostrado na área direita do tema Stage Companion.

### Controle do Retorno

O botão da faixa trabalha como alternador:

- quando a faixa está visível, a ação é **OCULTAR FAIXA**;
- quando está oculta, a ação passa a **MOSTRAR FAIXA**.

Ocultar não deve apagar as listas publicadas.

O botão **LIMPAR APÓS O CULTO** é usado para encerrar a sessão operacional e remover os dados enviados durante o culto.

### Ações rápidas

Os botões **ALERTA**, **VEÍCULO** e **MENSAGEM** abrem os respectivos formulários para envio imediato.

## 2. Veículo

O formulário de Veículo deve ser preenchido nesta ordem:

1. **Placa** — informação principal e de maior destaque.
2. **Modelo**.
3. **Cor**.
4. **Problema** — texto livre descrevendo o motivo do chamado.

Exemplo:

```text
PLACA: MKH5J48
MODELO: UNO
COR: BRANCO
PROBLEMA: Farol aceso
```

No Retorno, placa aparece primeiro, modelo/cor logo abaixo e o problema em seguida.

## 3. Estrobo

Alerta, Veículo e Mensagem possuem envio normal e opção de **Estrobo**.

Na PWA, o Estrobo é representado por um botão vermelho com raio. Ele deve ser usado apenas quando a informação precisa chamar mais atenção no Retorno.

A duração é configurada no plugin; o padrão atual é **30 segundos**.

Na revisão atual, Veículo inicia com Estrobo habilitado por compatibilidade com o fluxo anterior, enquanto Alerta e Mensagem iniciam desligados.

## 4. Aba Voluntários

Esta aba mostra o estado do servidor Windows e fornece o acesso à PWA.

Quando tudo está funcionando, aparecem:

- status **CONECTADO**;
- endereço IP detectado automaticamente;
- porta usada pelo servidor;
- botão **ATUALIZAR QR**;
- botão **VERIFICAR SERVIDOR**;
- QR Code;
- URL completa da PWA.

O voluntário deve acessar somente a URL/QR. Nenhuma chave de API deve ser compartilhada.

## 5. Aba Alertas/Mensagens

### Alertas pré-definidos

Cada linha do campo corresponde a uma opção rápida de alerta. Exemplos usados no projeto incluem avisos de atenção, crianças no corredor, estacionamento e comparecimento à recepção.

Edite uma linha por item e clique **SALVAR LISTAS**.

### Atalhos de mensagens

Funciona da mesma forma: uma mensagem por linha. A PWA usa essas opções como atalhos sem impedir o envio de texto livre.

## 6. Aba Personalização

### Identidade da igreja

O campo permite definir o nome exibido na PWA, por exemplo `AD Madureira`.

### Imagem de fundo

É possível escolher uma imagem usada como fundo visual da PWA. O painel reduz/comprime a imagem antes de salvar.

O botão **REMOVER FUNDO** limpa a personalização de imagem.

### Visual da PWA

As opções atuais incluem modo visual, blur do fundo e nível de ofuscamento. O objetivo é manter a interface legível sobre imagens variadas.

## 7. Sincronizar

O botão **SINCRONIZAR** deve ser usado quando o operador precisa forçar a atualização do estado entre plugin, servidor/PWA e Retorno.

Ele é útil depois de uma atualização, troca de tema ou quando o estado visual não parece acompanhar os dados já publicados.

## 8. Comportamento durante slides, letras e vídeos

Visitantes e Oportunidade de Louvor são informações persistentes, mas não devem cobrir conteúdo nativo importante. Na C3, o plugin observa a apresentação e recolhe essas listas durante projeção nativa, restaurando-as depois.

Alertas, Veículo e Mensagem continuam disponíveis porque servem como comunicação urgente e temporária.

## 9. Encerramento do culto

Ao final, use **LIMPAR APÓS O CULTO** para não levar nomes e avisos antigos para a próxima reunião. O servidor pode permanecer em execução na bandeja do Windows; ele foi projetado para iniciar automaticamente com o sistema.
