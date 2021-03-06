# FURPS+

## 1. Introdução

<p style="text-align: justify;"> O presente documento tem por objetivo apresentar e tornar explícito os requisitos não funcionais do projeto. </p>

## 2. Metodologia

<p style="text-align: justify;">A metodologia abordada durante a produção desse documento foi a FURPS+ que é um sistema utilizado para a classificação dos requisitos, em que cada letra representa os atributos de Qualidade de Software correspondente:
</p>

1. Functionality: Refere-se a todo aspecto que relaciona-se com a funcionalidade dos requisitos.

2. Usability: Atributo que analisa a interface com o usuário e como o usuário interage com a plataforma.

3. Reliability: Relacionada à integridade, conformidade e interoperabilidade do software.

4. Performance: Traduz o desempenho e performace da plataforma.

5. Supportability: Correlaciona-se com testabilidade, manutenibilidade, escalabilidade e outros.

<br>

## 3. Resultados

**Legenda**

- QT: Questionário
- RF: Requisito Funcional
- RNF: Requisito não Funcional
- FU: FURPS+

<center>

| ID     | Tipo de Requisito | Descrição |
| :----: | :----: | :----: |
| FU01 | RNF |                                                 O aplicativo não pode demorar mais de 2s para abrir ou Logar.                                    |
| FU02 | RNF |                                                    O aplicativo não pode ficar indisponível.                                                     |
| FU03 | RNF |                                     Os usuários devem conseguir encontrar a funcionalidade desejada rapidamente                                    |
| FU04 | RNF |                                                O aplicativo deve proteger os dados dos usuários.                                                 |
| FU05 | RNF |                                                O aplicativo deve apresentar persistência de login                                                |
| FU06 | RNF |                                       O aplicativo deve acessar e persistir os dados em um banco de dados eficiente                              |
| FU07 | RNF |                                    O aplicativo deve ser capaz de realizar atualizações de versões periodicamente                                |
| FU08 | RNF |                               O aplicativo deverá possuir um backend com a parte logica separada de sua interface                                |
| FU09 | RNF |                O aplicativo deverá possuir portabilidade para todos as plataformas mais atuais de Android, IOS e Navegadores Web                 |
| FU10 | RNF |                         O aplicativo deverá possuir uma imagem conteinerizada para facil onboarding dos desenvolvedores                          |
| FU11 | RNF | O deploy to sistema deverá ser feito em uma plataforma de servidores na nuvem com suas chaves de segurança armazenadas de forma segura e secreta |
| FU12 | RNF |                             O aplicativo deverá possuir conexão com plataforma de envio de emails para confirmações                              |
| FU13 | RNF |                                       O aplicativo deverá possuir uma cobertura de testes maior do que 70%                                       |
| FU14 | RNF |            O aplicativo deverá possuir documentação legivel e compreensivel sobre a instalação e as boas praticas de desenvolvimento             |
| FU15 | RNF |                                 O aplicativo deverá possuir uma instância de testes e uma instancia de produçāo                                  |
| FU16 | RNF |                                   O aplicativo deve ter uma interface coerente com padrão de cores e ícones.                                     |
| FU17 | RNF |     O aplicativo deve ser intuitivo e de fácil utilização. Com layouts semelhantes à aplicações de mídias sociais já estabelecidas .             |
| FU18  | RF |        A capacidade de um usuário conectar nosso aplicativo aos seus contatos, selecionar seu amigo e enviar uma mensagem pré-preenchida.        |
| FU19  | RF |           O usuário deve ser notificado de ações como horários de agendamentos, mensagens e conteúdos de profissionais favoritados.              |


</center>

<center>

|     FURPS      | Requisito                                                                 |
| :------------: | ------------------------------------------------------------------------- |
| Functionality  | Corresponde aos requisitos funcionais que serão elicitados separadamente. |
|   Usability    | RNF03, RNF10, RNF14, RNF16, RNF17                                         |
|  Reliability   | RNF04, RNF06, RNF08, RNF11, RNF13                                         |
|  Performance   | RNF01, RNF02, RNF07                                                       |
| Supportability | RNF02, RNF05, RNF09, RNF15, RFN12                                         |

</center>

## Bibliografia

* SERRANO, Maurício; SERRANO, Milene; Requisitos - Aula 13;
* https://qualidadebr.wordpress.com/2008/07/10/furps#:~:text=FURPS%2B%20%C3%A9%20um%20sistema%20paraRational%20Unified%20Process%20(RUP)%3A

## Histórico de Versionamento

| Versão | Alteração                         | Autor(es) |    Revisor(es)     |
| ------ | --------------------------------- | :-------: | :----------------: |
| 1.0    | Criação do documento              |  Daniel   | Gustave e Fernando |
| 1.1    | Adiçāo de RNFs                    | Fernando  |  Gustave e Daniel  |
| 1.2    | Correção e revisão da v1.0 e v1.1 |  Gustave  |         -          |
| 1.3    | Correção da v1.2 e adição RNF16, RNF17 e RF17 |  Adrian   |         -          |
| 1.4    | Adicionado legenda e IDs para os requisitos |  Luis Gustavo   |         -          |
