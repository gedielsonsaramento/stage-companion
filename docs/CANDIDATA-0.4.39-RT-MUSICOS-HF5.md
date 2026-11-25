# Stage Companion — candidata 0.4.39, HF5-RC4-UI4-HF5

Data: 24/11/2026. Status: candidata de laboratório, NÃO homologada em campo.

## Alterações propostas nesta candidata

- Nova área de avisos para RT Músicos na aba Alertas/Mensagens, com mensagem personalizada, presets locais, duração de 5–120 segundos, pisca opcional, envio e retirada.
- Novo elemento isolado sc-musicians-notice, sobre a Harpa, sem apagar a fila: ao expirar, a Harpa reaparece no estado atualizado.
- Novo elemento sc-musicians-harpa-pulse, com pisca breve após alteração da fila.
- Novo tema exclusivo RT Músicos preservando {letra} verde e {nextVerse} laranja, com estrofes reservadas à direita para evitar sobreposição.
- Não houve mudança nos algoritmos de reordenação física da Harpa e Oportunidade.

## Integridade

Plugin: StageCompanion-Plugin-0.4.39-HF5-RC4-UI4-HF5-TESTE.zip — SHA256 4b27f6de8fa55d7aaccee6a62f1d409231d86ddabba21c9103684f53acaf4b85.
Tema: RT-Musicos-2-Estrofes-Harpa-Avisos-HF5-TESTE.spresenter-theme.json — SHA256 9a1f1039e06a3292e4aed71d6707d96e4273805fd6d672aa886eff9d3dc165dc.
Kit de testes: StageCompanion-RT-Musicos-0.4.39-HF5-TESTE-COMPLETO.zip — SHA256 31cfc3244f40b07b944c857702e7ebd4fbad05c63eb81ae7e6bf48c5c83d0135.

## Validações realizadas

Checagens JSON, JS e ZIP aprovadas. Os 12 cenários existentes de regressão Setlist/atenção passaram. Teste isolado da nova lógica de mensagem temporária, retirada, pulso e ausência de alteração dos hinos aprovado. Somente três arquivos do plugin foram alterados em comparação à 0.4.38: dist/code.js, dist/ui/index.html e manifest.json.

## Restrições para homologação

- A API pública permite setElement por saída virtual e camada, mas não há confirmação em campo de que um ID novo dirigido a output 0 chegue à saída Stage independente /output/rt-musicos. Mensagem enviada NÃO significa renderização confirmada.
- Presets e avisos novos são locais ao plugin do PC. Ainda não sincronizam automaticamente com o segundo PC, PWA, Samsung ou ASUS. O roteamento de avisos Pastor / Músicos / Ambos no mesmo editor permanece pendente.
- O tema visual e o pulso precisam de captura do Spresenter real. Não aplicar na saída do pastor. Testar somente fora do culto com backups 0.4.37 e 0.4.38.
- A branch main do GitHub NÃO foi substituída pelo código candidato; este arquivo documenta o pacote de testes.

## Teste mínimo

Instalar plugin 0.4.39 em ambiente de teste; aplicar o novo tema somente ao RT Músicos; confirmar estrofes sem sobreposição; enviar Harpa 483 e 445, reordenar e concluir o primeiro; enviar aviso local de 5 segundos, verificar que somente músicos mostram, e Harpa retorna intacta. Repetir com pisca e retirada. Registrar captura e diagnóstico.