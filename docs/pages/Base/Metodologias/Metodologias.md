# Metodologia

## 1. Introdução

Para a entrega eficaz de um software de qualidade, faz-se necessário o pensamento sobre a metodologia de trabalho a ser adotado ao longo do semestre, para a conclusão de um produto minimamente viável, aplicando-se boas práticas de programação, técnicas arquiteturais e de desenho aprendidas durante a disciplina.

Para que seja possível concluir prazos de entrega para o MVP, tendo em mente um tempo relativamente curto de desenvolvimento (em um semestre mais curto que o comum) uma metodologia que tenha relação com as práticas Ágeis é vista com grande consideração pela equipe participante deste projeto.

## 2. Desenvolvimento

Optamos por adotar práticas semelhantes aos ritos da metodologia [Extreme Programming](http://www.extremeprogramming.org/). A metodologia é muito bem estabelecida no mercado e se provou ser um dos métodos ágeis com grandes benefícios, com boa parte da indústria enxergando e entregando valor através das práticas, como mostrado no seguinte estudo !! REFATORAR FONTE: [https://d1wqtxts1xzle7.cloudfront.net/40773825/J19_Investigating_the_extreme_programming_system_An_empirical_study-libre.pdf?1450206165=&response-content-disposition=inline%3B+filename%3DInvestigating_the_extreme_programming_sy.pdf&Expires=1654831882&Signature=MKKOvn-wvlVJZyjx614EAJIkLt0neH8RV0TolHizkqFO8eBFXkvAmXdM6s-so1jPxIyrV19yAKtq9AFbTFzE2F576arr50iY8qxXR1HCT7SAr-EpRxDkWsXFLtRMd5MxYR27zDQrccNCpn28tqlPZ7AhKc9RThTd6BVpSFwu9MtXAaYtOPBfJJuVjAaxDd~S1piF0ViV5EAriy5rnlo7KLRvl~TVruclw6b8hDB4Bm5ecvrWRi3YEOXJ8R2M66ch7~JEtUOhbdrm3h92kR3Gu9aDgxuFZhGRUcF-q7uV650lnJmPbaNLz38g7kA-SclM3bccOfc1AzR8wyCGRd7akw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA](https://d1wqtxts1xzle7.cloudfront.net/40773825/J19_Investigating_the_extreme_programming_system_An_empirical_study-libre.pdf?1450206165=&response-content-disposition=inline%3B+filename%3DInvestigating_the_extreme_programming_sy.pdf&Expires=1654831882&Signature=MKKOvn-wvlVJZyjx614EAJIkLt0neH8RV0TolHizkqFO8eBFXkvAmXdM6s-so1jPxIyrV19yAKtq9AFbTFzE2F576arr50iY8qxXR1HCT7SAr-EpRxDkWsXFLtRMd5MxYR27zDQrccNCpn28tqlPZ7AhKc9RThTd6BVpSFwu9MtXAaYtOPBfJJuVjAaxDd~S1piF0ViV5EAriy5rnlo7KLRvl~TVruclw6b8hDB4Bm5ecvrWRi3YEOXJ8R2M66ch7~JEtUOhbdrm3h92kR3Gu9aDgxuFZhGRUcF-q7uV650lnJmPbaNLz38g7kA-SclM3bccOfc1AzR8wyCGRd7akw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA).

Seus princípios e valores são:

- Comunicação;
- Simplicidade;
- *Feedback;*
- Coragem;
- Respeito;

Valores com os quais todos os membros da equipe concordaram serem de extrema importância para qualquer ambiente colaborativo, principalmente para o Desenvolvimento de Softwares.

Adotaremos as seguintes práticas para que possamos modelar nosso [fluxo de processos](./BPMN.md), adaptando os ritos da metodologia Extreme Programmming:

### Histórias de usuário

Antes de qualquer implementação, as issues devem ser suportadas por histórias de usuário, simples, descrevendo os requisitos que o usuário espera para garantir sua satisfação.

### *The Planning Game*

Acontecerá à cada planejamento de iteração (semanal). Consistirá em um planejamento da próxima iteração através da seleção das histórias, pelos desenvolvedores, e de seu destrinchar em issues. As issues devem ter sua complexidade medida e, sempre que possível, subdividida em issues de menor complexidade.

### Design simples

Fala por si só. Devemos resolver os problemas de forma simples, para manter soluções elegantes, compreensíveis, manuteníveis e escaláveis.

### Integração contínua

Realizada através da boa utilização do repositório do GitHub e de suas ferramentas de Pull Requests e automatizações.

### Testing

Código submetidodeverá passar pelos testes existentes para que tenha possibilidade de ser aceito.

### Programação por pares

Sempre que possível, o desenvolvimento será acompanhado em pares, garantindo melhor atenção a detalhes. Deverão ser utilizadas ferramentas para encontros remotos durante a codificação.

### Refatoração

Deve ser feita constantemente, para garantir maior simplicidade da solução e o seguimento de padrões de design e definições arquiteturais.

### Padrão de código

Linters e revisão de código devem garantir um código com formato padrão para todos os membros da equipe.


## 3. Conclusão


## Histórico de Versionamento

 Versão |       Alteração       |    Autor(es)   |    Revisor
  ---   |          ---          |       ---      |      ---
  0.0.1 |  Criação do documento |  Adrian Soares |