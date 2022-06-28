# Política de Contribuição

Obrigado por querer contribuir com este projeto!

<p style="text-align: justify;">
Neste documento apresenta-se uma visão geral do padrão a ser seguido para realizar contribuições neste projeto.
</p>

# 1. Política de Branches para repositório de Documentação

<p style="text-align: justify;">
Qualquer alteração/adição no repositório deve surgir a partir de uma issue, assim, todas branchs devem ser criadas a partir da branch <code>main</code>, e seguir o padrão de <code>número-da-issue_nome-do-documento</code>, para a melhor organização do projeto. Por exemplo, para a realização da <a href="https://github.com/UnBArqDsw2022-1/2022_1_grupo5/issues/15">issue</a>, deverá ser criado uma branch como o nome:
</p>

```
15-politica-de-contribuicao
```

<p style="text-align: justify;">
Em ocasiões em que não se está trabalhando com nenhum documento em específico, então deve-se colocar o nome da issue correspondente.</p>

# 2. Política de Branches para repositório de Desenvolvimento

<p style="text-align: justify;">
Para repositórios de desenvolvimento se utilizará de uma adaptação do padrão de fluxo de trabalho do <a href="https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow">GitFlow</a>, cada branch utilizada no projeto está descrita a seguir:
</p>

## 2.1 Branch Main

<p style="text-align: justify;">
Esta branch armazena o histórico do lançamento oficial, assim, existindo apenas uma branch main no projeto e todas as modificações nessa branch devem ocorrer por meio de Pull Requests, que devem ser revisados.
</p>

## 2.2 Branch Develop

<p style="text-align: justify;">
A branch develop serve como uma ramificação de integração para novas funcionalidades, desse modo, deverá existir apenas uma branch develop e modificações nessa branch devem ocorrer por meio de Pull Requests. Esta branch deverá ser originalmente criada a partir da branch <code>main</code>.
</p>

## 2.3 Branches Feature

<p style="text-align: justify;">
As branches de novas funcionalidades deverão ser criadas a partir da branch `develop` e ser integradas a ela por meio de Pull Requests. Esta branch deverá seguir a nomenclatura: <code>feature/número-da-issue_nome-da-issue</code>.
</p>

## 2.4 Branches Hotfix

<p style="text-align: justify;">
As branches de Hotfix servem para correções urgentes que estão ocorrendo diretamente em produção, assim, ela deverá ser criada a partir da branch <code>main</code> e integrada a ela também por meio de Pull Request. Esta branch deverá seguir a nomenclatura: <code>hotfix/número-da-issue_nome-da-issue</code>.
</p>

# 3. Política de Issues

<p style="text-align: justify;">
Case o projeto necessite de novas funcionalidade, documentação, correção de bugs, etc... deverá ser criado uma issue, seguindo o padrão disponibilizado, que representará a alteração a ser feita. Para resolver uma issue deverá, necessariamente, ter um Pull Request com as modificações necessárias associadas a esta issue e apenas membros oficiais do projeto poderão fechar issues.
</p>

# 4. Política de Commits

<p style="text-align: justify;">
Commits devem ser feitos de maneira clara, sucinta e objetiva, descrevendo as alterações realizadas seguindo o padrão <code>"#NumeroIssue - Mensagem"</code>. Em caso de commit realizado por mais de uma pessoa, os demais autores deverão ser representados pelo termo <code>Co-authored-by</code>.
</p>

Ex. de commit:

```
#18 - Adicionado campo de email no formulário de login
```

Ex de commit com mais de um autor:

```
#12 - Adicionado campo de email no formulário de login

Co-authored-by: Usuário <email@email.com>
```

# 5. Política de Pull Requests

<p style="text-align: justify;">
Alterações no projeto deverão ser feitos por meio de Pull Requests e estes deverão seguir corretamente a padrão disponibilizado e para ser aprovado precisão se conformar qualquer verificação automática que existir (Lintter/CI/CD/etc...) e ser revisado por ao menos um membro oficial do projeto.
</p>

# 6. Política de Revisão de Documentos

<p style="text-align: justify;">
Os documentos que forem revisados deverão ser rastreáveis no histórico de versão que se encontra na parte inferior de todos os documentos, conforme o padrão mostrado a seguir:
</p>

| Versão | Alteração                  | Autor(es)       | Revisor(es)     |
| ------ | -------------------------- | --------------- | --------------- |
| 1.0    | Criação do Documentos      | Nome do autor   | Nome do revisor |
| 1.1    | Correção e revisão da v1.0 | Nome do revisor | ----            |

# 7. Referências

- Fluxo de Trabahlo de Gitflow. Disponível em: < https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow > Acesso em: 23 de Junho de 2022
- Exemplo de Guia de Contribuição. Disponível em < https://github.com/DNXLabs/terraform-aws-ecs/blob/master/CONTRIBUTING.md > Acesso em: 23 de Junho de 2022

## Histórico de Versionamento

| Versão | Alteração                                                        | Autor(es)       | Revisor(es) |
| ------ | ---------------------------------------------------------------- | --------------- | ----------- |
| 1.0    | Criação do documento                                             | Luis Gustavo    | ----        |
| 1.1    | Adicionado política de branches, commits, issues e pull requests | Luis Gustavo    | ----        |
| 1.3    | Detalhando política de commit e adicionando política de revisão  | Gustave Persijn | ----        |
