# Stage Companion — fila de acabamento visual e funcionalidades (24/11/2026)

> **Referência funcional protegida:** plugin **0.4.37 / HF5-RC4-UI4-HF3**, conforme [baseline aprovada](BASELINE-APROVADA-2026-11-24.md). Este arquivo **não** é confirmação de que as mudanças abaixo já estejam implementadas.

## O que NÃO reabrir como bug

- Reordenação física dos hinos da **Oportunidade de Louvor** na Setlist — aprovada.
- Inclusão de múltiplos hinos na mesma pasta, com identificação única da participação no retorno — aprovada no cenário testado.
- Reordenação física da **Harpa Cristã** — aprovada pelo operador.
- Pisca vermelho nos botões **Chamar atenção** — aprovado pelo operador.

Preservar o ZIP 0.4.37 e aplicar testes de regressão antes de cada nova candidata.

## Ordem das etapas pendentes

| Prioridade | Área | Trabalho / critério de aceite | Estado |
| --- | --- | --- | --- |
| 1 | RT Músicos (tema JSON, separado do plugin) | Validar a caixa da Harpa compacta, exibindo números dinâmicos sem encobrir as estrofes. | Tema preparado; falta teste no Spresenter real |
| 2 | **Painel** (primeira aba do plugin) | Encolher cabeçalho “Stage Companion” e versão/build; mostrar algo como `SC · 0.4.37`, mantendo versão completa no diagnóstico. Preservar área útil e funções. | Pedido confirmado; não implementado nesta documentação |
| 3 | **Alertas/Mensagens** | Conferir e refinar organização da **lista de mensagens pré-programadas e alertas**, edição, salvamento e usabilidade dos atalhos. A documentação histórica descreve um item por linha e botão `SALVAR LISTAS`; o resultado real na 0.4.37 precisa de revisão, sem supor bug. | Revisão pendente |
| 4 | **Chat / Links** | Corrigir e testar visualização e download de vídeos, animação do clipe, estados dos botões, anexos e feedback de envio/recebimento. | Testes pendentes |
| 5 | **Personalização** | Revisar densidade e hierarquia dos controles e manter duração/configuração do pisca funcional; evitar regressão do estrobo. | Revisão visual pendente; pisca aprovado |
| 6 | **Voluntários** | Distinguir endereço local, estado de conexão, QR e configuração de servidor remoto; mostrar avisos claros se remoto não estiver configurado. | Planejamento |
| 7 | PWA local / EXE Windows | Harmonizar interface local com PWA pública, conferir recarregamento/cache e fluxo de anexos, sem presumir que a atualização do servidor remoto atualiza a PWA local. | Validação pendente |
| 8 | RT Músicos — avisos exclusivos | Projetar e testar os avisos específicos após a Harpa compacta ser validada. | Planejamento |


## Regra de retirada da Harpa nos dois retornos — validação pendente

**Comportamento desejado:** o comando `Retirar Harpa` no plugin deve esconder **somente a apresentação da Harpa** simultaneamente no retorno do pastor e no **RT Músicos**. Na reapresentação, os números devem voltar aos dois destinos. A retirada visual **não deve excluir os hinos da Setlist física, desfazer a ordem aprovada nem apagar a fila/cadastro**, a menos que o operador use expressamente uma ação separada de limpeza de dados.

**Base técnica do diagnóstico anterior:** a publicação da Harpa utiliza os identificadores `sc-harpa-row-0` até `sc-harpa-row-7` no tema Stage; o tema compacto candidato dos músicos passou a conter os mesmos identificadores. O uso compartilhado sugere que a retirada alcance ambos, **mas a versão 0.4.37 e o tema compacto ainda não foram testados juntos para este comando**. Não declarar este resultado aprovado sem observar as duas saídas.

**Teste de aceite:** com o pastor e os músicos mostrando os números 483 e 445, acionar `Retirar Harpa` **uma vez**; conferir desaparecimento em ambas as saídas, preservação das duas estrofes do RT Músicos e permanência dos hinos na Setlist; reativar e conferir retorno das informações. Se apenas uma saída limpar, registrar como erro de propagação visual, sem alterar a rotina da Setlist.

## Método de trabalho

1. **Uma alteração por subsistema.** A redução do cabeçalho é exclusivamente UI; nenhuma função de Setlist/Harpa deve ser alterada.
2. Montar pacote candidato em cima da **0.4.37 real**, nunca a partir do código histórico **0.3.56** ainda versionado no GitHub.
3. Registrar hash de backup do ZIP original e candidato, screenshots antes/depois e logs de teste.
4. Rodar regressão: 2 hinos da mesma pessoa/uma pasta; reordenar Oportunidade e Harpa na Setlist física; pisca vermelho com duração configurável; retorno sem duplicação.
5. Marcar **aprovado** somente depois do teste em campo no Spresenter.

## Observação de documentação histórica

O arquivo antigo [INTERFACE.md](INTERFACE.md) descreve quatro abas da revisão **08G-C3** (plugin 0.3.56), não a interface posterior com cinco abas e **Chat/Links**. Não utilizar aquele documento como representação exata da UI 0.4.37.
