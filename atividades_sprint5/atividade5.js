//------------------------------EXERCICIO 1-------------------------------

// function verticalText(palavra){
//     for (let i = 0; i < palavra.length; i++){
//         console.log(palavra[i]);
//     }
// }

// verticalText("caique");

//------------------------------EXERCICIO 2-------------------------------

// function incrementText(palabra){
//     let incremento = "";
//     for (let o = 0; o < palabra.length; o++){
//         incremento += palabra[o]
//         console.log(incremento)
//     }

// }

// incrementText("Caique");

//------------------------------EXERCICIO 3-------------------------------

function incrementTextBackwards(paladra){
    let incremento = "";
    let indice = paladra.length - 1;
    for (let o = indice; o >= 0; o--){
        incremento += paladra[o];
        console.log(incremento)
    }

}

incrementTextBackwards("Caique");
