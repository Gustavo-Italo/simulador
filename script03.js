function calcularDezenas(numero) {
    let familia;
  
    switch (true) {
      case numero <= 19:
        familia = "Familia do 10";
        break;
      case numero <= 29:
        familia = "Familia do 20";
        break;
      case numero <= 39:
        familia = "Familia do 30";
        break;
      case numero <= 49:
        familia = "Familia do 40";
        break;
      case numero <= 59:
        familia = "Familia do 50";
        break;
      case numero <= 69:
        familia = "Familia do 60";
        break;
      case numero <= 79:
        familia = "Familia do 70";
        break;
      case numero <= 89:
        familia = "Familia do 80";
        break;
      case numero < 100:
        familia = "Familia do 90";
        break;
      default:
        familia = "Familia inválida";
    }
  
    return familia;
  }
  
  
  console.log(calcularDezenas(84));
