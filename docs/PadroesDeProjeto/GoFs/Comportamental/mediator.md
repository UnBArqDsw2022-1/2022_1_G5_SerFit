## Mediator

## 1. Introdução
A função do GOF comportamental de mediação é reduzir a complexidade e acomplamento entre classes, atuando como um agente intermediario de comunicação entre diferentes classes. Evitando assim que estas classes comuniquem entre si diretamente.

Os pontos positivos são, promover o desacoplamento, e não permitir que os diferentes elementos comuniquem entre si. 
Outro ponto positivo é facilitar que objetos possam comunicar entre si, sem que conheça detalhes especificos do outro objeto.

Um ponto negativo é que a centralização em excesso pode criar gargalos, diminuir a performace, e gerar pontos unicos de falha no sistema.

## 2. Utilização
A solução é criar uma classe mediadora para gerenciar todas as comunicações entre as diferentes classes para reduzir a complexidade da comunicação  entre múltiplos objetos ou classes. O mediador tem, portanto, como foco principal o comportamento cooperativo entre diferentes partes independentes. Limitando a extensão por herança.

<img width="360" alt="Screen Shot 2022-08-12 at 12 02 53 PM" src="https://user-images.githubusercontent.com/16293264/184426249-18ef65ef-3e97-4e0d-b6f5-e77cf9e6cb1d.png">

## 3. Conclusão

Mediator (padrão comportamental) – aplicabilidade (quando usar o padrão): 
  quando um conjunto de objetos se comunica de modo bem definido, mas complexo; 
  é difícil reusar um objeto porque ele se comunica com muitos outros objetos; 
  o comportamento distribuído entre diversas classes deve ser personalizado sem excesso de subclasses.


## 5. Referências

- SERRANO, Milene. Módulo Padrões de Projeto GoF(s) Criacionais - Material em Slides.
- [GAMMA, 2000] Gamma, E. et al. Padrões de projeto: soluções reutilizáveis de
software orientado a objetos. Porto Alegre: Bookman, 2000. 364 p. ISBN
8573076100.

## Histórico de Versionamento

| Versão | Alteração | Autor(es) | Revisor(es) |
| --- | --- | --- | --- |
| 1.0 | Criação do documento | Fernando | --- |
