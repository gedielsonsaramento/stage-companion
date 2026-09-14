# Stage Companion

Stage Companion é um plugin + PWA para o **Spresenter**, criado para comunicação entre a recepção/portaria e a tela de Retorno (Stage) durante o culto.

A versão atual deste repositório é a **08G-C3**:

- Plugin: **0.3.56**
- Servidor/PWA: **0.8G-R9**
- Tema: **Retorno — Stage Companion 08G C3**
- Spresenter testado: **0.3.48+**

## Recursos atuais

- Cadastro e publicação de **Visitantes**.
- Lista independente de **Oportunidade de Louvor**.
- Alertas rápidos para a tela de retorno.
- Avisos de **Veículo** com ordem: **PLACA → MODELO/COR → PROBLEMA**.
- Mensagens livres para o palestrante/pastor.
- **Estrobo opcional** em Alerta, Veículo e Mensagem, usando o tempo configurado no plugin (30 s por padrão).
- PWA para celulares dos voluntários com QR Code automático.
- Servidor auxiliar Windows com ícone na bandeja, autostart e token da API protegido pelo Windows.
- Visitantes e Oportunidade de Louvor recolhem automaticamente durante conteúdo nativo projetado e retornam depois.
- Correção para vídeo no Retorno: ao detectar vídeo, o plugin ajusta `main-video` para a fonte `/assets/<guid>`.
- Botão **MOSTRAR FAIXA / OCULTAR FAIXA** preservando as informações publicadas.

## Estrutura do repositório

- `plugin/` — plugin do Spresenter.
- `server/` — servidor Windows e PWA incorporada.
- `themes/` — tema do Retorno.
- `tests/` — testes automatizados e fixture do tema-base.
- `dist/08G-C3/` — arquivos de instalação que podem ser mantidos no repositório quando aplicável.
- `INSTALL.md` — instalação e configuração.
- `CHANGELOG.md` — histórico técnico.
- `BUILD-WINDOWS.cmd` — compilação do servidor no Windows/Go.

## Segurança

A PWA não recebe a chave da API do Spresenter. O token fica somente no PC de projeção e é protegido pelo Windows. Para uma instalação nova, a permissão necessária para o servidor chamar o plugin é `plugins:invoke`.

## Compilação

O servidor é escrito em Go e incorpora os arquivos da PWA. Para compilar no Windows, use o script `BUILD-WINDOWS.cmd` ou o workflow de GitHub Actions incluído neste projeto.

Consulte [INSTALL.md](INSTALL.md) para instalação e [CHANGELOG.md](CHANGELOG.md) para detalhes da revisão atual.
