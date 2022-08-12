# Prototype

## 1. Introdução
O padrão de projeto criacional Prototype permite copiar objetos existentes sem fazer seu código ficar dependente de suas classes.

## 2. Usabilidade

O padrão Prototype delega o processo de clonagem para o próprio objeto que está sendo clonado. O padrão declara uma interface comum para todos os objetos que suportam clonagem. Essa interface permite que você clone um objeto sem acoplar seu código à classe daquele objeto. Geralmente, tal interface contém apenas um único método clonar.

![Abstract Factory](../../../assets/gof-prototype/gof-prototype.png)
<h6 align = "center">Figura 1: Construição de protótipos 

## 3. Usabilidade

No nosso projeto, podemos utilizar quando precisarmos utilizar o mesmo botão, por exemplo, em diferentes lugares. Com o mesmo formato, mesmas cores e demais configurações. Na imagem abaixo, visualizamos a ideia principal desse padrão de projeto: clonar esses produtos que tenham a mesma configuração.


## Referências

[1] Prototype. Disponível em: https://refactoring.guru/pt-br/design-patterns/prototype. Acesso em: 10 de agosto de 2022.



## Histórico de Versionamento

| Versão | Alteração | Autor(es) | Revisor(es) |
| --- | --- | --- | --- |
| 1.0 | Criação do documento e edição do arquivo  | Wesley Santos | --- |
