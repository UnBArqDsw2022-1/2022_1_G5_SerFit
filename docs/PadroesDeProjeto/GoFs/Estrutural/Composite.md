# Composite

## 1. Introdução

O padrão Composite permite facilitar a utilização de um conjunto de objetos dispostos em árvore, onde existe um relacionamento de nós (Objetos com sub-objetos).

## 2.Explicação

O padrão o uso de uma mesma interface de um único objeto, mesmo que, na verdade, a classe esteja utilizando um conjunto de objetos, que podem ser até de diferentes tipos, podendo, por exemplo, utilizar o padrão [Chain of Responsability](#) para lidar com as camadas de diferentes objetos.

<caption>Figura 1: Diagrama representando o padrão</caption>

![fig1_composite](../../../assets/composite/example.png)

<caption>Fonte: https://refactoring.guru/pt-br/design-patterns/composite</caption>

## 3. Projeto

Um exemplo de adaptação em que o padrão será aplicado, no projeto Ser Fit, será para a criação de atividades e planos de atividades. As atividades serão compostas de sub-atividades, formando, portanto, uma árvore de objetos, que poderá ser acessada por uma mesma interface. Com isso, o padrão poderá ser utilizado nas futuras implementações.

### 3.1. Exemplo de implementação

``` javascript
const db = require('../models/index');

class ExerciseController {
    constructor() { }

    async get(req, res) {
        const { id } = req.params;
        try {
            const exercise = await db.exercise.findOne({ where: { id: id } });
            return res.status(200).json(exercise);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }

    async getAll(req, res) {
        try {
            const exercises = await db.exercise.findAll();
            return res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }

    getDescription(id) { // Comportamento default para todos os objetos
        return db.exercise.findOne({ where: { id: id } }).description;
    }

}

module.exports = new ExerciseController();
```
Classe que cria o Composite a partir de um ExerciseController:

<caption>Adaptado de: <a href="https://imasters.com.br/front-end/explorando-o-composite-pattern-javascript"> iMasters</a></caption>

``` javascript
class UserExercises extends ExerciseController {
    constructor (id, name, description) {
        this.children = [];
        this.id = id;
        this.description = description;
    }

    add(child) {
        this.children.push(child);
    }

    remove(child) {
        for (let node, i = 0; node = this.getChild(i); i++) {
            if (node == child) {
                this.children.splice(i, 1);
            }
        }
    }

    getChild(i) {
        return this.children[i];
    }

    getDescription(id) {
        return this.getChild(i).getDescription(id);
    }

    module.exports = new UserExercises();
}
```

## 4. Bibliografia

  iMasters - We are Developers. 2022. Explorando o Composite Pattern JavaScript. [online] Disponível em: <https://imasters.com.br/front-end/explorando-o-composite-pattern-javascript> Acesso em 10 de Agosto de 2022].

  Refactoring.guru. 2022. Composite. [online] Disponível em: <https://refactoring.guru/pt-br/design-patterns/composite> Acesso em 11 de Agosto de 2022.

## Histórico de Versionamento


| Versão | Alteração                        | Autor(es)    | Revisor(es) |
| ------ | -------------------------------- | ------------ | ----------- |
| 1.0    | Criação do documento             | Adrian Soares Lopes | Felipe         |
