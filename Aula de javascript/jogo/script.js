let VidaHeroi ;
let AtaqueDoHeroi;
let XPHeroi;
let NivelHeroi;
let ClassesDosHerois = ["Mago", "Ninja", "Viking"];
let NomeDoHeroi;

NomeDoHeroi = document.getElementById("NomeDoPersonagem")
mensagemDoNome = document.getElementById("Mensagem")

function Enviar()
{
    if(NomeDoHeroi.value != ""){

    
    mensagemDoNome.innerHTML = "Olá," + NomeDoHeroi.value + " seja bem vindo ao jogo!";
}
else{
    mensagemDoNome.innerHTML = "Digite o seu nome para iniciarmos o jogo!"
}
}

