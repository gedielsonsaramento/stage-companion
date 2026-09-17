# Política de segurança

## Versão suportada

O projeto está em desenvolvimento. A documentação atual cobre a revisão **08G-C3**, plugin **0.3.56** e servidor/PWA **0.8G-R9**.

## Informações sensíveis

Nunca publique em issues, commits ou screenshots:

- token/chave da API do Spresenter;
- arquivos de configuração reais contendo credenciais;
- logs com token completo;
- dados pessoais desnecessários;
- informações de rede que você não queira tornar públicas.

Se um token for exposto, revogue-o e crie outro.

## Relatando uma vulnerabilidade

Evite abrir uma issue pública contendo detalhes que facilitem exploração, tokens ou credenciais. Entre em contato diretamente com o mantenedor do repositório pelo canal privado disponível no perfil/projeto e informe:

- versão afetada;
- descrição do problema;
- passos para reproduzir;
- impacto observado;
- sugestão de correção, se houver.

## Modelo de segurança atual

A PWA não recebe a chave da API. O token permanece no computador Windows e é usado pelo servidor local para chamar o plugin via API do Spresenter.

O projeto foi pensado para rede local confiável. Não exponha a porta da PWA diretamente à internet e não configure encaminhamento de porta/DMZ sem adicionar uma camada apropriada de autenticação e proteção.

## Builds

Para distribuição pública, prefira artefatos produzidos pelo workflow conhecido do repositório ou por build local verificável a partir do código versionado.

A assinatura digital do executável Windows é recomendada para uma futura versão estável.
