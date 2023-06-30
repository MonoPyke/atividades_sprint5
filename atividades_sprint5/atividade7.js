//------------------------------EXERCICIO 1-------------------------------

// function adicionandoArray (){
//     let retorno = [];
//     for (let x = 0; x <= 29; x++){
//         retorno.push(x);
//     }
//     return retorno;
// }

// function exerc1 (a){
//     let y = 0;
//     let x = 0;

//     for (let i = 0; i < a.length; i++){
//         if (a[i] % 2 === 0){
//             y++;
//         }
//         else if (a[i] % 2 !== 0) {
//             x++;
//         }
//     }
//     console.log(`Temos ${y} números pares e ${x} números impares.`);
// }

// let array = adicionandoArray();
// exerc1(array);

//------------------------------EXERCICIO 2-------------------------------

let resultado = [];
function adicionandoArray (){
    for (let i = 0; i < 10; i++){
        resultado.push(i);
    }
    return resultado;
}

adicionandoArray();

function exec2 (){
    let j = 0;
    for (let i = 0; i < resultado.length; i++){
        if (resultado[i] % 2 !== 0){
            j++;
        }
    }
    return ((resultado.length - j) / resultado.length) * 100;
}
let resultadoFinal = exec2();
console.log(`${resultadoFinal}% dos números dados são impares.`);

//------------------------------EXERCICIO 3-------------------------------

function variavelA (){
    let return = [];
    for (let i = 0; i < 10; i++){
        if(i % 2 === 0 && i % 3 === 0){
            return.push(i);
        }
    }
    return return;
}

let a = variavelA();

function variavelB (){
    let retorn = [];
    for(let b = 0; b < 10; b++){
        if(b % 5 === 0){
            retorn.push(i);
        }
    }
    return retorn;
}

let b = variavelB();

function exec3 (a,b) {
    let a = [];
    let b = [];
    if (a.length > 10 || a.length < 10){
        console.log("Lista fora dos padrões necessários");
    }
    else if (a % 2 === 0 || a % 3 === 0){
        return true;
    }
    else if(b % 5 === 0){
        return true;
    }
    else {
        console.log("Valores não permitidos encontrados.");
    
}

exec3(a,b);