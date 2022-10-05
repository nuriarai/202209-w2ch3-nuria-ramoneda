const questions = [
    {
        letter: "a",
        answer: "abducir",
        status: 0,
        question:
            "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
        letter: "b",
        answer: "bingo",
        status: 0,
        question:
            "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
        letter: "c",
        answer: "churumbel",
        status: 0,
        question: "Niño, crío, bebé",
    },
    {
        letter: "d",
        answer: "diarrea",
        status: 0,
        question:
            "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
        letter: "e",
        answer: "ectoplasma",
        status: 0,
        question:
            "Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
        letter: "f",
        answer: "facil",
        status: 0,
        question: "Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
        letter: "g",
        answer: "galaxia",
        status: 0,
        question:
            "Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
        letter: "h",
        answer: "harakiri",
        status: 0,
        question: "Suicidio ritual japonés por desentrañamiento",
    },
    {
        letter: "i",
        answer: "iglesia",
        status: 0,
        question: "Templo cristiano",
    },
    {
        letter: "j",
        answer: "jabali",
        status: 0,
        question:
            "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
        letter: "l",
        answer: "licantropo",
        status: 0,
        question: "Hombre lobo",
    },
    {
        letter: "m",
        answer: "misantropo",
        status: 0,
        question:
            "Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
        letter: "n",
        answer: "necedad",
        status: 0,
        question: "Demostración de poca inteligencia",
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
            "Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
        letter: "p",
        answer: "protoss",
        status: 0,
        question:
            "Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
        letter: "q",
        answer: "queso",
        status: 0,
        question:
            "Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", answer: "raton", status: 0, question: "Roedor" },
    {
        letter: "s",
        answer: "stackoverflow",
        status: 0,
        question: "Comunidad salvadora de todo desarrollador informático",
    },
    {
        letter: "t",
        answer: "terminator",
        status: 0,
        question:
            "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
        letter: "u",
        answer: "unamuno",
        status: 0,
        question:
            "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
        letter: "v",
        answer: "vikingos",
        status: 0,
        question:
            "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
        letter: "x",
        answer: "botox",
        status: 0,
        question:
            "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
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
            "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
];

const degAngle = 360 / 25;
let angAngle = -90;
let questionsNoAnswered = 25;
let questionsFailed = 0;
let questionsSucceeded = 0;
let currentLetter = "A";
const originalTime = 130;
let totalTime = originalTime;
let questionData;
let timer;

const addPositionToRoscow = () => {
    wWidth = document.querySelector(".roscow-wrapper").offsetWidth;
    const trans = wWidth / 2 - 300;
    document.querySelector(".roscow").style.transform = `translate(${trans}px)`;
    /* transform: translate(calc(50% - 300px)); */
    /* half the parent width substracting the element's width*/
};

const roscow = document.querySelectorAll(".letter");
const addPositionToLetter = () => {
    roscow.forEach((letter) => {
        letter.style.transform = `translateY(-50%) rotate(${angAngle}deg)`;
        const innerLetter = letter.querySelector(".inner-letter");
        innerLetter.style.transform = `rotate(${-angAngle}deg)`;
        angAngle += degAngle;
    });
};

const updateClock = () => {
    document.querySelector(".counter-timer").textContent = totalTime;
    if (totalTime === 0) {
        finalGame("timer");
    } else {
        totalTime -= 1;
        timer = setTimeout("updateClock()", 1000);
    }
};

const updateCountersHTML = () => {
    const successCounters = document.querySelectorAll(".counter-success");
    successCounters.forEach((counter) => {
        counter.textContent = questionsSucceeded;
    });
    const failsCounters = document.querySelectorAll(".counter-fails");
    failsCounters.forEach((counter) => {
        counter.textContent = questionsFailed;
    });
    questionsNoAnswered =
        questionsNoAnswered === undefined ? 0 : questionsNoAnswered;
    const remainingCounters = document.querySelectorAll(".counter-remaining");
    remainingCounters.forEach((counter) => {
        counter.textContent = questionsNoAnswered;
    });
    if (timer) {
        document.querySelector(".counter-final-time").textContent = timer + "s";
    }
};

const resetData = () => {
    questionsFailed = 0;
    questionsSucceeded = 0;
    currentLetter = "A";
    questions.forEach((line) => (line.status = 0));
    const allLetters = document.querySelectorAll(".letter");
    allLetters.forEach((letter) => {
        letter.classList.remove("failed", "succeeded", "current-letter");
    });
    questionsNoAnswered = questions.length;
    document.querySelector(".counter-timer").textContent = originalTime;
    updateCountersHTML();
    isEnded = false;
};

const preBegin = () => {
    resetData();
    switchPanels("inner-panel-game", "inner-panel-begin");
    const modals = document.querySelectorAll(".modal");
    modals.forEach((element) => {
        element.classList.remove("open");
    });
};

const beginGame = (panelFrom = "") => {
    totalTime = originalTime;
    switchPanels("inner-panel-begin", "inner-panel-game");
    document.querySelector(".input-answer").focus();
    updateClock();
    doQuestion();
};

const followGame = (type = "") => {
    checkAnswer(type);
};

const switchPanels = (classFromPanel, classToPanel) => {
    const fromPanel = document.querySelector(`.${classFromPanel}`);
    fromPanel.classList.add("transition-panel");
    fromPanel.classList.add("hidden-panel"); //hide
    const toPanel = document.querySelector(`.${classToPanel}`);
    toPanel.classList.add("transition-panel");
    toPanel.classList.remove("hidden-panel"); //show
};

const finalGame = (from) => {
    if (from === "timer") {
        document.querySelector(".modal-timer").classList.add("open");
    } else {
        if (timer) {
            //  console.log(timer);
            clearTimeout(timer);
        }
        document.querySelector(".modal-ended").classList.add("open");
    }
};

const checkAnswer = (type) => {
    const currentLetterElement = document.querySelector(".current-letter");
    const inputAnswer = document.querySelector(".input-answer");
    if (type === "response") {
        const answer = inputAnswer.value.toLowerCase();
        if (answer === questionData.answer.toLowerCase()) {
            questionData.status = 1;
            questionsSucceeded += 1;
            currentLetterElement.classList.add("succeeded");
            updateCountersHTML();
        } else if (answer === "pasapalabra") {
            questionData.status = 3;
        } else if (answer === null) {
            questionData.status = -1;
            questionsFailed += 1;
            currentLetterElement.classList.add("failed");
            updateCountersHTML();
        } else if (answer === "end") {
            isEnded = true;
            finalGame();
        } else {
            questionData.status = -1;
            questionsFailed += 1;
            currentLetterElement.classList.add("failed");
            updateCountersHTML();
        }
    } else {
        questionData.status = 3;
    }
    //vaciamos el input
    inputAnswer.value = "";
    inputAnswer.focus();
    doQuestion();
};

const doQuestion = () => {
    questionData = questions.find((row) => row.status === 0);
    if (!questionData) {
        questionData = questions.find((row) => row.status === 3);
    }
    if (!questionData) {
        finalGame("end");
    } else {
        questionsNoAnswered = questions.filter(
            (row) => row.status === 0 || row.status === 3
        ).length;
        updateCountersHTML();
        currentLetter = questionData.letter;
        //si ya hay una current letter le borramos la clase
        let prevCurrentLetter = document.querySelector(".current-letter");
        if (prevCurrentLetter) {
            prevCurrentLetter.classList.remove("current-letter");
        }
        //ponemos la clase current a la letra que toca
        let currentLetterClass = document.querySelector(
            `.letter-${questionData.letter}`
        );
        if (currentLetterClass) {
            currentLetterClass.classList.add("current-letter");
        }
        //mostramos la letra que toca
        let beginWith = document.querySelector(".begin-with span");
        beginWith.textContent = questionData.letter;
        //mostramos la pregunta que toca
        let question = document.querySelector(".question");
        question.textContent = questionData.question;
    }
};

const addEventListeners = () => {
    document
        .querySelector(".begin")
        .addEventListener("click", () => beginGame("begin"));

    document
        .querySelector(".rebegin")
        .addEventListener("click", () => preBegin("final"));

    document
        .querySelector(".btnRebegin")
        .addEventListener("click", () => preBegin("final"));

    document
        .querySelector(".response-question")
        .addEventListener("click", () => followGame("response"));

    document
        .querySelector(".pass-question")
        .addEventListener("click", () => followGame("pass"));

    document.addEventListener(
        "keydown",
        (event) => {
            const keyValue = event.key;
            //   const codeValue = event.which;
            // console.log(keyValue);
            switch (keyValue) {
                case "Tab":
                    event.preventDefault();
                    document.querySelector(".input-answer").focus();
                    if (totalTime > 0) {
                        followGame("pass");
                    }
                    break;
                case "Enter":
                    if (totalTime != originalTime && totalTime != 0) {
                        followGame("response");
                    } else {
                        beginGame();
                    }
                    break;
                default:
                    break;
            }
        },
        false
    );
};

const runGame = () => {
    addPositionToRoscow();
    addPositionToLetter();
    addEventListeners();
};

document.addEventListener("DOMContentLoaded", () => runGame());
window.addEventListener("resize", () => addPositionToRoscow());
