let x = document.getElementById("ValorInicio");
let y = document.getElementById("ValorFinal")

function contar()
{

    while(x.value <= parseInt(y.value))
    {
        //criar um elemento
        let paragrafo = document.createElement("p")
        //criar um texto
        let texto = document.createTextNode(x.value)

        //add um texto no elemento
        paragrafo.appendChild(texto);

        //add um elemento no section
        document.getElementById("contar").appendChild(paragrafo)
        console.log(x)
        x.value++ //(x = x + 1)
    }
}