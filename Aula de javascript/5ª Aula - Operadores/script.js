let resultaSoma = document.getElementById("soma")
let resultadoSub = document.getElementById("subtracao")
let resultadoDiv = document.getElementById("divisao")
let resultadoMult = document.getElementById("multiplicacao")
let resultadoPot = document.getElementById("potencia")
let resultadoMod = document.getElementById("resto")

let x;
let y;
let z;

x = 5
y = 2
z = x + y;

resultaSoma.innerHTML = z

let a = 5
let b = 2
let c = a - b;

resultadoSub.innerHTML = c

let d = 7
let e = 2
let f = d / e;

resultadoDiv.innerHTML = f

let g = 7
let h = 2
let i = g * h;

resultadoMult.innerHTML = i

let j = 7
let k = 2
let l = j ** k;

resultadoPot.innerHTML = l

let m = 13
let n = 3
let o = m % n

resultadoMod.innerHTML = o