let idade = document.getElementById("idade");
let titulo = document.getElementById("titulo");
let resultado = document.getElementById("resultado");

function Apertar(){
    if (idade.value >= 16 && titulo.value == "Sim" )
    {
        alert(" Você poderá votar")
    }
    else 
    {
        alert("Não poderá votar")
    }
}

let minutos;
let preco;

if(minutos <= 200 ){
 preco = 0.2
}
else
{
    if(minutos <= 400)
    {
        preco = 0.18
    }
    else
    {
        if(minutos <= 1000)
        preco = 0.15
    }
}