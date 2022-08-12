# Decorator

## 1. Introdução
O Decorator, também chamado de Wrapper, é um GOF Estrutural que permite adicionar um comportamento a um objeto já existente em tempo de execução. Ou seja, neste padrão, responsabilidades adicionais são 
agregadas dinamicamente a um objeto. [1] </br>
Portando, o Decorator apresenta uma alternativa às heranças, pois atribui uma responsabilidade ao objeto,e não à classe. [2]

O padrão Decorator é composto por quatro elementos: [3] 
* Definição abstrata de um componente de software;
* Implementação concreta deste componente;
* Definição abstrata de um decorator para este componente;
* Uma ou mais implementações concretas do decorator do componente.

## 2. Usabilidade
Após discussão entre os membros do grupo, foi decidido que o padrão Decorator não seria utilizado no desenvolvimento do projeto. Porém, um exemplo da utilização desse padrão foi desenvolvido com o intuito de esclarecer seu funcionamento.

* 2.1 Implementação da interface

```java
public interface Treino{

  public void realizarTreino();

}
```
* 2.2 Implementação da classe TreinoBase

```java
public class TreinoBase implements Treino{

  @Override
  public void realizarTreino(){
    System.out.println("Essa é a execução de um treino.");
  }

}
```
* 2.3 Implementação da classe TreinoDecorator

```java
public class TreinoDecorator implements Treino{

  public Treino treino;

  public TreinoDecorator(Treino treino){
    this.treino = treino;
  }

  @Override
  public void realizarTreino(){
    this.treino.realizarTreino();
  }

}
```
* 2.4 Implementação da classe Agachamento

```java
public class Agachamento extends TreinoDecorator{

  public Agachamento(Treino treino){
    super(treino);
  }

  @Override
  public void realizarTreino(){
    super.realizarTreino();
    System.out.println("Adicionando atividade de agachamento ao treino.");
  }

}
```
* 2.5 Instanciação dos objetos

```java
Treino treinoA = new TreinoBase();
treinoA.realizarTreino();

Agachamento treinoComAgachamento = new Agachamento( treinoA );
treinoComAgachamento.realizarTreino();
```


## 3. Bibliografia

[1] Decorator. Disponível em: <https://pt.wikipedia.org/wiki/Decorator>.

[2] CELESTINO, A. [Delphi] Design Patterns GoF - Decorator. Disponível em: <https://www.andrecelestino.com/delphi-design-patterns-decorator/>. Acesso em: 10 ago. 2022.

[3] Padrão de Projeto: Decorator. Disponível em: <https://gabrielschade.github.io/2018/08/13/gof-decorator.html>. Acesso em: 10 ago. 2022.


## Histórico de Versionamento

| Versão | Alteração                        | Autor(es)    | Revisor(es) |
| ------ | -------------------------------- | ------------ | ----------- |
| 1.0    | Criação do documento             | Lucas Gomes | ---         |
| 1.1    | Adição de exemplo             | Lucas Gomes | ---         |

