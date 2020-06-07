function createGrid(rows, cols, tilePositions){
    $(".board-container").empty();
    $(".board-container").append(`<table class="game-board"></table>`)
    let gameBoard = $(".game-board");

    /*Create Grid*/
    for (let r = rows-1; r > -1; r--) {
        $(gameBoard).append(`<tr class="row-${r}">`);
        for (let c = 0; c < cols; c++){
            $(gameBoard).children('tr').last().append(`<td class="col-${c} table-cell"><button class="tile-button" onclick="tileSelected('${r},${c}')">${tilePositions[r][c]}</button></td>`);
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
        console.log(randomPairsBoard[r]);
    }
    return randomPairsBoard;
}

/*==============================When buttons are pressed create tile positions and html grid*/
function gridButton(rows, cols) {
    let tilePositions = createRandomTilePositions(rows,cols);
    createGrid(rows,cols, tilePositions);
}

function tileSelected(row, col) {
    console.log(`${row},${col} = ${tilePositions[row][col]}`);
}