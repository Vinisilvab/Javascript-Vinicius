let numero = document.getElementById("numero")
let resposta = document.getElementById("resposta")


function Aperte()
{
    switch(numero.value)
    {
        case "1":
            resposta.innerHTML = "Você escolheu, maçã"
            break;
        case "2":
            resposta.innerHTML = "Você escolheu, banana"
            break;
        case "3":
            resposta.innerHTML = "Você escolheu, uva"
            break;
        case "4":
            resposta.innerHTML = "Você escolheu, pera"
            break;
        default:
                resposta.innerHTML = "Não tem essa parada não"
            break;
    }
}