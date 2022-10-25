// God  and mythical creature arrays
let gods = new Array ();
 
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
gods[13] = ["Iris", 0, 0, 0, 50];
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
let k = "";
let m = 0;
let card = 0;
let toggle;
let comptoggle;
const playerOneHand = new Set();
const computerHand = new Set();

/////////////////////////////////////////////////////////////////
////   Generates Hands of Cards for playerOne and Computer   ////
/////////////////////////////////////////////////////////////////

function GenerateHand (){

    /////////////////////////////////
    ////   Set playerOne cards   ////
    /////////////////////////////////

    //Creates 10 random numbers for player one hand of cards between 0 and 19
    //These values correspond to the index value in gods array
    while (playerOneHand.size != 10){
        card = Math.floor((Math.random() * 19)); 
        toggle = playerOneHand.has(card);
        if (toggle == true){ //if statement used to make sure no duplicate values exist
            playerOneHand.delete(card);
            i--;
        }
        else{
            playerOneHand.add(card);
        }  
    }
    console.log(playerOneHand); //Used For Debugging Purposes
        
    //Using above random numbers, corresponding index values of Gods array added to PlayerOneCards array
    for (j = 0; j < 10; j++){
        let cardNoPl = 0;
        cardNoPl = [...playerOneHand][j];
        playerOneCardStats.push(gods[cardNoPl]);
    }
    ////////////////////////////////
    ////   Set Computer Cards   ////
    ////////////////////////////////

    //If card index value is not present in playerOne hand, add to computer hand
    for (m = 0; m < 20; m++){
        comptoggle = playerOneHand.has(m);
        if (comptoggle !== true){
            computerHand.add(m);
        }
    }
    console.log(computerHand); //Used For Debugging Purposes
 
    //Using above random numbers, corresponding index values of Gods array added to ComputerHands array
    for (j = 0; j < 10; j++){
        let cardNoCo = 0;
        cardNoCo = [...computerHand][j];
        computerCardStats.push(gods[cardNoCo]);
    }

    console.log(playerOneCardStats); //Used For Debugging Purposes
    console.log(computerCardStats);  //Used For Debugging Purposes

    //set players first card
    document.getElementById("p1CardName").innerHTML = playerOneCardStats[0][0];
    document.getElementById("p1Power").innerHTML = playerOneCardStats[0][1];
    document.getElementById("p1Magic").innerHTML = playerOneCardStats[0][2];
    document.getElementById("p1Terror").innerHTML = playerOneCardStats[0][3];
    document.getElementById("p1Wisdom").innerHTML = playerOneCardStats[0][4];

    //set computers first card
    document.getElementById("compCardName").innerHTML = computerCardStats[0][0];
    document.getElementById("compPower").innerHTML = computerCardStats[0][1];
    document.getElementById("compMagic").innerHTML = computerCardStats[0][2];
    document.getElementById("compTerror").innerHTML = computerCardStats[0][3];
    document.getElementById("compWisdom").innerHTML = computerCardStats[0][4];

}

//////////////////////
////   The Game   ////
//////////////////////

function CompareCards(){
//     //let k = 0;
//     var selected = document.getElementsByName('selection');
//     console.log(selected);
//     for(k = 0; k < selected.length; k++) {
//         //console.log(k);
//         if(selected[k].checked){
//             document.getElementById("result").innerHTML = selected[k].value;   
//     }
// }
//     alert("You selected " + selected);

    if (document.getElementById(power).checked) {
        let power_value = document.getElementById(result).innerHTML = document.getElementById(power).value;
        console.log("You selected Power");
        console.log(power_value);
        if (power_value < compPower){
            console.log("You lose :(");
            compScore++;
        }
        else {
            console.log("You win!! :)");
            p1Score++;
        }
    }
    else if (document.getElementById(p1Magic).checked) {
        //magic_value = document.getElementById(p1Magic).value;
        if (p1Magic < compMagic){
            console.log("You lose :(");
            compScore++;
        }
        else {
            console.log("You win!! :)");
            p1Score++;
        }
    }
    else if (document.getElementById(p1Terror).checked) {
        //terror_value = document.getElementById(p1Terror).value;
        if (p1Terror < compTerror){
            console.log("You lose :(");
            compScore++;
        }
        else {
            console.log("You win!! :)");
            p1Score++;
        }
    }
    else if (document.getElementById(p1Wisdom).checked) {
        //wisdom_value = document.getElementById(p1Wisdom).value;
        if (p1Wisdom < compWisdom){
            console.log("You lose :(");
            compScore++;
        }
        else {
            console.log("You win!! :)");
            p1Score++;
        }
    }
    //document.getElementById("p1-score").innerHTML = p1Score;
    //document.getElementById("comp-score").innerHTML = compScore;


}
// let compare = document.getElementById("compare-cards");
// compare.addEventListener ('click', () => {
//     compare.style.display = 'none';
// })

////////////////////////////////////
////   Hide 'New Game' Button   ////
////////////////////////////////////

let newGame = document.getElementById("new-game");
    newGame.addEventListener ('click', () => {
        newGame.style.display = 'none';
    })

//////////////////////////////
////   Next Round Button  ////
//////////////////////////////

function nextRound(){

    const nextRound = () => {
        count++;
        totalCount.innerHTML = count;
    };
}

////////////////////////////////////
////   Resets the Game Button   ////
////////////////////////////////////
    
function resetGame() {
    document.getElementById("reset-game").reset()
}
