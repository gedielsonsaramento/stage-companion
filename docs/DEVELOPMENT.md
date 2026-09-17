# Desenvolvimento

Este documento descreve como a revisão 08G-C3 está organizada e como gerar os artefatos do projeto.

## Versões atuais

```text
Projeto: 08G-C3
Plugin: 0.3.56
Servidor/PWA: 0.8G-R9
Spresenter mínimo: 0.3.48
Go no CI: 1.24.x
```

## Estrutura do repositório

A árvore pública atual contém, entre outros:

```text
.github/workflows/build-windows.yml
.bootstrap/
plugin/manifest.json
server/app/
themes/
tests/
BUILD-WINDOWS.cmd
README.md
INSTALL.md
CHANGELOG.md
docs/
```

### `.bootstrap/`

A revisão atual armazena um arquivo-fonte compactado dividido em partes Base64. O workflow do GitHub Actions junta essas partes, recria `source.zip` e expande o conteúdo em `src/` durante o build.

Isso permite reconstruir o EXE e o ZIP do plugin a partir do repositório atual, embora uma organização futura possa preferir manter toda a árvore-fonte expandida diretamente no Git.

### `plugin/`

Contém o manifest público do plugin. Durante o workflow, a implementação completa é reconstruída em `src/plugin/`.

O manifest define:

```text
id: com.stagecompanion.dev
main: dist/code.js
ui: dist/ui/index.html
background: true
```

### `server/app/`

Contém arquivos públicos da PWA, como ícone, manifest e service worker. A implementação completa do servidor é reconstruída durante o build.

### `themes/`

Contém o JSON do tema Stage Companion correspondente à revisão atual.

### `tests/`

Os testes automatizados validam contratos importantes entre plugin, tema e PWA.

## Build local no Windows

O arquivo `BUILD-WINDOWS.cmd` faz parte da distribuição do projeto. Para desenvolvimento local, o ambiente precisa ter Go instalado e o código-fonte completo reconstruído/extraído.

O servidor é compilado para Windows AMD64 com configuração equivalente a:

```text
GOOS=windows
GOARCH=amd64
CGO_ENABLED=0
go build -trimpath -ldflags="-s -w -H=windowsgui"
```

A opção `windowsgui` evita abrir uma janela de console durante a execução normal.

## GitHub Actions

O workflow `Build Stage Companion` é disparado em push para `main` e também manualmente.

Etapas principais:

1. checkout do repositório;
2. instalação do Go;
3. reconstrução do código-fonte a partir de `.bootstrap/source.b64.part*`;
4. compilação do servidor Windows;
5. empacotamento do plugin em ZIP;
6. cópia do tema de Retorno;
7. execução dos testes;
8. publicação dos artefatos do workflow.

## Testes atuais

### `tests/plugin.cjs`

Valida pontos como:

- migração de estado C2 → C3;
- `flashSeconds = 30` quando não configurado;
- ordem do Veículo;
- uppercase de modelo/cor;
- Estrobo opcional;
- desligamento automático do Estrobo;
- reparo de `main-video`;
- ocultação de Visitantes/Louvor durante projeção;
- restauração das listas depois da projeção;
- alternância mostrar/ocultar faixa sem perder dados;
- existência dos IDs usados no tema.

### `tests/static-c3.cjs`

Valida presença dos controles de Estrobo no plugin/PWA e marcadores do comportamento de swipe.

### `tests/pwa.mjs`

Contém validações relacionadas à interface/fluxos da PWA.

## Contrato entre código e tema

Sempre que um novo elemento for criado no plugin, o tema precisa conter exatamente o mesmo ID.

Exemplo:

```text
plugin: sc-vehicle-problem-text
tema:   sc-vehicle-problem-text
```

Uma mudança unilateral causa falha visual mesmo que o restante do plugin esteja funcionando.

## Versionamento recomendado

O projeto possui vários números porque cada componente pode mudar separadamente. Para releases futuras, mantenha:

```text
Release do projeto: 08G-C3
Plugin: 0.3.56
Servidor: 0.8G-R9
Tema: 08G-C3
```

Ao criar uma nova revisão, atualize pelo menos:

- manifest do plugin;
- texto de versão do painel;
- versão do servidor;
- nome/título do tema quando houver mudança visual incompatível;
- `CHANGELOG.md`;
- documentação afetada.

## Checklist antes de publicar

Antes de considerar uma build pronta:

1. executar os testes automatizados;
2. instalar o ZIP do plugin em uma instalação real;
3. importar/aplicar o tema em todas as saídas de Retorno;
4. validar a PWA em pelo menos um celular real;
5. validar reinício do Windows/autostart;
6. validar QR/IP depois de reinício;
7. testar Visitantes e Louvor com listas curtas e longas;
8. testar Alerta, Veículo e Mensagem com e sem Estrobo;
9. testar vídeo, imagem, slide, letras/versículos e retorno à tela ociosa;
10. revisar se nenhum token/configuração real entrou no pacote.

## Desenvolvimento do tema

Mudanças no tema devem partir sempre do último JSON aprovado. Evite reconstruir de um tema vazio. O editor do Spresenter pode ser usado para posicionamento visual, mas IDs e elementos nativos devem ser preservados.

## Compatibilidade

A revisão atual declara Spresenter 0.3.48 como mínimo. Mudanças que dependam de APIs novas do Spresenter devem atualizar `minAppVersion` e ser registradas no changelog.
