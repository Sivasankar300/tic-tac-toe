let gameBoardArray = [];

function gameBoard() {
  function boxes(marker) {
    return { marker };
  }

  //Creating the Gameboard
  let cells = 9;
  for (cells; cells > 0; cells--) {
    let box = boxes("E");
    gameBoardArray.push(box);
  }
}


 function gameLogic() {
  //Checking win conditions
  let rowOne = gameBoardArray[0,1,2];
  let rowTwo = gameBoardArray[3,4,5];
  let rowThree = gameBoardArray[6,7,8];

  let colOne = gameBoardArray[0,3,8];
  let colTwo = gameBoardArray[1,4,6];
  let colThree = gameBoardArray[2,5,8];

  let rowsCols = [rowOne,rowTwo,rowThree,colOne,colTwo,colThree]

  rowsCols.map(item =>{
    if(item.marker === "X"){
      return console.log("Player one WON");
      
    } else if(item.marker === "O"){
      return console.log("Player two WON");

    }
  })
 
} 


let player1 = newPlayer("Ajax", "X", 0);
let player2 = newPlayer("NotAjax", "O", 0);

function newTurn() {
  

  if (player1.turn <= player2.turn) {
    playerInput = window.prompt(
      "Which position would you like to mark Player1"
    );

    //To prevent moves being made on already marked tiles
    if (
      "X" === gameBoardArray[playerInput].marker ||
      "O" === gameBoardArray[playerInput].marker
    ) {
      return console.log("Invalid move");
    }

    gameBoardArray[playerInput] = { marker: "X" };
    player1.turn++;
    console.table(gameBoardArray);
    gameLogic();

  } 
  
  else {
    playerInput = window.prompt(
      "Which position would you like to mark Player2",
      "Enter a number +1"
    );

    if (
      "X" === gameBoardArray[playerInput].marker ||
      "O" === gameBoardArray[playerInput].marker
    ) {
      return console.log("Invalid move");
    }

    gameBoardArray[playerInput] = { marker: "0" };
    player2.turn++;
    console.table(gameBoardArray);
    gameLogic();


  }
}
gameBoard();
newTurn();
newTurn();
newTurn();
newTurn();
newTurn();
newTurn();


function newPlayer(playerName, playerMarker, turn) {
  return { playerName, playerMarker, turn };
}



