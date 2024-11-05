let gameBoard = (function () {
    let gameBoardArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

    return gameBoardArray;
})();

const newGame = (function () {
    const content = document.querySelector(".content");
    const square = document.querySelectorAll(".square");
    const info = document.querySelector(".info");
    const startGameButton = document.querySelector(".startGame");
    const player1Name = document.querySelector("#player1");
    const player2Name = document.querySelector("#player2");
    const submitForm = document.querySelector("#submitForm");
    const form = document.querySelector("form");
    const formParent = document.querySelector(".nameEntry")


    let player1;
    let player2;

    let gameOver = 0;
    let currentPlayer;
    let playerInput;

    function turnAssignment() {
        currentPlayer = player1;
        if (player1.turn > player2.turn) {
            currentPlayer = player2;
        }
    }

    function winCondition() {
        //row1
        if (
            gameBoard[0] === "X" &&
            gameBoard[1] === "X" &&
            gameBoard[2] === "X"
        ) {
            displayResult("won");
            gameOver++;
        } else if (
            gameBoard[0] === "O" &&
            gameBoard[1] === "O" &&
            gameBoard[2] === "O"
        ) {
            displayResult("won");
            gameOver++;
        }
        //row2
        else if (
            gameBoard[3] === "X" &&
            gameBoard[4] === "X" &&
            gameBoard[5] === "X"
        ) {
            displayResult("won");
            gameOver++;
        } else if (
            gameBoard[3] === "O" &&
            gameBoard[4] === "O" &&
            gameBoard[5] === "O"
        ) {
            displayResult("won");
            gameOver++;
        }
        //row3
        else if (
            gameBoard[6] === "X" &&
            gameBoard[7] === "X" &&
            gameBoard[8] === "X"
        ) {
            displayResult("won");
            gameOver++;
        } else if (
            gameBoard[6] === "O" &&
            gameBoard[7] === "O" &&
            gameBoard[8] === "O"
        ) {
            displayResult("won");
            gameOver++;
        }

        //Checking cols and dialognals, col 1
        else if (
            gameBoard[0] === "X" &&
            gameBoard[3] === "X" &&
            gameBoard[6] === "X"
        ) {
            displayResult("won");
            gameOver++;
        } else if (
            gameBoard[0] === "O" &&
            gameBoard[3] === "O" &&
            gameBoard[6] === "O"
        ) {
            displayResult("won");
            gameOver++;
        }
        //col 2
        else if (
            gameBoard[1] === "X" &&
            gameBoard[4] === "X" &&
            gameBoard[7] === "X"
        ) {
            displayResult("won");
            gameOver++;
        } else if (
            gameBoard[1] === "O" &&
            gameBoard[4] === "O" &&
            gameBoard[7] === "O"
        ) {
            displayResult("won");
            gameOver++;
        }
        //col 3
        else if (
            gameBoard[2] === "X" &&
            gameBoard[5] === "X" &&
            gameBoard[8] === "X"
        ) {
            displayResult("won");
            gameOver++;
        } else if (
            gameBoard[2] === "O" &&
            gameBoard[5] === "O" &&
            gameBoard[8] === "O"
        ) {
            displayResult("won");
            gameOver++;
        }
        //diag 1
        else if (
            gameBoard[0] === "X" &&
            gameBoard[4] === "X" &&
            gameBoard[8] === "X"
        ) {
            displayResult("won");
            gameOver++;
        } else if (
            gameBoard[0] === "O" &&
            gameBoard[4] === "O" &&
            gameBoard[8] === "O"
        ) {
            displayResult("won");
            gameOver++;
        }
        //diag 2
        else if (
            gameBoard[2] === "X" &&
            gameBoard[4] === "X" &&
            gameBoard[6] === "X"
        ) {
            displayResult("won");
            gameOver++;
        } else if (
            gameBoard[2] === "O" &&
            gameBoard[4] === "O" &&
            gameBoard[6] === "O"
        ) {
            displayResult("won");
            gameOver++;
        } else if (!gameBoard.includes(" ")) {
            displayResult("tie");
            gameOver++;
        }

        function displayResult(type) {
            switch (type) {
                case "won":
                    info.textContent = `${currentPlayer.playerName} has 'won'! Press start game for a new round`;
                    break;
                case "tie":
                    info.textContent = `It's a tie!
                    Press start game for a new round`;
                    break;
            }
        }
    }

    startGameButton.addEventListener("click",() => {
      //Also restarts the game
      gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

      square.forEach(item => {
        item.textContent = " ";
      })
      player1.turn = 0;
      player2.turn = 0;
      gameOver = 0;
      
      let fiveSecond = 5000;
      setTimeout(info.textContent = " ", fiveSecond);
    })

    const nameEntry = (function(){
      submitForm.addEventListener("click",(event) => {
        event.preventDefault()
        player1 = newPlayer(`${player1Name.value}`, "X",0);
        player2 = newPlayer(`${player2Name.value}`, "O",0);
        clearInput();
    })
        function clearInput(){
        formParent.removeChild(form);
        }
    }())

    const userInput = (function () {
        content.addEventListener("click", (event) => {
            if(gameOver>0){
                return;
            }
            
            turnAssignment();
            //Gets position of the square
            pointer = event.target.classList[1];

            playerInput = pointer;

            //TO-DO: Fix bug where if too many invalid moves are made, then the turn assignment stops working

            //Move vaildity
            if (
                "X" === gameBoard[playerInput] ||
                "O" === gameBoard[playerInput]
            ) {
                if (currentPlayer.turn) currentPlayer.turn--;
                turnAssignment();
                return console.log("Invalid move");
            }

            event.target.textContent = currentPlayer.playerMarker;
            gameBoard[pointer] = currentPlayer.playerMarker;

            currentPlayer.turn++;

            winCondition();
        });


    })();



    function newPlayer(playerName, playerMarker, turn) {
        return { playerName, playerMarker, turn };
    }

    function displayController() {
        count = 0;
        square.forEach((item) => {
            item.textContent = gameBoard[count];
            count++;
        });
    }
})();
