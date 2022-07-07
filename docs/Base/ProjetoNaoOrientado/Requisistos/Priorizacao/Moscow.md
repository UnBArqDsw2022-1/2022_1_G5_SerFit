# Priorição MoSCoW

## 1. Introdução

<p style="text-align: justify;">
Em um projeto de Engenharia de Software, em que o tempo é fixo, é necessário entender a importância relativa do trabalho a ser feito para progredir e cumprir os prazos. A priorização pode ser aplicada a requisitos/histórias de usuário, tarefas, produtos, casos de uso, critérios de aceitação e testes, embora seja mais comumente aplicada a requisitos/histórias de usuário.
</p>

<p style="text-align: justify;">
O MoSCoW é um framework de priorização de funcionalidades desenvolvido por Dai Clegg na Oracle. O acrônimo representa quatro categorias diferentes de iniciativas:
</p>

- **M**ust: Obrigatorio ter;
- **S**hould: Deveria ter;
- **C**ould: Poderia ter;
- **W**ould/**W**ant/**W**on't: Não terão no momento.

## 2. Metodologia

<p style="text-align: justify;">
A partir de técnicas de elicitação como: <a href="https://unbarqdsw2022-1.github.io/2022_1_grupo5/#/pages/Base/ProjetoNaoOrientado/Requisistos/Elicitacao/Brainstorm">Brainstorm</a> e <a href="https://unbarqdsw2022-1.github.io/2022_1_grupo5/#/pages/Base/ProjetoNaoOrientado/Requisistos/Elicitacao/Introspeccao">Introspecção</a>, foram gerados vários requisitos contendo funcionalidades que posteriormente foram priorizados por meio da técnicas MoSCoW, gerando uma tabela com os módulos que agregam valor mais rápido ao projeto.
</p>

## 3. Resultados

| Legenda | Significado             |
| ------- | ----------------------- |
| BS      | Brainstorm              |
| IN      | Introspecção            |
| QT      | Questionário            |
| FU      | FURPS+                  |
| RF      | Requisitos Funcional    |
| RFN     | Requisito não funcional |

| ID   | Descricão | Tipo de Requisito | Prioridade        |
| --- | --- | --- | --- |
| BS01 | O usuário deve capaz de se cadastrar e fazer login na plataforma | RF | Must |
| BS02 | O usuário deve capaz de se editar o seu cadastro | RF | Must |
| BS03 | O Prestador de Serviço deve capaz de classificar o tipo de serviço                        | RF                | Should            |
| BS04 | Um usuário deve ser capaz de recomendar um prestador de serviço para outro usuário        | RF                | Could             |
| BS05 | A plaforma deve agendar um grade horária com os serviços agendados                        | RF                | Should            |
| BS06 | O usuário deve poder fazer uma vídeo chamada para o atendimento do serviço adquirido      | RF                | Could             |
| BS07 | O usuário deve ser capaz de buscar prestadores de serviços                                               | RF                | Should            |
| BS08 | O usuário deve ser capaz de filtrar serviços por nome e avaliação | RF | Could |
| BS09 | O usuário deve conseguir avaliar prestadores de serviço e vice versa | RF | Could |
| BS10 | A plataforma deve ter uma seção de destaque                                               | RF                | Would/Wan't/Won't |
| BS11 | O Prestador de serviço deve ser capaz de cadastrar, editar e excluir um serviço                                 | RF | Must |
| BS12 | O Prestador de serviço visualizar o perfil de seus clientes | RF | Should |
| BS13 | A plataforma deve fornecer link de lojas parceiras que vendem produtos fitness | RF | Could |
| BS14 | A plataforma deve ter chat de mensagens para permitir interação entre os usuários | RF | Should |
| BS15 | O usuário deve capaz de fazer logout na plataforma | RF | Must |
| BS16 | O usuário poderá ver e editar as informações da sua conta conta. | RF | Should |
| BS17 | O Prestador de serviço poderá ver e escolher os serviços que deseja prestar | RF | Should |
| IN01 | O usuário deve ser capaz de buscar serviços | RF | Should |
| IN02 | O usuário deve ser capaz de filtrar serviços | RF | Could |
| IN03 | O usuário deve conseguir ver atividades, treinos, exercícios | RF | Must |
| IN04 | O usuário deve ser capaz de encontrar prestadores de serviço | RF | Should |
| IN05 | A plataforma deve ter chat de mensagens para permitir interação entre os usuários         | RF                | Should            |
| IN06 | O usuário deve conseguir definir objetivos dentro da plataforma                           | RF                | Could             |
| IN07 | O usuário deve conseguir compartilhar um serviço | RF | Could |
| IN08 | A plataforma deve permitir a adição de treinos em texto, fotos e vídeos | RF | Must |
| IN09 | A plataforma deve permitir a edição de conteúdo e deleção de treinos | RF | Must |
| QT01 | O software deve rodar prioritariamente em plataforma Mobile                                   | RNF               | Must
| QT02 | O aplicativo deve mostrar o treino do usuário | RF | Must
| QT03 | O aplicativo deve ter uma base de dados de exercícios                                         | RF                | Must
| QT04 | O aplicativo deve ter uma forma de fidelização para incentivar os consumidores de serviços | RF | Could
| QT05 | O aplicativo deve mostrar os serviços cadastrados pelos prestadores | RF | Should
| QT06 | O aplicativo deve disponibilizar perfil do profissional | RF | Should
| QT07 | O aplicativo deve dispor de filtro por categoria de profissional | RF | Should
| QT08 | A aplicação deve permitir compartilhamento de serviços	 | RF | Could
| QT09 | O usuário deve conseguir salvar e criar seus próprios planos de exercícios                    | RF                | Should
| QT10 | O software deve permitir a filtragem de profissionais por região                              | RF                | Could
| QT11 | A aplicação deve ser fácil de utilizar por usuários de diversas idades, inclusive idosos      | RNF               | Must
| QT12 | A aplicação deve mostrar atividades que eu posso realizar perto de mim | RF | Must
| QT13 | A aplicação deve mostrar exercícios | RF | Must
| QT14 | A aplicação deve prover explicações sobre os exercícios em texto, imagens, vídeos, etc... | RF | Must
| QT15 | A aplicação deve permitir a contratação de um serviço | RF | Must
| QT16 | A aplicação deve permitir o cancelamento de um serviço | RF | Must
| FU01 | O aplicativo não pode demorar mais de 2s para abrir ou Logar. | RNF | Should |
| FU02 | O aplicativo não pode ficar indisponível. | RNF | Must |
| FU03 | Os usuários devem conseguir encontrar a funcionalidade desejada rapidamente | RNF | Should |
| FU04 | O aplicativo deve proteger os dados dos usuários. | RNF |  Must  |
| FU05 | O aplicativo deve apresentar persistência de login | RNF | Could  |
| FU06 | O aplicativo deve acessar e persistir os dados em um banco de dados eficiente | RNF |  Must  |
| FU07 | O aplicativo deve ser capaz de realizar atualizações de versões periodicamente | RNF | Should |
| FU08 | O aplicativo deverá possuir um backend com a parte logica separada de sua interface | RNF | Should |
| FU09 | O aplicativo deverá possuir portabilidade para todos as plataformas mais atuais de Android, IOS e Navegadores Web | RNF | Could  |
| FU10 | O aplicativo deverá possuir uma imagem conteinerizada para facil onboarding dos desenvolvedores | RNF | Would/Wan't/Won't  |
| FU11 | O deploy to sistema deverá ser feito em uma plataforma de servidores na nuvem com suas chaves de segurança armazenadas de forma segura e secreta | RNF | Would/Wan't/Won't  |
| FU12 | O aplicativo deverá possuir conexão com plataforma de envio de emails para confirmações | RNF | Could  |
| FU13 | O aplicativo deverá possuir uma cobertura de testes maior do que 70% | RNF | Should |
| FU14 | O aplicativo deverá possuir documentação legivel e compreensivel sobre a instalação e as boas praticas de desenvolvimento | RNF | Must |
| FU15 | O aplicativo deverá possuir uma instância de testes e uma instancia de produçāo | RNF | Could  |
| FU16 | O aplicativo deve ter uma interface coerente com padrão de cores e ícones. | RNF | Should |
| FU17 | O aplicativo deve ser intuitivo e de fácil utilização. Com layouts semelhantes à aplicações de mídias sociais já estabelecidas. | RNF | Could  |
| FU18  | A capacidade de um usuário conectar nosso aplicativo aos seus contatos, selecionar seu amigo e enviar uma mensagem pré-preenchida. | RF | Would/Wan't/Won't  |
| FU19  | O usuário deve ser notificado de ações como horários de agendamentos, mensagens e conteúdos de profissionais favoritados. | RF | Could  |

## 4. Conclusão

<p style="text-align: justify;">
Após feita a priorização, os resultados obtidos referente à porcetagem dos requisitos em cada nível de prioridade foi:
</p>

![alt text](../../../../../assets/priorizacao/moscow.png)

## 5. Referências

- Moscow Priorization. Disponível em < https://www.agilebusiness.org/page/ProjectFramework_10_MoSCoWPrioritisation > Acesso 26 de Julho de 2022.
- O Framework de priorização MoSCoW. Disponível em < https://vidadeproduto.com.br/framework-moscow/ > Acesso 26 de Julho de 2022.

## Histórico de Versionamento

| Versão | Alteração | Autor(es) | Revisor(es) |
| --- | --- | --- | --- |
| 1.0 | Criação do Documento com introdução e metodologia | Luis Gustavo | --- |
| 1.1 | Adicionado requisitos com a referente priorização | Luis Gustavo | --- |
| 1.2 | Revisão da priorização com pequenas alterações | Luis Gustavo | --- |
| 1.3 | Revisando Documento | Ricardo Loureiro | --- |
| 1.4 | Adição da priorização do requisitos de questionário e FURPS+ | Luis Gustavo | --- |
