# Documento de Arquitetura de Software

<!-- Gustave -->

## 1. Introdução

### 1.1 Finalidade

<p style="text-align: justify;">
 texto texto texto
</p>

### 1.2 Escopo

### 1.3 Definições

## 2. Representação Arquitetural

### 2.1 Front-end

<p style="text-align: justify;">
 texto texto texto
</p>

### 2.2 Back-end

### 2.3 Banco de Dados

<!-- Fim Gustave -->

<!-- Fernando -->

## 3. Metas e Restrições da arquitetura

### 3.1 Metas

<p style="text-align: justify;">
 As metas da nossa arquitetura foram definidas a partir da pesquisa inicial, de acordo com as necessidades observadas durante o processo de levantamento de requisitos. Algumas das nossas principais metas estabelecidas foram:
 
#### 3.1.1 Portabilidade:
a plataforma deve estar disponível em ambientes mobile, bem como web e desktop

#### 3.1.2 Usabilidade: 
é essencial que o sistema possibilite o usuário a realizar as ações rapidamente, intuitivamente, com qualidade e satisfação para que tenhamos cada vez mais o alcançe e aceitação do público.

#### 3.1.3 Responsividade:
devido à variedade de dispositivos que temos atualmente, é importante que a plataforma renderize bem em qualquer um dos tamanhos de tela utilizados para o acesso.

#### 3.1.4 Escalabilidade
A aplicação deve ser estruturada com o objetivo de ser escalável o suficiente para ser possível futuras evoluções com o crescimento do projeto.

#### 3.1.5 Segurança
O aplicativo deve ser seguro e lidar com os dados dos usuários com segurança, de forma que a informação só pode ser acessada e atualizada por pessoas autorizadas e devidamente credenciadas (autenticação de usuários).

#### 3.1.6 Usabilidade
O sistema deverá ter a capacidade em fazer com que o usuário tenha sucesso na execução de suas tarefas de maneira simples.

</p>

### 3.2 Restrições

|Restrições||
|:-----|:------|
|3.2.1 Plataforma|A aplicação terá suporte nativo para dispositivos mobile e browsers|
|3.2.2 Linguagem|A aplicação será desenvolvida em idioma português do Brasil.|
|3.2.3 Público|A aplicação será voltada para prestadores de diversos serviços da saúde e fitness e seus respectivos clientes.|
|3.2.4 Equipe|A equipe de desenvolvimento possui 10 alunos integrantes do curso de Eng. de Software da UnB.|
|3.2.5 Conectividade|É necessária a conectividade com a internet para o acesso e utilização da aplicação.|

<!-- Fim Fernando -->

<!-- Daniel -->

## 4. Visão de casos de uso

<p style="text-align: justify;">

 ## Visão de Casos de Uso
&emsp;&emsp;Apresentando uma representação mais próxima do cliente ou profissional, a visão de casos de uso auxilia no entendimento das interações dos atores com o sistema de forma a descrever os cenários de uso da aplicação. O diagrama de casos de uso do projeto Ser Fit pode ser acessado pelo [documento de casos de uso](../../Modelagem/IniciativasExtras/CasosdeUso) desenvolvido anteriormente.<br>
&emsp;&emsp;A seguir, tem-se uma descrição resumida dos casos de uso o projeto, os quais contemplam as funcionalidades mais prioritárias do sistema.

#### Descrição dos casos de uso

- **UC01 - Registrar-se:** este caso de uso engloba tanto o cliente quanto o personal. Consiste no ato do usuário (cliente ou personal) se registrar no aplicativo, para isso é necessário informar senha, email e nome. Apos realizado o registro uma série de serviços do aplicativo se tornarão disponíveis para uso.

- **UC02 - Pesquisar Profissionais:** este caso de uso é exclusivo do ator cliente. Se trata do ato de após realizado o registro o cliente acessar o aplicativo, fazer o login e pesquisar profissionais disponíveis e ver detalhes, a pós-condição desse caso seria de contratar um profissional.

- **UC03 - Conversar com Cliente:** este caso de uso é exclusivo do ator profissional. Se trata do ato de após realizado o registro o profissional acessar o aplicativo, fazer o login e entrar no chat, a pós-condição desse caso seria de conversar com um cliente.

<!-- Fim Daniel -->

<!-- Ricardo -->

## 5. Visão Lógica

<p style="text-align: justify;">
 texto texto texto
</p>

### 5.1 Diagrama de classes

### 5.2 Diagrama de pacotes

### 5.3 Diagrama de comunicação

<!-- Fim Ricardo -->

<!-- Lucas e Victor -->

## 6. Visão de processos

<p style="text-align: justify;">
 texto texto texto
</p>

### 6.1 Diagrama de atividades

### 6.2 Diagrama de sequência

<!-- Fim Lucas e Victor -->

<!-- Luis -->

## 7. Visão de implantação

<p style="text-align: justify;">
 Para fornecer uma base que permitirá compreender a distribuição física do sistema em um conjunto de nós de processamento, uma visualização arquitetural chamada visualização de implementação é utilizada no fluxo de trabalho. A visão de implantação ilustra a distribuição do processamento em um conjunto de nós do sistema, incluindo a distribuição física dos processos e threads. Ela é refinada durante cada iteração.
</p>

### 7.1 Diagrama de componentes

O Diagrama de Componentes fornece uma visão geral de um sistema de software, mostrando o relacionamento entre os diferentes componentes deste sistema. Este diagrama geralmente é desenvolvido para ajudar a modelar os detalhes da implementação e para verificar novamente se todos os aspectos dos requisitos do sistema estão sendo cobertos pelo desenvolvimento planejado. </br> 
O Diagrama de componentes é formado pelos símbolos abordados no documento do [diagrama de componentes](../../Modelagem/DiagramasEstaticos/DiagramaDeComponentes.md).

![Diagrama de Componentes](../../assets/diagramaComponentes/Diagrama%20de%20Componentes.drawio.png)

<h6 align = "center">Diagrama de Componentes</h6>

### 7.2 Diagrama de implantação

<p style="text-align: justify;">
 Ser_Fit é uma aplicação mobile que segue o modelo de camadas, em que existe as camadas: frontend (representada pelo aplicativo feito com ReactJS), backend (representado pelo servidor NodeJS) e a base da dados (representado pelo banco PostgreSQL). O diagrama de implementação possui representações dessas camadas juntamente com a camada de interface do cliente que tem acesso apenas a interface do frontend. O usuário acessa por meio de um aplicativo nativo e o frontend realiza requisições ao backend, que por sua vez realiza os serviços solicitados, armazenando e buscando os dados necessários na base de dados.
</p>

![Diagrama de Implantação](../../assets/implantacao/diagrama-implantacao2.png)

<h6 align = "center">Diagrama de Implantação</h6>

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
 texto texto texto
</p>

## 10. Qualidade de Software

<p style="text-align: justify;">
 texto texto texto
</p>

<!-- Fim Wesley -->

## Referências Bibliográficas

- Conceito: Visão de Implementação. Disponível em < https://www.cin.ufpe.br/~gta/rup-vc/core.base_rup/guidances/concepts/deployment_view_64CB74A6.html > Acesso 07 de Setembro de 2022.
- O que é diagrama de componentes UML?. Disponível em https://www.lucidchart.com/pages/pt/diagrama-de-componentes-uml. Acesso em: 07 de Setembro de 2022.
- Component Diagram. Disponível em: https://www.smartdraw.com/component-diagram/#:~:text=A%20component%20diagram%2C%20also%20known,is%20covered%20by%20planned%20development. Acesso 07 de Setembro de 2022.

## Histórico de Versionamento

| Versão | Alteração           | Autor(es) | Revisor(es) |
| ------ | ------------------- | --------- | ----------- |
| 1.0    | Criação do template | Gustave   | -           |
| 1.1    | Adicionado descrição do tópico de Diagrama de Implantação e refências | Luis Gustavo | --- |
| 1.2 | Adicionado diagrama de implantação e diagrama de componentes | Luis Gustavo | --- |
