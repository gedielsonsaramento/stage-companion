# Stage Companion — instalação local e futura opção de servidor online

> Situação em 24/11/2026: **o código publicado neste repositório é a revisão histórica 08G-C3 / plugin 0.3.56**. A base operacional aprovada em campo é a **0.4.37**, preservada separadamente. Os campos de servidor online abaixo são **proposta de configuração/documentação**, não recursos comprovadamente implementados na revisão GitHub.

## 1. Modo local — disponível na arquitetura histórica

- Rede confiável (LAN/Wi-Fi), sem contratar domínio ou VPS.
- Spresenter + plugin no PC, com **servidor Stage Companion Windows EXE** ou outro serviço local compatível para servir a PWA e intermediar chamadas.
- O celular lê QR com endereço LAN, por exemplo `http://192.168.1.10:8090/`; o IP é um **exemplo**, não uma configuração padrão.
- A chave da API do Spresenter permanece **no servidor/PC**, protegida, jamais na PWA ou no QR.
- Local não significa “sem servidor”: dispensa **servidor público**; a PWA ainda precisa de um serviço local para conexão entre celular e plugin.
- A replicação de dois PCs requer ponte/configuração adequada e teste separado; não afirmar que todos os cenários funcionam offline sem comprovação.

## 2. Modo online — integração planejada

Exige um ponto de acesso acessível pela internet e protegido, HTTPS (TLS), política de autenticação/autorização, DNS e hospedagem/encaminhamento da aplicação. **IP público fixo não é necessariamente obrigatório**: podem ser usados DNS dinâmico, proxy/túnel seguro ou hospedagem com endpoint fixo. Ter domínio sem roteamento e serviço acessível não torna a aplicação online.

**Não abrir a API do Spresenter nem uma porta administrativa da LAN diretamente à internet.** O servidor remoto deve ser um intermediário autenticado e jamais entregar token ou comandos sensíveis ao público.

### Campos propostos para a futura tela de configuração

| Campo | Exemplo ilustrativo | Finalidade |
| --- | --- | --- |
| `mode` | `local` ou `remote` | Selecionar o modo |
| `local_base_url` | `http://192.168.1.10:8090` | Endereço LAN para PWA e QR |
| `remote_base_url` | `https://stage.exemplo.org` | HTTPS do backend remoto |
| `site_name` | `Minha Igreja` | Identidade visual |
| `connection_status` | `connected` / `offline` | Estado exibido ao operador |
| `auth_profile` | configuração protegida | Identificar perfil/autorização sem expor segredos |

**Contrato ilustrativo, não arquivo de configuração executável da versão atual:**
```json
{
  "mode": "local",
  "site_name": "Minha Igreja",
  "local_base_url": "http://192.168.1.10:8090",
  "remote_base_url": "",
  "auth_profile": ""
}
```

- Nunca versionar senha real, token do Spresenter, chave privada ou credencial de túnel.
- Se `mode=remote`, validar HTTPS, conectividade, autorização, endereço do servidor, isolamento por instalação e fluxos de reconexão; mostrar erro claro se incompleto.
- Rotear links/QR de acordo com modo selecionado, sem trocar automaticamente a instalação ativa.
- Verificar armazenamento de anexos, upload, limite de tamanho, retenção e sincronização dos clientes.
- Proteger o modo local mesmo que a PWA tenha acesso por QR sem login; internet exige controles adicionais.

## 3. Como evoluir sem danificar a instalação local

1. Congelar a versão operacional 0.4.37, suas funções aprovadas e instaladores.
2. Documentar o contrato de configuração e manter **modo local como padrão**.
3. Desenvolver o adaptador remoto separadamente, com feature flag/rollback.
4. Testar o modo remoto primeiro em ambiente de ensaio e depois em dois PCs e celulares.
5. Só publicar instaladores novos após regressão completa e aprovação em campo.

**Atenção:** este documento não muda o EXE, o plugin, o tema JSON nem o Samsung atual. Nenhuma atualização binária foi gerada.
