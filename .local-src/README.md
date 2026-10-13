# Snapshot da candidata R18.6-HF5I LOCAL

Esta pasta guarda o código completo da candidata local enquanto ela está em validação de campo.

Os arquivos `source.b64.part00` até `source.b64.part09` são partes sequenciais de um ZIP codificado em Base64.

O GitHub Actions:

1. concatena as 10 partes;
2. decodifica o ZIP;
3. valida o plugin v0.3.90 e o tema;
4. compila o servidor Windows HF5C;
5. empacota o plugin e a edição LOCAL.

Esse formato é temporário para manter a candidata isolada da árvore principal durante os testes reais no S-Present. Depois da aprovação em campo, o código será promovido para as pastas normais `plugin/`, `server/` e `themes/`.

A arquitetura Termux/Samsung/domínio não faz parte desta candidata local.
