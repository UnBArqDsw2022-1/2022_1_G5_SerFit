# Template Method

## 1. Introdução

O Template Method é um padrão de projeto comportamental que define o esqueleto de um algoritmo na superclasse mas deixa as subclasses sobrescreverem etapas específicas do algoritmo sem modificar sua estrutura.

Uma possível exemplo para este padrão pode ser visto na imagem abaixo. Ao construir uma aplicação de mineração de dados que analisa documentos corporativos, percebe-se que classes para tipos arquivos de formatos diferentes tem o códigoo para processamento de dados e análise muito parecido. Assim, é possível utilizar o Template Method para quebrar um algoritmo em uma série de etapas, transforme essas etapas em métodos, e coloque uma série de chamadas para esses métodos dentro de um único método padrão. As etapas podem ser tanto abstratas, ou ter alguma implementação padrão. Para usar o algoritmo, o cliente deve fornecer sua própria subclasse, implementar todas as etapas abstratas, e sobrescrever algumas das opcionais se necessário (mas não o próprio método padrão).

![alt text](https://refactoring.guru/images/patterns/diagrams/template-method/problem-2x.png)

## 2. Utilização

Uma possível utilização deste padrão se projeto seria para a criação de elemento de UI, que seguem um série de etapas: 1. Adicionar uma subview a uma superview; 2. Configurar as [contraints](https://developer.apple.com/documentation/uikit/uiview/1622464-constraints); 3. Adicionar confirações adicionais (opcional). Essas etapas precisam ser implementadas na ordem correta, caso contrário, haverá falhas. Assim, este parece ser um bom caso de uso para o Template Method.

1. Criação de uma interface com três métodos básicos para configuração de uma view, e um quarto método `setupView()` que será o template.

```swift
protocol ViewCode {
    func buildViewHierarchy()
    func setupConstraints()
    func setupAdditionalConfiguration()
    func setupView()
}

extension ViewCode {
    func setupView() {
        buildViewHierarchy()
        setupConstraints()
        setupAdditionalConfiguration()
    }
}
```

2. Agora basta implementar esta interface em uma subclasse de criação de UI, sendo o método `setupView()` o único método que precisará ser chamado. Os demais irão realizar a implementação dos passos do algoritmo 

```swift
class MyView: UIView {
    
    // Elementos de UI
    let label = UILabel()
    
    // Construtor
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupView()
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

extension MyView: ViewCode {
    func buildViewHierarchy() {
        // Adicionar views na hierarquia
        addSubview(label)
    }
    
    func setupConstraints() {
        // Adicionar constraints
    }
    
    func setupAdditionalConfiguration() {
        // Adicionar configuração adicional
        label.textColor = .blue
    }
}
```

## 3. Links

- Examplo de implementação do Template Method: https://github.com/UnBArqDsw2022-1/2022.1_G5_SerFit_Backend/blob/template-method_example/template-method.swift

## 4. Referências

- SERRANO, Milene. Módulo Padrões de Projeto GoF(s) Criacionais - Material em Slides.
- Template Method. Disponível em: < https://refactoring.guru/pt-br/design-patterns/template-method > Acesso em: 09 de Agosto de 2022.
- Design Patterns - Template Method. Disponível em < https://vinileal.com/design%20patterns/design-patterns-swift-template-method/ > Acesso em: 09 de Agosto de 2022

## Histórico de Versionamento

| Versão | Alteração | Autor(es) | Revisor(es) |
| --- | --- | --- | --- |
| 1.0 | Criação do documento | Luis Gustavo | --- |
| 1.1 | Adição da introdução com exemplo | Luis Gustavo | --- |
| 1.2 | Adição das referências | Luis Gustavo | --- |
| 1.3 | Adição do exemplo com os links | Luis Gustavo | --- |