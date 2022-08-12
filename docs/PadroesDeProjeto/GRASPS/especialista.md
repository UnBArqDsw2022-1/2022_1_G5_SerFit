# Object Pool

## 1. Introdução.

Um questionamento muito comum no processo de desenvolvimento se refere à onde deve ser incluído uma nova funcionalidade. O especialista define que devemos procurar  o local que guarda mais informções para realizar uma tarefa, de forma que esse local é o melhor candidato para essa funcionalidade.

A imagem abaixo demonstra um exemplo de como é possível identificar um especialista:

![expert example](https://1.bp.blogspot.com/-15_IqLY-GM4/XQXNjQCtWrI/AAAAAAAAGE0/Ln5--07vci4lykvBwDn5-G4oerOeYI0EQCLcBGAs/s1600/expert1.png)

Pelo padrão especialista, devemos procurar aquela classe de objetos que possui as informações necessárias para determinar o total. É necessário conhecer todas as instâncias SalesLineltem de uma venda e a soma de seus subtotais.

Uma instância de Sale contém isso; portanto, pela diretriz do padrão especialista, Sale é uma classe de objeto adequada para esta responsabilidade.


## 2. Utilização

Apesar de não utilizado no projeto, o Object Pool permite uma melhora significatica na performace de um determinado projeto .

Observa-se na imagem abaixo, que a implementação deste padrão permite pegar elemento de forma rápida pois já foi iniciado pelo pela pool e além disso permite o cliente reutilizar um objeto já utilizado anteriormente. 

![object poll](../../../assets/object_pool/object_pool_example.png)

## 3. Conclusão

Esse padrão certamente será usado no projeto. Mesmo que seja de um forma adaptada para algumas situações bem especificas a equipe acredita que irá ser utilizado em algum momentodo desenvolvimento.

## 4. Referências

- SERRANO, Milene. Módulo Padrões de Projeto GRASP Especialista - Material em Slides.

- SERRANO, Milene. Módulo Padrões de Projeto 07b - VídeoAula - DSW - GRASP Especialista.

- Padrão para atribuir responsabilidades: Expert. Disponível em: http://www.dsc.ufcg.edu.br/~jacques/cursos/map/html/pat/expert.htm .

-  Information Expert GRASP Pattern . Disponível em: https://www.sourcecodeexamples.net/2018/06/information-expert-grasp-pattern.html.


## Histórico de Versionamento

| Versão | Alteração | Autor(es) | Revisor(es) |
| --- | --- | --- | --- |
| 1.0 | Criação do documento | Daniel | --- |