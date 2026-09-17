# Roadmap e estado de validação

Este arquivo registra pontos ainda em validação ou previstos para refinamento. Não representa garantia de prazo.

## Estado da revisão 08G-C3

A C3 já contém implementação e testes automatizados para:

- migração de estado C2 → C3;
- Visitantes e Oportunidade de Louvor em listas separadas;
- ordem de Veículo: placa, modelo/cor e problema;
- Estrobo opcional;
- duração padrão de 30 segundos;
- ocultação/restauração automática de Visitantes/Louvor durante projeção;
- alternância mostrar/ocultar faixa preservando dados;
- tentativa de reparo do vídeo no Retorno;
- swipe/rascunhos na PWA;
- servidor Windows com QR/IP automáticos e token protegido.

## Pontos que exigem validação prática contínua

### Vídeo no Retorno

O reparo de `main-video` está implementado e testado em nível de código. Ainda deve ser validado com diferentes tipos de vídeos e diferentes configurações de saída no Spresenter real.

### Sobreposição em diferentes tipos de conteúdo

Testar o recolhimento das listas com:

- vídeo;
- imagem;
- música/letra;
- Bíblia/versículo;
- apresentação de slides;
- fundos e outros tipos nativos.

### Listas longas

Validar visualmente Visitantes e Oportunidade de Louvor com poucas e muitas pessoas, observando crescimento para cima, tamanho da fonte e espaço reservado para relógio/timer.

### PWA em celulares diferentes

Validar swipe, scroll, teclado virtual e Estrobo em navegadores Android de diferentes versões.

### Personalização de fundo

Continuar testando o fluxo escolher → remover → escolher outra imagem, garantindo que a PWA atualize corretamente sem depender de reinicialização.

## Melhorias planejadas/discutidas

### Executável mais identificável

O servidor já possui integração com a bandeja. Uma melhoria desejada é usar um ícone próprio do Stage Companion no EXE e na bandeja em vez de depender de ícone genérico em algumas builds.

### Tela “Sobre” do servidor

Adicionar uma janela informativa semelhante a aplicativos auxiliares do Windows, contendo:

- nome Stage Companion;
- versão;
- finalidade do servidor;
- estado da conexão;
- informações básicas de privacidade/rede;
- links do projeto.

### Distribuição pública

Para uma futura versão comunitária:

- definir licença do projeto;
- assinar digitalmente o executável Windows;
- criar releases versionadas no GitHub;
- publicar checksums por release;
- melhorar instalação/atualização do servidor;
- avaliar criação automática de regra de firewall específica;
- separar claramente builds DEV e estáveis.

### Organização do código no repositório

A revisão atual reconstrói parte do código a partir de `.bootstrap/`. Uma melhoria de manutenção é migrar para uma árvore-fonte expandida diretamente no Git, mantendo o bootstrap apenas como histórico se necessário.

## Critério para considerar uma versão estável

Uma versão comunitária estável deve passar testes automatizados e também uma rodada de validação real incluindo reinício do Windows, atualização preservando token, múltiplas saídas de Retorno, uso por celular, vídeo, listas longas e operação durante um culto simulado.
