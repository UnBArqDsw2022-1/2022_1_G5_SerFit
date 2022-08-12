# GOF Criacional - Singleton

## 1. Introdução

O Padrão Singleton faz parte dos GOFs criacionais e que permite a criação de uma única instância de uma classe, que poderá ser acessada globalmente.

## 2. Explicação

Uma vantagem desse padrão é a economia de memória e maior eficiência para classes que só precisam de uma instância, pois possuem um padrão estático. Exemplos clássicos para essa implementação são Classes de comunicação com o banco de dados, que possuem uma interface para utilização de drivers para comunicação. Também podemos citar classes para  disponibilização de logs de sistema que precisam ser únicos para toda a aplicação (mesmo buffer de inserção de mensagens e mesma API para criação das mesmas).

![ex_gof_singleton](../../assets/../../assets/gofs-criacionais/Singleton_ex.png)

<caption> Fonte: (SERRANO, Milene. Aula - GOFs Criacionais. Disciplina de Arquitetura e Desenho de Software do Curso de Engenharia de Software da UnB, FGA) </caption>

## 3. Projeto

No projeto Ser Fit, um bom exemplo, como **adaptação** ao GOF Singleton é a instância do Driver de Banco de dados e de suas configurações. É possível perceber que uma instância do sequelize é criada , bem como os models, após o início da aplicação servidora. Essa instância é utilizada, então, em todos os outros controllers para modificação do Banco de dados.

### 3.1. Singleton para o banco de dados

``` javascript
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/database.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
```

### 3.2. Exempĺo de utilização do Singleton

O objeto `db` só precisa ser importado para o arquivo e  as classes Models e o Driver para o banco de dados se tornam acessíveis para a classe `UserController`

``` javascript
const db = require('../models/index');
const jwt = require('jsonwebtoken');

class UserController {
    constructor() { }

    async create(req, res) {
        const { password, email, name, accountType } = req.body;
        const user = { password, email, name, accountType };
        try {
            const account = await db.user.create(user);
            const id = account.id;
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 30000
            });
            return res.status(201).json({ auth: true, token: token });
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }
}

module.exports = new UserController();
```

## 4. Referências

SERRANO, Milene. Aula, 2022 - GOFs Criacionais. Disciplina de Arquitetura e Desenho de Software do Curso de Engenharia de Software da UnB, FGA. Acesso em 8 de agosto de 2022.


## Histórico de Versionamento

| Versão | Alteração            | Autor(es)       | Revisor(es) |
| ------ | -------------------- | --------------- | ----------- |
| 1.0    | Criação do documento | Adrian Soares   | ----------- |

<style>
    p, caption {
        text-align: justify;
    }
</style>
