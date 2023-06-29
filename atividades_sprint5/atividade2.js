//------------------------------EXERCICIO 1-------------------------------

function exercicio1(){
    for (let number1 = 15; number1 <= 200; number1++){
        console.log(number1 * number1);
    }
}

// exercicio1();

//------------------------------EXERCICIO 2-------------------------------

// function exercicio2(){
//     let resultado = 0;
//     for (number2 = 1; number2 <= 100; number2++){
//         resultado += number2;
//     }
//     return resultado;
// }

// console.log(exercicio2());

//------------------------------EXERCICIO 3-------------------------------

// function exercicio3(){
//     for (let i = 0; i <= 200; i++){
//         if (i % 4 === 0){
//             console.log(i);
//         }
//     }
//     return
// }

// exercicio3();


//------------------------------EXERCICIO 4-------------------------------

function exercicio4(){
    let x = 0;
    let media = 0;
    let y = 0;
    for (let i = 50; i <= 70; i++){
        if (i % 2 === 0){
            x += i;
            y++;
            console.log(x,y,i);
        }
    }
    media = x / y;
    console.log(media);
}

exercicio4();