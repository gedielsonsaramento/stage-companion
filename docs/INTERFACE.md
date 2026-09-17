# Interface atual

Este documento registra a organização visual da revisão 08G-C3 para facilitar comparação entre builds futuras.

## Painel do plugin

O painel usa tema escuro e quatro abas principais no topo: **Painel**, **Voluntários**, **Alertas/Mensagens** e **Personalização**. O botão **SINCRONIZAR** permanece disponível no cabeçalho.

### Aba Painel

Ordem visual atual:

1. **Visitantes — Lista em edição**
   - campo `Nome do visitante`;
   - botão **ADICIONAR**;
   - lista de nomes em edição;
   - botão verde **ENVIAR LISTA PARA O RETORNO**.
2. **Oportunidade de Louvor — Lista em edição**
   - campo `Nome de quem deseja louvar`;
   - botão **ADICIONAR**;
   - lista de nomes em edição;
   - botão verde **ENVIAR LISTA PARA O RETORNO**.
3. **Controle do Retorno**
   - **MOSTRAR/OCULTAR FAIXA**;
   - **LIMPAR APÓS O CULTO**.
4. **Ações rápidas**
   - Alerta;
   - Veículo;
   - Mensagem.

## Aba Voluntários

A aba apresenta um bloco **Acesso dos voluntários — automático** contendo:

- estado `CONECTADO`;
- IP LAN detectado;
- porta do servidor;
- **ATUALIZAR QR**;
- **VERIFICAR SERVIDOR**;
- QR Code em área branca;
- URL completa da PWA;
- texto explicando que IP/porta vêm do servidor e que o token não entra no QR.

## Aba Alertas/Mensagens

A interface contém dois editores multilinha:

- **Alertas pré-definidos — um por linha**;
- **Atalhos de mensagens — um por linha**.

O botão **SALVAR LISTAS** grava as alterações usadas pelo fluxo rápido da PWA/plugin.

## Aba Personalização

A organização atual inclui:

- **Identidade da igreja**;
- campo para escolher imagem de fundo;
- pré-visualização/estado da imagem salva;
- botão **REMOVER FUNDO**;
- seção **Visual da PWA**;
- seletor de modo;
- controle de blur;
- controle de ofuscamento;
- demais preferências visuais conforme a rolagem da página.

## Tela de Retorno

Na revisão visual atual:

- relógio e timer ficam na parte superior;
- **Veículo/Alerta/Mensagem** ocupam a região inferior esquerda;
- **Visitantes** ocupam a coluna central;
- **Oportunidade de Louvor** ocupa a coluna direita.

Em Veículo, a placa é o texto mais destacado. Modelo e cor aparecem em linha menor logo abaixo; o problema usa a área seguinte.

Visitantes e Louvor ficam centralizados nas respectivas colunas e devem aproveitar a altura disponível de baixo para cima quando as listas crescem.

## PWA — tela principal

A PWA usa fundo personalizado com camada de ofuscamento e cartões translúcidos.

No topo aparecem identidade da igreja, horário e estado **Conectado**. Em seguida ficam Visitantes e Oportunidade de Louvor. Na parte inferior ficam os três botões principais: Alerta, Veículo e Mensagem.

## PWA — Veículo

O painel móvel de Veículo contém:

- indicador de arrasto;
- texto `Deslize para baixo para voltar`;
- título **Alerta de Veículo**;
- Placa;
- Modelo;
- Cor;
- Problema;
- botão grande **ENVIAR PARA A TELA**;
- botão pequeno vermelho com raio para Estrobo;
- ação **Voltar**.

O painel é um bottom sheet que pode ocupar grande parte da tela em celulares pequenos e deve permanecer rolável.

## Diretrizes para preservar a interface

Mudanças futuras devem manter prioridade operacional: campos grandes, contraste alto, poucas decisões na PWA e configurações avançadas concentradas no plugin. O voluntário precisa conseguir executar uma ação rapidamente sem conhecer a arquitetura do sistema.
