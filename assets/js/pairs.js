function createGrid(rows, cols){
    $(".board-container").empty();
    $(".board-container").append(`<table class="game-board"></table>`)
    let gameBoard = $(".game-board");

    /*Create Grid*/
    for (let r = rows-1; r > -1; r--) {
        $(gameBoard).append(`<tr class="row-${r}">`);
        for (let c = 0; c < cols; c++){
            $(gameBoard).children('tr').last().append(`<td class="col-${c} table-cell">${r}:${c}</td>`);
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
    let pairs = new Array(rows);

    console.log(pairs.length);

    /*create list of pairs in array and shuffle*/
    for (let i = 0; i < pairsNeeded; i++) {
        pairs.push(i);
        pairs.push(i);
    }
    console.log(pairs);

    for (let r = 0; r < rows; r++) {
        pairs.append
        for (let c = 0; c < cols; c++) {

        }
    }
    
}

/*================================================Buttons for different grid sizes*/
$("#btn4x4").click(function() {
    let tilePositions = createRandomTilePositions(4,4);
    createGrid(4,4);
})

$("#btn6x6").click(function() {
    createGrid(6,6);
})

$("#btn8x8").click(function() {
    createGrid(8,8);
})
 

