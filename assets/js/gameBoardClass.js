let gameBoard = {
    rows: 0,
    cols: 0,
    boardArray: [],
    aSelection: undefined,
    bSelection: undefined,
    revealDuration: 1000,
    timeLeft: 60,
    timer: undefined,

    initialize: function(r, c) {
        this.rows = r
        this.cols = c
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
        /*Empty play area and create a new blank table*/
        $(".board-container").empty();
        $(".score-container").empty();
        $(".board-container").append(`<table class="game-board"></table>`)
        $(".score-container").append(`<h2>Time Left</h2><h3 id="Timer">60</h3>`)
        let gameBoard = $(".game-board");
        let self = this;

        /*Create Grid and assign row and column numbers to each*/
        for (let r = 0; r < this.rows; r++) {
            $(gameBoard).append(`<tr class="row-${r}">`);
            for (let c = 0; c < this.cols; c++){
                $(gameBoard).children('tr').last().append(`<td class="col-${c} tile unsolved" onclick="gameBoard.selectTile(${r},${c})"></td>`);
            }
            $(gameBoard).append(`</tr>`);
        }

        /*Size cells to fill thier container*/
        calculatedCellHeight = 100 / this.rows;
        $(".game-board td").css("height", calculatedCellHeight);
        $(".game-board").css("width", "100%");

        /*Start Timer*/
        this.timer = setInterval(this.countdownTimer, 1000, self);
    },

    countdownTimer: function(self) {
        self.timeLeft = self.timeLeft -1;
        $("#Timer").text(self.timeLeft);
        /*Lose state*/
        if (self.timeLeft == 0) {
            clearInterval(self.timer);
            $(".score-container").empty();
            $(".board-container").empty();
            $(".score-container").append(`<h2>Sorry you Lose!!!</h2><p>Try again</p><a href="index.html">Main Menu</a>`);
        }
        
    },

    checkWin: function() {
        let unsolvedTiles = $(".game-board").find(".unsolved").length;
        /*Win State*/
        if (unsolvedTiles === 0) {
            $(".score-container").empty();
            $(".score-container").append(`<h2>Winner!!!</h2><p>You won with ${this.timeLeft} seconds to spare!</p><a href="index.html">Main Menu</a>`);
            clearInterval(this.timer);
        }
    },

    showTile: function(tileToShow, tileContent) {
        tileToShow.css("background-image", `url(assets/images/tiles/${tileContent}.jpg)`)
    },

    hideTile: function(tileToHide, tileContent) {
        tileToHide.css("background-image", "");
    },

    compareTiles: function(self, aRow, aCol, aTileRef, bRow, bCol, bTileRef) {
        /*Hide Content of tile ready for comparison*/
        self.hideTile(aTileRef);
        self.hideTile(bTileRef);
        /*Match marks tile solved, a solved tile cannot be reselected*/
        if (self.boardArray[aRow][aCol] === self.boardArray[bRow][bCol]) {
            aTileRef.removeClass("selected unsolved").addClass("solved");
            bTileRef.removeClass("selected unsolved").addClass("solved");
            self.aSelection = undefined;
            self.bSelection = undefined;
        } else {
        /*Missmatch deselect tiles and clear a and b selection variables*/
            aTileRef.removeClass("selected");
            bTileRef.removeClass("selected");
            self.aSelection = undefined;
            self.bSelection = undefined;
        }
        self.checkWin();
    },

    selectTile: function(r, c) {
        let currentTile = $(`.row-${r} > .col-${c}`);
        let self = this;

        /*If and selection is undefined allow selection to run*/
        if (this.aSelection === undefined || this.bSelection === undefined) {
            if (currentTile.hasClass("unsolved") && !currentTile.hasClass("selected")) {
                currentTile.addClass("selected");
                /*Select & store tile 1 ref*/
                if (this.aSelection === undefined) {
                    this.aSelection = [r,c,currentTile];
                    this.showTile(currentTile, this.boardArray[r][c]);
                } else {
                    /*Select & store tile 2 ref then compare tiles*/
                    this.bSelection = [r,c,currentTile];
                    this.showTile(currentTile, this.boardArray[r][c]);
                    /*Send tiles to be compared*/
                    setTimeout(function() {
                        self.compareTiles(self, self.aSelection[0], self.aSelection[1], self.aSelection[2], self.bSelection[0], self.bSelection[1], self.bSelection[2]);
                    }, self.revealDuration);
                }
            }
        }
    }
}

