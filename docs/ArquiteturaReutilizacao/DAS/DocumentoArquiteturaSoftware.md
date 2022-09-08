# Documento de Arquitetura de Software

<!-- Gustave -->

## 1. Introdução

<p style="text-align: justify;">
O DAS - Documento de Arquitetura de Software - é um documento que apresenta uma visão sistêmica da arquitetura do Software que está sendo desenvolvido. O presente documento foi estruturado no contexto do aplicativo SerFit, desenvolvido pelos alunos de Engenharia de Software da disciplina de Arquiteutra e Desenho de Software. O projeto SerFit tem por objetivo ajudar e facilitar a vida de pessoas da área fitness através de uma comunicação rápida e prática com os facilitadores dessa área. Tal documento foi divido nos seguintes tópicos: </p>

- Representação Arquitetural
- Metas e restrições da arquitetura
- Visão de casos de uso
- Visão lógica
- Visão de processos
- Visão de implantação
- Visão de dados
- Tamanho e desempenho
- Qualidade de Software

<p style="text-align: justify;">
A seguir, será apresentado uma visão introdutória desse documento no escopo do projeto SerFit, partindo-se, posteriormente, para as tópicos recentemente listados.</p>

### 1.1. Finalidade

<p style="text-align: justify;">
 Esse artefato serve como uma ponte de comunicação entre o arquiteto do time e o outros membros da equipe, portanto, possui importância significativa no ciclo de desenvolvimento de um produto de Software. Dessa forma, esse documento reúne todas as informações estruturais do produto, podendo servir de consulta não só para os desenvolvedores, como para toda a equipe de desenvolvimento.
</p>

### 1.2. Escopo

<p style="text-align: justify;">
 O projeto SerFit tem por objetivo ser uma plataforma intermediadora entre usuários e profissionais da área de bem-estar físico, podendo abranger nutricionistas, personal trainers, professores de yoga, fisioterapeutas e outros. Em resumo, a imagem abaixo mostra um escopo inicial das funcionalidades primárias elicitadas pelo time para a construção desse Software.
</p>

![image](../../../docs/assets/brainstorm/mindmeister.png)

### 1.3. Tabela de artefatos gerados

A seguir, foram mapeados os artefatos gerados durante as fases inicias do projeto, das quais serão relacionados nos tópicos arquiteturais sequentemente.

| Base                          |        Modelagem         |
| :---------------------------- | :----------------------: |
| Design Sprint                 |   Diagrama de classes    |
| Brainstorm                    |   Diagrama de pacotes    |
| Diagrama de Causa e Efeito    | Diagrama de componentes  |
| Rich Picture                  | Diagrama de implantação  |
| 5W2H                          |  Diagrama de sequência   |
| Léxicos                       | Diagrama de comunicação  |
| Introspecção                  |   Diagrama de estados    |
| FURPS+                        |  Diagrama de atividades  |
| Questionário                  |         Backlog          |
| MoSCoW                        | Documento de tecnologias |
| Plano de Gerencia de Riscos   |           EAP            |
| Protótipo de Media Fidelidade |       Diagrama NFR       |
| BPMN                          |          CANVAS          |
| Documento de Metodologia      |       Casos de Uso       |
| TAP                           |      Guia de Estilo      |
| Política de contribuição      |            -             |
| Heatmap                       |            -             |

## 2. Representação Arquitetural

### 2.1. Front-end

<p style="text-align: justify;">
 O <b>React Native</b> foi a escolha do framework a ser utilizado no front-end principalmente porque possibilita a criação de aplicações em multiplataformas, tanto no Android quanto no iOS. Além disso, o React Native possui ferramentas que convertem o código para a linguagem nativa do sistema operacional utilizado, tornando o app mais fluido. Uma outra facilidade é quando se tange às aplicações híbridas, em que o React Native cria uma arquitetura através da bridge. A Bridge é a responsável pela comunicação entre o código JS e o código nativo.
</p>

![image](../../../docs/assets/das/reactnative.png)

### 2.2. Back-end

<p style="text-align: justify;">
 A base do nosso back-end se dá pelo <b>Node.js</b> que é um ambiente de execução Javascript server-side, ou seja, pode-se criar aplicações javascript sem a necessidade de um browser, tendo como principal característica sua alta escalabilidade. Outro ponto é que sua arquitetura possibilita um número considerável de requisições concorrentes quando comparadas ao modelo tradicional. 
</p>

<p style="text-align: justify;">
 O <b>Express.js</b> também foi utilizado porque é um framework de aplicação para o Node.js, que serve como um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. O Express fornece uma fina camada de recursos fundamentais de aplicativos web, sem ocultar recursos node.js.
</p>

<p style="text-align: justify;">
 Cabe também citar o <b>Sequelize</b> que é um ORM baseado para alguns bancos de dados, entre eles, o Postrgres (banco utilizado no projeto). Ele contribui no suporte de transações e no gerenciamento de dados, utilizando métodos JS, facilitando na modificação das estruturas de dados, como também na criação, população e outras tarefas.
</p>

<p style="text-align: justify;">
 Já o <b>Docker</b> também foi utilizado, sendo uma plataforma open source que facilita a integração em ambientes isolados. Em resumo, ele "empacota" uma aplicação dentro de containers, bastando que a outra pessoa tenha o Docker instalado para poder rodar a aplicação desejada.
</p>

<p style="text-align: justify;">
Ademais, o back-end poderá ser melhor compreendido no tópico de Visão Lógica desse mesmo documento. </p>

### 2.3. Banco de Dados

<p style="text-align: justify;">
O <b>PostgreSQL</b> foi o banco escolhido para armazenar os dados da nossa aplicação devido a sua semelhança com o MySQL, sendo altamente escalável e de fácil integração.
</p>

<p style="text-align: justify;">
No tópico de Visão de Dados, será abordado de forma mais aprofundada.
</p>

<!-- Fim Gustave -->

<!-- Fernando -->

## 3. Metas e restrições da arquitetura

### 3.1. Metas

<p style="text-align: justify;">
 texto texto texto
</p>

### 3.2. Restrições

<!-- Fim Fernando -->

<!-- Daniel -->

## 4. Visão de casos de uso

<p style="text-align: justify;">
 texto texto texto
</p>

<!-- Fim Daniel -->

<!-- Ricardo -->

## 5. Visão Lógica

<p style="text-align: justify;">
 texto texto texto
</p>

### 5.1. Diagrama de classes

### 5.2. Diagrama de pacotes

### 5.3. Diagrama de comunicação

<!-- Fim Ricardo -->

<!-- Lucas e Victor -->

## 6. Visão de processos

<p style="text-align: justify;">
 texto texto texto
</p>

### 6.1. Diagrama de atividades
Levando em conta a notação UML (Unified Modeling Language, ou, em português, Linguagem de Modelagem Unificada) o *Diagrama de Atividades* é considerado um diagrama de comportamento que está descrevendo o que é necessário acontecer no sistema durante o processo de modelagem do aplciativo **SerFit**.
Este diagrama fornece uma visualização do comportamento de um sistema descrevendo a sequência de ações em um processo, como mostrado nos diagramas abaixo.

#### Cadastro
![Diagrama de Atividades do Cadastro](../../assets/diagramadeatividades/atividadesCadastro.png)

#### Profissional
![Diagrama de Atividades do Profissional](../../assets/diagramadeatividades/atividadesProfissional.png)

#### Cliente
![Diagrama de Atividades do Cliente](../../assets/diagramadeatividades/atividadesCliente.png)

### 6.2. Diagrama de sequência
Também seguindo a notação UML o *Diagrama de Sequência* é um modelo que mostra o comportamento dinâmico da aplicativo **SerFit** através de duas dimensões: Mudanças de estado interna, através da descrição de como um objeto altera o seu estado, e as Interações, que são descritas pelo comportamento externo e a sua dinâmica com outros objetos. Levando em consideração os dois tipos de usuário (Cliente e Personal), o aplicativo e o banco de dados, o comportamento dinâmico é estabalecido seguindo o diagrama abaixo.

<p align="center">
  <img src="../../assets/diagrama-de-sequencia/Sequence-diagram.png" />
</p>

<!-- Fim Lucas e Victor -->

<!-- Luis -->

## 7. Visão de implantação

<p style="text-align: justify;">
 texto texto texto
</p>

### 7.1. Diagrama de componentes

### 7.2. Diagrama de implantação

<!-- Fim Luis -->

<!-- Felipe -->

## 8. Visão de dados

<p style="text-align: justify;">
 texto texto texto
</p>

<!-- Fim Felipe -->

<!-- Wesley -->

## 9. Tamanho e desempenho

<p style="text-align: justify;">
    Levando em consideração os repositórios da aplicação SerFit ainda em desenvolvimento e evolução, concluímos  que o somatório não passará de 1GB. Para acessar a aplicação, não é necessário a instalação de nenhum programa, apenas acesso a internet e um dispositivo mobile ou computador. Além disso, a aplicação deve suportar muitas conexões simultâneas, por se tratar de uma plataforma que deve ser usada diariamente por um grupo de pessoas.
</p>

## 10. Qualidade de Software

<p style="text-align: justify;">
 Na etapa de construção da aplicação utilizamos o padrão de arquitetura MVC, sendo possível fazer a divisão em camadas e subcamadas bem definidas, possibilitando a compreensão do código, além da sua reutilização. Foi utilizada também a norma ISO/IEC 9126, cujo objetivo é definir um conjunto de parâmetros que visam padronizar a avaliação da qualidade de software.

| Critérios        | Descrição                                                                                                                                                                                                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Funcionalidade   | A aplicação foi construída segundo os requisitos que foram levantados na fase inicial do projeto.                                                                                                                                                                       |
| Confiabilidade   | O sistema foi desenvolvido para garantir que o mesmo se recupere em caso de falhas                                                                                                                                                                                      |
| Usabilidade      | O sistema possui uma interface simples, clara, intuitiva e foi construída com base no protótipo de alta fidelidade. Também é possível notar que o sistema utiliza linguagem clara e direta, simplificando o entendimento do que está sendo feito e o que se pode fazer. |
| Eficiência       | O sistema é otimizado em relação ao tempo de resposta de requisições.                                                                                                                                                                                                   |
| Manutenibilidade | Os padrões de projeto aplicados durante o desenvolvimento facilitam a identificação de defeitos, na correção e evolução do código. Além da documentação estar disponível no repositório do grupo, facilitando a consulta e apoiando na manutenibilidade do código.      |
| Portabilidade    | A utilização do Docker garante um ambiente estável, o que auxilia na criação de possíveis novos módulos.                                                                                                                                                                |

</p>

<!-- Fim Wesley -->

## Referências Bibliográficas

>

## Histórico de Versionamento

| Versão | Alteração                                    | Autor(es) | Revisor(es) |
| ------ | -------------------------------------------- | --------- | ----------- |
| 1.0    | Criação do template                          | Gustave   | -           |
| 2.0    | Adição de desempenho e qualidade do software | Wesley    | -           |
