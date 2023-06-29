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

