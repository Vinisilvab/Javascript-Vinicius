let numero = document.getElementById("numero")
let resposta = document.getElementById("resultado")


function Aperte()
{
    switch(numero.value)
    {
        case "1":
            resposta.innerHTML = "Hoje é domingo 1, nao é dia útil"
            break;
        case "2":
            resposta.innerHTML = "Hoje é Segunda-feira 2,  é dia útil"
            break;
        case "3":
            resposta.innerHTML = "Hoje é Terça-feira 3,  é dia útil"
            break;
        case "4":
            resposta.innerHTML = "Hoje é Quarta-feira 4,  é dia útil"
            break;
        case "5":
            resposta.innerHTML = "Hoje é Quinta-feira 5,  é dia útil"
            break;
        case "6":
            resposta.innerHTML = "Hoje é Sexta-feira 6,  é dia útil"
            break;
        case "7":
            resposta.innerHTML = "Hoje é Sábado 7, nao é dia útil"
            break;
        default:
                resposta.innerHTML = "Não tem essa parada não"
            break;
    }
}