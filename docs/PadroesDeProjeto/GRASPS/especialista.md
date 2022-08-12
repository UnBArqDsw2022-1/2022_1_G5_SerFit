# Especialista

## 1. Introdução.

Um questionamento muito comum no processo de desenvolvimento se refere à onde deve ser incluído uma nova funcionalidade. O especialista define que devemos procurar  o local que guarda mais informções para realizar uma tarefa, de forma que esse local é o melhor candidato para essa funcionalidade.

A imagem abaixo demonstra um exemplo de como é possível identificar um especialista:

![expert example](https://1.bp.blogspot.com/-15_IqLY-GM4/XQXNjQCtWrI/AAAAAAAAGE0/Ln5--07vci4lykvBwDn5-G4oerOeYI0EQCLcBGAs/s1600/expert1.png)

Pelo padrão especialista, devemos procurar aquela classe de objetos que possui as informações necessárias para determinar o total. É necessário conhecer todas as instâncias SalesLineltem de uma venda e a soma de seus subtotais.

Uma instância de Sale contém isso; portanto, pela diretriz do padrão especialista, Sale é uma classe de objeto adequada para esta responsabilidade.


## 2. Utilização

 **Não houve** necessidade de utilizar o padrão especialista, pois cada classe do backend conseguiu executar suas funções diretamente, e no frontend, por se tratar de um framework em JavaScript, onde o código tende a ser mais funcional e pouco se especializar. Um exemplo que mostra a utilização do padrão, seria uma implementação adicional para o aplicativo, imaginando a funcionalidade da *loja* como uma sessão que armazena o valor de cada compra feita nas lojas linkadas, a partir dos respectivos produtos como mostrado a seguir:

## 3. Código

<p align="center">
  <img src="../../assets/especialista/codigo_exemplo.png" alt="Codigo do Exemplo"/>
</p>

A classe *Sale* (venda no geral, incluindo seu valor) se especializa para retornar o valor total da venda do *getTotal()*, fazendo uma referência ao método *getSubTotal()* da classe *SalesLineItem* (total de vendas por item), que por sua vez faz uma referência ao método *getPrice()* da classe *ProductDescription* (descrição do produto, incluindo seu preço)

## 4. Referências

- SERRANO, Milene. Módulo Padrões de Projeto GRASP Especialista - Material em Slides.

- SERRANO, Milene. Módulo Padrões de Projeto 07b - VídeoAula - DSW - GRASP Especialista.

- Padrão para atribuir responsabilidades: Expert. Disponível em: http://www.dsc.ufcg.edu.br/~jacques/cursos/map/html/pat/expert.htm .

-  Information Expert GRASP Pattern . Disponível em: https://www.sourcecodeexamples.net/2018/06/information-expert-grasp-pattern.html.


## Histórico de Versionamento

| Versão | Alteração | Autor(es) | Revisor(es) |
| --- | --- | --- | --- |
| 1.0 | Criação do documento | Daniel | --- |
| 1.1 | Adição da utilização e exemplo | Victor Hugo | --- |
