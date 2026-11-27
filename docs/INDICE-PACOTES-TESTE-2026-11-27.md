# Stage Companion — Pacotes, candidatos e publicação segura (27/11/2026)

> **Importante:** este índice distingue **requisitos aprovados em conversa**, **comportamentos validados em campo**, **candidatos de teste** e **arquivos efetivamente disponíveis no GitHub**. O aceite de uma ideia não equivale à homologação do código.

## Estado do repositório

- Repositório: `gedielsonsaramento/stage-companion`, branch `main`.
- **Código executável de referência no repositório:** base histórica `08G-C3` / plugin `0.3.56` (não corresponde à base recente de campo).
- **Base funcional aprovada em campo:** plugin `0.4.37 / HF5-RC4-UI4-HF3` para os itens descritos em [BASELINE-APROVADA-2026-11-24.md](BASELINE-APROVADA-2026-11-24.md). Essa aprovação não implica que o ZIP 0.4.37 já esteja publicado neste repositório.
- **Planejamento aprovado em 27/11:** [requisitos consolidados](REQUISITOS-CONSOLIDADOS-2026-11-27.md), incluindo EXE local, biblioteca/playback, permissões e redundância automática. **Ainda não implementado/homologado apenas por ter sido documentado.**
- Em 27/11/2026, não havia GitHub Releases publicadas para este repositório. **Não tratar o botão padrão de baixar o código da branch como instalador recente.**

## Pacote HF9 — laboratório / ensaio

| Artefato | SHA-256 confirmado em 27/11/2026 | Situação no GitHub |
|---|---|---|
| `StageCompanion-Plugin-0.4.43-HF9-MENSAGENS-RT-MUSICOS-TESTE.zip` | `eb81b2afe7d9cc031affbf773870bfb83663c5ec4d0d0f71438a5ee019d23031` | ZIP ainda não publicado |
| `RT-Musicos-HF3G-Harpa-Estrobo-Estrofes-Mensagens-TESTE.spresenter-theme.json` | `48b516c8ec88c2ed3474c60eaa618754e20172dfdcdf6d0a2040ed34681e593a` | [Tema-fonte disponível](../themes/candidatas/RT-Musicos-HF3G-Harpa-Estrobo-Estrofes-Mensagens-TESTE.spresenter-theme.json) |
| `StageCompanion-RT-Musicos-HF3G-HF9-KIT-TESTE.zip` | `9b7ee4de77e0ccbd8df3ed5ade575a63d3a3aa26b14a9fa6f73f0e191aadbc0a` | ZIP ainda não publicado |

- O ZIP HF9 foi encontrado na Biblioteca do projeto, teve integridade ZIP verificada e os três SHA-256 acima foram conferidos com os valores documentados.
- O kit contém o ZIP do plugin, o tema HF3G, o arquivo `LEIA-PRIMEIRO-HF9.md` e o tema anterior HF3F.
- Consulte [instruções do teste HF9](../tests/candidatas/HF9-LEIA-PRIMEIRO.md) e [relatório da candidata HF9](CANDIDATA-0.4.43-HF9-RT-MUSICOS-MENSAGENS.md).
- **Status de homologação no documento original:** candidato de laboratório, sem homologação confirmada no Spresenter real. Se houver aceite de campo posterior, registrar evidência e versão antes de mudar o status.

## Pacotes HF10 — encontrados na Biblioteca, publicação binária pendente

Foram identificados, entre outros:

- `StageCompanion-Plugin-0.4.44-HF10-RECONSTRUIDO-TESTE.zip`
- `StageCompanion-Plugin-0.4.44-HF10-HARPA-COUNTDOWN-TESTE.zip`
- `StageCompanion-0.4.44-HF10-PACOTE-COMPLETO-RECONSTRUIDO-TESTE.zip`
- `StageCompanion-RT-Musicos-0.4.44-HF10-KIT-TESTE.zip`

**Não há prova de que todos esses arquivos representem a mesma candidata, estejam homologados ou possam substituir a base aprovada.** Os bytes dessas versões não puderam ser obtidos nesta revisão para conferir hashes e integridade. Por isso **não foram anunciados como release nem publicados como ZIP**.

## Próximos passos para distribuição dos binários

1. Recuperar os arquivos originais da Biblioteca/ambiente de compilação e conferir SHA-256, manifesto, código-fonte, dependências e ausência de segredos/configurações privadas.
2. Identificar a versão com testes de campo aceitos e preservação das funções de Oportunidade de Louvor, Harpa, retorno e estrobo.
3. Publicar os ZIPs aprovados em uma **GitHub Release de teste/pré-lançamento**, com notas, hashes, instrução de instalação e procedimento de rollback.
4. Não substituir a base histórica da branch pelo candidato antes de comparar o código com a base validada.
5. Manter as ideias de playback remoto, biblioteca de mídias, redundância entre EXEs e PWA autônoma marcadas como **requisitos futuros**, até implementação e testes reais.

**Critério de segurança:** no culto, usar somente versão que tenha passado em testes de campo. Pacotes com `TESTE` são candidatos e não instaladores estáveis para terceiros.
