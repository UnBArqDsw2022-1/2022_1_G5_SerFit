# Bridge

## 1. Introdução

O padrão de projeto Bridge permite separar a abstração da implementação. Existem 2 partes no padrão de design do Bridge:

* Abstração
* Implementação

Este é um mecanismo de design que encapsula uma classe de implementação dentro de uma classe de interface. Isto é, desacopla a interface da implementação. Ocultando detalhes dos clientes/aplicações.

O padrão Brige permite que a Abstração e a Implementação sejam desenvolvidas de forma independente e o código do cliente pode acessar apenas a parte da Abstração sem se preocupar com a parte da Implementação.

A abstração é uma interface ou classe abstrata e o implementador também é uma interface ou classe abstrata.

A abstração contém uma referência ao implementador. Filhos da abstração são chamados de abstrações refinadas e filhos do implementador são implementadores concretos.
## 2. Metodologia

O padrão bridge busca solucionar problemas de acoplamento resultante de herança, ou seja, uma classe grande ou um conjunto de classes intimamente ligadas. A herança permite um grande reaproveitamento de código mas dependendo da forma que é implementada, gera um alto acoplamento e um crescimento da hierarquia entre as classes de forma exponencial. 

![Abstract Factory](../../../assets/gofs-estruturais/bridge.png)


## 3. Bibliografia

[1] REFACTORING GURU, Padrões Estruturais. Disponível em https://refactoring.guru/pt-br/design-patterns/structural-patterns. Acesso em 10 de agosto de 2022.

[2] SERRANO, Milene. Módulo Padrões de Projeto GoF(s) Estruturais - Material em Slides.

## Histórico de Versionamento

| Versão | Alteração | Autor(es) | Revisor(es) |
| --- | --- | --- | --- |
| 1.0 | Criação do documento e edição do arquivo  | Wesley Santos | --- |
