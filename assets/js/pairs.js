function createGrid(rows, cols, tilePositions){
    $(".board-container").empty();
    $(".board-container").append(`<table class="game-board"></table>`)
    let gameBoard = $(".game-board");

    /*Create Grid*/
    for (let r = rows-1; r > -1; r--) {
        $(gameBoard).append(`<tr class="row-${r}">`);
        for (let c = 0; c < cols; c++){
            $(gameBoard).children('tr').last().append(`<td class="col-${c} table-cell">${tilePositions[r][c]}</td>`);
        }
        $(gameBoard).append(`</tr>`);
    }

    /*Size cells to fill thier container*/
    calculatedCellHeight = 100 / rows
    $(".game-board td").css("height", calculatedCellHeight);
    $(".game-board").css("width", "100%");
}

function createRandomTilePositions(rows, cols) {
    let pairsNeeded = (rows*cols)/2;
    let pairs = [];
    let randomPairsBoard = [];

    /*create list of pairs in array*/
    for (let tileID = 0; tileID < pairsNeeded; tileID++) {
        pairs.push(tileID);
        pairs.push(tileID);
    }

    /*get random element from pairsNeeded and push to randomPairsBoard*/
    for (let r = 0; r < rows; r++) {
        randomPairsBoard.push([]);
        for (let c = 0; c < cols; c++) {
            let randomElement = Math.floor(Math.random() * Math.floor(pairs.length));
            randomPairsBoard[r].push(pairs[randomElement]);
            pairs.splice(randomElement, 1);
        }
        console.log(pairs[r]);
    }

    return randomPairsBoard;
}

/*================================================Buttons for different grid sizes*/
$("#btn4x4").click(function() {
    let tilePositions = createRandomTilePositions(4,4);
    createGrid(4,4, tilePositions);
})

$("#btn6x6").click(function() {
    createGrid(6,6);
})

$("#btn8x8").click(function() {
    createGrid(8,8);
})
 

