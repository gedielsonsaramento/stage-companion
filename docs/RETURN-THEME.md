# Tema de Retorno

O tema **Retorno — Stage Companion 08G C3** é a camada visual usada pelo Spresenter para exibir informações do Stage Companion sem substituir os recursos nativos do Retorno.

## Princípio de integração

O tema preserva os elementos nativos do Spresenter e acrescenta elementos com prefixo `sc-`. O plugin altera esses elementos em tempo real usando a API de live elements.

A regra de projeto é simples: elementos nativos continuam pertencendo ao Spresenter; elementos `sc-*` pertencem ao Stage Companion.

## Layout atual

A composição visual da revisão 08G-C3 está dividida em três áreas operacionais na parte inferior da tela:

### Esquerda — Alertas e Veículo

A coluna esquerda é usada para avisos temporários. Quando a ação é Veículo, a informação deve respeitar a hierarquia:

1. **PLACA** em maior destaque;
2. **MODELO · COR** em caixa alta;
3. **PROBLEMA** abaixo.

Alertas e Mensagens também usam essa área de comunicação operacional.

### Centro — Visitantes

A área central é reservada aos Visitantes.

O título **VISITANTES** permanece centralizado. A lista é centralizada e foi concebida para crescer de baixo para cima conforme mais nomes são adicionados, usando a área vertical disponível sem deslocar relógio/timer.

### Direita — Oportunidade de Louvor

A coluna direita mostra **OPORTUNIDADE DE LOUVOR**.

A lista segue a mesma lógica de Visitantes: conteúdo centralizado e preenchimento de baixo para cima quando o número de pessoas aumenta.

## Relógio e timer

Relógio e timer são elementos nativos do tema e não devem ser substituídos pelo Stage Companion. O layout precisa reservar espaço para eles e preservar o comportamento do Spresenter.

## Elementos Stage Companion

A revisão atual utiliza elementos como:

```text
sc-background
sc-alert-label
sc-alert-text
sc-vehicle-detail-bg
sc-vehicle-detail-text
sc-vehicle-problem-text
sc-visitors-label
sc-visitors-text
sc-worship-bg
sc-worship-label
sc-worship-text
sc-flash
```

O nome exato dos elementos importa porque o plugin faz patches usando o ID do elemento. Renomear um `sc-*` no editor do tema sem atualizar o código quebra a comunicação daquele campo.

## Elementos nativos preservados

O tema mantém elementos nativos como:

```text
main-video
main-slide
main-letra
next-slide
next-verse
clock
timer
counter
```

Outros elementos nativos do tema também devem ser preservados quando uma revisão for criada a partir da base atual.

## Vídeo no Retorno

O elemento `main-video` é nativo. Na revisão C3, o plugin observa o estado da apresentação e tenta atualizar a fonte desse elemento quando o conteúdo projetado é vídeo ou background video.

O objetivo é corrigir o caso em que a área do vídeo existia, mas permanecia preta no Retorno.

Ao terminar o vídeo, o comportamento nativo do tema deve voltar a assumir a apresentação seguinte.

## Sobreposição inteligente

Visitantes e Oportunidade de Louvor são informações persistentes, mas não devem ficar em cima de uma apresentação importante.

Quando o plugin detecta conteúdo nativo ativo, ele recolhe essas duas listas. Quando o conteúdo deixa de estar ativo, elas são restauradas.

Alertas, Veículo e Mensagem não seguem necessariamente essa regra porque são eventos temporários que podem precisar chamar a atenção durante uma apresentação.

## Estrobo

O elemento `sc-flash` é usado como apoio ao efeito de Estrobo. O efeito é temporário e controlado pela duração configurada no plugin.

O Estrobo não deve apagar os dados principais. Ele apenas reforça visualmente a informação enviada.

## Aplicação do tema por saída

No Spresenter, cada destino de Retorno pode ter configuração de tema própria. Por isso, depois de importar uma nova revisão do tema, confira todas as saídas usadas no culto.

Exemplo de situação comum:

- o Preview interno usa o tema antigo;
- `/output/retorno` usa o tema novo;
- outra saída física usa um terceiro tema.

Isso pode parecer um bug do plugin, mas na verdade é uma diferença de configuração entre as saídas.

## Editando o tema manualmente

Se for necessário ajustar posições no editor do Spresenter:

1. faça uma cópia do tema atual;
2. não renomeie IDs `sc-*`;
3. preserve os elementos nativos de vídeo, slide, relógio e timer;
4. altere apenas posição, tamanho, tipografia e estilo quando possível;
5. teste o resultado em cada saída de Retorno;
6. depois exporte o JSON atualizado e versione o arquivo no repositório.

## Critério para uma nova revisão

Uma nova revisão de tema deve sempre partir do último tema visual aprovado. Não deve ser recriada a partir de um tema vazio ou genérico, porque isso perde posicionamentos, relógio, timer, vídeo, slides e elementos nativos já ajustados.
