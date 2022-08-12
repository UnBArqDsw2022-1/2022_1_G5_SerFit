# Strategy

## 1. Introdução

O padrão Strategy é utilizado para intercambiar um conjunto de algoritmos que serão encapsulados para que o algoritmo possa variar de acordo com o que for necessário. A utilização no uso desse padrão pode agregar em:

- Vocabulário comum entre os devs;
- Soluções estratégicas sob princípios da orientação a objetos;
- Facilidade de extensão e manutenção do software;
- Deixa o código menos acoplado e mais coeso.

Através da separação das responsabilidades, esse padrão consegue lidar de formas diferentes com os dados que são passados a ele. Assim, pode-se trocar os objetos de uma família de algoritmos em tempo de execução e definir uma melhor estratégia de execução.

## 2. Aplicação

![Strategy](../../../assets/strategy/strategy.gif)

Na imagem acima mostra a diagramação desse padrão e como seria, genericamente, o funcionamento e a intercomunicação das classes.

Partindo-se para nível de código, um exemplo de aplicação na linguagem Typescript, seria:

1. Criação da interface Strategy:

```
export interface Strategy {
    algorithm(): void
}
```

2. Classes concretas que vão implementar a interface:

```
import {Strategy} from "./strategy";

export class ConcretStrategy1 implements Strategy {
    algorithm(): void{
    }
}
```

Podendo extender-se a: ConectrStrategy2, ConectrStrategy3, ... , ConectrStrategyN.

3. Definindo o Context:

```
import {Strategy} from "./strategy";

export class Context {
    private strategy: Strategy

    setStrategy(strategy:Strategy){
        this.strategy = strategy;
    }

    doOperation(){
        this.strategy.algorithm();
    }
}
```

4. Chamada dos diferentes casos de uso

```
import {ConcretStrategy1} from "./concretStrategy1";
import {ConcretStrategy2} from "./concretStrategy2";
import {Context} from "./context";

const concretStrategy1 = new ConcretStrategy1()
const concretStrategy2 = new ConcretStrategy2()

const context = new Context()

context.setStrategy(concretStrategy1)
context.doOperation()
context.setStrategy(concretStrategy2)
context.doOperation()
```

## 3. Conclusão

A princípio, não será utilizado o padrão nesse primeiro momento pela equipe de desenvolvimento do projeto, entretanto, caso haja novos pontos de melhoria a serem implementados e, que necessite de uma melhor definição estratégica de funcionalidades, o padrão será consultado e posteriormente implementado.

## Bibliografia

> Strategy Pattern. Disponível em: https://robsoncastilho.com.br/2011/06/25/conhecendo-design-patterns-e-o-padrao-strategy/
> Strategy with Typescript. Disponível em: https://luby.com.br/desenvolvimento-de-software/programacao/design-pattern-strategy-com-typescript/

## Histórico de Versionamento

| Versão | Alteração            | Autor(es)       | Revisor(es) |
| ------ | -------------------- | --------------- | ----------- |
| 1.0    | Criação do documento | Gustave Persijn | ---         |
