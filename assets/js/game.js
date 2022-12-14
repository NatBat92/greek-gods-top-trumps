// God  and mythical creature arrays
let gods = [];

gods[0] = ["Hades", 100, 65, 90, 25];
gods[1] = ["Cronus", 50, 20, 30, 65];
gods[2] = ["Persephone", 0, 40, 0, 20];
gods[3] = ["Aphrodite", 70, 70, 0, 85];
gods[4] = ["Apollo", 70, 25, 90, 60];
gods[5] = ["Ares", 100, 0, 100, 50];
gods[6] = ["Artemis", 25, 0, 50, 70];
gods[7] = ["Zeus", 100, 90, 90, 70];
gods[8] = ["Athena", 85, 50, 70, 100];
gods[9] = ["Poseidon", 100, 100, 100, 70];
gods[10] = ["Hera", 100, 20, 0, 75];
gods[11] = ["Hermes", 20, 60, 0, 90];
gods[12] = ["Hestia", 30, 70, 15, 80];
gods[13] = ["Iris", 5, 5, 5, 50];
gods[14] = ["Atlas", 100, 40, 0, 100];
gods[15] = ["Rhea", 80, 90, 25, 65];
gods[16] = ["Basilisk", 100, 0, 90, 0];
gods[17] = ["Harpy", 70, 50, 90, 30];
gods[18] = ["Phoenix", 70, 90, 25, 70];
gods[19] = ["Siren", 100, 80, 90, 40];

//Stores players score
let p1Score = 0;
let compScore = 0;

let playerOneCardStats = [];
let computerCardStats = [];
let i = 0;
let j = 0;
let m = 0;
let card = 0;
let toggle;
let comptoggle;
let cardCheck;
let cardNoPl = 0;
let cardNoCo = 0;
const playerOneHand = new Set();
const computerHand = new Set();

let playerPower;
let playerMagic;
let playerTerror;
let playerWisdom;

let computerPower;
let computerMagic;
let computerTerror;
let computerWisdom;

let count = 0;
let round = 1;
let endGametoggle = 0;
let hidePlayerCards = document.getElementById("p1-current");
let hideCompCards = document.getElementById("comp-current");

//Set buttons to disable prior to game being initiated
document.getElementById('end-game').disabled=true;
document.getElementById('compare-cards').disabled=true;
document.getElementById('next-round-button').disabled=true;
document.getElementById('finish-game-button').disabled=true;
hidePlayerCards.style.display = 'none';
hideCompCards.style.display = 'none';

/////////////////////////////////////////////////////////////////
////   Generates Hands of Cards for playerOne and Computer   ////
/////////////////////////////////////////////////////////////////

function GenerateHand() {

    /////////////////////////////////
    ////   Set playerOne cards   ////
    /////////////////////////////////

    document.getElementById("next-round").innerHTML = round;

    hidePlayerCards.style.display = 'inline-block';
    hideCompCards.style.display = 'inline-block';

    //Creates 10 random numbers for player one hand of cards between 0 and 19
    //These values correspond to the index value in gods array
    while (playerOneHand.size != 10) {
        card = Math.floor((Math.random() * 19));
        toggle = playerOneHand.has(card);
        if (toggle == true) { //if statement used to make sure no duplicate values exist
            playerOneHand.delete(card);
            i--;
        } else {
            playerOneHand.add(card);
        }
    }

    //Using above random numbers, corresponding index values of Gods array added to PlayerOneCards array
    for (j = 0; j < 10; j++) {
        cardNoPl = [...playerOneHand][j];
        playerOneCardStats.push(gods[cardNoPl]);
    }

    //set players first card
    document.getElementById("p1CardName").innerHTML = playerOneCardStats[0][0];
    playerPower = document.getElementById("p1Power").innerHTML = playerOneCardStats[0][1];
    playerMagic = document.getElementById("p1Magic").innerHTML = playerOneCardStats[0][2];
    playerTerror = document.getElementById("p1Terror").innerHTML = playerOneCardStats[0][3];
    playerWisdom = document.getElementById("p1Wisdom").innerHTML = playerOneCardStats[0][4];

    ////////////////////////////////
    ////   Set Computer Cards   ////
    ////////////////////////////////

    //If card index value is not present in playerOne hand, add to computer hand
    for (m = 0; m < 20; m++) {
        comptoggle = playerOneHand.has(m);
        if (comptoggle !== true) {
            computerHand.add(m);
        }
    }

    //Using above random numbers, corresponding index values of Gods array added to ComputerHands array
    for (j = 0; j < 10; j++) {
        cardNoCo = [...computerHand][j];
        computerCardStats.push(gods[cardNoCo]);
    }

    //set computers first card
    document.getElementById("compCardName").innerHTML = computerCardStats[0][0];
    computerPower = computerCardStats[0][1];
    computerMagic = computerCardStats[0][2];
    computerTerror = computerCardStats[0][3];
    computerWisdom = computerCardStats[0][4];
}

//////////////////////
////   The Game   ////
//////////////////////

//Checks to see if user has selected an attribute to compare
function cardCheckTest() {
    cardCheck = document.querySelector('input[name="selection"]:checked');
    if (cardCheck == null) {
        alert("Please select an attribute!");
        document.getElementById('next-round-button').disabled=true;
    } else {
        CompareCards();
        document.getElementById('next-round-button').disabled=false;
    }
}

function CompareCards() {
    //If Power selected 
    if (document.getElementById("power").checked) {
        if (playerPower > computerPower) {
            p1Score++;
        } else if (playerPower == computerPower) {
            p1Score++;
            compScore++;
        } else {
            compScore++;
        }
    }
    //If Magic selected
    else if (document.getElementById("magic").checked) {
        if (playerMagic > computerMagic) {
            p1Score++;
        } else if (playerMagic == computerMagic) {
            p1Score++;
            compScore++;
        } else {
            compScore++;
        }
    }
    //If Terror selected
    else if (document.getElementById("terror").checked) {
        if (playerTerror > computerTerror) {
            p1Score++;
        } else if (playerTerror == computerTerror) {
            p1Score++;
            compScore++;
        } else {
            compScore++;
        }
    }
    //If Wisdom selected
    else if (document.getElementById("wisdom").checked) {
        if (playerWisdom > computerWisdom) {
            p1Score++;
        } else if (playerWisdom == computerWisdom) {
            p1Score++;
            compScore++;
        } else {
            compScore++;
        }
    }
    //Updates players score, computers score and round number
    document.getElementById("p1-score").innerHTML = p1Score;
    document.getElementById("comp-score").innerHTML = compScore;
    document.getElementById("next-round").innerHTML = round;
    count++;

    //Display computer card after player has compared cards
    document.getElementById("compPower").innerHTML = computerPower;
    document.getElementById("compMagic").innerHTML = computerMagic;
    document.getElementById("compTerror").innerHTML = computerTerror;
    document.getElementById("compWisdom").innerHTML = computerWisdom;

    //Disable button once clicked so can't run round more than once
    document.getElementById("compare-cards").disabled = true;

    //increment round count
    if (round < 10){
        round++;
    } 
    else{
        round = round;
    }

    //disable 'Next' button once round 10 is reached
    if (round == 10) {
        endGametoggle++;
        let hideNext = document.getElementById("next-round-button");
        hideNext.addEventListener('click', () => {
            hideNext.style.display = 'none';
        });
    }
    //if round 10 has been played, enable 'Finish Game' button to display results
    if (endGametoggle == 2){
        document.getElementById('finish-game-button').disabled=false;
    }
}

////////////////////////////////////
////   Hide 'New Game' Button   ////
////////////////////////////////////

let newGame = document.getElementById("new-game");
newGame.addEventListener('click', () => {
    newGame.style.display = 'none';
});

//////////////////////////////
////   Next Round Button  ////
//////////////////////////////

function nextRound() {
    document.getElementById("next-round").innerHTML = round;
    //clear radio buttons
    document.querySelector('input[name="selection"]:checked').checked = false;

    //if round exceeds 10, disable compare cards button
    if (round > 10) {
        document.getElementById("compare-cards").disabled = true;
    } else {
        //re-enable 'Compare Cards' button
        document.getElementById("compare-cards").disabled = false;
        document.getElementById("next-round-button").disabled = true;
        
        //display players new card
        document.getElementById("p1CardName").innerHTML = playerOneCardStats[count][0];
        playerPower = document.getElementById("p1Power").innerHTML = playerOneCardStats[count][1];
        playerMagic = document.getElementById("p1Magic").innerHTML = playerOneCardStats[count][2];
        playerTerror = document.getElementById("p1Terror").innerHTML = playerOneCardStats[count][3];
        playerWisdom = document.getElementById("p1Wisdom").innerHTML = playerOneCardStats[count][4];

        //store new card values in variables
        document.getElementById("compCardName").innerHTML = computerCardStats[count][0];
        computerPower = computerCardStats[count][1];
        computerMagic = computerCardStats[count][2];
        computerTerror = computerCardStats[count][3];
        computerWisdom = computerCardStats[count][4];

        //reset computer card values shown on screen 
        document.getElementById("compPower").innerHTML = "???";
        document.getElementById("compMagic").innerHTML = "???";
        document.getElementById("compTerror").innerHTML = "???";
        document.getElementById("compWisdom").innerHTML = "???";
    }
}

////////////////////////////////////
////    Finish Game Button      ////
////////////////////////////////////

let modalFinish = document.getElementById("end-of-game");
let btnFinish = document.getElementById("finish-game-button");
let closeBtnFinish = document.getElementById("close-finish-modal");

btnFinish.onclick = function () {
    modalFinish.style.display = "block";
    displayScore();
};

closeBtnFinish.onclick = function () {
    modalFinish.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modalFinish) {
        modalFinish.style.display = "none";
    }
};

function displayScore() {
    if (p1Score > compScore) {
        document.getElementById("modal-content2").innerHTML = "<p>You Win!</p>";
    } else if (compScore > p1Score)
        document.getElementById("modal-content2").innerHTML = "<p>You Lose!</p>";
    else if (compScore === p1Score)
        document.getElementById("modal-content2").innerHTML = "<p>It's a draw!</p>";
}

////////////////////////////////////
////    End the Game Button     ////
////////////////////////////////////

function endGame() {
    alert("Game Over!");
    location.reload();
}

/////////////////////////////////////////////////
////   Open and close the How-To-Play box    ////
/////////////////////////////////////////////////

let modal = document.getElementById("how-to-play");
let btn = document.getElementById("how-to-play-button");
let closeBtn = document.getElementById("close-modal");

btn.onclick = function () {
    modal.style.display = "block";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};