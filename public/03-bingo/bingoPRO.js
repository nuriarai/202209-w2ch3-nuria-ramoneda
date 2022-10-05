console.clear();
const minBall = 1;
const maxBall = 75;
let actualRound = 1;
const usedBalls = [];
let isPlaying = true;
let isBingo = false;
const bingoCard = [];
const rowsCard = [
  { row: 1, done: false },
  { row: 2, done: false },
  { row: 3, done: false },
];
let row1 = 0;
let row2 = 0;
let row3 = 0;
const systemPoints = [
  { rounds: 68, points: 25 },
  { rounds: 70, points: 15 },
  { rounds: 72, points: 10 },
  { rounds: 74, points: 5 },
];
const players = [
  { player: "Joan", points: 10 },
  { player: "Aina", points: 25 },
  { player: "Julia", points: 15 },
  { player: "Arnau", points: 5 },
  { player: "Manel", points: 1 },
];

const showSeparator = () => {
  console.log("*************************");
};

const getPlayerName = () => {
  const playerName = prompt("Indica tu nombre por favor.");
  if (playerName) {
    players.push({
      player: playerName,
      points: 0,
    });
  } else {
    alert("Debes introducir un nombre válido para poder jugar.");
    getPlayerName();
  }
  return playerName;
};

const getRandomNumber = (max, min) => {
  const rand = Math.floor(Math.random() * max + min);
  if (usedBalls.includes(rand)) {
    return getRandomNumber(max, min);
  }
  usedBalls.push(rand);
  return rand;
};

const showRulesAndRanking = (playerName) => {
  console.log(
    "Pero antes de sacar la primera bola te comentamos el sistema de puntos del juego, es muy sencillo, ganas más puntos si tardas menos rondas en completar el cartón. Esta es la tabla que se sigue:"
  );
  let n = 1;
  systemPoints.forEach((item) => {
    console.log(`De ${n} a ${item.rounds} rondas: ${item.points} puntos`);
    n = item.rounds + 1;
  });
  console.log("A partir de 75 rondas, sólo 1 punto.");
  console.log(
    `Y este es el ranking actual. Esperamos verte muy pronto subir en la lista ${playerName}`
  );

  showRanking(players);
};

const updatePoints = (point, playerName) => {
  const rowFound = players.find((row) => row.player === playerName);
  if (rowFound !== undefined) rowFound.points = point;
};

const setPunctuation = (playerName) => {
  if (actualRound <= 68) {
    updatePoints(25, playerName);
  } else if (actualRound >= 69 && actualRound <= 70) {
    updatePoints(15, playerName);
  } else if (actualRound >= 71 && actualRound <= 72) {
    updatePoints(10, playerName);
  } else if (actualRound >= 73 && actualRound <= 74) {
    updatePoints(5, playerName);
  } else if (actualRound >= 75) {
    updatePoints(1, playerName);
  }
};

const showRanking = () => {
  players.sort((a, b) => b.points - a.points);
  let n = 1;
  console.log("Ranking  Nombre   Puntos");
  console.log("------------------------");
  players.forEach((player) => {
    console.log(`   ${n}      ${player.player}     ${player.points}`);
    n++;
  });
};

const showCard = (mode) => {
  const shortCard = [];
  bingoCard.forEach((row) => {
    if (row.matched) {
      shortCard.push("X");
    } else {
      shortCard.push(row.number);
    }
  });
  if (mode === "short") {
    return console.log(
      shortCard.slice(0, 5).join(" ") +
        " / " +
        shortCard.slice(5, 10).join(" ") +
        " / " +
        shortCard.slice(10, 15).join(" ")
    );
  } else if (mode === "prompt") {
    return `\n     ${shortCard.slice(0, 5).join(" ")} \n     ${shortCard
      .slice(5, 10)
      .join(" ")} \n     ${shortCard.slice(10, 15).join(" ")} \n`;
  } else {
    return console.log(
      "------------------------\n" +
        " " +
        shortCard.slice(0, 5).join(" | ") +
        "\n " +
        shortCard.slice(5, 10).join(" | ") +
        "\n " +
        shortCard.slice(10, 15).join(" | ") +
        "\n------------------------\n"
    );
  }
};

const createCard = (playerName, first) => {
  const lines = 3;
  const cols = 5;
  for (let l = 1; l <= lines; l++) {
    for (let col = 1; col <= cols; col++) {
      switch (col) {
        case 1:
          rand = getRandomNumber(15, 1);
          break;
        case 2:
          rand = getRandomNumber(15, 16);
          break;
        case 3:
          rand = getRandomNumber(15, 31);
          break;
        case 4:
          rand = getRandomNumber(15, 46);
          break;
        case 5:
          rand = getRandomNumber(15, 61);
          break;
      }
      bingoCard.push({ number: rand, matched: false });
    }
  }

  let result = null;
  if (first) {
    result = confirm(
      `Hola ${playerName}, grácias por jugar al Bingo con nosotros. Este es el cartón que se ha generado al azar: \n ${showCard(
        "prompt"
      )} \n¿Te parece bien?`
    );
  } else {
    result = confirm(`¿Y éste? \n ${showCard("prompt")} \n¿Te parece mejor?`);
  }
  if (!result) {
    bingoCard.length = 0;
    createCard(playerName, false);
  } else {
    console.log("!Genial! Ya tenemons cartón: ");
  }
  usedBalls.length = 0;
};

const findBall = (ball) => {
  const rowFound = bingoCard.find(({ number }) => number === ball);
  if (rowFound === undefined) {
    console.log("No está! :(");
    return false;
  } else {
    rowFound.matched = true;
    console.log("¡Acierto! :)");
    return true;
  }
};

const checkRowAndBingo = () => {
  cardRowOne = bingoCard.slice(0, 5);
  cardRowTwo = bingoCard.slice(5, 10);
  cardRowThree = bingoCard.slice(10, 15);

  if (isRow(cardRowOne)) {
    rowsCard[0].done = true;
    if (row1 === 0) {
      console.log("LINEA");
      row1++;
    }
  }
  if (isRow(cardRowTwo)) {
    rowsCard[1].done = true;
    if (row2 === 0) {
      console.log("LINEA");
      row2++;
    }
  }
  if (isRow(cardRowThree)) {
    rowsCard[2].done = true;
    if (row3 === 0) {
      console.log("LINEA");
      row3++;
    }
  }
  if (row1 === 1 && row2 === 1 && row3 === 1) {
    console.log("*****************");
    console.log("!!!!! BINGO ¡¡¡¡¡");
    console.log("*****************");
    isBingo = true;
  }
};

const isRow = (rowInCard) => {
  return rowInCard.every((row) => row.matched);
};

const newRound = () => {
  const ball = getRandomNumber(maxBall, minBall);
  if (actualRound === 1) {
    console.log(`Esta es la primera bola salida del bombo: ${ball}!`);
  } else {
    console.log(`Esta es la nueva bola salida del bombo: ${ball}!`);
  }
  findBall(ball);
  showCard("long");
  console.log("Rondas: " + actualRound);
  actualRound++;
};

const askRound = (playerName) => {
  do {
    if (confirm(`${playerName} ¿Quieres seguir jugando?`)) {
      newRound();
      checkRowAndBingo();
    } else {
      isPlaying = false;
      console.log(
        `Gracias por participar ${playerName}.\n Así ha quedado finalmente tu cartón, tras ${actualRound} rondas:`
      );
      showCard("long");
    }
  } while (isPlaying && !isBingo);
  if (isPlaying && isBingo) {
    console.log(
      `Felicidades ${playerName}! Has terminado la partida en ${actualRound} rondas.`
    );
    setPunctuation(playerName);
    showRanking();
    askNewPlayer();
  }
};

const askNewPlayer = () => {
  if (confirm("¿Alguien más quiere jugar?")) {
    bingoCard.length = 0;
    usedBalls.length = 0;
    rowsCard.forEach((line) => (line.done = false));
    row1 = 0;
    row2 = 0;
    row3 = 0;
    actualRound = 1;
    isPlaying = true;
    isBingo = false;
    playBingo();
  } else {
    console.log(
      "!Muchas gracias por jugar al Bingo con nosotros, hasta la próxima!"
    );
  }
};

const playBingo = () => {
  playerName = getPlayerName();
  createCard(playerName, true);
  showCard("long");
  showSeparator();
  showRulesAndRanking(playerName);
  showSeparator();
  showCard("long");
  showSeparator();
  newRound();
  askRound(playerName);
};

playBingo();
