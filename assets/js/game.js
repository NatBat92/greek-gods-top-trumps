// God  and mythical creature arrays

let gods = [ 
    new mythologicalCard ("hades", 100, 65, 90, 25),
    new mythologicalCard ("cronus", 50, 20, 30, 65),
    new mythologicalCard ("persephone", 0, 40, 0, 20),
    new mythologicalCard ("aphrodite", 70, 70, 0, 85),
    new mythologicalCard ("apollo", 70, 25, 90, 60),
    new mythologicalCard ("ares", 100, 0, 100, 50),
    new mythologicalCard ("artemis", 25, 0, 50, 70),
    new mythologicalCard ("zeus", 100, 90, 90, 70),
    new mythologicalCard ("athena", 85, 50, 70, 100),
    new mythologicalCard ("poseidon", 100, 100, 100, 70),
    new mythologicalCard ("hera", 100, 20, 0, 75),
    new mythologicalCard ("hermes", 20, 60, 0, 90),
    new mythologicalCard ("hestia", 30, 70, 15, 80),
    new mythologicalCard ("iris", 0, 0, 0, 50),
    new mythologicalCard ("atlas", 100, 40, 0, 100),
    new mythologicalCard ("rhea", 80, 90, 25, 65),
    new mythologicalCard ("basilisk", 100, 0, 90, 0),
    new mythologicalCard ("harpy", 70, 50, 90, 30),
    new mythologicalCard ("pheonix", 70, 90, 25, 70),
    new mythologicalCard ("siren", 100, 80, 90, 40),
];

var content = "";
var result = "";
var endGame = false;
var noGo = false;
var noValue = -1;
let playerCards;
let computerCards;
var player, computer, theDeck, playerOneCard, playerTwoCard, ending, computerStack, playerStack, mainStack, g, i, j, cardNum;


function draw() {
    if (endGame) {
        ending = "cards";
        playerCards = player.getSize()+ending;
        computerCards = computer.getSize()+ending;
    } else {
        ending = "cards";
    }

    playerStack = playerCards.getSize()+1+ending;

    if (computerCards.getSize()===0) {
        ending = "card.";
    } else {
        ending = "cards"
    }

    computerStack = (computerCards.getSize()+1+ending)
}

mainStack = theDeck.getSize();

function drawPlayerOneCard() {
    document.getElementById(p1CardName);
    document.getElementById(p1Power);
    document.getElementById(p1Magic);
    document.getElementById(p1Torror);
    document.getElementById(p1Wisdom);
}


