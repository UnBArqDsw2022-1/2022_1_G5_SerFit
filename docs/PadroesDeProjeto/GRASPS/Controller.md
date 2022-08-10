# Controller

## 1. Introdução

O Controller, ou Controlador, é um padrão que é responsável por atribuir eventos do sistema a classes que não estão relacionadas com a interface do usuário [1]. Existem duas alternativas para um objeto Controlador: 
* Um Controlador para todo o sistema;
* Um Controlador por caso de uso.

Portanto, um Controlador pode ser definido como o primeiro objeto após a camada de interface do usuário que recebe e coordena as operações do sistema, delegando as ações necessárias para os outros objetos. [2]

## 2. Uso no Projeto

O padrão Controlador está sendo utilizado no Backend do projeto SerFit, sendo os controladores os responsáveis por receber as requisições e enviar as respostas para o usuário.
Na imagem abaixo, é possível observar a implementação da classe UserController, que é a controladora que lida com os usuários do sistema: </br>


![alt text](../../assets/controller/codigoController.png ':size=800')
<h6 align = "center">Figura 1: Trecho do código do UserController </br> Autores: Grupo 5 </h6>

## 3. Referências

[1] SILVA, R. F. Controller – Padrões GRASP. Disponível em: <https://www.ramonsilva.net/post/controller-padr%C3%B5es-grasp>. Acesso em: 10 ago. 2022.

‌[2] GRASP (object-oriented design). Disponível em: <https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)#:~:text=The%20controller%20pattern%20assigns%20the>. Acesso em: 10 ago. 2022.

## 4. Histórico de Versionamento


| Versão | Alteração                        | Autor(es)    | Revisor(es) |
| ------ | -------------------------------- | ------------ | ----------- |
| 1.0    | Criação do documento             | Lucas Gomes | ---         |
