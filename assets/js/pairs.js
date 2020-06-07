function createGrid(rows, cols){
    $(".board-container").empty();
    $(".board-container").append(`<table class="game-board"></table>`)
    gameBoard = $(".game-board");

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

$("#btn4x4").click(function() {
    createGrid(4,4);
})

$("#btn6x6").click(function() {
    createGrid(6,6);
})

$("#btn8x8").click(function() {
    createGrid(8,8);
})
 

