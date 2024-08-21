const simulador = () => {
    let entrada

    while(entrada !== "sair") {
        entrada = prompt("Digite um número ou ('sair para encerrar'):");

        if (entrada === "sair") {
            console.log("Programa finalizado.");
            break;
        }

        let number = parseInt(entrada);
        let result;

        if (isNaN(number)) {
            console.log("Digite um número válido.")

        } else {
            result = number * 2;
            console.log(`O dobro de ${number} é ${result}`);
        }
    }

};

simulador();
simulador();