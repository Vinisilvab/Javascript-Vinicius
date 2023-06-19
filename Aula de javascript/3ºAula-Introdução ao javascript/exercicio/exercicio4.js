var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var m4 = document.getElementById("m4");
var resultado = document.getElementById("resultado");
var soma;

function SOMA()
{
    soma =parseInt(m1.value) * parseInt(m2.value) * parseInt(m3.value) * parseInt(m4.value);
    resultado.innerHTML = soma;
}