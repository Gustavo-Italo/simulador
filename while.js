const CalcularFatorial = (numero) => {

    let fatorial = 1;
    let i = 1;

    while (i <= numero) {
        fatorial *= i;
        i++
    }

    return fatorial;
    
} 

const receberNumero = parseInt(prompt("Digite um número"));

console.log(CalcularFatorial(receberNumero));

 
