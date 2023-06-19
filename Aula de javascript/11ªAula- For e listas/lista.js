let produtos = document.getElementById("produtos")

function MinhaFuncao()
{
    let li = document.createElement("li")
    let texto = document.createTextNode(produtos.value)
    

    li.appendChild(texto)
  

    document.getElementById("MinhaLista").appendChild(li)
    
}