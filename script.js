const numerosMenores = (numero) => {
        if (numero < 1 || numero > 10) {
        return;
}

for (let i = 1; i < numero; i++) {
        console.log(i)
  }

} 

const usuario = parseInt(prompt("Digite um número de 1 a 10"));

numerosMenores(usuario);


    