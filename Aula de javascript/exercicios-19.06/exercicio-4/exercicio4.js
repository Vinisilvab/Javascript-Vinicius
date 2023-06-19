let PrimeiroSemestre = document.getElementById("primeiroSemestre");
let SegundoSemestre = document.getElementById("segundoSemestre");
let resultado = document.getElementById("resultado")
let media;

function Aperte(){
    media =(parseFloat(PrimeiroSemestre.value) + parseFloat(SegundoSemestre.value)) /2
    
    if(media >= 7){
        resultado.innerHTML=("Aprovado")
    }
    else{
      resultado.innerHTML=("Reprovado")
    }
}