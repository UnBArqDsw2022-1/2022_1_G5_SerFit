# MVC

## 1. Introdução

O MVC é uma sigla do termo em inglês Model (modelo) View (visão) e Controller (Controle) que facilita a troca de informações entre a interface do usuário aos dados no banco, fazendo com que as respostas sejam mais rápidas e dinâmicas.

Apesar de muitas pessoas considerarem essa sigla como um padrão de design de interface, na verdade ele é um padrão de arquitetura de software responsável por contribuir na otimização da velocidade entre as requisições feitas pelo comando dos usuários.

A utilização do padrão MVC traz como benefício o isolamento das regras de negócios da lógica de apresentação, que é a interface com o usuário. Isto possibilita a existência de várias interfaces com o usuário que podem ser modificadas sem a necessidade de alterar as regras de negócios, proporcionando muito mais flexibilidade e oportunidades de reuso das classes.

Model - A camada Model (modelo) é responsável pela leitura, escrita e validação dos dados. Nesta camada são implementadas as regras de negócio. Regras de negócios são as definições de como a empresa em questão faz negócios. É a declaração de como a empresa trabalha, todos os processos para execução do serviço, ou entrega do produto com que a empresa trabalha.

View - A camada View (visão) é responsável pela interação com o usuário. Nesta camada são apresentados os dados ao usuário. Os dados podem ser entregues em vários formatos, dependendo do que for preciso, como páginas HTML, arquivos XML, documentos, vídeos, fotos, músicas etc.

Controller - A camada Controller (controlador) é responsável por lidar com as requisições do usuário. Ela gerencia as ações realizadas, fala qual Model e qual View utilizar para que a ação seja completada.

## 2. Usabilidade  

Não foi aplicado no nosso projeto, mas poderia ser tendo como base toda a explicação de controle do MVC.

## 3. Aplicação

Model
![Exemplo MVC Model](/2022_1_G5_SerFit/docs/assets/MVC/model.png)
View
![Exemplo MVC View](/2022_1_G5_SerFit/docs/assets/MVC/view.png)
Controller
![Exemplo MVC Controller](/2022_1_G5_SerFit/docs/assets/MVC/controller.png)

## 4. Referências

- Vitor Zucher. Publicado em Jul 17, 2020. O que é padrão MVC? Entenda arquitetura de softwares!. Disponível em < <https://www.lewagon.com/pt-BR/blog/o-que-e-padrao-mvc> > . Acesso em: 08 de Agosto de 2022

- Anderson Irias. Publicado em 14 de maio de 2021. MVC conceito e exemplo em Node.js . Disponívem em < <https://irias.com.br/blog/mvc-conceito-e-exemplo-em-node-js/> > . Acessado em: 10/08/2022

## Histórico de Versionamento

| Versão | Alteração            | Autor(es)      | Revisor(es) |
| ------ | -------------------- | -------------- | ----------- |
| 1.0    | Criação do documento | Felipe Correia | ----------- |
