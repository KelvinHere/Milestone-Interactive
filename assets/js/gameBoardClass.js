let gameBoard = {
    rows: 0,
    cols: 0,
    boardArray: [],
    points: 0,

    setSize: function(r, c) {
        this.rows = r
        this.cols = c
        this.initialize();
    },

    getSize: function() {
        console.log(this.rows, this.cols);
    },

    initialize: function() {
        let pairsNeeded = (this.rows*this.cols)/2;
        let pairs = [];

        /*create list of pairs in array*/
        for (let tileID = 0; tileID < pairsNeeded; tileID++) {
            pairs.push(tileID);
            pairs.push(tileID);
        }

        /*get random element from pairsNeeded and push to this.boardArray*/
        for (let r = 0; r < this.rows; r++) {
            this.boardArray.push([]);
            for (let c = 0; c < this.cols; c++) {
                let randomElement = Math.floor(Math.random() * Math.floor(pairs.length));
                this.boardArray[r].push(pairs[randomElement]);
                pairs.splice(randomElement, 1);
            }
            console.log(this.boardArray[r]);
        }
        this.createHTMLGrid();
    },

    createHTMLGrid: function() {
        $(".board-container").empty();
        $(".board-container").append(`<table class="game-board"></table>`)
        let gameBoard = $(".game-board");

        /*Create Grid*/
        for (let r = 0; r < this.rows; r++) {
            $(gameBoard).append(`<tr class="row-${r}">`);
            for (let c = 0; c < this.cols; c++){
                $(gameBoard).children('tr').last().append(`<td class="col-${c} tile unsolved" onclick="gameBoard.selectTile(${r},${c})">${this.boardArray[r][c]}</td>`);
            }
            $(gameBoard).append(`</tr>`);
        }

        /*Size cells to fill thier container*/
        calculatedCellHeight = 100 / this.rows;
        $(".game-board td").css("height", calculatedCellHeight);
        $(".game-board").css("width", "100%");
    },

    selectTile: function(r, c) {
        let currentTile = $(`.row-${r} > .col-${c}`);

        /*Toggle selection*/
        if (currentTile.hasClass("unsolved") && !currentTile.hasClass("selected")) {
            currentTile.addClass("selected");
        } else if (currentTile.hasClass("selected")) {
            currentTile.removeClass("selected");
        }

        /*Check how many tiles are selected, if 2, compare*/
        let activeTilesList = $(".game-board").find(".selected");
        if (activeTilesList.length === 2);
    }
}

