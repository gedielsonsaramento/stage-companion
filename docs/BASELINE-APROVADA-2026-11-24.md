# Stage Companion — aprovações de campo e código protegido (24/11/2026)

> **REGISTRO DE ACEITE / NÃO REGREDIR.** A aprovação se refere à base operacional do plugin **0.4.37 — HF5-RC4-UI4-HF3**, não à revisão histórica **0.3.56/08G-C3** que permanece no manifesto deste repositório. **Não produzir uma nova versão a partir do código 0.3.56** supondo que ele contenha as correções aceitas.

## APROVADO EM CAMPO — manter sem regressão

1. **Oportunidade de Louvor:** múltiplos hinos em uma pasta por participação e reordenação **física** das músicas na Setlist do Spresenter, mantendo uma única aparição do participante no retorno.
2. **Harpa Cristã:** sequência e reordenação física de hinos na Setlist, confirmadas pelo operador em 24/11/2026 como funcionando perfeitamente.
3. **Botões “Chamar atenção”:** pisca vermelho dos próprios botões confirmado pelo operador em 24/11/2026. Não tratar como correção pendente.
4. **Identificação de hinos:** vínculo seguro por identificação/GUID e confirmação de presença física antes de anunciar êxito, no cenário de Oportunidade aprovado.

Essas funcionalidades **estão APROVADAS** e **seu código e comportamento não podem ser perdidos** em futuras revisões. Isso não representa homologação integral de outros módulos nem de cenários não testados.

## Base imutável de comparação

- Arquivo de referência preservado na Biblioteca privada do projeto: `StageCompanion-Plugin-0.4.37-HF5-RC4-UI4-HF3-CANDIDATO.zip`.
- Registro completo: `StageCompanion-BASELINE-APROVADA-2026-11-24.md`, na Biblioteca **Stage companion**.
- Atenção: o manifesto deste GitHub ainda indica **0.3.56**; não reivindicamos que o código 0.4.37 esteja versionado neste repositório.
- Antes de editar ou compilar novamente, obter os bytes do ZIP aprovado, criar cópia de backup e verificar SHA-256. Esta atualização documental **não** criou novo backup binário nem alterou a implementação do plugin.

## Testes de regressão obrigatórios a cada revisão

- Dois hinos para a mesma pessoa: ambos na **mesma pasta física**; mudança de ordem no plugin reproduzida na Setlist; retorno com um nome por participação.
- Harpa com dois ou mais números: inclusão, sequência, troca da ordem física, sem duplicação depois de reiniciar.
- Pisca vermelho dos botões: visível, com duração configurada, e sem perder o estado após alternar abas.
- Conferir os dois PCs e o retorno; se uma função aceita regredir, cancelar a publicação e restaurar a versão aprovada.

## Próximas etapas (ainda não homologadas)

1. **RT Músicos:** testar visualmente o tema de Harpa compacta, mostrando os números sem encobrir a segunda estrofe. Isto não modifica a fila de Harpa aprovada.
2. **Plugin, primeira aba:** diminuir o cabeçalho grande “Stage Companion” para algo como `SC · 0.4.37`, com fonte pequena e detalhes completos acessíveis no diagnóstico; preservar área útil. Ajuste apenas de interface.
3. **Chat/Links:** corrigir/validar prévia e download de vídeos, clipe e feedback de anexos.
4. **PWA local/EXE:** validar atualização e paridade com PWA pública.
5. **RT Músicos:** avisos exclusivos em etapa própria.

**Regra:** uma mudança por etapa, backup, registro de versão, teste de regressão e confirmação no Spresenter real antes de marcar a candidata como homologada.
