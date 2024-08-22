// const simulador = () => {
//     let entrada

//     while(entrada !== "sair") {
//         entrada = prompt("Digite um número ou ('sair para encerrar'):");

//         if (entrada === "sair") {
//             console.log("Programa finalizado.");
//             break;
//         }

//         let number = parseInt(entrada);
//         let result;

//         if (isNaN(number)) {
//             console.log("Digite um número válido.")

//         } else {
//             result = number * 2;
//             console.log(`O dobro de ${number} é ${result}`);
//         }
//     }

// };

// simulador();
// simulador();



let soma = 0; 
let contador = 0;

const valores = () => {

    let valor;

    while (true) {
        valor = prompt("Digite um valor ou ('sair para encerrar')");

        if (valor.toLowerCase() === "sair") {
            console.log("Programa encerrado.");
            break;     
    }

    valor = parseFloat(valor);

    if (isNaN(valor)) {
       console.log("Digite um número válido.")
       continue;
    }

    soma += valor;
    contador++;

    
    let result = soma / contador;
    console.log(`Soma: ${soma}\nmédia: ${result}`);

    }
};

valores();





// const emprestimo = () => {
    
//     let valorDoEmprestimo = 10000;
//     let parcelas = 5;
//     let taxadeJuros = 0.01;
//     let parcelaAtual = 1;


//     while (parcelaAtual <= parcelas) {

//         let juros = valorDoEmprestimo * taxadeJuros;
//         let amortizacao = 10000 / parcelas;
//         let parcela = amortizacao + juros;

//         console.log(`A parcela ${parcelaAtual}: R$: ${parcela.toFixed(2)}`);

//         valorDoEmprestimo -=  amortizacao;
//         parcelaAtual++;
        
//     }

// }

// emprestimo();

// const banco = () => {

//     let valorEmprestado = 12000;
//     let quantidadeDeParcelas = 6;
//     let jurosTaxa = 0.05;
//     let atualParcela = 1;

//     while (atualParcela <= quantidadeDeParcelas) {
//         let divida = valorEmprestado * jurosTaxa;
//         let jurosCorrido = 12000 / quantidadeDeParcelas;
//         let parcelaa = jurosCorrido + divida;

//         console.log(`A parcela ${atualParcela}: R$: ${parcelaa.toFixed(2)}`);

//         valorEmprestado -= jurosCorrido;
//         atualParcela++;
//     }
// }

// banco();

