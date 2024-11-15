const gameBoard = (function () {
    let array = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

    const emptyArray = () =>
        (array = [" ", " ", " ", " ", " ", " ", " ", " ", " "]);
    const getArray = () => array;

    const markSquare = function (input) {
        getArray()[input] = playersFn.getCurrentPlayer().marker;
    };
    return { getArray, markSquare, emptyArray, getArray };
})();

function gameController() {
    let gameOver = 1;
    let playerInput;
    let input = () => playerInput;

    const getGameOver = () => gameOver;

    const gameStateSwitch = () => {
        return (gameOver = gameOver === 1 ? 0 : 1);
    };

    function winCondition() {
        const display = displayController;
        //row1

        if (
            gameBoard.getArray()[0] === "X" &&
            gameBoard.getArray()[1] === "X" &&
            gameBoard.getArray()[2] === "X"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        } else if (
            gameBoard.getArray()[0] === "O" &&
            gameBoard.getArray()[1] === "O" &&
            gameBoard.getArray()[2] === "O"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        }
        //row2
        else if (
            gameBoard.getArray()[3] === "X" &&
            gameBoard.getArray()[4] === "X" &&
            gameBoard.getArray()[5] === "X"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        } else if (
            gameBoard.getArray()[3] === "O" &&
            gameBoard.getArray()[4] === "O" &&
            gameBoard.getArray()[5] === "O"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        }
        //row3
        else if (
            gameBoard.getArray()[6] === "X" &&
            gameBoard.getArray()[7] === "X" &&
            gameBoard.getArray()[8] === "X"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        } else if (
            gameBoard.getArray()[6] === "O" &&
            gameBoard.getArray()[7] === "O" &&
            gameBoard.getArray()[8] === "O"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        }

        //Checking cols and dialognals, col 1
        else if (
            gameBoard.getArray()[0] === "X" &&
            gameBoard.getArray()[3] === "X" &&
            gameBoard.getArray()[6] === "X"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        } else if (
            gameBoard.getArray()[0] === "O" &&
            gameBoard.getArray()[3] === "O" &&
            gameBoard.getArray()[6] === "O"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        }
        //col 2
        else if (
            gameBoard.getArray()[1] === "X" &&
            gameBoard.getArray()[4] === "X" &&
            gameBoard.getArray()[7] === "X"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        } else if (
            gameBoard.getArray()[1] === "O" &&
            gameBoard.getArray()[4] === "O" &&
            gameBoard.getArray()[7] === "O"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        }
        //col 3
        else if (
            gameBoard.getArray()[2] === "X" &&
            gameBoard.getArray()[5] === "X" &&
            gameBoard.getArray()[8] === "X"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        } else if (
            gameBoard.getArray()[2] === "O" &&
            gameBoard.getArray()[5] === "O" &&
            gameBoard.getArray()[8] === "O"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        }
        //diag 1
        else if (
            gameBoard.getArray()[0] === "X" &&
            gameBoard.getArray()[4] === "X" &&
            gameBoard.getArray()[8] === "X"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        } else if (
            gameBoard.getArray()[0] === "O" &&
            gameBoard.getArray()[4] === "O" &&
            gameBoard.getArray()[8] === "O"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        }
        //diag 2
        else if (
            gameBoard.getArray()[2] === "X" &&
            gameBoard.getArray()[4] === "X" &&
            gameBoard.getArray()[6] === "X"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        } else if (
            gameBoard.getArray()[2] === "O" &&
            gameBoard.getArray()[4] === "O" &&
            gameBoard.getArray()[6] === "O"
        ) {
            display.displayResult("won");
            gameStateSwitch();
        } else if (!gameBoard.getArray().includes(" ")) {
            display.displayResult("tie");
            gameStateSwitch();
        }
    }

    function gameReset() {
        gameBoard.emptyArray();
        gameOver = 0;
        playersFn.resetPlayer();
    }

    const playRound = (pointer) => {
        playerInput = pointer;
        //vaildating the input

        if (gameOver > 0) return true;
        if (
            gameBoard.getArray()[playerInput] === "X" ||
            gameBoard.getArray()[playerInput === "O"]
        )
            return true;
        gameBoard.markSquare(playerInput);
        winCondition();
    };
    return { input, playRound, getGameOver, gameStateSwitch, gameReset };
}

const playersFn = (function () {
    const playersArray = [
        {
            name: "Player One",
            marker: "X",
        },
        {
            name: "Player Two",
            marker: "O",
        },
    ];
    let currentPlayer = playersArray[0];

    function nameEntry(playerOneName, playerTwoName) {
        playersArray[0].name = playerOneName;
        playersArray[1].name = playerTwoName;
    }
    const resetPlayer = () => (currentPlayer = playersArray[0]);
    const getCurrentPlayer = () => currentPlayer;
    const switchPlayerTurn = () => {
        currentPlayer =
            currentPlayer === playersArray[0]
                ? playersArray[1]
                : playersArray[0];
    };

    return { nameEntry, getCurrentPlayer, switchPlayerTurn, resetPlayer };
})();

const displayController = (function () {
    const content = document.querySelector(".content");
    const squares = document.querySelectorAll(".square");
    const info = document.querySelector(".info");
    const gameResetBtn = document.querySelector(".startGame");
    const player1Name = document.querySelector("#player1");
    const player2Name = document.querySelector("#player2");
    const submitForm = document.querySelector("#submitForm");
    const form = document.querySelector("form");
    const formParent = document.querySelector(".nameEntry");

    const gameFn = gameController();

    //Get values from gameStart()
    gameResetBtn.addEventListener("click", () => {
        squares.forEach((item) => {
            item.textContent = " ";
        });
        gameFn.gameReset();
        info.textContent = " ";
    });

    const formButton = (function () {
        submitForm.addEventListener("click", (event) => {
            event.preventDefault();
            clearInput();
            playersFn.nameEntry(player1Name.value, player2Name.value);
            gameFn.gameStateSwitch();
        });
        function clearInput() {
            formParent.removeChild(form);
        }
    })();

    const displayResult = (type) => {
        switch (type) {
            case "won":
                info.textContent = `${
                    playersFn.getCurrentPlayer().name
                } has won! Press start game for a new round`;
                break;
            case "tie":
                info.textContent = `It's a tie!
                Press start game for a new round`;
                break;
        }
    };

    content.addEventListener("click", (event) => {
        //getting the position of the square
        pointer = event.target.classList[1];
        if (gameFn.playRound(pointer)) {
            return; //exits if invalidInput or game is over
        }
        event.target.textContent = playersFn.getCurrentPlayer().marker;
        playersFn.switchPlayerTurn();
    });

    return { displayResult };
})();
