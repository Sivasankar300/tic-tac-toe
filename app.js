const gameBoard = (function () {
    let gameBoardArray = [];

    //Creating the Gameboard
    let cells = 9;
    for (cells; cells > 0; cells--) {
        gameBoardArray.push("E");
    }
    return gameBoardArray;
})();

let player1 = newPlayer("Ajax", "X", 0);
let player2 = newPlayer("NotAjax", "O", 0);

function newGame() {
    
    let gameOver = 0;
    let currentPlayer;
    let playerInput;

    function moveVaildity() {
        //To prevent moves being made on already marked tiles
        if ("X" === gameBoard[playerInput] || "O" === gameBoard[playerInput]) {
            currentPlayer.turn--;
            turnAssignment();            
            return console.log("Invalid move");
        }
    }

    function turnAssignment(){
      currentPlayer = player1;
        if (player1.turn > player2.turn) {
            currentPlayer = player2;
        }
    }

    function winCondition() {
      //row1
      if(gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X"){console.log(`${currentPlayer.playerName} has won`)
        gameOver++}
          else if(gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O"){console.log(`${currentPlayer.playerName} has won`)
          gameOver++}
      //row2
      if(gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X"){console.log(`${currentPlayer.playerName} has won`)
        gameOver++}
          else if(gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O"){console.log(`${currentPlayer.playerName} has won`)
          gameOver++}
      //row3
      if(gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X"){console.log(`${currentPlayer.playerName} has won`)
        gameOver++}
          else if(gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O"){console.log(`${currentPlayer.playerName} has won`)
          gameOver++}

      //Checking cols and dialognals, col 1
      if(gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X"){console.log(`${currentPlayer.playerName} has won`)
      gameOver++}
        else if(gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O"){console.log(`${currentPlayer.playerName} has won`)
        gameOver++}
        //col 2
      if(gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X"){console.log(`${currentPlayer.playerName} has won`)
      gameOver++}
        else if(gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O"){console.log(`${currentPlayer.playerName} has won`)
        gameOver++}
        //col 3
      if(gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X"){console.log(`${currentPlayer.playerName} has won`)
      gameOver++}
        else if(gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O"){console.log(`${currentPlayer.playerName} has won`)
        gameOver++}
        //diag 1
      if(gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X"){console.log(`${currentPlayer.playerName} has won`)
      gameOver++}
        else if(gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O"){console.log(`${currentPlayer.playerName} has won`)
        gameOver++}
        //diag 2
      if(gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X"){console.log(`${currentPlayer.playerName} has won`)
      gameOver++}
        else if(gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O"){console.log(`${currentPlayer.playerName} has won`)
        gameOver++}
      
        else if(!gameBoard.includes("E")){
          console.log("It's a Tie!")
          gameOver++
        }
      }
    
    
    while (gameOver === 0) {
      /* Assign currentplayer
    Ask user for input
    Check if move is valid
    Check if input is a number
    Increment player's turn
    Assign the input to the gameBoard
    Check the win condition
    console log the tabel */
    turnAssignment();
      playerInput = parseInt(window.prompt(`Which position woufd you like to mark ${currentPlayer.playerName}`));

      moveVaildity();
      //To break the loop with an Invalid input
      if (isNaN(playerInput)) {
        break;
    }

      currentPlayer.turn++;
      gameBoard[playerInput] = currentPlayer.playerMarker;
      console.table(gameBoard);
      winCondition();



    }
}

function newPlayer(playerName, playerMarker, turn) {
    return { playerName, playerMarker, turn };
}

newGame();
