# Stage Companion — PWA dedicada para controle remoto de playback e outras mídias

**Proposta funcional solicitada pelo operador em 24/11/2026.** Escopo de trabalho futuro, não implementado nem homologado. **Não alterar a base validada** do plugin 0.4.37 / HF5-RC4-UI4-HF3 até recuperar os arquivos reais e gerar uma candidata.

## Objetivo

O botão ▶ de uma música com **playback associado** no plugin Spresenter deixa de servir apenas para abrir um link: passa a oferecer a ação explícita **Reproduzir na PWA Playback**, comandando um dispositivo PWA designado. A mesma solução deve aceitar **outras mídias de áudio/vídeo compatíveis** associadas ao Stage Companion, não só playbacks da Oportunidade de Louvor.

A recepção, o operador, o pastor e os demais telefones PWA não devem reproduzir nada por engano.

## Identificação da PWA controlada

- Cada instalação/sessão PWA recebe um **identificador único de cliente**, separado do nome visível.
- Na tela da PWA, permitir ativar o **Modo Playback** com nome operacional exibido como **Playback**; apenas cliente autorizado pelo operador pode ser destinatário.
- No plugin, exibir o aparelho **Playback**, endereço/nome amigável, estado online e fonte/reprodução atuais; permitir vincular/desvincular e impedir destinos ambíguos (dois clientes com nome Playback).
- Os comandos de mídia precisam de **targetClientId** validado, não apenas o texto/tag “Playback”. O servidor entrega ao cliente vinculado/autenticado e rejeita comandos de outros usuários ou destinos.
- Somente **uma sessão controladora ativa para o mesmo destino** ou política explícita de substituição. Comandos dirigidos a um dispositivo não afetam os demais.

## Comandos e resposta visual

- Ações do plugin: **Reproduzir, Pausar, Retomar, Parar**, com possibilidade futura de **volume**, posição de reprodução e fila de músicas.
- Associar cada item à fonte real: URL de mídia, mídia interna ou link do YouTube, ao participante/hino/música quando aplicável. Não presumir que todo link é um arquivo reproduzível.
- Mensagem de comando contém `commandId`, `targetClientId`, `mediaId` ou fonte autorizada, `action`, `sequence`, `issuedAt` e `expiresAt`. Cliente ignora comandos antigos/duplicados/de outra sessão.
- O cliente devolve estado **recebido → carregando → reproduzindo/pausado/parado**, e erros explícitos como `autoplay_bloqueado`, `fonte_indisponivel`, `nao_suportada`, `dispositivo_offline`.
- Nunca indicar “reproduzindo” só porque o servidor aceitou o comando. O player confirma estado efetivo.
- **Abrir link** continua como ação separada: não confundir com reprodução remota.

## Compatibilidade e restrições

| Fonte | Caminho |
| --- | --- |
| MP3 / AAC / WAV / MP4 / WebM com URL acessível e formato compatível | Player nativo HTML5 (`audio` / `video`), conforme suporte do navegador e origem/CORS |
| Arquivos locais no EXE/servidor ou anexos enviados | Servir em rota autorizada acessível ao aparelho Playback, com suporte a `Range` quando necessário; checar formato, permissão e armazenamento |
| YouTube com incorporação permitida | Player oficial **YouTube IFrame Player API** para `playVideo`, `pauseVideo`, `stopVideo`; respeitar restrições do serviço e de incorporação |
| Sites diversos, links de streaming sem API ou mídia com DRM | Não prometer controle universal; detectar incompatibilidade e oferecer **Abrir link** como alternativa |

**Limitação crítica de autoplay:** navegadores móveis podem impedir iniciar áudio/vídeo com som por comando remoto sem interação prévia do usuário. PWA oferece botão local **Ativar áudio/Preparar player**, que deve ser usado no aparelho de reprodução, e informa bloqueio ao plugin caso ocorra. Testar Android/Chrome, PWA em primeiro plano e reconexões. **Não é controle do aplicativo YouTube externo** nem garantia de execução com o app em segundo plano ou aparelho bloqueado.

Referências: API oficial YouTube IFrame https://developers.google.com/youtube/iframe_api_reference e documentação MDN https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play.

## Fluxo de operação

1. Abrir a PWA no aparelho que será usado como saída de áudio/vídeo; ativar **Modo Playback**, autorizar e **Preparar player** quando exigido pelo navegador.
2. No plugin, escolher a música com link associado (ou item de mídia de outra área) e selecionar **Reproduzir na PWA Playback**.
3. O servidor envia o comando ao **cliente vinculado**, a PWA carrega a mídia no player integrado e confirma o estado.
4. Operador usa Pausar/Retomar/Parar; o plugin acompanha estado real e mostra erros sem interferir na tela do pastor.
5. Outros celulares e a PWA da portaria permanecem silenciosos.

## Critérios de aceite

1. Duas PWAs comuns e uma PWA Playback conectadas: comandos só chegam à Playback autorizada.
2. Música com playback de áudio MP3 compatível inicia/pausa/retoma/para e informa estado real.
3. Vídeo MP4 compatível e outra mídia elegível seguem o mesmo controle.
4. Link YouTube embutível funciona pela API quando permitido; se player proibir ou bloquear autoplay, plugin informa erro, sem alegar sucesso.
5. Sem interação prévia e com autoplay bloqueado: PWA pede **Preparar player** e servidor mostra falha legível; reconectar/recarregar não executa comando vencido.
6. Desconectar ou trocar o aparelho Playback impede que comandos afetem o dispositivo antigo.
7. Preservar reordenação física da Oportunidade e da Harpa, pasta única de participante, pisca vermelho dos botões e retornos do pastor/músicos já aprovados.
8. Testar separadamente rede local com EXE e acesso remoto; validar HTTPS, CORS, token de autorização, latência e acesso a arquivos.
9. Não versionar vídeos/músicas com direitos, credenciais ou chaves de produção em repositório público.

## Dependência para atualizar o GitHub

O repositório público ainda contém a base antiga (manifesto 0.3.56). A base operacional real **0.4.37** está documentada, mas o ZIP atualmente catalogado na Biblioteca não forneceu bytes acessíveis para inspeção/publicação neste fluxo. **Não publicar 0.3.56 como se fosse 0.4.37**, nem criar arquivos simulados. Assim que o pacote real estiver disponível como upload acessível, conferir integridade/segredos/licenças, separar código e assets publicáveis, criar backup/tag e somente então atualizar a fonte no GitHub. Essa especificação é **documentação**, não uma compilação ou publicação dos binários.
