# Stage Companion — mensagens e notificações exclusivas no RT Músicos

**Especificação funcional confirmada em 24/11/2026.** Este documento define o comportamento solicitado, **não afirma que ele já foi implementado ou testado** na versão 0.4.37.

## Onde ficam os controles

Usar a aba existente **Alertas/Mensagens** do plugin. Nela haverá uma seção claramente identificada **Mensagens para RT Músicos**, separada das mensagens e alertas do Retorno do pastor. **Não criar uma nova aba principal** apenas para essa função.

Proposta de composição da seção:
1. Seletor de mensagem pré-programada, editável pelo operador, mais campo de texto livre.
2. Campos variáveis quando a mensagem precisar de nome, número, horário ou duração.
3. Botões **ENVIAR AOS MÚSICOS**, **RETIRAR DO RT MÚSICOS** e **LIMPAR MENSAGEM DOS MÚSICOS**, com confirmação/feedback real.
4. Opção **CHAMAR ATENÇÃO/ESTROBO** com duração ajustável, respeitando as configurações e sem alterar o pisca vermelho dos botões já aprovado.
5. Estado visível: rascunho, publicada, retirada, erro de envio; ações independentes do que está publicado para o pastor.

## Mensagens predefinidas já discutidas

- **Mutar MIC** — com campo variável de nome (exemplos: Antonio, Talita, Tais, Nane, Luiz).
- **Qual a próxima música?**
- **Vamos começar em** — contagem regressiva configurável (horas:minutos:segundos; a representação original discutida era `{00,00,00}`), com início e retirada controlados pelo operador.
- Outras mensagens de texto livre e modelos cadastrados pelo operador.

Os exemplos representam mensagens configuráveis, **não** uma lista fixa imposta a toda instalação.

## Separação dos destinos

| Operação | Retorno do pastor | RT Músicos |
| --- | --- | --- |
| Enviar uma mensagem comum destinada ao pastor | Atualiza conforme fluxo existente | **Não** publica automaticamente |
| Enviar uma mensagem na seção RT Músicos | **Não** altera | Exibe aviso no campo exclusivo |
| Retirar mensagem RT Músicos | Não altera | Oculta o aviso, preserva seu texto editável |
| Limpar mensagem RT Músicos | Não altera | Apaga dados da seção própria, sem apagar listas ou mensagens do pastor |
| Retirar Harpa | Deve ocultar a Harpa nos dois retornos após teste | Deve ocultar a Harpa nos dois retornos após teste |
| Avisos RT Músicos enquanto há duas estrofes | Não alteram o pastor | Não substituem `{letra}` nem `{nextVerse}` e não cobrem as letras |

O estado, identificadores, comandos de envio/retirada/limpeza e elementos Stage dos avisos dos músicos deverão ser **próprios**, para evitar vazamento ao retorno do pastor. Não reutilizar o mesmo identificador de campo visual dos avisos gerais para mensagens com destinos diferentes.

## Layout e comportamento no RT Músicos

- Reservar um bloco pequeno e legível para notificações, separado da **Harpa Cristã compacta**, da estrofe atual (verde) e da próxima estrofe (laranja).
- Não cobrir nem encolher indevidamente as duas estrofes; o tema deve ser testado na resolução real.
- A mensagem aparece apenas quando enviada para RT Músicos; o operador pode retirá-la sem apagar.
- Limpar a mensagem **não** modifica hinos, Setlist, Harpa, aviso do pastor, oportunidade de louvor ou qualquer outro módulo.
- Se o tema RT Músicos não contiver os elementos de destino, informar erro/pendência; não registrar envio como exibido com sucesso sem confirmação.

## Verificações de aceite no Spresenter

1. No plugin, selecionar `Mutar MIC — Talita` e enviar **somente aos músicos**; confirmar aviso no RT Músicos e ausência no retorno do pastor.
2. Trocar para `Qual a próxima música?`; o RT Músicos atualiza sem alterar as estrofes.
3. Configurar `Vamos começar em` com contagem e verificar início, evolução, encerramento/retirada.
4. Acionar **Retirar**: o aviso some, mas seu texto continua disponível para reenvio.
5. Acionar **Limpar**: apaga somente o conteúdo da seção dos músicos.
6. Enviar mensagem normal do pastor e garantir que não apareça indevidamente no RT Músicos.
7. Apresentar números da Harpa 483 e 445, retirar e reapresentar Harpa; validar os dois retornos sem quebrar a fila.
8. Reordenar Harpa e Oportunidade na Setlist física e verificar o pisca vermelho dos botões; **funções já aprovadas não podem regredir**.
9. Testar dois PCs e reconexão antes de homologar envio/retirada.

## Estado e base

- **Base operacional funcional a proteger:** plugin `0.4.37 — HF5-RC4-UI4-HF3`; código fonte equivalente não está confirmado na branch `main` do GitHub, cuja versão pública ainda é 0.3.56.
- **Escopo pendente:** implementação do painel e transporte dos comandos, novos campos no tema RT Músicos e confirmação real de cada envio/retirada.
- **Estratégia:** primeiro validar Harpa compacta e ajustar cabeçalho da primeira aba; depois integrar avisos dos músicos na aba Alertas/Mensagens, sem misturar mudanças em Setlist com o novo envio.
