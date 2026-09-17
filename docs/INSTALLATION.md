# Instalação completa

Este guia descreve uma instalação nova e também a atualização de uma instalação existente do Stage Companion.

## Requisitos

- Windows 11 ou versão compatível com o executável Windows x64.
- Spresenter **0.3.48 ou superior**, conforme `minAppVersion` do plugin atual.
- Computador e celulares conectados à mesma rede local.
- A API local do Spresenter disponível no PC de projeção.
- Permissão para instalar/atualizar plugins e importar temas no Spresenter.

## Arquivos da revisão 08G-C3

Os artefatos esperados são:

- `StageCompanion-DEV-Teste08G-C3.zip` — plugin instalável.
- `StageCompanion-Servidor-08G-R9.exe` — servidor/PWA para Windows.
- `Retorno-StageCompanion-08G-C3.spresenter-theme.json` — tema de Retorno.
- `CHANGELOG.md` — alterações da versão.

O GitHub Actions também gera os artefatos quando o workflow `Build Stage Companion` é executado.

## Instalação nova

### 1. Instalar o plugin

No Spresenter, abra a área de plugins e instale o arquivo `StageCompanion-DEV-Teste08G-C3.zip`.

Após a instalação, confirme que aparece **Stage Companion DEV** e que o plugin está habilitado. O plugin atual usa o ID `com.stagecompanion.dev` e roda em segundo plano (`background: true`).

### 2. Importar o tema de Retorno

Importe `Retorno-StageCompanion-08G-C3.spresenter-theme.json` no Spresenter.

Aplique o tema **Retorno — Stage Companion 08G C3** a cada saída de Retorno que será usada. O Spresenter permite que saídas diferentes usem temas diferentes; portanto, conferir apenas uma saída não garante que Stage, Preview e uma saída HTML estejam usando o mesmo tema.

### 3. Criar a chave da API

Para uma instalação nova, crie uma chave de API no Spresenter com o escopo:

```text
plugins:invoke
```

O servidor precisa dessa permissão para chamar as ações registradas pelo plugin. Não coloque a chave no QR Code, no navegador do celular ou em arquivos públicos do repositório.

### 4. Executar o servidor

Execute `StageCompanion-Servidor-08G-R9.exe` no mesmo usuário do Windows que será usado durante os cultos.

Na configuração inicial use, por padrão:

```text
Host da API: 127.0.0.1
Porta da API: 5050
Token: chave criada no Spresenter
```

Depois de salvar, o servidor valida o token e tenta registrar-se no plugin.

### 5. Confirmar bandeja e autostart

O servidor roda sem console e aparece na bandeja do Windows. Ele também registra inicialização automática para o usuário atual do Windows.

Em uma instalação correta, o tooltip da bandeja informa o endereço da PWA e o plugin passa a mostrar o servidor como conectado.

### 6. Abrir a aba Voluntários

No plugin, abra **Voluntários**. O IP e a porta devem aparecer automaticamente e o QR Code deve ser gerado com uma URL semelhante a:

```text
http://192.168.x.x:8090/
```

O endereço depende do IP atual do computador na rede. O servidor procura uma porta disponível na faixa usada pelo projeto; a instalação atual normalmente começa em `8090`.

### 7. Abrir a PWA no celular

Conecte o celular à mesma rede Wi-Fi do computador e leia o QR Code. A página deve mostrar o nome da igreja, estado **Conectado** e os controles móveis.

A chave da API não é enviada ao celular. O celular conversa apenas com o servidor Stage Companion na rede local.

## Atualização de uma versão anterior

Para preservar o estado e a configuração existentes:

1. **Não desinstale o plugin antigo.** Use a função de atualização com o novo ZIP.
2. Importe o novo tema e selecione-o nas saídas de Retorno.
3. Execute o novo EXE no mesmo usuário do Windows.
4. Atualize/recarregue a PWA no celular.
5. No plugin, clique **SINCRONIZAR**.

Em uma atualização normal não é necessário criar outra chave da API. O servidor reaproveita a configuração/token já armazenados no perfil do usuário do Windows.

## Validação depois da instalação

Faça pelo menos estes testes antes de usar em um culto:

1. Adicione Visitantes e envie a lista ao Retorno.
2. Adicione nomes em Oportunidade de Louvor e envie a lista.
3. Envie Alerta e Mensagem com e sem Estrobo.
4. Envie um Veículo preenchendo placa, modelo, cor e problema.
5. Use **OCULTAR FAIXA** e depois **MOSTRAR FAIXA** para confirmar que os dados continuam preservados.
6. Projete uma imagem/slide e confirme que as listas Stage Companion não cobrem o conteúdo principal.
7. Projete um vídeo e confirme se o vídeo aparece no Retorno em vez de apenas um bloco preto.
8. Reinicie o Windows e confirme que o servidor volta sozinho para a bandeja.
9. Reabra o Spresenter e confirme que a aba Voluntários volta a mostrar endereço e QR automaticamente.

## Firewall e rede

Se o plugin mostra o servidor como conectado mas o celular não abre a PWA, verifique primeiro se o celular está na mesma rede e se o Windows está permitindo conexões de entrada para o executável/porta local. Evite desabilitar o firewall inteiro; prefira uma regra específica para o Stage Companion.

## Desinstalação

A remoção deve ser feita em três partes independentes: plugin no Spresenter, tema no Spresenter e servidor/autostart do Windows. Antes de remover o servidor, finalize-o pelo menu da bandeja. A remoção do plugin não deve ser usada como procedimento de atualização, pois isso pode apagar estado que deveria ser migrado.
