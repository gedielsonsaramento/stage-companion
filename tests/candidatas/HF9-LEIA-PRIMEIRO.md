# Stage Companion 0.4.43 — HF9 / Tema RT Músicos HF3G — CANDIDATA PARA TESTE

**Não homologada no Spresenter. Não instalar durante culto.**

## Base confirmada
- Plugin 0.4.42/HF8 com Harpa dinâmica, Setlist e estrobo da caixa preservados.
- Tema HF3F aprovado em campo para estrofes verde e laranja, Harpa e estrobo.

## Alteração pontual
- Tema HF3G é **HF3F byte a byte igual nos 14 elementos originais** e inclui UM elemento novo `sc-musicians-notice`, inicial `visible:true`, `text:''`, transparente e sobre a mesma caixa compacta da Harpa.
- Plugin 0.4.43 habilita os botões ENVIAR AO RT MÚSICOS e RETIRAR AVISO na aba Alertas/Mensagens, usando os presets já salvos localmente no plugin.
- Mensagem cobre temporariamente os números sem modificar dados/execução/ordem da Harpa; ao fim de 5 a 120 segundos, a camada retorna a texto vazio, **sem desmontar**.
- Pisca opcional é o fundo/borda do aviso, sem depender do estrobo já aprovado do botão CHAMAR ATENÇÃO.
- Avisos NÃO replicam para outros PCs, PWA ou servidores; persistem apenas os presets locais previamente salvos. Não foi verificada entrega visual real; resposta da API é apenas aceitação de escrita.
- Retorno do pastor não é modificado, mas o isolamento entre destinos precisa ser observado em campo.

## Ensaio recomendado
1. Faça backup de plugin 0.4.42 e tema HF3F; mantenha acesso aos dois para rollback.
2. Em ambiente de ensaio, instale plugin 0.4.43 no PC que apresenta RT Músicos e associe **HF3G apenas** à saída RT Músicos /output/rt-musicos.
3. Confirme os números dinâmicos da Harpa (exemplo 510 riscado, 318 vermelho), estrofes verde/laranja e CHAMAR ATENÇÃO.
4. Abra **Alertas/Mensagens → RT Músicos**, clique num aviso cadastrado, escolha **5 segundos**, **Piscar caixa desligado** e clique **ENVIAR AO RT MÚSICOS**. A mensagem deve substituir os números **na mesma caixa**, sem aparecer no retorno do pastor.
5. Espere 5 segundos: a mensagem deve sair e a Harpa reaparecer no estado atualizado. Repita com pisca e depois RETIRAR AVISO manual.
6. Se não aparecer, exporte diagnósticos e procure `MUSICIANS_NOTICE_TX_HF9`, `MUSICIANS_NOTICE_END_HF9`, `MUSICIANS_NOTICE_INIT_HF9`.
7. Se regredir, volte ao plugin 0.4.42 + tema HF3F (NÃO modifique EXE/Samsung/Setlist).

## Limitações de aceite
- Só homologar quando mensagem for observada no RT Músicos, duração e retirada funcionarem, pastor permanecer intacto, e Harpa/Setlist/estrobo/estrofes forem revalidados.
- NENHUM código EXE, Samsung/Termux ou PWA foi alterado.