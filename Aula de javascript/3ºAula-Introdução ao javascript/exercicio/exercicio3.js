var c1 = document.getElementById("c1");
var resultado = document.getElementById("resultado");
var soma;

function SOMA()
{
    soma =parseInt(c1.value);
    resultado.innerHTML = soma*100;
}