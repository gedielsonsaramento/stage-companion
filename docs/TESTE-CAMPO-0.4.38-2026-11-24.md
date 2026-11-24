# Stage Companion — resultados de teste da candidata 0.4.38 (24/11/2026)

**Versão testada:** plugin 0.4.38, build HF5-RC4-UI4-HF4 (candidata).
**Origem dos resultados:** checklist informado pelo operador em 24/11/2026; não representa auditoria independente de logs ou certificação de todos os ambientes.
**Resultado:** **6 de 7 etapas aprovadas, 1 não confirmada (Harpa Cristã). Homologação geral pendente.**

| Etapa | Resultado informado |
| --- | --- |
| Preservar o backup da versão 0.4.37 | Aprovado |
| Instalar 0.4.38 em ambiente de teste | Aprovado |
| Verificar cabeçalho compacto | Aprovado |
| Testar Harpa Cristã | **Não confirmado** (não equivale a falha) |
| Oportunidade de Louvor e reordenação física na Setlist | Aprovado |
| Botões e sincronização | Aprovado |
| Funções existentes | Aprovado |

## Próximo teste necessário: Harpa Cristã

1. Com o backup 0.4.37 preservado, no Spresenter de teste, cadastrar ou conferir dois hinos, preferencialmente 483 e 445; não remover ou recriar itens físicos se a fila já estiver correta.
2. Verificar os números e o destaque no **Retorno do Pastor**.
3. Verificar a caixa **compacta** e os números no **RT Músicos** (tema candidato específico, sem trocar o tema do pastor). A renderização do tema compacto ainda não está homologada.
4. Acionar **Retirar Harpa** uma vez: conferir se a apresentação some dos **dois retornos**; os hinos devem continuar na Setlist, sem perder a ordem física ou as letras do RT Músicos. **Não confundir retirada visual com limpeza/exclusão da fila.**
5. Reapresentar e validar que os mesmos números retornam aos dois destinos sem duplicidade.
6. Confirmar reordenação física da Harpa na Setlist e funcionamento após atualização/reinicialização, quando possível.
7. Se os números sumirem de um retorno mas não do outro, registrar captura e log: pendência de propagação visual; **não alterar as rotinas aprovadas da Setlist**.

## Critérios para aprovar a versão

- A Harpa deve completar os cenários acima ou qualquer desvio deve ser explicitamente classificado e corrigido.
- Preservar o backup da versão 0.4.37 / HF5-RC4-UI4-HF3.
- Confirmar que não ocorreu regressão na Oportunidade de Louvor, na Setlist física e no pisca vermelho dos botões.
- Até lá, manter a 0.4.38 como candidata, não substituição universal de produção.
- Futuras melhorias (avisos exclusivos no RT Músicos, Chat/Links vídeo, PWA Playback, redundância ASUS/Samsung) permanecem fora do escopo desse teste.

Documento de resultados e planejamento; nenhum arquivo do plugin, tema, PWA ou servidor foi alterado.
