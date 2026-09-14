# INSTALL — Stage Companion 08G-C3

1. Extraia o pacote no PC de projeção.
2. No Spresenter, **atualize** o plugin com `StageCompanion-DEV-Teste08G-C3.zip`. Não desinstale o anterior.
3. Importe `Retorno-StageCompanion-08G-C3.spresenter-theme.json` e aplique **Retorno — Stage Companion 08G C3** em cada saída de Retorno usada (Stage/Preview e HTML podem ser independentes).
4. Execute `StageCompanion-Servidor-08G-R9.exe` no mesmo usuário do Windows. O servidor reaproveita a configuração/token existentes.
5. Atualize a PWA no celular uma vez.
6. No plugin, clique **SINCRONIZAR** e confirme o tempo de pisca (30 s por padrão).

## Teste recomendado

- Projete um vídeo: o vídeo deve aparecer no Retorno, não apenas um bloco preto.
- Com Visitantes/Louvor publicados, inicie uma apresentação: as duas listas devem recolher; ao encerrar, devem voltar.
- Envie Alerta/Mensagem com e sem o botão vermelho ⚡; somente com estrobo deve piscar pelo tempo configurado.
- Em Veículo, confira: **PLACA → MODELO/COR → PROBLEMA**. Veículo começa com estrobo ligado, mas pode ser desligado antes do envio.
- Teste OCULTAR FAIXA e MOSTRAR FAIXA; os dados publicados devem ser preservados.

## API

Não gere outra chave em uma atualização normal. Para instalação nova, crie no Spresenter uma chave com escopo `plugins:invoke`, configure host `127.0.0.1` e porta `5050` no servidor. A chave fica protegida no Windows e não entra no QR.
