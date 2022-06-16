# RepositorioTemplate

Repositório que deve ser utilizado como template inicial pelos grupos da matéria de Arquitetura e Desenho de Software.

## Introdução

Este repositório traz um template de repo de documentação a ser seguido pelos grupos de arquitetura e desenho de software.

## Tecnologia

A geração do site estático é realizada utilizando o [docsify](https://docsify.js.org/).

```shell
"Docsify generates your documentation website on the fly. Unlike GitBook, it does not generate static html files. Instead, it smartly loads and parses your Markdown files and displays them as a website. To start using it, all you need to do is create an index.html and deploy it on GitHub Pages."
```

### Instalando o docsify

Execute o comando:

```shell
npm i docsify-cli -g
```

### Executando localmente

Para iniciar o site localmente, utilize o comando:

```shell
docsify serve ./docs
```
### Membros

<svg fill="none" viewBox="0 0 800 400" width="800" height="400" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
<div id="members">
    <div class="member-content"></div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Roboto:ital,wght@1,300&family=Ubuntu&display=swap');
    #app {
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
    }
    .content {
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
<script src="./docs/members.js"></script>
<foreignObject width="100%" height="100%">
</svg>
