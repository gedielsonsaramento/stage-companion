# Changelog

## R18.6-HF5I LOCAL — candidata em validação

### Plugin 0.3.90

- Integração da Setlist revisada para Oportunidade, Harpa e Seja Bem-vindo.
- `PREPARAR "SEJA BEM-VINDO"` usa inclusão direta no grupo da Setlist.
- Proteção contra reenvio cego enquanto o snapshot da Setlist estiver atrasado.
- Reconciliação da Oportunidade por evidência do item já inserido.
- Proteções de idempotência contra grupos e hinos duplicados.
- Visitantes mantêm reaplicação/retry no Retorno.
- Permissões necessárias para leitura de assets e leitura/escrita de Setlist.

### Servidor Windows / PWA local 0.8G-R18.6-HF5C

- Executável Windows em modo GUI, sem janela preta de console.
- Autostart e reconexão preservados.
- Reaplicação de Visitantes, Oportunidade e Harpa após início/reconexão.
- PWA local mantida como caminho padrão desta edição.
- Não depende de Termux, Samsung, domínio ou IP público.

### Tema

- Tema de Retorno **R18.6-HF1** mantido nesta candidata.

### Distribuição no GitHub

- Criada edição **LOCAL** como caminho principal para uso comunitário.
- Código completo remoto/Internet permanece fora do fluxo padrão.
- HF5I publicada inicialmente como candidata em branch/PR de validação; promoção para a árvore principal somente depois do teste de campo.
