# Instalação — Stage Companion R18.6-HF5I LOCAL

Esta edição usa somente **S-Present + plugin + PC Windows + rede local**.

## Requisitos

- PC Windows com S-Present.
- Celular/tablet e PC na mesma rede local, caso a PWA seja usada.
- Plugin Stage Companion.
- Tema de Retorno, caso a saída de palco seja usada.

**Não é necessário:** Termux, Samsung dedicado, domínio, IP público fixo ou servidor externo.

## Instalação recomendada

1. Baixe o artefato **StageCompanion-R18.6-HF5I-LOCAL** gerado pelo GitHub Actions desta candidata.
2. No S-Present abra **Configurações → Plugins → Instalar (.zip/pasta)** e instale o ZIP do plugin.
3. Confirme **Stage Companion DEV v0.3.90**.
4. Importe o tema **Retorno-StageCompanion-R18.6-HF1.spresenter-theme.json** e aplique-o à saída de Retorno.
5. Execute **StageCompanion-Servidor-08G-R18.6-HF5C.exe** no PC do S-Present.
6. Configure a API local do S-Present no servidor Windows. Não publique a chave.
7. Na aba **Voluntários**, use o endereço/QR local no celular conectado à mesma rede.

Valores locais normalmente usados pelo servidor:

```text
Host da API: 127.0.0.1
Porta da API: 5050
```

A PWA local é fornecida pelo próprio EXE, normalmente usando uma porta entre **8090 e 8100**.

## Teste da candidata HF5I

1. Cadastre 3 visitantes e confirme plugin + Retorno.
2. Cadastre **uma única** Oportunidade com Cantor, Hino e Artista.
3. Confirme que o hino entra uma vez e recebe confirmação sem depender de um segundo cadastro.
4. Teste a Harpa Cristã.
5. Remova previamente o grupo de teste `Seja bem-vindo`, se necessário.
6. Clique uma vez em **PREPARAR "SEJA BEM-VINDO"**: esperado **1 grupo + 1 banner**, sem projeção.
7. Clique PREPARAR novamente: nada deve duplicar.
8. Clique **APRESENTAR**: o banner deve ser projetado sem criar nova cópia.

## Observação sobre esta branch

A HF5I está em validação. O workflow reconstrói a candidata a partir do snapshot em `.local-src/` e gera os artefatos de teste. A branch principal permanece protegida até a validação em campo.
