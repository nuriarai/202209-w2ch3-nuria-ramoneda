// bingo pre-curso

/*
90 números en total (1 a 90)
cartón 15 números, 3 filas y 5 columnas (9 columnas con espacios vacios)
*/

const bingoCard = [
  { number: 1, matched: false },
  { number: 2, matched: false },
  { number: 3, matched: false },
  { number: 4, matched: false },
  { number: 5, matched: false },
];

const min = 1;
const max = 6; //90
const turn = 1;

const getUserName = () => {
  const userName = prompt("Indica tu nombre por favor.");
  if (userName) {
    console.log(`Gracias por jugar ${userName}. ¡Empezamos!`);
  } else {
    console.log("Debes introducir un nombre válido para poder jugar.");
    getUserName();
  }
  return userName;
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min) + min);
};

const showCard = () => {
  let res = bingoCard
    .map(function (elem) {
      return elem.number + " " + (elem.matched ? "X" : false);
    })
    .join(", ");
  console.log(res);
  /*  const line = [];
  for (i = 0; i < bingoCard.length; i++) {
    console.log(`${bingoCard[i].number}: ${bingoCard[i].matched}`);
  } */
};

const findBall = (ball) => {
  const result = bingoCard.find(({ number }) => number === ball);
  if (result === undefined) {
    console.log(`No se ha encontrado el número ${ball} esta vez.`);
    return false;
  } else {
    // Search index to change de value when find the number
    const index = bingoCard.findIndex((object) => {
      return object.number === ball;
    });
    if (index !== -1) {
      bingoCard[index].matched = true;
    }
    console.log(`Has tenido un acierto con el número ${ball}.`);
    return true;
  }
};

const isLine = () => {
  const nums = bingoCard.filter((num) => num.matched === true);
  if (nums.length === bingoCard.length) {
    return true;
  }
  return false;
};

const newTurn = (turn, playerName) => {
  let ball = getRandomInt(min, max);
  if (turn === 1) {
    console.log(`Y esta es la primera bola a buscar, el número: ${ball}!`);
  } else {
    console.log(`Y esta es la siguiente bola a buscar, el número: ${ball}!`);
  }
  const foundBall = findBall(ball);
  if (!foundBall) {
    askTurn(turn, playerName);
  } else {
    showCard();
    askTurn(turn, playerName);
  }
};

const askTurn = (turn, playerName) => {
  const line = isLine();
  if (line) {
    alert(`¡LÍNEA!`);
    console.log(`¡LÍNEA!`);
    console.log(
      `Grácias por participar ${playerName}. Así ha quedado finalmente tu cartón`
    );
    showCard();
  } else {
    const nexTurn = window.confirm(`${playerName} ¿Quieres seguir jugando?`);
    if (nexTurn) {
      turn++;
      newTurn(turn, playerName);
    } else {
      console.log(
        `Grácias por participar ${playerName}. Así ha quedado finalmente tu cartón:`
      );
      showCard();
    }
  }
};

const bingo = () => {
  const playerName = getUserName();
  console.log(`Este es tu primer cartón:`);
  showCard();
  newTurn(turn, playerName);

  /*  if (turn === 1) {
    newTurn(turn);
  } else {
    askTurn(turn, playerName);
  } */
};

bingo();
