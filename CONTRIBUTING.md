# Contribuindo com o Stage Companion

Obrigado pelo interesse em colaborar.

O Stage Companion ainda está em fase de desenvolvimento/teste. Mudanças devem preservar a compatibilidade entre **plugin, servidor/PWA e tema de Retorno**.

## Antes de alterar código

Leia:

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md)
- [`docs/RETURN-THEME.md`](docs/RETURN-THEME.md)
- [`SECURITY.md`](SECURITY.md)

## Reportando bugs

Abra uma issue descrevendo:

- revisão do projeto;
- versão do plugin/servidor;
- versão do Spresenter;
- Windows e navegador/celular quando relevante;
- passos para reproduzir;
- resultado esperado;
- resultado observado.

Screenshots e vídeos ajudam, mas remova tokens, chaves, dados pessoais e informações de rede que você não queira tornar públicas.

## Alterações no tema

Não renomeie IDs `sc-*` sem atualizar o plugin correspondente. Não remova elementos nativos do Spresenter apenas para simplificar o JSON.

Uma revisão visual deve partir do último tema aprovado, não de um tema vazio.

## Alterações na API/ações

O servidor e o plugin formam um contrato. Ao renomear uma action, payload ou campo de estado, atualize todos os consumidores e adicione/mude testes.

## Testes

Antes de enviar uma contribuição, execute os testes disponíveis e valide a instalação real sempre que a mudança afetar Retorno, PWA, rede ou servidor Windows.

Mudanças em Veículo, Estrobo, vídeo, visibilidade da faixa ou listas devem manter cobertura de regressão equivalente aos testes atuais.

## Segurança

Nunca faça commit de:

- chaves reais da API;
- `server.json` de uma instalação real;
- logs contendo token;
- arquivos do `%APPDATA%` do usuário;
- credenciais ou dados pessoais de participantes.

## Pull requests

Prefira PRs pequenos e com objetivo claro. Explique o problema, a solução e como foi testada. Se a mudança alterar comportamento do usuário, atualize a documentação e o `CHANGELOG.md`.

## Versionamento

O projeto usa números separados para a revisão geral, plugin, servidor e tema. Não altere apenas um número sem verificar se os demais componentes continuam compatíveis.

## Licença

A licença pública definitiva do projeto ainda precisa ser definida pelo mantenedor. Até que um arquivo `LICENSE` seja adicionado, não presuma uma licença específica para redistribuição externa.
