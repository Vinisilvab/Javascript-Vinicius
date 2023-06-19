let numero = document.getElementById("numero1")
let sinal = document.getElementById("sinal")
let numero2 = document.getElementById("numero2")
let resultado = document.getElementById("resultado")



function Aperte()
{
    switch(sinal.value)
    {
        case "+":
            let soma = parseInt(numero.value) + parseInt(numero2.value)
            resultado.innerHTML = soma 
            break;
        case "-":
            let subtracao = parseInt(numero.value) - parseInt(numero2.value)
            resultado.innerHTML = subtracao 
            break;
        case "*":
            let multiplicacao = parseInt(numero.value) * parseInt(numero2.value)
            resultado.innerHTML = multiplicacao 
            break;
        case "/":
            let divisao = parseInt(numero.value) / parseInt(numero2.value)
            resultado.innerHTML = divisao
            break;
        
        
        default:
                resposta.innerHTML = "Não tem essa parada não"
            break;
    }
}