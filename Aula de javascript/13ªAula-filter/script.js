let idade = [20,19,17,26,27]
//filter() cria um vetor/array com o resultado do filtro aplicado pelo método, ou seja, os elemnetos que "passaram" na condição configurada no filtro.

let mostrar = document.getElementById("demonstacao")
mostrar.innerHTML = idade.filter(MaiorDeIdade);

function MaiorDeIdade(idade)
{
    return idade >17;
}