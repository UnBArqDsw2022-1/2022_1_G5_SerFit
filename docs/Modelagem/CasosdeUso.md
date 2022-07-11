# Casos de Uso

## 1. Introdução
<p align = "justify">
Um caso de uso é um classificador comportamental que especifica uma unidade de funcionalidade executada por um ou mais sujeitos aos quais o caso de uso é aplicado em colaboração com um ou mais atores. Cada caso de uso deve fornecer algum resultado de valor observável para atores ou outras partes interessadas no sistema.
</p>
  
## 2. Metodologia
<p align = "justify">
Também conhecido como diagrama comportamental na notação UML, o diagrama de casos de uso é usado para descrever um conjunto de ações que um sistema ou conjunto de sistemas deve desempenhar em colaboração com um ou mais usuários externos ao sistema. Com o diagrama de casos de uso é possível especificar:
</p>

<ul>
<li>	requisitos (externos), usos necessários de um sistema em projeto ou análise (sujeito): para capturar o que o sistema deve fazer;
<li>	a funcionalidade oferecida por um assunto: o que o sistema pode fazer;
<li>	requisitos que o assunto especificado impõe em seu ambiente: definindo como o ambiente deve interagir com o assunto para que ele possa executar seus serviços.
</ul>

<p align = "justify">
Seus principais elementos estão representados na Figura 1.
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/48844857/156845916-e9ba321f-3898-42bc-96e6-cd0c31602852.jpg" width="800">
  <br><b>Figura 1: Principais elementos do diagrama de casos de uso</b>
</p>

### 2.1. Casos de uso
<p align = "justify">
A especificação UML não fornece diretrizes sobre nomes de casos de uso. O único requisito é que cada caso de uso tenha um nome. Devemos apenas seguir a definição de caso de uso para dar algum nome àquela unidade de funcionalidade executada por um sistema que fornece algum resultado observável e útil para um ator como, por exemplo: fazer compra, atualizar assinatura, transferir fundos, gerenciar conta, entre outros.
</p>

### 2.2. Atores
<p align = "justify">
Um ator é um classificador comportamental que especifica um papel desempenhado por uma entidade externa que interage com o sistema (por exemplo, trocando sinais e dados), um usuário humano do sistema projetado ou algum outro sistema ou hardware usando serviços do sistema. 
</p>

### 2.3. Assunto/sujeito
<p align = "justify">
Um assunto é um classificador (incluindo subsistema, componente ou mesmo classe) que representa um negócio, sistema de software, sistema físico ou dispositivo sob análise, projeto ou consideração, tendo algum comportamento, e ao qual um conjunto de casos de uso se aplica.
</p>

### 2.4. Relacionamentos
<p align = "justify">
Definem como os atores e casos de uso interagem entre si e podem ser de 4 tipos:
</p>

<ul>
<li>	Generalização;
<li>	Associação;
<li>	Estender;
<li>	Incluir.
</ul>

### 2.4.1. Generalização
<p align = "justify">
A generalização entre casos de uso é semelhante à generalização entre classes – o caso de uso filho herda as propriedades e o comportamento do caso de uso pai e pode substituir o comportamento do pai. Ela é representada como uma linha sólida direcionada, com uma grande ponta de seta triangular oca, do caso de uso mais específico para o caso de uso geral, como mostra o exemplo da Figura 2.
</p>
 
<p align="center">
<img src="https://user-images.githubusercontent.com/48844857/156846626-64fa250e-69ce-457f-a5ba-b6940eaaffcd.jpg" width="400">
  <br><b>Figura 2: Exemplo de Generalização</b>
</p>

### 2.4.2. Associações
<p align = "justify">
Cada caso de uso representa uma unidade de funcionalidade útil que os sujeitos fornecem aos atores. Uma associação entre um ator e um caso de uso indica que o ator e o caso de uso de alguma forma interagem ou se comunicam, como mostra o exemplo da Figura 3.
</p>
 
<p align="center">
<img src="https://user-images.githubusercontent.com/48844857/156846969-149c3df4-e0ba-4399-890d-2a06d8b83d97.jpg" width="400">
  <br><b>Figura 3: Exemplo de Associação</b>
</p>

### 2.4.3. Estender
<p align = "justify">
Estender é um relacionamento direcionado que especifica como e quando o comportamento definido no caso de uso de extensão geralmente suplementar (opcional) pode ser inserido no comportamento definido no caso de uso estendido. Ele é representado como uma linha tracejada com uma ponta de seta aberta direcionada do caso de uso estendido para o caso de uso base. A seta é rotulada com a palavra-chave «extend», como mostra o exemplo da Figura 4.
</p>
 
<p align="center">
<img src="https://user-images.githubusercontent.com/48844857/156847023-cee8a818-990f-420e-913b-895202abde02.jpg" width="400">
  <br><b>Figura 4: Exemplo de Estender</b>
</p>

### 2.4.4. Incluir
<p align = "justify">
A inclusão de caso de uso é um relacionamento direcionado entre dois casos de uso que é usado para mostrar que o comportamento do caso de uso incluído (a adição) é inserido no comportamento do caso de uso base. A relação de incluir pode ser usada para:
</p>

<ul>
<li>	simplificar o caso de uso grande dividindo-o em vários casos de uso;
<li>	extrair partes comuns dos comportamentos de dois ou mais casos de uso.
</ul>

<p align = "justify">
Esse relacionamento é representado por uma seta tracejada com uma ponta de seta aberta do caso de uso base para o caso de uso incluído (parte comum). A seta é rotulada com a palavra-chave «incluir», como mostra o exemplo da Figura 5.
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/48844857/156847139-513d7996-c468-4a21-9237-2e2e68508dca.jpg" width="400">
  <br><b>Figura 5: Exemplo de Incluir</b>
</p>

## 3. Diagramas
### 3.1. Fluxo de Registrar-se 
 
<p align="center">
<img src="https://user-images.githubusercontent.com/48844857/156847412-e357349f-f4dc-4383-b353-376f704f1b47.jpg">
  <br><b>Figura 6: Diagrama do fluxo de Registrar-se</b>
</p>

<center>
  
|  UC01  | Informações                                                                 |
| :------: | :---------------------------------------------------------------------------: |
| Descrição | O usuário deve ser capaz de realizar um registro                         | 
| Pré-Condições | Acesso à internet em um dispositivo válido                           | 
| Autor | Usuário (Personal ou Cliente)                                                                      | 
| Ação | Informar E-mail, nome e senha                                         |
| Fluxo principal | <ul> <li> O usuário acessa a aplicação <li> O usuário informa seu E-mail, nome e senha <li> O usuário realiza o cadastro</ul>|
| Pós-condições | O usuário poderá utilizar os serviços do aplicativo disponibilizados para seu tipo de usuário(Personal ou Cliente)                 |
  
</center>

### 3.2. Fluxo de Pesquisar Profissionais

<p align="center">
<img src="https://user-images.githubusercontent.com/48844857/156847608-75337053-6150-4f87-a642-af1cc5bd3b5a.jpg">
  <br><b>Figura 7: Diagrama do fluxo de Pesquisar Profissionais</b>
</p>

<center>
  
|  UC02  | Informações                                                                 |
| :------: | :---------------------------------------------------------------------------: |
| Descrição | O Cliente deve ser capaz de consultar os profissionais disponíveis                    | 
| Pré-Condições | Acesso à internet e um cadastro no aplicativo                        | 
| Autor | Cliente                                                                      | 
| Ação | O Cliente pesquisa um Profissional                                               |
| Fluxo principal | <ul> <li> O Cliente acessa a aplicação <li> O Cliente realiza o login <li> O Cliente pesquisar Profissionais <li> O Cliente escolhe um Profissional para ver detalhes</ul>|
| Pós-condições | O Cliente poderá entrar em contato com o Profissional encontrado     |
  
</center>

### 3.3. Fluxo de Conversar com Cliente

<p align="center">
<img src="https://user-images.githubusercontent.com/48844857/156847697-0c3e264e-b90f-48f0-9edb-5f6e17757a5a.jpg">
  <br><b>Figura 8: Diagrama do fluxo de Conversar com Cliente</b>
</p>

<center>

|  UC03  | Informações                                                                 |
| :------ | :---------------------------------------------------------------------------: |
| Descrição | O Profissional deve ser capaz de conversar com seu Cliente                     | 
| Pré-Condições | Acesso à internet e um cadastro no aplicativo                        | 
| Autor | Profissional                                                                      | 
| Ação | O Profissional conversa com um Cliente                                               |
| Fluxo principal | <ul> <li> O Profissional acessa a aplicação <li> O Profissional realiza o login <li> O Profissional entra em chat <li> O Profissional será disponibilizado uma conversa com seu Cliente</ul>|
| Pós-condições | O Profissional poderá conversar com o Cliente que o contratou      |

</center>

## Bibliografia
>SERRANO, Maurício; SERRANO, Milene; Requisitos - Aula 11;

>UML Use Case Diagrams. UML Diagrams. Disponível em:  https://www.uml-diagrams.org/use-case-diagrams.html. Acesso em: 04/03/2022.

## Histórico de Versionamento

| Versão | Alteração                        | Autor(es)         | Revisor |
| ------ | -------------------------------- | ----------------- | ------- |
| 1.0    | Criação do Documento             | Daniel | ---     |
| 2.0    | Adicionando três casos de uso             | Daniel | Gustave     |

