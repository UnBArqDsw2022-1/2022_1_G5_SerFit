# Política de Contribuição

Obrigado por querer contribuir com este projeto!

Neste documento apresenta-se uma visão geral do padrão a ser seguido para realizar contribuições neste projeto.

# 1. Política de Branches para repositório de Documentação

Qualquer alteração/adição no repositório deve surgir a partir de uma issue, assim, todas branchs devem ser criadas a partir da branch `main`, e seguir o padrão de `número-da-issue_nome-do-documento`, para a melhor organização do projeto. Por exemplo, para a realização da [issue](https://github.com/UnBArqDsw2022-1/2022_1_grupo5/issues/15), deverá ser criado uma branch como o nome:

```
15-politica-de-contribuicao
```

Em ocasiões em que não se está trabalhando com nenhum documento em específico, então deve-se colocar o nome da issue correspondente.

# 2. Política de Branches para repositório de Desenvolvimento

Para repositórios de desenvolvimento se utilizará de uma adaptação do padrão de fluxo de trabalho do [GitFlow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow), cada branch utilizada no projeto está descrita a seguir:

## 2.1 Branch Main

Esta branch armazena o histórico do lançamento oficial, assim, existindo apenas uma branch main no projeto e todas as modificações nessa branch devem ocorrer por meio de Pull Requests, que devem ser revisados.

## 2.2 Branch Develop

A branch develop serve como uma ramificação de integração para novas funcionalidades, desse modo, deverá existir apenas uma branch develop e modificações nessa branch devem ocorrer por meio de Pull Requests. Esta branch deverá ser originalmente criada a partir da branch `main`.

## 2.3 Branches Feature

As branches de novas funcionalidades deverão ser criadas a partir da branch `develop` e ser integradas a ela por meio de Pull Requests. Esta branch deverá seguir a nomenclatura: `feature/número-da-issue_nome-da-issue`.

## 2.4 Branches Hotfix

As branches de Hotfix servem para correções urgentes que estão ocorrendo diretamente em produção, assim, ela deverá ser criada a partir da branch `main` e integrada a ela também por meio de Pull Request. Esta branch deverá seguir a nomenclatura: `hotfix/número-da-issue_nome-da-issue`.

# 3. Política de Issues

Case o projeto necessite de novas funcionalidade, documentação, correção de bugs, etc... deverá ser criado uma issue, seguindo o padrão disponibilizado, que representará a alteração a ser feita. Para resolver uma issue deverá, necessariamente, ter um Pull Request com as modificações necessárias associadas a esta issue e apenas membros oficiais do projeto poderão fechar issues.

# 4. Política de Commits

Commits devem ser feitos de maneira clara, sucinta e objetiva, descrevendo as alterações realizadas e, em caso de commit realizado por mais de uma pessoa, os demais autores deverão ser representados pelo termo `Co-authored-by:`.

Ex. de commit:

```
Adicionado campo de email no formulário de login
```

Ex de commit com mais de um autor:

```
Adicionado campo de email no formulário de login

Co-authored-by: Usuário <email@email.com>
```

# 5. Política de Pull Requests

Alterações no projeto deverão ser feitos por meio de Pull Requests e estes deverão seguir corretamente a padrão disponibilizado e para ser aprovado precisão se conformar qualquer verificação automática que existir (Lintter/CI/CD/etc...) e ser revisado por ao menos um membro oficial do projeto.

# 6. Referências

* Fluxo de Trabahlo de Gitflow. Disponível em: < https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow > Acesso em: 23 de Junho de 2022
* Exemplo de Guia de Contribuição. Disponível em < https://github.com/DNXLabs/terraform-aws-ecs/blob/master/CONTRIBUTING.md > Acesso em: 23 de Junho de 2022

## Histórico de Versionamento

Versão |       Alteração       |    Autor(es)   |    Revisor(es) 
---- | ---- | ---- | ---- 
1.0 | Criação do documento | Luis Gustavo |  ---- 
1.1 | Adicionado política de branches, commits, issues e pull requests | Luis Gustavo |  ---- 