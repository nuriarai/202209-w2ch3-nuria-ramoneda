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

const userName = prompt("Indica tu nombre, por favor.");
console.log(`Gracias por entrar ${userName}`);

const showDataDayFlights = () => {
  let escaleString = "";
  let mediumCost = 0;
  let numScales = 0;
  const totalFlights = flights.length;
  const lastFlights = [];
  for (i = 0; i < totalFlights; i++) {
    if (flights[i].scale === true) {
      numScales++;
      escaleString = "realiza por lo menos una escala.";
    } else {
      escaleString = "no realiza ninguna escala.";
    }
    if (i >= totalFlights - 5) {
      lastFlights.push(flights[i].to);
    }
    console.log(
      `El vuelo con origen ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y ${escaleString}`
    );
    mediumCost += flights[i].cost;
  }
  mediumCost = mediumCost / totalFlights;

  console.log(`El coste medio de los vuelos es de ${mediumCost}€`);
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

showDataDayFlights();

function Flight(id, to, from, cost, scale) {
  this.id = id;
  this.to = to;
  this.from = from;
  this.cost = cost;
  this.scale = scale;
}
