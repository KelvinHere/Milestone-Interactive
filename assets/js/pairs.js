function createGrid(rows, cols){
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

    /*Create CSS for Grid*/
    $(".game-board td").css("height", "25%");
    $(".game-board").css("width", "100%");
}

createGrid(4,4);
