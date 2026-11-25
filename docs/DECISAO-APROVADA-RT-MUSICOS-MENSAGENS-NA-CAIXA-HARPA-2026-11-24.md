# Stage Companion — decisão aprovada: mensagens na mesma caixa da Harpa do RT Músicos

**Data da aprovação da proposta:** 24/11/2026 (usuário: "sim aprovo").
**Classificação:** **requisito funcional aprovado para implementar**, NÃO funcionalidade implementada ou homologada no Spresenter.
**Versão de referência de testes:** plugin 0.4.38, HF5-RC4-UI4-HF4; preservar a 0.4.37 como referência de recuperação.

## Regra aprovada

No retorno HTML **RT Músicos** (`/output/rt-musicos`), a caixa compacta da **Harpa Cristã** será reutilizada para **avisos personalizados previamente cadastrados no plugin**, sem abrir uma segunda caixa que obstrua as estrofes.

- Em condições normais, a caixa mostra a Harpa, com estado dinâmico dos hinos.
- Quando o operador enviar um aviso destinado aos músicos, o texto do aviso **substitui temporariamente** os números dentro da **mesma caixa**.
- Ao acabar o tempo configurado, **a Harpa reaparece automaticamente** com o estado atualizado — mesma ordem, hinos concluídos cinza/riscado, hino atual/próximo vermelho —, sem reiniciar a fila.
- Operador pode retirar o aviso antecipadamente **sem excluir** a mensagem cadastrada nem limpar a Harpa.
- Mensagens podem ser cadastradas/editadas/retiradas na aba Mensagens do plugin. Destinos previstos: **RT Músicos**, **Retorno do Pastor** ou **Ambos**, com duração de exibição configurável e **pisca de alerta opcional**.
- Exemplos de mensagens sugeridas anteriormente: "Mutar MIC — Antônio/Talita/Tais/Nane/Luiz", "Atenção, vamos começar em 00:00:00" e "Qual a próxima música?". Os exemplos não são itens pré-cadastrados neste commit.

## Regras de projeto e segurança de estado

1. Separar **estado da Harpa** de **estado do aviso**. A exibição de aviso não deve apagar/reordenar hinos, tocar mídia, mudar o culto ou criar/excluir pastas na Setlist.
2. O retorno do pastor e o RT Músicos devem ter estado de apresentação/destino independente: um aviso exclusivo para músicos não pode aparecer no pastor; "Ambos" exige atualização dos dois.
3. Se houver alteração de ordem ou execução de hino durante o aviso, o retorno da Harpa deve refletir o **estado mais recente**, nunca uma cópia antiga.
4. Controles de pisca da Harpa e do botão geral "Chamar Atenção" são recursos diferentes; preservar o funcionamento já aprovado do botão vermelho. Usar animações isoladas por componente, sem flashes involuntários na tela inteira.
5. Mensagens devem respeitar limites de texto, desabilitar HTML arbitrário e exibir feedback real de sucesso/erro por destino.
6. Não cobrir `{letra}` ou `{nextVerse}`; ajustar geometria/layout com margem segura, testando inclusive estrofes longas.
7. Tratamento de avisos simultâneos, prioridades, persistência e timeout em reconexão deverá ser definido e testado durante implementação, sem assumir comportamento não especificado como aprovado.

## Evidências de campo anteriores — separadas do novo requisito

- Captura de 24/11/2026: RT Músicos mostrou **483 cinza/riscado** e **445 vermelho**, acompanhando o avanço da Harpa; ordem foi invertida e a apresentação refletiu a mudança.
- Captura também mostrou a caixa da Harpa **sobreposta ao texto da próxima estrofe**.
- O pisca específico da caixa Harpa no RT Músicos foi relatado como **pendente**, enquanto o pisca do botão geral "Chamar Atenção" foi testado separadamente.
- **Não atribuir ao recurso de mensagens status de "aprovado em campo".**

## Aceite para futura implementação

- Aviso previamente cadastrado na aba Mensagens, direcionado apenas ao RT Músicos, substitui a Harpa durante o prazo.
- Ao expirar ou ao ser retirado, números reaparecem no estado atual, sem perda ou reordenação da fila.
- Testar destinatário Pastor, Músicos e Ambos, com observação de ambas as telas.
- Pisca opcional do aviso funciona apenas no destino escolhido e não altera a lógica aprovada do destaque vermelho / cinza riscado da Harpa.
- Sem sobreposição com estrofes curtas ou longas.
- Não regredir reordenação física de Oportunidade e Harpa na Setlist, dois PCs, RT Pastor, EXE, Samsung/PWA.

**Estado da tarefa:** especificação aprovada / implementação pendente.
