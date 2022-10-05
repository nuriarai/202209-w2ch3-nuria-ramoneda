/* calculadora PRO */

let results = [];

const getNumbers = () => {
  const userNumbers = [];
  let number;
  do {
    number = prompt(
      "Indica un número para calcular. Cuando no quieras introducir más números, aprieta el botón de cancelar. "
    );
    if (number !== null && number !== "") {
      number = Number(number);
      userNumbers.push(number);
    }
    if (typeof number === "string" && number !== "") {
      console.log("Indica un número, no letras ;)");
    } else if (number === null) {
      console.log("Indica un número, no lo dejes en blacno ;)");
    }
  } while (number !== null && number !== "");
  console.log(userNumbers);
  return userNumbers;
};

const getMoreNumbers = () => {
  const response = prompt(
    "¿Quieres hacer más cálculos? Responde Sí (S) o No (N)"
  );
  if (response === "S" || response === "N") {
    switch (response) {
      case "S":
        console.log("\nNuevo cálculo: \n");
        console.log(calculate(getNumbers()));
        break;
      case "N":
        console.log("Gracias por participar. Adiós!");
        break;
      default:
    }
  } else {
    console.log("Hay que poner una S o una N para Sí o NO.");
    // TODO: bucle para volver al primer prompt si se equivocan.
    // response = prompt("¿Quieres volver a intentarlo? Responde Sí (S) o No (N)");
  }
};

const square = (num) => {
  results.push(`El cuadrado de ${num} es: ${num * num} `);
};

const sum = (args) => {
  let result = 0;

  for (const num in args) {
    result += args[num];
  }

  return result;
};

const substract = (args) => {
  let result = args[0];
  for (let num = 1; num < args.length; num += 1) {
    result -= args[num];
  }
  return result;
};

const multip = (args) => {
  let result = 1;
  for (num in args) {
    result *= args[num];
  }
  return result;
};

const division = (args) => {
  let result = args[0];
  for (let num = 1; num < args.length; num += 1) {
    result /= args[num];
  }
  return result;
};

const calculate = (userNumbers) => {
  results = [];
  if (userNumbers.length === 0) {
    console.log("Debes introducir 2 números, sinó no podemos calcular nada ;)");
  } else if (userNumbers.length === 1) {
    console.log(
      "Calcularemos sólo el cuadrado, ya que se necesitan al menos 2 números para los demás cálculos."
    );
    square(userNumbers[0]);
  } else {
    let finalSum = sum(userNumbers);
    if (!Number.isInteger(finalSum)) {
      finalSum = finalSum.toFixed(3);
    }
    let finalSubstract = substract(userNumbers);
    if (!Number.isInteger(finalSubstract)) {
      finalSubstract = finalSubstract.toFixed(3);
    }

    let finalMultiply = multip(userNumbers);
    if (!Number.isInteger(finalMultiply)) {
      finalMultiply = finalMultiply.toFixed(3);
    }
    let finalDivision = division(userNumbers);
    if (!Number.isInteger(finalDivision)) {
      finalDivision = finalDivision.toFixed(3);
    }

    results.push(`La suma de ${userNumbers.join(", ")} es: ${finalSum}`);
    results.push(`La resta de ${userNumbers.join(", ")} es: ${finalSubstract}`);
    results.push(
      `La multiplicación de ${userNumbers.join(", ")} es: ${finalMultiply}`
    );
    results.push(
      `La división de ${userNumbers.join(", ")} es: ${finalDivision}`
    );
  }
  console.log(results.join("\n"));
  getMoreNumbers();
};

console.log(calculate(getNumbers()));
