console.clear();
const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

const players = [
  { name: "Joan", hits: 12, fails: 4, passed: 5 },
  { name: "Aina", hits: 20, fails: 4, passed: 5 },
  { name: "Julia", hits: 11, fails: 4, passed: 5 },
  { name: "Arnau", hits: 8, fails: 4, passed: 5 },
  { name: "Manel", hits: 7, fails: 4, passed: 5 },
];
let isEnded = false;
let qtsNoAnswered = questions.length;

const resetData = () => {
  questions.forEach((line) => (line.status = 0));
  qtsNoAnswered = questions.length;
  isEnded = false;
};

const getPlayerName = () => {
  const playerName = prompt("Indica tu nombre por favor.");
  if (playerName) {
    players.push({
      name: playerName,
      hits: 0,
      fails: 0,
      passed: 0,
    });
    console.log("******************************************");
    console.log(`Hola ${playerName}, empieza la partida!`);
    console.log(
      "Recuerda, cada respuesta debe ser una sola palabra, no importan las mayúscula o minúsculas, pero no pongas los acentos, porque no los reconocemos!"
    );
    console.log("******************************************");
  } else {
    alert("Debes introducir un nombre válido para poder jugar!");
    getPlayerName();
  }
  return playerName;
};

const showRanking = () => {
  players.sort((a, b) => b.hits - a.hits);
  console.log("---------------------------------");
  console.log("Nombre  Aciertos  Fallos  Pasados");
  console.log("---------------------------------");
  players.forEach((player) => {
    console.log(
      `${player.name}       ${player.hits}        ${player.fails}       ${player.passed}`
    );
  });
  console.log("---------------------------------");
};

const calcGamePoints = (currentPlayer) => {
  const gamePoints = [];
  let hits = 0;
  let fails = 0;
  let passed = 0;

  questions.forEach((questionData) => {
    if (questionData.status === 1) {
      hits++;
    }
    if (questionData.status === -1) {
      fails++;
    }
    if (questionData.status === 0) {
      passed++;
    }
  });
  const player = players.find((row) => row.name === currentPlayer);
  if (player !== undefined) {
    player.hits = hits;
    player.fails = fails;
    player.passed = passed;
  }
  gamePoints.push(hits);
  gamePoints.push(fails);
  gamePoints.push(passed);
  return gamePoints;
};

const doQuestions = () => {
  questionsNoAnswereds = questions.filter((row) => row.status === 0);
  qtsNoAnswered = questionsNoAnswereds.length;
  questionsNoAnswereds.forEach((questionData) => {
    const response = prompt(
      `Con la letra "${questionData.letter.toLowerCase()}", ${
        questionData.question
      }.`
    ).toLowerCase();
    if (response === questionData.answer.toLowerCase()) {
      questionData.status = 1;
      console.log(
        `Con la ${questionData.letter.toLowerCase()} : "${response}" es la respuesta correcta.`
      );
    } else if (response === "pasapalabra") {
      questionData.status = 0;
      console.log(`Con la ${questionData.letter.toLowerCase()} :  PASAPALABRA`);
    } else if (response === null) {
      console.log(
        `Con la ${questionData.letter.toLowerCase()} : "${response}" es incorrecto.`
      );
      questionData.status = -1;
    } else if (response === "end") {
      isEnded = true;
      throw isEnded;
    } else {
      console.log(
        `Con la ${questionData.letter.toLowerCase()} : "${response}" es incorrecto.`
      );
      questionData.status = -1;
    }
  });
};

const newGame = (currentPlayer) => {
  try {
    do {
      doQuestions();
      //TODO: cuando sólo hay 1 pasapalabra de entrada se imprime igualmente
      if (qtsNoAnswered > 1) {
        console.log(`${currentPlayer}, vamos a por la siguiente ronda`);
      }
    } while (qtsNoAnswered !== 0);
    const dataCurrentPlayer = calcGamePoints(currentPlayer);
    console.log(
      `------------------------------------------\n!Genial ${currentPlayer}! Ya has terminado la partida.\n\nHas tenido ${dataCurrentPlayer[0]} aciertos y ${dataCurrentPlayer[1]} fallos.`
    );
    console.log("\nY el ranking final es el siguiente:");
    showRanking();
    if (
      confirm(
        `¿${currentPlayer}, quieres volver a jugar?\nQuizás puedas mejorar tu puntuación.`
      )
    ) {
      resetData();
      newGame(currentPlayer);
    } else {
      console.log(`Gracias por jugar ${currentPlayer}`);
      console.log("******************************************");
    }
  } catch (isEnded) {
    if (isEnded) {
      const dataCurrentPlayer = calcGamePoints(currentPlayer);
      console.log(
        `Lástima que nos dejes antes de terminar la partida ${currentPlayer}, pero esperamos que vuelvas pronto.\nPor si te interesa, hasta el momento habías tenido ${dataCurrentPlayer[0]} aciertos, ${dataCurrentPlayer[1]} fallos y habías pasado en ${dataCurrentPlayer[2]} palabras.`
      );
    }
  }
};

const askNewPlayer = () => {
  if (confirm("¿Alguien más quiere jugar al PASAPALABRA?")) {
    resetData();
    playGame();
  } else {
    console.log("!ADIÓS¡");
  }
};

const playGame = () => {
  const currentPlayer = getPlayerName();
  newGame(currentPlayer);
  askNewPlayer();
};

playGame();
