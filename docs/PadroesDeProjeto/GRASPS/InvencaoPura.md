# Invenção Pura

## 1. Introdução

A invenção pura é uma forma de garantir o cumprimento de outros princípios e padrões de projeto. Através da Invenção pura, consegue-se a inserção de componentes e classes fora do que foi concebido para o domínio da aplicação.

## 2. Explicação

Para seguir esse princípio, basta criar componentes e classes artificiais para a implementação de outros padrões. Com isso, é mais provável de se obter uma alta coesão e um baixo acoplamento, mesmo que, originalmente, os esquemas de Classes e Componentes originais propostos para o domínio da aplicação não fossem compatíveis com certos padrões de GOFs e GRASPs. A aplicação não precisa se ater somente a modelagem proposta para o domínio.

<caption>Figura 1: Exemplo de Invenção. A esquerda, sem a invenção e à direita, a invenção pura para seguir o padrão Entity Repository</caption>

![ex_grasp_criador](../../assets/grasps/custom-repo-versus-db-context.png)

<caption>Fonte: https://docs.microsoft.com/pt-br/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-implementation-entity-framework-core</caption>

## 3. Projeto

Para o projeto, boa parte dos GOFs e padrões emergentes utilizados necessitaram de Invenção Pura, para poder cumprir os Designs. Como exemplo, temos as classes de [Controller](#) e de [Banco de Dados](../GoFs/Estrutural/Singleton.md).

## 4. Referências

  [https://edisciplinas.usp.br/pluginfile.php/2186358/mod_resource/content/1/Aula09_GRASP.pdf](https://edisciplinas.usp.br/pluginfile.php/2186358/mod_resource/content/1/Aula09_GRASP.pdf)

  [https://www.facom.ufu.br/~bacala/ESOF/05a-Padr%C3%B5es%20GRASP.pdf](https://www.facom.ufu.br/~bacala/ESOF/05a-Padr%C3%B5es%20GRASP.pdf)

## Histórico de Versionamento

| Versão | Alteração            | Autor(es)       | Revisor(es) |
| ------ | -------------------- | --------------- | ----------- |
| 1.0    | Criação do documento | Adrian Soares   | Felipe      |
