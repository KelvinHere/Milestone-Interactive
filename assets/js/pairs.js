function createGrid(rows, cols){
    $(".board-container").append(`<div class="game-board"></div>`)
    gameBoard = $(".game-board");

    for (let r = rows-1; r > -1; r--) {
        $(gameBoard).append("<tr>");
        for (let c = 0; c < cols; c++){
            $(gameBoard).children('tr').last().append(`<td class="table-cell row-${r} col-${c}">${r}:${c}</td>`);
        }
        $(gameBoard).append(`</tr>`);
    }
}

createGrid(4,4);
