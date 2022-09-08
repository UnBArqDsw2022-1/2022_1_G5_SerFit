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

## 3. Metas e representação da arquitetura

### 3.1 Metas

<p style="text-align: justify;">
 texto texto texto
</p>

### 3.2 Restrições

<!-- Fim Fernando -->

<!-- Daniel -->

## 4. Visão de casos de uso

<p style="text-align: justify;">
 texto texto texto
</p>

<!-- Fim Daniel -->

<!-- Ricardo -->

## 5. Visão Lógica

<p style="text-align: justify;">
 A visão lógica representa como a organização conceitual do sistema vai ser estruturado de maneira lógica. Para isso, fazemos o uso de artefatos que demonstrem a estrutura, como os diagramas de classes, de pacote, de colaboração, de interação e até mesmo de sequência do caso. 

 Dependendo da complexidade do sistema, ou da necessidade de explicar as especificidades, podemos usar vários desses documentos, temos como objetivo esses documentos serem suficientes para a compreensão do sistema para quem estiver lendo.
</p>

### 5.1 Diagrama de classes


![Diagrama de Classes](../../assets/arquitetura_reutilizacao/diagramadeclasse.svg)
<center>
<figcaption>Imagem: Diagrama de Classes.</figcaption>
<figcaption>Autor: Ricardo Loureiro</figcaption>
</center>

### 5.2 Diagrama de pacotes

<p style="text-align: justify;">O diagrama de pacotes é usado para representar a visão lógica da arquitetura do nosso projeto Ser-Fit, ele aborda as camadas e pacotes utilizados no sistema.
Nosso projeto tem duas frentes de implementação e detalharemos cada um em sequência.
</p>

#### **Front-End**

<center>
<img src = "../../assets/arquitetura_reutilizacao/Frontend.png" alt = "Imagem: Diagrama de Pacotes - Front End">
<figcaption>Imagem: Diagrama de Pacotes - Front End</figcaption>
<figcaption>Autor: Gustave Persjn</figcaption>
</center>

<p style="text-align: justify;">O nosso front-end é que contém o nosso view, ela que é responsável pela interação com o usuário. O ponto inicial é a pagina <strong>Rountes</strong>, é onde tem as chamadas para o conteúdo da aplicação, esses conteúdos da página Routes é oriundo tanto das páginas <strong>Screens</strong> e <strong>Components</strong>. 

Também pode ser oriundo da página <strong>Assets</strong>, que tem a função armazenamento de média estática. Por fim temos as pastas <strong>Services</strong> e <strong>MicroServices</strong> que são responsáveis pela comunicação API do sistema com o Back End.</p>

#### **Back-End**

<center>
<img src = "../../assets/arquitetura_reutilizacao/Backend.svg" alt = "Imagem: Diagrama de Pacotes - Back End">
<figcaption>Imagem: Diagrama de Pacotes - Back End</figcaption>
<figcaption>Autor: Ricardo Loureiro</figcaption>
</center>

<p style="text-align: justify;">No banck-end temos a camada de <strong>controller</strong> que é onde os recebem requisições de componentes externos. Ele filtra as solicitações de requisições que são enviadas pelo front-end.

<strong>Controller</strong> e <strong>Model</strong> estão representados no diagrama de pacotes que estão no diretório do API.

Ainda em API, temos os <strong>middlewares</strong> e <strong>utils</strong> que contém as classes que auxiliam na camada de controle na aplicação e nos padrões de projeto.

Diretamente temos a pasta <strong>config</strong>, no qual estão as definições e variáveis de ambientes e autenticação. O banco de dados no diretório <strong>database</strong>, que contém as regras para modificação das tabelas.</p>



### 5.3 Diagrama de comunicação

<p style="text-align: justify;">O diagrama de comunicação é definido para esclarecer funções de objetos e classes, esse diagrama mostra as interações entre objetos e/ou partes. Assim esse diagrama pode ser utilizado para complementar a representação da visão lógica da arquitetura do processo, pois ele foi feito para abordar uma visão mais macro do sistema com foco na lógica da aplicação.

Nosso diagrama de comunicação é definido em fluxo do cliente e fluxo do personal e pode ser visto nesta <a href = "https://unbarqdsw2022-1.github.io/2022_1_G5_SerFit/#/Modelagem/DiagramasDinamicos/DiagramaDeComunicacao">página</a></p>


<!-- Lucas e Victor -->

## 6. Visão de processos


### 6.1 Diagrama de atividades

### 6.2 Diagrama de sequência

<!-- Fim Lucas e Victor -->

<!-- Luis -->

## 7. Visão de implantação

<p style="text-align: justify;">
 texto texto texto
</p>

### 7.1 Diagrama de componentes

### 7.2 Diagrama de implantação

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

>

## Histórico de Versionamento

| Versão | Alteração           | Autor(es) | Revisor(es) |
| ------ | ------------------- | --------- | ----------- |
| 1.0    | Criação do template | Gustave   | -           |
| 2.0 | Criação do tópico de Visão Lógica | Ricardo Loureiro | - |
| 3.0 | Criação do tópico Diagrama de Classes e Diagrama de Pacotes | Ricardo Loureiro | - |
| 4.0 | Criação do tópico Diagrama de Comunicação | Ricardo Loureiro | - |