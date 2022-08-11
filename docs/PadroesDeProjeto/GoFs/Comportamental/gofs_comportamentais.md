# Command

## 1. Introdução

É um padrão de projeto comportamental que transforma um pedido em um objeto independente que contém toda a informação sobre o pedido. Essa transformação permite que você parametrize métodos com diferentes pedidos, atrase ou coloque a execução do pedido em uma fila e suporte operações que não podem ser feitas.

## 2. Estrutura

O padrão Command tem as seguintes consequências:


* Command desacopla o objeto que invoca a operação daquele que sabe como fazer.

* Commands são objetos de primeira classe. Eles podem ser manipulados ou estendidos como qualquer outro objeto.

* É fácil adicionar novos Commands, porque não tem que mudar classes existentes.

![Abstract Factory](../../../assets/gofs-comportamentais/gofs-command.png)


## Referências

[1] Fonte texto: (GAMMA, 2007)

## Histórico de Versionamento

| Versão | Alteração | Autor(es) | Revisor(es) |
| --- | --- | --- | --- |
| 1.0 | Criação do documento e edição do arquivo  | Wesley Santos | --- |