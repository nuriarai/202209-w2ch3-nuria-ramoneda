// airlines

const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
let totalFlights = flights.length;

const adminFlights = () => {
  console.clear();
  const userName = prompt("Indica tu nombre por favor.");
  if (userName) {
    console.log(`Gracias por entrar ${userName}`);
    showDataDayFlights();
    askUsertype(userName);
  } else {
    console.log(
      "Debes introducir un nombre válido para entrar en la administración de vuelos."
    );
  }
};

const showDataDayFlights = () => {
  let escaleString = "";
  let mediumCost = 0;
  let numScales = 0;
  const lastFlights = [];
  for (i = 0; i < totalFlights; i++) {
    if (flights[i].scale) {
      numScales++;
      escaleString = "realiza por lo menos una escala.";
    } else {
      escaleString = "no realiza ninguna escala.";
    }
    if (i >= totalFlights - 5) {
      lastFlights.push(flights[i].to);
    }
    console.log(
      `El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y ${escaleString}`
    );
    mediumCost += flights[i].cost;
  }
  mediumCost = mediumCost / totalFlights;

  console.log(`El coste medio de los vuelos es de ${mediumCost.toFixed(2)}€`);
  console.log(
    `Hay ${numScales} vuelos con escala y ${
      totalFlights - numScales
    } vuelos sin escalas, de un total de ${totalFlights} vuelos en el día de hoy.`
  );
  console.log(
    `Los destinos de los últimos 5 vuelos del día son los siguientes: ${
      "\n" + lastFlights.join("\n")
    }`
  );
};

const showShortDataFlights = () => {
  for (i = 0; i < totalFlights; i++) {
    console.log(
      `${flights[i].id}: ${flights[i].from} - ${flights[i].to} / ${
        flights[i].cost
      }€ / ${flights[i].scale ? "Con escalas" : "Sin escalas"}`
    );
  }
  console.log(`Total de vuelos del dia: ${totalFlights}\n`);
};

const askUsertype = (userName) => {
  const typeUser = prompt(
    `¿Hola ${userName}, eres usuario Admin o User? Indica una de ambas opciones.`
  );
  if (typeUser) {
    if (typeUser.toLowerCase() === "admin") {
      console.log(
        `${userName}, como usuario Admin ahora puedes introducir nuevos vuelos. Introduce los datos segun te los vamos preguntando, por favor.`
      );
      askCreateFlight();
    } else if (typeUser.toLowerCase() === "user") {
      findByCost();
    } else {
      console.log("Debes introducir una opción válida: Admin o User");
      askUsertype();
    }
  } else {
    console.log("Debes introducir una opción válida: Admin o User");
    askUsertype();
  }
};

const getNewID = () => {
  flights.sort((a, b) => a.id - b.id);
  return flights[flights.length - 1].id;
};

const createFligth = () => {
  //TODO: comprobar todos los inputs, gestión de errores
  const getTo = prompt("Indica la ciudad orígen del vuelo:");
  const getFrom = prompt(
    `Indica la ciudad de destino del vuelo con orígen ${getTo}:`
  );
  const getCost = prompt(`Indica el coste del vuelo ${getTo}-${getFrom}:`);
  let getScale = prompt(
    `¿El vuelo  ${getTo}-${getFrom} con coste ${getCost} tiene escalas? Indica Sí (S) o No (N):`
  );

  if (getScale.toLowerCase() === "s") {
    getScale = true;
  } else {
    getScale = false;
  }
  const newId = getNewID() + 1;

  flights.push({
    id: newId,
    to: getTo,
    from: getFrom,
    cost: Number(getCost),
    scale: getScale,
  });
  totalFlights = flights.length;
  console.log(
    `Se ha añadido correctamente el vuelo con origen ${getFrom}, destino ${getTo} y coste ${getCost}€. ${
      flights[i].scale ? "Con escalas" : "Sin escalas"
    }. Su ID es el ${newId}. \nEl número de vuelos de hoy ahora es de ${totalFlights}`
  );
  askCreateFlight();
};

const deleteFlight = () => {
  const getId = prompt("Indica el id del vuelo que quieres borrar:");
  if (getId) {
    const numId = parseInt(getId);
    if (numId !== NaN) {
      flights.splice(numId, 1);
      totalFlights = flights.length;
      console.log(
        `Se ha borrado correctamente el vuelo con id ${numId}. El número de vuelos de hoy queda en ${totalFlights}`
      );
    } else {
      console.log(
        `No has introducido un número válido. Vuelve a intentarlo, por favor`
      );
    }
  } else {
    console.log(
      `No has introducido un número válido. Vuelve a intentarlo, por favor`
    );
  }
  askDeleteFlight();
};

const askCreateFlight = () => {
  if (totalFlights <= 15) {
    let response = prompt(
      "¿Quieres crear un nuevo vuelo? Responde Sí (S) o No (N)"
    );
    // response = response.toLowerCase();
    /***** FACU: aquí si ponia el response.toLowerCase directmente en el if, cuando introducía una S mayúscula me pasaba por el case default. He tenido que ponerlo fuera para que me lo cogiera. ¿Alguna idea de por qué? *****/
    if (response) {
      response = response.toLowerCase();
      if (response === "s" || response === "n") {
        switch (response) {
          case "s":
            console.log(createFligth());
            break;
          case "n":
            console.log("Ahora puedes borrar vuelos si lo necesitas.");
            askDeleteFlight();
            break;
          default:
            console.log("Hay que indicar una S o una N para Sí o No");
            break;
        }
      } else {
        console.log(
          "Debes indicar una respuesta válida. Responde Sí (S) o No (N)."
        );
        askCreateFlight();
      }
    } else {
      console.log(
        "Debes indicar una respuesta válida. Responde Sí (S) o No (N)."
      );
      askCreateFlight();
    }
  } else {
    alert(
      `Grácias por introducir los vuelos. Has llegado al máximo permitido de 15. \nA continuación te mostramos cómo queda la lista de vuelos de hoy tras los cambios realizados.`
    );
    showShortDataFlights();
  }
};

const askDeleteFlight = () => {
  let response = prompt("¿Quieres borrar un vuelo? Responde Sí (S) o No (N)");
  if (response) {
    response = response.toLowerCase();
    if (response === "s" || response === "n") {
      switch (response) {
        case "s":
          deleteFlight();
          break;
        case "n":
          console.log(
            "Gracias por administrar los vuelos. \nA continuación te mostramos cómo queda la lista de vuelos de hoy tras los cambios realizados."
          );
          showShortDataFlights();
          break;
        default:
          console.log("Hay que indicar una S o una N para Sí o No");
          break;
      }
    } else {
      console.log(
        "Debes indicar una respuesta válida. Responde Sí (S) o No (N)."
      );
      askDeleteFlight();
    }
  } else {
    console.log(
      "Debes indicar una respuesta válida. Responde Sí (S) o No (N)."
    );
    askDeleteFlight();
  }
};

const findByCost = () => {
  const getCost = prompt("Indica el precio por el que quieres buscar.");
  if (getCost && getCost) {
    const numCost = parseInt(getCost);
    if (!isNaN(numCost)) {
      const filtered = flights.filter((flight) => flight.cost <= numCost);
      if (filtered.length >= 1) {
        console.log(
          `Hay ${filtered.length} vuelos con un coste igual o inferior a ${numCost}€. Son los siguientes:`
        );
        for (i = 0; i < filtered.length; i++) {
          console.log(
            `${filtered[i].from} - ${filtered[i].to}: ${filtered[i].cost}€ /  ${
              flights[i].scale ? "Con escalas" : "Sin escalas"
            }`
          );
        }
      } else {
        console.log(
          `No hay ningún vuelo con un coste igual o inferior a ${numCost}€`
        );
      }
    } else {
      console.log(
        `Debes introducir un valor númérico válido. Vuelve a intentarlo, por favor.`
      );
    }
  } else {
    console.log("Debes introducir un valor numérico válido.");
  }
};

adminFlights();
