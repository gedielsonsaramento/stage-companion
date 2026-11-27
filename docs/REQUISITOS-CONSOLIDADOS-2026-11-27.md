# Stage Companion — Registro consolidado de decisões e requisitos

**Data da consolidação:** 27/11/2026  
**Origem:** discussão de planejamento sobre o Stage Companion (plugin Spresenter, EXE Windows, PWAs, servidor local e nuvem).  
**Status do documento:** especificação de produto / planejamento. **Não comprova implementação, instalação, integração ou homologação** dos itens abaixo.

## 1. Princípios do projeto

- Preservar as funções já existentes do Stage Companion e evoluir o sistema de forma integrada.
- Permitir que outras igrejas instalem **plugin + servidor EXE + PWA local** de forma autônoma na própria rede, sem depender do servidor Samsung da instalação original.
- Operar os serviços de cadastro, comunicação e sincronização na rede local mesmo sem internet; mídia online (como YouTube) pode exigir acesso à internet.
- Permitir uso com servidor local e, quando configurado/disponível, infraestrutura na nuvem. Evitar executar o mesmo comando duas vezes por rotas simultâneas.
- Não assumir que as funcionalidades planejadas já existem na versão atualmente instalada. Preservar a base homologada antes de aplicar atualizações.

## 2. Arquitetura e papéis

| Componente/papel | Função planejada |
|---|---|
| Plugin no PC Vídeo / Spresenter | Gestão operacional, Oportunidade de Louvor, Chat/Links e controle remoto autorizado de mídia. |
| EXE no PC Áudio | Central de gerenciamento, biblioteca compartilhada e controle remoto autorizado de mídia, inclusive pela bandeja do Windows. |
| PC identificado como Playback | **Único computador que efetivamente reproduz áudio/vídeo**; recebe comandos de controladores autorizados. |
| PWA Portaria / Recepção | Cadastro de participantes, músicas, links e mensagens, sem permissão de comandar reprodução. |
| PWA Playback (no PC autorizado) | Participa da recepção dos comandos e do acompanhamento do player; arquitetura exata do motor de reprodução ainda será definida. |
| Servidor EXE local | Conexões, autorização, dados, sincronização, encaminhamento de comandos e monitoramento. |
| Servidor na nuvem | Comunicação complementar conforme instalação, sem causar duplicidade de comandos. |

### Controle não é reprodução

- O plugin do PC Vídeo e o EXE do PC Áudio **podem enviar comandos remotos** se autorizados.
- **Só o PC Playback reproduz mídia**; outros computadores não reproduzem som automaticamente.
- Permissões devem ser conferidas pelo servidor por identidade/credencial do cliente e função atribuída, não apenas por nome exibido nem por esconder botões.
- Receber/cadastrar um link **nunca inicia o áudio automaticamente**.
- É necessário comando explícito de pessoa/dispositivo autorizado.

## 3. Biblioteca de Playbacks compartilhada

- Biblioteca única de mídia/links, sincronizada entre PWA Chat/Links, plugin Chat/Links, Oportunidade de Louvor e EXE.
- Cadastro de título da música, intérprete, origem (YouTube/arquivo/link), pessoa que irá louvar e associação ao hino, quando houver.
- Suportar múltiplas músicas/links por participante; localizar também links não associados.
- Biblioteca no servidor independente do histórico de chat: **limpar conversa não apaga os links cadastrados**.
- Edições/correções do link devem se propagar às interfaces.
- No EXE: seção **Biblioteca de Playbacks**, pesquisa por música/intérprete/participante, lista com origem e vínculo à Oportunidade de Louvor, seleção sem autoplay.
- No plugin: botão de reprodução no playback associado à pessoa na Oportunidade de Louvor e controles nos cards do Chat/Links, conectados ao **mesmo player**.
- Na prévia discutida, foram simuladas três músicas fictícias vinculadas a três participantes; esses dados ilustrativos não são cadastros reais.

## 4. Controle de mídia e feedback visual

### Comandos

- Play, Pausar/Retomar, Voltar ao início; também Avançar e Retroceder no escopo de controle remoto, respeitando o que o formato/player permitir.
- Comandos disponíveis no plugin do PC Vídeo e no EXE do PC Áudio, além do PC Playback autorizado.
- O EXE deve trazer uma seção **Controle de Playback** e menu compacto na bandeja do Windows, sem retirar os controles atuais do servidor.
- Player único/persistente: mudar de aba não interrompe a mídia; não permitir dois players reproduzindo a mesma seleção por engano.
- A biblioteca e o reprodutor devem compartilhar a seleção e o estado entre interfaces.

### Informações exibidas

- Nome da música, participante associado, link/origem, tipo da mídia, estado, posição e duração quando disponíveis.
- Exibir discretamente **quem emitiu o último comando** (por exemplo, PC Áudio ou PC Vídeo).
- Estado deve refletir **confirmação do reprodutor**, nunca apenas o clique: reproduzindo, pausado, parado, desconectado ou falha.
- Feedback visual discreto no plugin e no EXE: indicador de reprodução, pausa e falha. **Sem aviso sonoro e sem notificações invasivas.**
- Não reproduzir comandos antigos acumulados após queda de rede/reconexão; usar identificador de comando, confirmação e prevenção de duplicidade.
- Quando o comando falhar ou o PC Playback estiver offline, mostrar erro claro em vez de falso sucesso.

### Observação técnica em aberto

- A PWA Playback pode receber comandos e telemetria, mas navegadores podem restringir autoplay, execução em segundo plano e integração com YouTube.
- Foi proposta a possibilidade de **player persistente hospedado pelo EXE** para reduzir dependência de abas do navegador. **Ainda é necessário definir tecnicamente o motor final** e evitar que PWA e EXE criem players concorrentes.
- Para vídeo, definir monitor/tela de destino no PC Playback sem interferir na projeção do Spresenter.

## 5. Mídias e compatibilidade — metas de homologação

- **Prioridade operacional:** MP3 e MP4, amplamente utilizados; testes iniciais também priorizam **WAV PCM 24 bits**.
- **Áudio:** MP3, WAV PCM **16 e 24 bits**, AAC/M4A onde compatíveis; WAV testar 44,1 kHz, 48 kHz e 96 kHz.
- **Vídeo:** MP4 com imagem e áudio, especialmente H.264 + AAC; também mídia exclusivamente de áudio armazenada em contêiner compatível (por exemplo M4A/MP4 de áudio).
- **Links:** YouTube e URLs diretas para mídia suportada, sujeitos a acesso, integração e restrições de plataforma.
- Homologar Play, Pausar, Retomar, busca/avanço/retrocesso, tempo/duração, saída de áudio e monitor de vídeo, além do controle remoto pelo plugin e EXE.
- **“Compatibilidade total” é objetivo de produto, não garantia técnica universal**: codecs proprietários, DRM, restrições de YouTube e arquivos inválidos podem impedir reprodução. Exibir motivo da incompatibilidade.

## 6. Dispositivos conectados no EXE

- Seção **Dispositivos conectados** com nome configurado, tipo/função, estado online/offline e último contato.
- Exemplos: PWA Portaria, PWA Recepção, PWA Playback, Plugin Spresenter — PC Principal, Plugin — PC Playback e EXEs em outros PCs.
- Detectar entrada/saída de clientes e mostrar destino real dos comandos de reprodução.
- O comando de playback deve ser encaminhado somente ao PC Playback autorizado; confirmação deve voltar ao EXE/plugin originador e refletir nos demais controladores.

## 7. Servidor local autônomo e redundância entre EXEs

- Implantação disponível a outras igrejas por pacote instalável: **servidor EXE local + plugin + PWA local**.
- Inicialização automática com Windows, descoberta dos serviços na LAN, persistência de dados, backups e feedback de conexão.
- Permitir **dois ou mais EXEs** na mesma rede; um servidor principal e outro(s) reserva(s), com cópia sincronizada dos dados.
- **Failover automático aprovado:** se o principal falhar, o reserva assume sem clique do operador; clientes descobrem/reconectam ao servidor ativo.
- Na volta do principal, reconciliar dados e restabelecer redundância sem sobrescrever mudanças válidas nem executar comandos duplicados.
- Evitar *split brain* (dois principais simultâneos): projetar eleição/quórum; preferencialmente usar terceiro dispositivo/testemunha. Se não houver quórum seguro, adotar comportamento que preserve integridade e impeça duplo controle.
- O servidor ativo e o PC Playback **não são necessariamente a mesma máquina**. A troca de servidor não concede automaticamente permissão para tocar áudio.
- Exigir testes de queda do principal, queda da internet, falha da rede LAN, reconexão, conflitos, reinício, persistência e comandos em trânsito.

## 8. Chat/Links, mensagens e demais requisitos discutidos

- **Exclusão individual de mensagem:** pequeno X para excluir a própria mensagem, com confirmação; refletir a exclusão nas PWAs e nos PCs. Operador no plugin também pode excluir suas próprias mensagens.
- **Limpar conversa:** comando manual com confirmação, sincronizado, preservando a biblioteca de links/playbacks.
- Links de playback podem ser cadastrados, editados e associados a pessoas/hinos pela PWA e pelo plugin; PWA de portaria/recepção sem controle remoto da reprodução.
- Ajustes citados para o pacote integrado: banner de boas-vindas sem visitantes; mensagens do pastor fixas até retirada; RT Músicos temporizado; contagem regressiva real em “Vamos começar”. **Esses itens foram mencionados como decisões/pendências, mas seus critérios de aceite detalhados requerem revisão das especificações originais.**
- Manter em acompanhamento a animação do clipe no plugin/PWA, atualização da PWA local, acesso/visualização/download de vídeo e feedback dos botões de atualização, conforme relatos anteriores; **não há confirmação de correção nesta conversa**.

## 9. Critérios de aceite iniciais (propostos)

- [ ] A PWA Portaria cadastra música/link e esse registro aparece na biblioteca do plugin e EXE.
- [ ] A música associada aparece uma única vez na biblioteca compartilhada e é vinculada corretamente ao participante na Oportunidade de Louvor.
- [ ] Limpar o chat não remove os registros da biblioteca de playback.
- [ ] PC Vídeo inicia playback pelo plugin; som sai **apenas** no PC Playback.
- [ ] PC Áudio inicia/pausa remotamente pelo EXE; plugin e EXE mostram estado **confirmado**, nome da mídia e último operador.
- [ ] PWA Portaria/Recepção não consegue executar comandos de playback, nem por requisição direta ao servidor.
- [ ] Seleção/cadastro de link nunca provoca autoplay.
- [ ] Trocar de aba não encerra a reprodução; não ocorre reprodução duplicada.
- [ ] Painel de dispositivos apresenta clientes ativos, papel e último contato, com atualização ao conectar/desconectar.
- [ ] MP3, MP4 H.264/AAC e WAV PCM 16/24 bits passam nos testes de reprodução e controle, nas amostras e configurações homologadas.
- [ ] A queda do servidor principal aciona o reserva **automaticamente** quando existir quórum válido; não há dois líderes simultâneos.
- [ ] A queda/reconexão não reproduz novamente um comando antigo de Play.
- [ ] Sem internet, serviços locais e mídia local continuam funcionando quando a LAN e o servidor ativo estão disponíveis.
- [ ] Alertas e estados não apresentam notificações invasivas nem alegam reprodução antes da confirmação.

## 10. Atualizações pelo GitHub — prioridade do próximo pacote integrado (27/11/2026)

**Decisão aprovada:** usar GitHub Releases como canal de distribuição de atualizações, sem precisar hospedar instaladores no servidor próprio da igreja. A operação local não depende do GitHub; somente a descoberta e o download de novas versões exigem internet.

- **Prioridade imediata:** iniciar pelo EXE Windows (consultar versões, mostrar notas, baixar/verificar SHA-256, preparar atualização sem interromper culto). Um instalador/atualizador confiável e recuperação por rollback dependem de implementação e homologação.
- **Etapas seguintes:** plugin Spresenter, temas de Retorno do Pastor e dos Músicos, servidor Samsung/Termux e PWA local/pública, cada qual com mecanismo compatível e testes próprios.
- **Canais distintos:** estável e teste/pré-release, sem substituir automaticamente uma instalação estável por candidata.
- **Proteções:** manifesto versionado, hashes e verificação de procedência, compatibilidade e dependências; backup, rollback, atualização proibida durante culto/reprodução ativa, sem reinícios surpresa, feedback visual claro e funcionamento offline na versão instalada.
- **Estado atual:** decisão de produto registrada, **sem afirmar que atualização automática já esteja implementada**. A inclusão no próximo pacote de testes significa prioridade para um primeiro mecanismo funcional, não promessa de que todos os componentes serão atualizados automaticamente nessa mesma candidata.
- Acompanhamento no GitHub: https://github.com/gedielsonsaramento/stage-companion/issues/7.

## 11. Pendências de desenho e implementação

1. Auditar código/arquivos e confirmar funcionalidades reais da versão EXE/plugin/PWA instalada — **este registro não substitui inspeção do código**.
2. Definir player concreto (nativo EXE, navegador/PWA ou integração única), comportamento em segundo plano e limites de YouTube.
3. Definir credenciais e aprovação dos papéis Playback, operador de áudio, operador de vídeo, Portaria e Recepção.
4. Definir protocolos de comandos, telemetria, identidade, idempotência, latência/timeout e segurança na LAN/nuvem.
5. Definir replicação, quórum/testemunha, descoberta do líder, consistência de biblioteca e tratamento de particionamento de rede.
6. Definir integração do instalador com firewall, inicialização do Windows, serviços, backup e atualizações.
7. Criar matriz de compatibilidade por SO, codec, contêiner, hardware, mídia de origem e saída de áudio/vídeo.
8. Testar em campo antes de anunciar recursos como implementados ou homologados.

---

**Regra central aprovada:** *múltiplos operadores podem controlar remotamente se autorizados; apenas o PC Playback executa áudio/vídeo; redundância dos servidores deve assumir automaticamente com segurança; feedback sempre baseado em estado real confirmado.*