# Stage Companion — publicação controlada da base 0.4.37 no GitHub

## Situação em 24/11/2026

- **Código aprovado recuperado:** plugin 0.4.37 — HF5-RC4-UI4-HF3; SHA256 do ZIP `f05735b1925fd8d19231b6b6f8f21fd78b81a6f1ae6ecdcbaf9ee03d0cdedaba`.
- **Pacote completo:** SHA256 `4b87b3369fe15fd984307e20b05961a117bef235c55e84420ca21ed8adbf6b5d`.
- O GitHub `main` ainda contém código histórico 0.3.56. A atualização de documentação NÃO significa que essa `main` foi substituída.
- Foi gerado um **kit de publicação segura** com 55 arquivos-fonte/instalador, orientação de publicação, script PowerShell e manifestos de integridade. O kit deve ser extraído no PC e publicado em branch separada, mediante confirmação explícita do operador.

## Procedimento planejado

1. Conferir o ZIP da 0.4.37 por SHA256. Não renomear a referência aprovada.
2. Extrair o kit, rodar `PUBLICAR-CODIGO-APROVADO-0.4.37.ps1` sem argumentos para **simulação** (sem push).
3. Revisar o conteúdo e executar com `-Publicar`. O script exige digitar `PUBLICAR` e usa o Git autenticado do Windows.
4. Publicação proposta em `baseline/0.4.37-aprovada` sob `approved/0.4.37/`, sem alterar `main`.
5. Inspecionar no GitHub o `manifest.json`, `dist/code.js`, `dist/ui/index.html`, fontes do EXE Go, servidor Samsung, temas e instalador ZIP.
6. Comparar hash da versão aprovada e executar testes de regressão em ambiente de ensaio antes de promover/reorganizar a branch principal.

A verificação preliminar do kit não identificou padrões óbvios de chaves privadas, tokens GitHub ou URL com senha embutida. A checagem não substitui revisão humana de privacidade e segredos antes de publicar um repositório público.

## Observação sobre EXE

O pacote de origem inclui um binário compilado do servidor Windows. O kit do GitHub contém **as fontes** do EXE; binários compilados ficam preferencialmente como assets de um GitHub Release, para não acumular executáveis no histórico da árvore de código.

## Candidata posterior

A revisão `0.4.38 — HF5-RC4-UI4-HF4` é **candidata de interface**, que comprime o cabeçalho. Essa candidata não substitui a baseline 0.4.37 e não deve ser publicada como aprovada sem testes reais no Spresenter.

**Status deste arquivo:** documentação publicada; push do pacote real da 0.4.37 continua pendente até execução confirmada.
