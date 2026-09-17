# Visão geral do Stage Companion

## O que é

O **Stage Companion** é uma integração para o Spresenter voltada ao fluxo de comunicação de igrejas durante o culto. A recepção, portaria ou equipe de apoio usa uma PWA no celular para enviar informações ao operador e à tela de Retorno do palco sem precisar acessar diretamente o computador de projeção.

O projeto é composto por quatro partes que trabalham juntas:

1. **Plugin do Spresenter** — painel de controle, configuração e ponte com os elementos do tema.
2. **Servidor Windows** — executável local que hospeda a PWA e encaminha requisições ao plugin.
3. **PWA** — interface móvel para voluntários na mesma rede local.
4. **Tema de Retorno** — tema do Spresenter que contém os elementos `sc-*` usados pelo Stage Companion.

## Objetivo principal

Permitir que informações operacionais cheguem ao retorno do pastor, dirigente ou músicos sem interromper a apresentação principal. O fluxo foi pensado para ser rápido, legível e simples para voluntários que não precisam conhecer o Spresenter.

## Recursos atuais

### Visitantes

O nome de cada visitante pode ser adicionado pelo plugin ou pela PWA. A primeira letra dos nomes é normalizada para maiúscula. A lista é editada antes do envio e só aparece no Retorno quando o operador ou voluntário envia a lista.

### Oportunidade de Louvor

Funciona de forma semelhante a Visitantes, mas em uma lista separada. É usada quando alguém informa interesse em louvar durante o culto. A lista é exibida na coluna direita do Retorno.

### Alertas

Permite enviar mensagens curtas de atenção. O plugin possui uma lista de alertas pré-definidos que pode ser personalizada. O envio pode ser normal ou com **Estrobo**.

### Veículo

O formulário possui quatro campos:

- Placa;
- Modelo;
- Cor;
- Problema.

No Retorno, a prioridade visual é **PLACA → MODELO/COR → PROBLEMA**. O problema é texto livre, por exemplo: `Farol aceso`, `Trancando a saída` ou outro aviso digitado pelo operador.

### Mensagem

Permite enviar uma mensagem livre ou usar atalhos configuráveis. Assim como Alerta e Veículo, pode ser enviada com Estrobo.

### Estrobo

O Estrobo é um reforço visual para mensagens urgentes. Na PWA ele aparece como um botão vermelho com ícone de raio, mantendo a tela limpa. O tempo de pisca é configurado no plugin e atualmente usa **30 segundos como padrão**.

### Controle da faixa

O botão de faixa é um alternador: quando os elementos estão visíveis, permite ocultá-los; quando estão ocultos, permite mostrá-los novamente. Ocultar não apaga as listas publicadas.

### Limpar após o culto

Apaga o estado operacional usado durante o culto, evitando que visitantes, louvor ou alertas antigos permaneçam para o próximo uso.

## Comportamento durante apresentação nativa

A revisão 08G-C3 foi desenhada para não deixar Visitantes e Oportunidade de Louvor sobrepostos a uma apresentação nativa do Spresenter. Quando conteúdo principal está sendo projetado, essas listas são recolhidas e, quando a apresentação termina, retornam automaticamente.

Alertas, Veículo e Mensagem continuam podendo ser usados porque são comunicações operacionais temporárias.

## Vídeo no Retorno

A C3 adiciona tratamento para o elemento nativo `main-video`, atualizando sua fonte quando o conteúdo projetado é vídeo. O objetivo é evitar o estado em que o Retorno mostrava apenas um container preto. Este comportamento deve continuar sendo validado no Spresenter real porque depende da forma como cada versão do aplicativo resolve mídia e tema.

## Interface do plugin

O painel atual possui quatro abas:

- **Painel** — Visitantes, Oportunidade de Louvor, controle da faixa e ações rápidas.
- **Voluntários** — estado do servidor, IP, porta, QR Code e URL da PWA.
- **Alertas/Mensagens** — edição dos alertas pré-definidos e atalhos de mensagens.
- **Personalização** — identidade da igreja, fundo da PWA, blur, ofuscamento e preferências visuais.

## Interface da PWA

A tela principal concentra apenas as ações necessárias ao voluntário: Visitantes, Oportunidade de Louvor e os botões Alerta, Veículo e Mensagem. As três ações rápidas abrem painéis deslizantes. O gesto de deslizar de cima para baixo deve voltar para a tela principal preservando o que foi digitado; após um envio bem-sucedido, a interface também pode retornar automaticamente à tela principal.

## Público-alvo

O projeto foi pensado principalmente para igrejas que usam o Spresenter e precisam de comunicação rápida entre portaria, recepção, equipe técnica e palco, sem expor a chave da API nos celulares e sem obrigar voluntários a operar diretamente o Spresenter.
