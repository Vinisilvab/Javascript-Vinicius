var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var resultado = document.getElementById("resultado");
var soma;

function SOMA()
{
    soma =parseInt(p1.value) + parseInt(p2.value) + parseInt(p3.value) +parseInt(p4.value);
    resultado.innerHTML = soma/4;
}