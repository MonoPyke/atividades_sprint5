//------------------------------EXERCICIO 1-------------------------------

function fibonnaciNumbers(){
    let atual = 1;
    let anterior = 0;
    let proximo;

    let resultado = "";
    for (let i = 1; i <= 30; i++){
        if (i === 30){
            resultado += `${anterior}`;
        } else {
            resultado += `${anterior}, `;
        }

        proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
    console.log(resultado);
}

//fibonnaciNumbers();

//------------------------------EXERCICIO 2-------------------------------

function graoQuadro(){
    let soma = 0;
    let graos = 1;
    for (let quadro = 1; quadro <= 64; quadro++){
        soma += graos;
        graos *= 2;
    }
    console.log(soma);
}

graoQuadro();