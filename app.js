function gameBoard(){
    let gameBoardArray = [];

    function boxes(num,marker){
        return {num,marker}
    }

    let cells = 9;
    for(cells;cells>0;cells--){
        let box = boxes(`${gameBoardArray.length+1}`,"E");
        gameBoardArray.push(box);
    }
    

}

gameBoard();