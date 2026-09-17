# Documentação — Stage Companion

Este diretório reúne a documentação funcional e técnica do **Stage Companion**, integração criada para o Spresenter com foco em comunicação entre recepção/portaria e a tela de retorno do palco.

## Versão documentada

- **Revisão do projeto:** 08G-C3
- **Plugin Spresenter:** 0.3.56
- **Servidor/PWA:** 0.8G-R9
- **Tema de Retorno:** Retorno — Stage Companion 08G C3
- **Spresenter mínimo informado pelo manifest:** 0.3.48
- **Plugin ID:** `com.stagecompanion.dev`

## Índice

| Documento | Conteúdo |
|---|---|
| [OVERVIEW.md](OVERVIEW.md) | Visão geral, objetivos, fluxos e recursos |
| [INSTALLATION.md](INSTALLATION.md) | Instalação do plugin, servidor, tema, API e PWA |
| [USER-GUIDE.md](USER-GUIDE.md) | Operação diária pelo plugin e pela PWA |
| [PWA.md](PWA.md) | Interface móvel, navegação, swipe e comportamento offline/local |
| [RETURN-THEME.md](RETURN-THEME.md) | Layout e comportamento da tela de Retorno |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Arquitetura, componentes e comunicação interna |
| [API-SECURITY.md](API-SECURITY.md) | Chave da API, permissões, rede e armazenamento seguro |
| [DEVELOPMENT.md](DEVELOPMENT.md) | Estrutura do projeto, build, testes e GitHub Actions |
| [TROUBLESHOOTING.md](TROUBLESHOOTING.md) | Diagnóstico de problemas comuns |
| [ROADMAP.md](ROADMAP.md) | Itens em validação e próximos passos |

Também consulte os arquivos da raiz:

- [`README.md`](../README.md) — apresentação rápida do projeto.
- [`INSTALL.md`](../INSTALL.md) — instalação resumida.
- [`CHANGELOG.md`](../CHANGELOG.md) — mudanças da revisão atual.
- [`CONTRIBUTING.md`](../CONTRIBUTING.md) — colaboração no projeto.
- [`SECURITY.md`](../SECURITY.md) — orientações de segurança.

## Estado do projeto

A revisão 08G-C3 ainda é tratada como **versão de desenvolvimento/teste**. O código possui testes automatizados, mas o comportamento final deve ser validado em uma instalação real do Spresenter, com o tema aplicado às saídas de Retorno e celulares conectados à mesma rede local.

## Princípio do projeto

O Stage Companion não substitui o Retorno nativo do Spresenter. Ele acrescenta elementos próprios ao tema de Retorno e utiliza as APIs do Spresenter para atualizar esses elementos em tempo real, preservando relógio, timer, vídeo, slides, letras, versículos e demais elementos nativos.
