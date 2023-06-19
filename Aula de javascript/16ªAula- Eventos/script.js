//Eventos
//*No javascript, eventos são ações ou ocorrências que acontecem na página web que estamos implementando. Esses eventos geralmente invocam funçoe que irão executar as operações desejadas. Exemplo de eventos são: o usuário clica em um botão na pagina.*//

//*Exemplos de Evento:
//-clicar no mouse;
//-Quando a página é carregada
//-Quando uma imagemfoi carregada
//-Quando o mouse passa sobre o elemento
//-Quando o formulario HTML é enviado.
let nome = document.getElementById('abc')
function mudar()
{
    nome.innerHTML = 'São os alunos de Santo Amaro s2'
}

let dataDeHoje = document.getElementById('demo')
function Data()
{
    dataDeHoje.innerHTML = Date();
}
function carregarAviso()
{
    alert('você acessou a página')
}

let obj = document.getElementById('obj')
function MudarDeFrase()
{
    obj.innerHTML = 'Obrigado!'
}
function VoltarAFrase(){
    obj.innerHTML ='Passe o mouse aqui!'
}