# INSTALL — Stage Companion 08G-C3

Guia rápido para instalação/atualização. Para instruções completas, consulte **[docs/INSTALLATION.md](docs/INSTALLATION.md)**.

## Atualização de uma instalação existente

1. No Spresenter, **atualize** o plugin com `StageCompanion-DEV-Teste08G-C3.zip`. Não desinstale a versão anterior apenas para atualizar.
2. Importe `Retorno-StageCompanion-08G-C3.spresenter-theme.json`.
3. Aplique **Retorno — Stage Companion 08G C3** em **cada saída de Retorno** usada. Stage/Preview, saída HTML e outras saídas podem ter tema próprio.
4. Execute `StageCompanion-Servidor-08G-R9.exe` no mesmo usuário do Windows usado anteriormente.
5. Recarregue a PWA no celular.
6. No plugin, clique **SINCRONIZAR**.

A atualização normal deve reaproveitar configuração e token já protegidos no Windows.

## Instalação nova

Além dos passos acima, crie no Spresenter uma chave de API com escopo:

```text
plugins:invoke
```

Configuração padrão do servidor:

```text
Host: 127.0.0.1
Porta da API: 5050
```

Depois de salvar a configuração, abra a aba **Voluntários** e confirme que aparecem status conectado, IP, porta, QR Code e URL da PWA.

## Teste recomendado

- Envie uma lista de Visitantes.
- Envie uma lista de Oportunidade de Louvor.
- Projete conteúdo nativo e confirme que as listas recolhem e voltam depois.
- Projete um vídeo e confirme que o Retorno mostra o vídeo em vez de apenas um bloco preto.
- Envie Alerta/Mensagem com e sem o botão vermelho ⚡.
- Em Veículo, confira **PLACA → MODELO/COR → PROBLEMA**.
- Teste **OCULTAR FAIXA** e **MOSTRAR FAIXA**; os dados publicados devem ser preservados.
- Reinicie o Windows e confirme o autostart do servidor.

## Segurança

A chave da API fica no PC e não entra no QR Code. Não publique a chave em screenshots, issues ou commits.

Mais detalhes:

- [Guia completo de instalação](docs/INSTALLATION.md)
- [API e segurança](docs/API-SECURITY.md)
- [Solução de problemas](docs/TROUBLESHOOTING.md)
