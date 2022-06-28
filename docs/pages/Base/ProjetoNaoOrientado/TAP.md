# Termo de Abertura do Projeto

## 1. Introdução

<p style="text-align: justify;">
O presente termo tem a finalidade de definir os objetivos do projeto e mapear seus riscos e formas de prevenção e mitigação.
</p>

## 2. Projeto

### 2.1. Descrição

<p style="text-align: justify;">
O projeto do aplicativo fitness tem a finalidade de aproximar usuários que desejam manter e evoluir sua saúde com pessoas capacitadas e indicadas para essa função, como <i>personal trainers</i>, nutricionistas, professores de yoga e afins. Com a aplicação será possível unir profissionais em comunidades, onde eles poderão postar conteúdos, serem seguidos por usuários, divulgar seu trabalho online e combinar encontros como aulas presenciais. Os usuários não profissionais poderão acessar conteúdos recomendados e poderão aprimorar seu estilo de vida com mais saúde.</p>

### 2.2. Justificativa

<p style="text-align: justify;">
Durante a pandemia, muitos perceberam uma dificuldade em manter suas atividades físicas, principalmente no início, pois muitos perderam acesso às academias e somente pessoas com algum poder aquisitivo ou experiência, tiveram acesso ao suporte para manter uma rotina de atividades físicas. Com a aplicação, os profissionais conseguirão se aproximar, por demanda, dos seus clientes interessados em melhoria da qualidade de vida e saúde. Terão acesso a um ambiente focado nesse tipo de estilo de vida, juntando pessoas com o mesmo interesse e profissionais categorizados e recomendados. O objetivo é possibilitar o contato remoto a um atendimento para a qualidade de vida por pessoas recomendadas em uma comunidade organizada.</p>

### 2.3. Requisitos de Alto Nível

Os requisitos que representam os objetivos principais:

- Deve ser um aplicativo mobile;
- Deve possibilitar a criação de um corpo de profissionais (_Gym_);
- Deve aproximar profissionais de usuários interessados em seus serviços;
- Possibilitar o compartilhamento de arquivos como planos de alimentação;
- Possibilitar a recomendação de profissinais;
- Deve permitir o contato direto dos ususários com os profissionais.

### 2.4. Planejamento

#### 2.4.1. Riscos

<p style="text-align: justify;">
Alguns dos riscos comuns às disciplinas de projeto que os integrantes da equipe já cursaram foram listados abaixo, além de alguns riscos específicos do projeto proposto. Foram propostas, também, formas de prevenção e mitigação dos riscos.
</p>

| **Risco**                                               | **Ação Preventiva**                                                                                                                                                                                                                                                                                                                                           | **Ação Reativa**                                                                                                            |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Membros do time desistirem da disciplina                | <ul><li>Comunicação constante entre os membros</li><li>Perguntar sobre as dificuldades dos membros nas reuniões</li><li>Organizar issues atendíveis em uma sprint para gerar satisfação</li><li>Pair programming para distribuir conhecimento e facilitar o cumprimento de issues e a comunicação</li></ul>                                                   | <ul><li>Redistribuir tasks</li><li>Comunicar falta de rendimento para os gerentes</li><li>Rever prazos de entrega</li></ul> |
| Atrasos nas Entregas de features                        | <ul><li>Planejamento das Sprints</li><li>Priorizar issues</li><li>Acompanhar complexidade das issues</li><li>Definir máximo de complexidade por sprint</li><li>Acompanhar o velocity e o burndown do time</li></ul>                                                                                                                                           | <ul><li>Rever prazos</li><li>Retirar features menos prioritárias</li></ul>                                                  |
| Dificuldade em se reunir de forma síncrona              | <ul><li>Mapear os horários disponíveis dos membros</li><li>Marcar reunião semanal fixa</li><li>Utilizar comunicação assíncrona para coletar dificuldades dos membros</li></ul>                                                                                                                                                                                | <ul><li>Remarcar reuniões</li></ul>                                                                                         |
| Configuração de ambiente                                | <ul><li>Implementar Dockerfile dos frameworks</li><li>Escolher tecnologias compatíveis com os hardwares dos membros</li><li>Documentar instalação dos softwares</li></ul>                                                                                                                                                                                     | <ul><li>Reunião para auxiliar os membros</li></ul>                                                                          |
| Dificuldades e falta de conhecimento com as tecnologias | <ul><li>Incentivar compartilhamento de materiais e aulas no Discord</li><li>Pair Programming entre membros com mais e menos experiência</li></ul>                                                                                                                                                                                                             | <ul><li>Gravar dojos e tutoriais</li></ul>                                                                                  |
| Falta de apelo do aplicativo                            | <ul><li>Elicitar requisitos devidamente</li><li>Consultar público alvo</li><li>Validar protótipos com os possíveis usuários</li><li>Controlar e evitar bugs e erros</li><li>Boas práticas de programação</li></ul>                                                                                                                                            | <ul><li>Rever requisitos</li><li>Melhorar features</li></ul>                                                                |
| Quantidade de Bugs e Erros na aplicação                 | <ul><li>Padronizar código(linters)</li><li>Configurar CI do repositório</li><li>Implementar testes(na medida do possível)</li><li>Aprovar mudanças no código somente com revisão (de mais de uma pessoa quando possível)</li><li>Mudanças no código somente com Pull Requests</li><li>Testes de integração / Caixa preta antes de finalizar a issue</li></ul> | <ul><li>Refatorar código</li><li>Issues de correção de erros</li></ul>                                                      |

#### 2.4.2. Tempo

<p style="text-align: justify;">
O planejamento inicial do tempo foi representado baseando-se nos prazos de entrega da própria disciplina. Serão aprimorados a partir da priorização dos requisitos. Devem ser reservados prazos para a revisão dos artefatos e implementações e uma margem de erro prevendo contra-tempos.
</p>

| Entrega                    | Resumo                                                                             | Prazo da disciplina | Prazo de entrega | Prazo de revisão |
| -------------------------- | ---------------------------------------------------------------------------------- | ------------------- | ---------------- | ---------------- |
| Base                       | Projeto Não Orientado a Abordagens Específicas (Requisitos e planejamento inicial) | 27/06               | 24/06            | 26/06            |
| Modelagem                  | Orientado a Abordagens Tradicionais (Notação UML)                                  | 15/07               | 11/07            | 14/07            |
| Padrões de projeto         | GRASP, GoF e Emergentes                                                            | 12/08               | 08/08            | 11/08            |
| Arquitetura e Reutilização | Estilos e Padrões arquiteturais, Reutilização                                      | 09/09               | 05/09            | 08/09            |

**Prazos dos Artefatos:**

| Entrega                                  | Artefato                          | Início | Prazo de entrega | Prazo de revisão |
| ---------------------------------------- | --------------------------------- | ------ | ---------------- | ---------------- |
| Base                                     | Design Sprint                     | 15/06  | 17/06            | 18/06            |
| Base                                     | Mapa Mental                       | 16/06  | 18/06            | 19/06            |
| Base                                     | Escolhas metodológicas e BPMN     | 16/06  | 19/06            | 20/06            |
| Base                                     | Rich Picture                      | 18/06  | 20/06            | 20/06            |
| Base                                     | Diagrama Causa e Efeito           | 19/06  | 21/06            | 22/06            |
| Base                                     | Léxicos                           | 20/06  | 23/06            | 24/06            |
| Base                                     | Planos de Risco, Custo e Tempo    | 21/06  | 23/06            | 24/06            |
| Modelagem                                | Diagrama de Classes               | 28/06  | 05/07            | 07/07            |
| Modelagem                                | Diagrama de Pacotes               | 28/06  | 05/07            | 07/07            |
| Modelagem                                | Diagrama de implantação           | 28/06  | 04/07            | 05/07            |
| Modelagem                                | Diagrama de Componentes           | 30/06  | 04/07            | 05/07            |
| Modelagem                                | Diagrama de Sequência             | 01/07  | 09/07            | 10/07            |
| Modelagem                                | Diagrama de Comunicação           | 01/07  | 09/07            | 10/07            |
| Modelagem                                | Diagrama de Estados               | 01/07  | 09/07            | 11/07            |
| Modelagem                                | Diagrama de Atividades            | 01/07  | 05/07            | 06/07            |
| Modelagem                                | Backlog com MOSCOW                | 06/07  | 08/07            | 10/07            |
| Revisão e melhoria de artefatos passados | ---                               | 28/06  | 08/07            | 10/07            |
| Padrões de Projeto                       | 3 Padrões de GRASPs               | 14/07  | 17/07            | 18/07            |
| Padrões de Projeto                       | 2 Padrões de GoFs criacionais     | 17/07  | 22/07            | 25/07            |
| Padrões de Projeto                       | 2 Padrões de GoFs estruturais     | 17/07  | 22/07            | 25/07            |
| Padrões de Projeto                       | 2 Padrões de GoFs comportamentais | 17/07  | 22/07            | 25/07            |
| Padrões de Projeto                       | Padrão emergente                  | 18/07  | 21/07            | 24/07            |
| Padrões de Projeto                       | Padrão emergente                  | 18/07  | 21/07            | 24/07            |
| Revisão e melhoria de artefatos passados | ---                               | 14/07  | 22/07            | 30/07            |
| Arquitetura e reutilização               | DAS Lógico                        | 14/08  | 22/08            | 30/08            |
| Arquitetura e reutilização               | DAS Implementação                 | 14/08  | 23/08            | 30/08            |
| Arquitetura e reutilização               | DAS Implantação                   | 16/08  | 24/08            | 30/08            |
| Arquitetura e reutilização               | DAS Dados                         | 16/08  | 25/08            | 30/08            |
| Arquitetura e reutilização               | Análise de reutilização           | 19/08  | 01/09            | 03/09            |
| Revisão e melhoria de artefatos passados | ---                               | 16/08  | 01/09            | 03/09            |

#### 2.4.3. Custos

<p style="text-align: justify;"> 
Deve-se considerar, em conjunto, as possibilidades de custos principais e uma margem de erro para que o projeto não incorra em diparidades econômicos.
Os softwares utilizados serão todos OpenSource ou gratuitos, por tanto, não ocorrerão gastos com licenças de software. Os membros utilizarão sistemas baseados em Linux.
A grande fonte de custo serão os recursos humanos, ou seja, o time composto de 10 membros.</p>

<p style="text-align: justify;"> Considerando a média salarial de R$ 2.500,00 para um desenvolvedor iniciante (fonte: https://www.glassdoor.com.br/Sal%C3%A1rios/programador-j%C3%BAnior-sal%C3%A1rio-SRCH_KO0,18.htm), utilizamos custo da hora de trabalho como R$ 15,63 (2500/(8 h * 20 dias úteis)), para que haja uma boa margem de erro, mesmo que a maioria dos membros esteja no nível de estagiário.</p>

<p style="text-align: justify;"> Considerando os 10 membros em 3 meses de trabalho para a entrega do MVP, trabalhando 4h diárias,  conseguimos estimar um custo de R$ 37.512,00 para o custo de cada membro. Esse custo somado ao deslocamento de cada um, 2 vezes por semana, para reuniões semanais presenciais (às quartas e sextas, durante o horário da disciplina) foi somado ao valor da passagem individual em 2022, em Brasília-DF (R$ 11,00 por dia) durante os 3 meses (R$ 264,00), totalizando R$ 40.152,00.</p>

<p style="text-align: justify;"> Como um Hardware de bom custo benefício, consideramos notebooks ASUS X515JA-EJ1792, com preços de até R$ 2.890,00 ([loja 1](https://www.magazineluiza.com.br/notebook-asus-x515ja-ej1792-intel-core-i5-1035g1-8gb-256gb-ssd-linux-156-led-backlit-tft-lcd-cinza/p/ehk7ghced0/in/note/?&seller_id=asus) e [loja 2](https://www.casasbahia.com.br/notebook-asus-x515ja-ej1792-intel-core-i5-1035g1-8gb-256gb-ssd-linux-156-quot-led-backlit-tft-lcd-cinza-1531203572/p/1531203572?utm_medium=Cpc&utm_source=google_freelisting&IdSku=1531203572&idLojista=13702&tipoLojista=3P)). Possui uma boa configuração, com processador I5 e, 8gb de Ram e SSD e não possui o custo da licença do Sistema Operacional Windows embutida. O custo com hardware totaliza R$ 28.900,00.</p>

<p style="text-align: justify;"> **O custo com pessoas e hardware totalizam R$ 69.052,00, em 3 meses de trabalho**. Considerando uma margem de erro de 20% como alguma segurança para emprevistos, **o custo final é de R$ 82.862,40**</p>

## 3. Referências

- FRANÇA, Diego; SCONETTO, João; MENDES, Mariana; ARNAUD, Victor. Dr. Down - Termo de Abertura de Projeto. Disponível em: https://fga-eps-mds.github.io/2018.1-Dr-Down/eps/TAP/. Acesso em 24 de Junho de 2022.

- EGEWARTH, Eliseu; EGEWARTH, João; GAMA, Gabriela; ALVES, Isaque. Dulce - Termo de Abertura de Projeto. Disponível em: https://github.com/fga-eps-mds/2017.1-Trezentos/wiki/Termo-de-Abertura-do-Projeto. Acesso em 24 de Junho de 2022.

## Histórico de Versionamento

| Versão | Alteração               | Autor(es)       | Revisor(es) |
| ------ | ----------------------- | --------------- | ----------- |
| 1.0    | Criação do Documentos   | Adrian Soares   | ----        |
| 1.1    | Planos de Tempo e Custo | Adrian Soares   | ----        |
| 1.2    | Revisão da v1.0 e v1.1  | Gustave Persijn | ----        |
| 1.3    | Análise de custo especificada  | Adrian Soares | ----        |
