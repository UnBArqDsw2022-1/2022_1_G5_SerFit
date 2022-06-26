# Nome do Projeto

**Código da Disciplina**: FGA0208<br>
**Número do Grupo**: 5<br>

## Alunos

| Matrícula | Aluno |  | 
| -- | -- | -- |
| 16/0000572  | [Adrian Soares Lopes](https://github.com/SwampTG) | <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/66492055?v=4" width="100px;" alt=""/> |
| 19/0026375  | [Daniel Vinicius Ribeiro Alves](https://github.com/DanielViniciusAlves) | <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/52768341?v=4" width="100px;" alt=""/> |
| 18/0113259  | [Felipe Correia Andrade](https://github.com/Percon12) | <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/48574280?v=4" width="100px;" alt=""/> |
| 14/0139281  | [Fernando Ribeiro Aguilar](https://github.com/fernando-ra) | <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/16293264?v=4" width="100px;" alt=""/> |
| 19/0046091  | [Gustave Augusto Persijn](https://github.com/gpersijn) | <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/56366957?v=4" width="100px;" alt=""/> |
| 17/0080102  | [Lucas Gomes Lopes](https://github.com/LucasGlopes) | <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/49499946?v=4" width="100px;" alt=""/> |
| 15/0016310  | [Luis Gustavo Avelino de Lima Jacinto](https://github.com/luis-gustavo) | <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/15164988?v=4" width="100px;" alt=""/> |
| 20/0043111  | [Ricardo de Castro Loureiro](https://github.com/castroricardo1) | <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/83254747?v=4" width="100px;" alt=""/> |
| 18/0149598  | [Victor Hugo Siqueira Costa](https://github.com/V100k) | <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/50213514?v=4" width="100px;" alt=""/> |
| 18/0029240  | [Wesley Pedrosa dos Santos ](https://github.com/wesleysantos00) | <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/54296715?v=4" width="100px;" alt=""/> |

## Sobre 
Este software tem o objetivo de ajudar e facilitar a vida de pessoas da área fitness. Assim podemos dar um exemplo como: Um prestador de serviços da área fitness (personal trainer ou nutricionista) se cadastra no app/site onde ele consegue aumentar a gama de pessoas que estão a procura desse tipo de profissional/serviço. Já do outro lado uma pessoa procura por um serviço prestado na area fitness. No app/site é será possível filtrar por nota que o profissional possui, a distância de algum lugar (casa, academia ou espaço ao ar livre), o preço da consulta entre outros, deixando todo o processo mais ágil e pratico para os dois.

## Screenshots Primeira Entrega <<FOCO: DSW(Base)>>
Adicione 2 ou mais screenshots do projeto em termos de artefatos da Primeira Entrega.

## Screenshots Segunda Entrega <<FOCO: DSW(Modelagem)>>
Adicione 2 ou mais screenshots do projeto em termos de artefatos da Segunda Entrega.

## Screenshots Terceira Entrega <<FOCO: DSW(Padrões de Projeto)>>
Adicione 2 ou mais screenshots do projeto em termos de artefatos da Terceira Entrega.

## Screenshots Quarta Entrega (FINAL) <<FOCOS: Arquitetura & Reutilização de Software & PROJETO FINAL>>
Adicione 2 ou mais screenshots do projeto em termos de interface e/ou funcionamento.

## Descritivo dos Principais Aspectos Técnicos 
**Principal(is) Metodologia(s) Adotada(s)**: xxxxxx<br>
**Principais Linguagens Utilizadas e/ou Pretendidas**: xxxxxx<br>
**Principais Tecnologias Utilizadas e/ou Pretendidas**: xxxxxx<br>
**Principal(is) Estilo(s) Arquitetural(is) Adotado(s)**: xxxxxx<br>

## O Projeto está rodando?
( ) SIM

( ) NÃO

Se SIM, insira um manual (ou um script) para auxiliar ainda mais os interessados em consultar o projeto.

## Informações Complementares 

### Membros

<div id="members">
    <div class="member-content"></div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Roboto:ital,wght@1,300&family=Ubuntu&display=swap');
    #members {
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
    }

    .member-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .card {
        display: flex;
        flex-direction: column;
        flex-basis: 300px;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 20px;
    }

    .card:hover {
        transform: scale(1.15);
        transition: transform 300ms 0ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
        cursor: pointer;
    }

    .card:not(:hover) {
        transition: all 180ms;
    }

    .card .card-title {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        max-height: 32px;
    }

    .card .card-title > p {
        text-transform: uppercase;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 400;
        color: rgb(86, 96, 118);
    }

    .card .card-title > span {
        margin-left: 5px;
        font-family: 'Kdam Thmor Pro', sans-serif;
        font-size: smaller;
        color: rgb(72, 151, 151);
    }

    .card .card-tag {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        max-height: 29px;
        background-color: #24292f;
        color: white;
        padding-inline: 5px;
        border-radius: 8px;
    }

    .card .card-tag > span {
        padding-right: 5px;
        border-right-color:rgb(230, 233, 238);
        border-right-width: 1px;
        border-right-style: solid;
    }

    .card .card-tag > p {
        margin-left: 7px;
    }

    .card .card-img {
        border-radius: 50%;
        flex-basis: 200px;
        max-width: 200px;
        opacity: 0.8;
        filter: grayscale(40%);
    }

    .card:hover .card-img{
        transition: opacity .5s ease-in-out;
        opacity: 1;
        filter: none;
    }
</style>
