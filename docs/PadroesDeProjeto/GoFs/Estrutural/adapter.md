# Adapter

## 1. Introdução

O padrão de projeto do Adapter é um dos padrões de projeto estrutural e é usado para que duas interfaces não relacionadas possam trabalhar juntas. O objeto que une essas interfaces não relacionadas é chamado de Adapter.

Pode ser observado um exemplo deste padrão de projeto na figura abaixo. Nele, pode-se perceber que o adaptador obtém uma interface, compatível com um dos objetos existentes e, usando essa interface, o objeto existente pode chamar os métodos do adaptador com segurança. Ao receber a chamada, o adaptador passa o pedido para o segundo objeto, mas em um formato e ordem que o segundo objeto espera.

![alt text](https://refactoring.guru/images/patterns/diagrams/adapter/solution-pt-br-2x.png)

## 2. Utilização

Um dos possíveis uso deste padrão no contexto do projeto seria para criar interfaces adapter para as classes 'Model' do banco de dados. No cenário Atual as classes 'Controller' utilizam diretamente as models do banco de dados, assim inviabiliza a criação de testes unitários para esses controllers, devido a dependência do banco dados. Utilizando o padrão adapter, que fornecerá uma interface para chamada de métodos de criação, busca, deleção e atualização, poderá ser viabilizado a criação de [Mocks](https://www.agilealliance.org/glossary/mocks/), que possibilitará a criação de testes para as controllers.

1. Criação da Interface Adapter para a Model ser usuários:

```swift
protocol UserDBAdapter {
    func create()
    func find()
    func delete()
    func update()
}
```

2. Implementação concreta do adapter utilizando o banco de dados

```swift
struct UserDB: UserDBAdapter {
    func create() {
        // Criar usuário no DB
    }
    
    func find() {
        // Buscar usuário no DB
    }
    
    func delete() {
        // Deletar usuário no DB
    }

    func update() {
        // Atualizar usuário no DB
    }
}
```

3. Implementação concreta do adapter utilizando dados mock

```swift

struct MockUserDB: UserDBAdapter {
    func create() {
        // Mock de criação do usuário no DB
    }
    
    func find() {
        // Mock de busca do usuário no DB
    }
    
    func delete() {
        // Mock de deleção do usuário no DB
    }

    func update() {
        // Mock de atualização do usuário no DB
    }
}

```

4. Adicionado injeção do Adapter na Controller:

```swift
class UserController {
    
    private let userDB: UserDBAdapter
    
    init(userDB: UserDBAdapter) {
        self.userDB = userDB
    }
    
    func createUser() {
        userDB.create()
    }
    
    func findUser() {
        userDB.find()
    }
    
    func deleteUser() {
        userDB.delete()
    }
    
    func updateUser() {
        userDB.update()
    }
}
```

5. Desse modo, é possível criar uma classe de teste unitário para a `UserController`, utilizando o `MockUserDB`:

```swift
class TestUserController: XCTestCase {
    
    let sut = UserController(userDB: MockUserDB())
    
    func testCreateUser() {
        sut.createUser()
        // Assert criação do usuário
    }
    
    func testFindUser() {
        sut.findUser()
        // Assert busca do usuário
    }
    
    func testDeleteUser() {
        sut.deleteUser()
        // Assert deleção do usuário
    }
    
    func testUpdateUser() {
        sut.updateUser()
        // Assert atualização do usuário
    }
}
```

## 3. Links

- Implementação do GOF Adapter: https://github.com/UnBArqDsw2022-1/2022.1_G5_SerFit_Backend/blob/adapter_example/Adapter.swift

## 4. Referências

- SERRANO, Milene. Módulo Padrões de Projeto GoF(s) Criacionais - Material em Slides.
- Factory Method. Disponível em: < https://refactoring.guru/pt-br/design-patterns/adapter > Acesso em: 09 de Agosto de 2022.
- Adapter Design Patter in Java. Diponível em: < https://www.digitalocean.com/community/tutorials/adapter-design-pattern-java > Acesso em: 09 de Agosto de 2022.

## Histórico de Versionamento

| Versão | Alteração | Autor(es) | Revisor(es) |
| --- | --- | --- | --- |
| 1.0 | Criação do documento | Luis Gustavo | --- |
| 1.1 | Criação e documentação do exemplo | Luis Gustavo | --- |
| 1.2 | Adição da introdução com as devidas referências | Luis Gustavo | --- |

