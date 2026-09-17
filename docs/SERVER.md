# Servidor Windows

## Função

`StageCompanion-Servidor-08G-R9.exe` é o companion local do Stage Companion. Ele existe para hospedar a PWA e fazer a ponte entre celulares da rede local e a API do Spresenter no computador de projeção.

## Versão atual

```text
Servidor/PWA: 0.8G-R9
Sistema alvo: Windows x64
Modo de execução: GUI/background, sem console
```

## Responsabilidades

O servidor:

- hospeda a PWA;
- detecta o IP LAN do computador;
- escolhe uma porta local disponível;
- conversa com a API do Spresenter em `127.0.0.1:5050` por padrão;
- mantém a chave/token somente no PC;
- registra seu endereço atual no plugin;
- inicia automaticamente com o Windows;
- apresenta estado e comandos pela bandeja do sistema.

## Portas da PWA

A arquitetura atual procura uma porta disponível começando em `8090`, usando a faixa prevista pelo projeto até `8100` quando necessário.

O endereço mostrado no plugin pode ficar parecido com:

```text
http://192.168.2.59:8090/
```

O IP é dinâmico e pode mudar após reinício do roteador, troca de rede ou renovação DHCP.

## Configuração local

O servidor trabalha com configuração do usuário atual do Windows. A implementação atual usa o diretório de dados do usuário para manter informações como host, porta da API e token protegido.

Caminhos usados nas revisões atuais do projeto:

```text
%APPDATA%\StageCompanion\server.json
%APPDATA%\StageCompanion\server.log
%LOCALAPPDATA%\StageCompanion\StageCompanion-Servidor.exe
```

A localização pode mudar em uma futura revisão; não trate esses caminhos como API pública do projeto.

## Token protegido

A chave da API não é salva em texto simples. O servidor usa proteção ligada ao usuário atual do Windows. Nas revisões recentes, a proteção foi implementada com DPAPI/ProtectedData no escopo `CurrentUser`.

Consequências importantes:

- copiar apenas `server.json` para outro usuário não garante que o token seja legível;
- executar o servidor com outro usuário pode exigir inserir a chave novamente;
- o QR Code nunca precisa conter o token.

## Autostart

O servidor registra inicialização automática no perfil do usuário. O comportamento esperado depois de reiniciar o Windows é:

1. o Windows entra no usuário configurado;
2. o Stage Companion Servidor inicia em segundo plano;
3. o ícone aparece na bandeja;
4. se o Spresenter ainda não estiver aberto, o servidor aguarda;
5. quando o Spresenter/plugin ficam disponíveis, o companion registra o endereço atual.

## Bandeja do Windows

A integração de bandeja serve para tornar o processo visível sem abrir uma janela permanente.

Funções previstas/implementadas nas revisões atuais incluem:

- status da conexão;
- abrir PWA;
- abrir configuração;
- reiniciar servidor;
- sair.

Uma melhoria futura prevista é incorporar um ícone próprio e uma janela **Sobre o aplicativo** mais completa.

## Página de configuração

A configuração local pede:

```text
Host da API
Porta da API
Token/chave
```

Depois de salvar, o servidor deve validar a configuração e confirmar conexão com o plugin Stage Companion.

O campo do token não precisa ser repopulado visualmente depois de salvo; isso é intencional. O que importa é o estado validado/conectado.

## Comunicação com o plugin

O servidor não escreve diretamente no tema. Ele chama actions do plugin pela API do Spresenter. Assim, o Spresenter continua sendo o ponto de autenticação e o plugin continua responsável pelo estado e pelos live elements.

## Atualização do EXE

Ao atualizar:

- use o mesmo usuário do Windows;
- preserve a configuração existente;
- substitua/execute a nova revisão do servidor;
- recarregue a PWA no celular;
- confirme o status na bandeja e na aba Voluntários.

Uma atualização normal não deve exigir um token novo.

## Firewall

O servidor precisa aceitar conexões dos celulares na rede local. Se a PWA não abre, crie uma regra específica para o executável/porta em vez de desligar todo o Firewall do Windows.

## Logs

Logs devem ajudar a diagnosticar conexão, porta, inicialização e chamadas, mas nunca devem registrar a chave completa da API.

Ao anexar logs em uma issue, revise antes o conteúdo para remover dados sensíveis.

## Build

O GitHub Actions compila o servidor com Go para `windows/amd64` e usa `-H=windowsgui` para não abrir uma janela de console na execução normal.

Consulte [DEVELOPMENT.md](DEVELOPMENT.md) para o fluxo de build.
