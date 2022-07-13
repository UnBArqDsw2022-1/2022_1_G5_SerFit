# Diagrama de Estados

## 1. Introdução

O diagrama de estados tem como objetivo, demonstrar os diferentes estados que um objeto pode ter dentro da aplicação do projeto e determinar qual é qual é o estado inicial de determinado objeto, os estados pelos quais ele vai passar, a transição que é responsável pela mudança de estado, e o estado final.

Os diagramas sempre começam por um círculo em preto, este é o estado inicial, as setas representam as transições que é por onde os estados vão passar, até chegar em um novo estado e assim por diante até o estado final que é um círculo contornado. Apesar de ter um fluxo principal esse não é o objetivo do diagrama e sim, os tipos específicos de comportamento que podemos encontrar em cada ocasião.

### 2.1 Legenda
Os diagrama de estados, possuem os seguintes componentes:

<div style="margin-left: auto;
            margin-right: auto;
            width: 30%">

| Simbolo                                                        	| Legenda                  	|
|:---------------------------------------------------------------:|:-------------------------:|
| ![]( ../assets/modelagem/diagramaDeEstados/inicio.svg)        	| Estado Inicial           	|
| ![]( ../assets/modelagem/diagramaDeEstados/transicao.svg)       | Transição                	|
| ![]( ../assets/modelagem/diagramaDeEstados/estado.svg)         	| Estado                   	|
| ![]( ../assets/modelagem/diagramaDeEstados/pseudo_escolha.svg) 	| Pseudo Estado de Escolha 	|
| ![]( ../assets/modelagem/diagramaDeEstados/conjuncao.svg)      	| Conjunção                	|
| ![]( ../assets/modelagem/diagramaDeEstados/estado_final.svg)   	| Estado Final             	|
</div>

<center>
<figcaption>Imagem 1: Legenda do Diagrama de Estado .</figcaption>
<figcaption>Autor: Ricardo Loureiro</figcaption>
</center>


## 3. Diagramas de Estados

Diante do projeto, a metodologia para desenvolver os diagramas de estado, consistiu, em definir quais eram as principais aplicações e com isso discutir e desenvolver os estados que podemos encontrar no aplicativo. **Entrar no app**, **Cadastrar Treino**.

### 3.1 Entrar no App

![Diagrama Entrar no App](../assets/modelagem/diagramaDeEstados/Diagrama1.svg)

<center>
<figcaption>Imagem 3: Diagrama de estado cadastrando treinador.</figcaption>
<figcaption>Autor: Ricardo Loureiro</figcaption>
</center>

### 3.2 Cadastrar Treino

![Diagrama Cadastrar Treino](../assets/modelagem/diagramaDeEstados/Diagrama2.svg)

<center>
<figcaption>Imagem 2: Diagrama de estado acessando app.</figcaption>
<figcaption>Autor: Ricardo Loureiro</figcaption>
</center>

## 4. Referências

> [1] SERRANO, Milene. 06c - VídeoAula - DSW - Modelagem - Diagrama de Atividades. Material apresentado para a disciplina de Arquitetura e Desenho de Software no curso de Engenharia de Software da Universidade de Brasília, FGA.
> [2] O que é um diagrama de máquina de estados?. Lucidchart. Disponível em: <a href="https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-maquina-de-estados-uml">Lucidchart - Diagrama de Estados</a>. Acesso em: 13 de julho de 2022.

## Histórico de Versionamento

| Versão | Alteração            | Autor(es)       | Revisor(es) |
| ------ | -------------------- | --------------- | ----------- |
| 1.0    | Criação do documento | Ricardo Loureiro| ----------- |