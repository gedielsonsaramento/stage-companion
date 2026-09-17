# API e segurança

## Objetivo

O Stage Companion foi desenhado para permitir que celulares da equipe usem o sistema sem receber a chave da API do Spresenter.

## Escopo necessário

Para o fluxo atual, a chave usada pelo servidor precisa do escopo:

```text
plugins:invoke
```

Esse escopo permite que o servidor chame as ações expostas pelo plugin em:

```text
/api/v1/plugins/com.stagecompanion.dev/requests/<acao>
```

Não conceda permissões adicionais sem necessidade.

## Onde a chave fica

A chave fica somente no computador onde o servidor Stage Companion é executado. Ela não deve aparecer:

- no QR Code;
- na URL aberta pelo celular;
- em screenshots públicos;
- em commits do GitHub;
- em arquivos distribuídos junto com o projeto.

O servidor protege o token no contexto do usuário atual do Windows. Por isso, mover os arquivos para outro usuário do Windows pode exigir configuração novamente.

## QR Code

O QR Code contém somente o endereço local da PWA, por exemplo:

```text
http://192.168.2.59:8090/
```

Se alguém tiver acesso físico/lógico à mesma rede local e ao endereço, poderá tentar abrir a PWA. A revisão atual foi criada para uso em rede interna confiável de igreja; ela não deve ser publicada diretamente na internet sem uma camada adicional de autenticação e proteção.

## Rede local

O servidor atende na rede local para que celulares conectados ao mesmo Wi-Fi consigam abrir a PWA.

Boas práticas:

- use uma rede local confiável;
- não encaminhe a porta do Stage Companion no roteador para a internet;
- não exponha o serviço por DMZ;
- prefira uma regra específica no Firewall do Windows;
- mantenha o Spresenter e o servidor no mesmo PC quando possível.

## Firewall

Se a PWA não abre no celular, não desative o firewall inteiro como primeira tentativa.

Prefira confirmar:

1. se o celular e o PC estão na mesma rede;
2. se o IP exibido no plugin é o IP atual do PC;
3. se a porta exibida é a mesma usada na URL;
4. se o servidor está ativo na bandeja;
5. se existe uma regra permitindo o executável/porta local.

## Troca de token

Crie um novo token somente quando houver motivo, por exemplo:

- token revogado;
- token perdido;
- escopo incorreto;
- erro 401/403 confirmado;
- migração para outro usuário/PC onde a configuração protegida não pode ser reaproveitada.

Uma atualização normal do plugin ou do servidor não exige uma nova chave.

## Token em imagens e logs

Se um token aparecer em uma captura de tela, gravação, log público ou commit, trate-o como comprometido: revogue e crie outro.

Nunca registre o token completo em logs do servidor.

## Servidor e PWA

A PWA conversa com o servidor Stage Companion, não diretamente com a API autenticada do Spresenter. Essa separação reduz a exposição da chave e centraliza a validação no PC.

## GitHub

Antes de publicar uma nova revisão:

- procure por tokens reais no código e nos arquivos de configuração;
- não envie `%APPDATA%` ou arquivos do perfil do Windows;
- não versione `server.json` real de uma instalação;
- não envie logs de produção sem revisar conteúdo sensível;
- não inclua QR Codes de ambientes reais se eles revelarem uma topologia de rede que você não deseja publicar.

## Dependências e executáveis

O executável distribuído deve ser produzido a partir do código versionado e do workflow conhecido. Para distribuição pública, assinatura de código é recomendada para reduzir alertas do Windows/SmartScreen e melhorar a confiança na origem do binário.

## Relato de vulnerabilidades

Não publique tokens, chaves ou detalhes sensíveis em issues públicas. Consulte [`../SECURITY.md`](../SECURITY.md) para orientações de relato.
