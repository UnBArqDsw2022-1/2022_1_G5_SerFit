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


## 3. Metodologia 

Para a realização dos diagramas utilizamos a plataforma <a href="https://lucidchart.com">LucidChart</a>, e com o grupo foi definido quais diagramas iriam ser feitos.

## 4. Diagramas de Estados

Diante do projeto, a metodologia para desenvolver os diagramas de estado, consistiu, em definir quais eram as principais aplicações e com isso discutir e desenvolver os estados que podemos encontrar no aplicativo. **Entrar no app**, **Cadastrar Treino**.

### 4.1 Entrar no App

![Diagrama Entrar no App](../assets/modelagem/diagramaDeEstados/Diagrama1.svg)

### 4.2 Cadastrar Treino