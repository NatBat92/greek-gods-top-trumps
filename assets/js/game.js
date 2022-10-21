// God  and mythical creature arrays
 
let gods = new Array ();
 
gods[0] = ["hades", 100, 65, 90, 25];
gods[1] = ["cronus", 50, 20, 30, 65];
gods[2] = ["persephone", 0, 40, 0, 20];
gods[3] = ["aphrodite", 70, 70, 0, 85];
gods[4] = ["apollo", 70, 25, 90, 60];
gods[5] = ["ares", 100, 0, 100, 50];
gods[6] = ["artemis", 25, 0, 50, 70];
gods[7] = ["zeus", 100, 90, 90, 70];
gods[8] = ["athena", 85, 50, 70, 100];
gods[9] = ["poseidon", 100, 100, 100, 70];
gods[10] = ["hera", 100, 20, 0, 75];
gods[11] = ["hermes", 20, 60, 0, 90];
gods[12] = ["hestia", 30, 70, 15, 80];
gods[13] = ["iris", 0, 0, 0, 50];
gods[14] = ["atlas", 100, 40, 0, 100];
gods[15] = ["rhea", 80, 90, 25, 65];
gods[16] = ["basilisk", 100, 0, 90, 0];
gods[17] = ["harpy", 70, 50, 90, 30];
gods[18] = ["pheonix", 70, 90, 25, 70];
gods[19] = ["siren", 100, 80, 90, 40];

//Generate a hand of 10 cards per player
 
function GenerateHand (){

    //generates 10 random numbers between 1 and 20
    //let playerOneHand = [];
    let playerOneCardStats = [];
    let computerCardStats = [];
    //let computerHand = [];
    let i = 0;
    let j = 0;
    let card = 0;
    const temp = new Set([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
    const playerOneHand = new Set();
    const ComputerHand = new Set([]);

    
        for (i = 0; i < 10; i++) {
            card = Math.floor((Math.random() * 20) + 1);
            //console.log(card);
            
            if (playerOneHand.has(card)) { 
                playerOneHand.delete(card);
                i--;
            } 
             else {
                 //playerOneHand.push(card);
                 playerOneHand.add(card);

            }   
            
        }
        console.log(playerOneHand);
        
    //using above random numbers, corresponding index values of Gods array added to PlayerOneCards array
    for (j = 0; j < 10; j++){
        let cardNo = 0;
        cardNo = playerOneHand[j];
        //console.log(cardNo);
        playerOneCardStats.push(gods[cardNo]);
        //console.log(playerOneCardStats);
    }
    //set players first card
    document.getElementById("p1CardName").innerHTML = playerOneCardStats[0][0];
    document.getElementById("p1Power").innerHTML = playerOneCardStats[0][1];
    document.getElementById("p1Magic").innerHTML = playerOneCardStats[0][2];
    document.getElementById("p1Terror").innerHTML = playerOneCardStats[0][3];
    document.getElementById("p1Wisdom").innerHTML = playerOneCardStats[0][4];
  
    //set computers cards

    for (let m = 0; m < 20; m++){
        if (temp[m].has(playerOneHand[m])){
                      temp.delete(m);
        } else {
            ComputerHand.add(m);
        }
}
}

   
//      for (let m = 0; m < 10; m++){
//          if (computerHand.includes(playerOneHand)) {
//             computerHand.pop
//             m--;
//          } else {
//              computerHand.push(computerHand)
//           }
// }
//          console.log(computerHand);

//         }
//}

let newGame = document.getElementById("new-game");
    newGame.addEventListener ('click', () => {
        newGame.style.display = 'none';
    })

function resetGame() {
    document.getElementById("reset-game").reset()
}
