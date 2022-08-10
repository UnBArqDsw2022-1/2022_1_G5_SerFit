# State

## 1. Introdução
O State é um padrão de projeto comportamental que permite que um objeto altere seu comportamento quando seu estado interno muda, parecendo, então, como se o objeto mudasse de classe.[1]</br>
Este padrão possui um conceito similar ao de máquinas de estado finitos. [2]

## 2. Utilização
Foi decidido pelo grupo que o padrão State será utilizado no projeto, porém ele ainda não foi implementado. Entretando, uma versão simplificada foi desenvolvida para exemplificar seu funcionamento. </br>
No código abaixo, temos a implementação da tela de exibição das lojas disponíveis. Porém, enquanto a requisição GET para receber todas as lojas não for finalizada, o estado *isDataLoaded* permanecerá falso. E com o *isDataLoaded* falso, o componente que será renderizado para o usuário será o *Loading*. </br>
Logo, quando a resposta for enviada, o estado *isDataLoaded* mudará para verdadeiro, e o componente que será renderizado irá mudar. 

```javascript
const StoresPage = () => {
    const [stores, setStores] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        getStores();
    }, []);
    
    const getStores = async () => {
        try{
            const { data } = await api.get("/api/stores");
            setStores(data);
            setIsDataLoaded(true);
        }
        catch{
            console.log('Ocorreu um erro');
        }
    }

    return (
        <>
            {isDataLoaded ? 
                <View>
                // Implementação do componente
                </View>
                :
                <Loading />
            }
        </>
    )
}

export default Body;
```

## 3. Referências

[1] State. Disponível em: <https://refactoring.guru/pt-br/design-patterns/state>. Acesso em: 10 ago. 2022.

[2] State pattern. Disponível em: <https://en.wikipedia.org/wiki/State_pattern>.

‌

## 4. Histórico de Versionamento

| Versão | Alteração            | Autor(es)       | Revisor(es) |
| ------ | -------------------- | --------------- | ----------- |
| 1.0    | Criação do documento | Lucas Gomes | ---         |
| 1.1    | Adição de exemplo | Lucas Gomes | ---         |
