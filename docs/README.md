# RepositorioTemplate
Esse repositório é para ser utilizado pelos grupos como um template inicial, da home page do Projeto.
As seções do Template NÃO DEVEM SER OMITIDAS, sendo TODAS RELEVANTES.
Demais diretrizes sobre a organização da wiki constam no Moodle Aprender 3.

**!! Atenção: Renomeie o seu repositório para (Ano.Semestre)_(Grupo)_(NomeDoProjeto)*. !!** 

**!! *Não coloque os nomes dos alunos no título do repositório*. !!**

**!! *Exemplo de título correto: 2022.1_G1_ProjetoPandora*. !!** 
 
 (Apague esses comentários)

# Nome do Projeto

**Código da Disciplina**: FGA0208<br>
**Número do Grupo**: XX<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| xx/xxxxxx  |  xxxx xxxx xxxxx |
| xx/xxxxxx  |  xxxx xxxx xxxxx |

## Sobre 
Descreva o seu projeto em linhas gerais.
Use referências, links, que permitam conhecer um pouco mais sobre o projeto.

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
