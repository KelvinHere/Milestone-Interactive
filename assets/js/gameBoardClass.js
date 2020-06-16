let gameBoard = {
    rows: 0,
    cols: 0,
    boardArray: [],
    aSelection: undefined,
    bSelection: undefined,
    revealDuration: 1000,
    timeLeft: undefined,
    timer: undefined,
    winPossible: true,

    initialize: function(r, c, time) {
        this.rows = r
        this.cols = c
        this.timeLeft = time;
        let pairsNeeded = (this.rows*this.cols)/2;
        let pairs = [];
        let images = [];

        // create list of pairs in array
        for (let tileID = 0; tileID < pairsNeeded; tileID++) {
            pairs.push(tileID);
            pairs.push(tileID);
        }

        // get random element from pairsNeeded and push to this.boardArray
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
        // Empty play area and create a new blank table and set up timer text
        $(".board-container").empty();
        $(".score-container").empty();
        $(".board-container").append(`<table class="game-board"></table>`);
        $(".score-container").append(`<div class="timer-container"><h2>Time Left</h2><h3><span id="Timer">${this.timeLeft}</span><span> seconds</span></h3></div>`);
        let gameBoard = $(".game-board");
        let self = this;

        //Create Grid and assign row and column numbers to each
        for (let r = 0; r < this.rows; r++) {
            $(gameBoard).append(`<tr class="row-${r}">`);
            for (let c = 0; c < this.cols; c++){
                $(gameBoard).children('tr').last().append(`<td class="col-${c} tile unsolved" onclick="gameBoard.selectTile(${r},${c})"></td>`);
            }
            $(gameBoard).append(`</tr>`);
        }

        // Start Timer
        this.timer = setInterval(this.countdownTimer, 1000, self);
    },

    countdownTimer: function(self) {
        // Lose state
        if (self.timeLeft == 0) {
            self.winPossible = false;
            clearInterval(self.timer);
            $(".board-container").empty();
            $(".score-container").empty();
            $(".score-container").append(`<div class="score-text"><h2>Sorry you Lose!!!</h2><a href="index.html">Try Again</a></div>`);
        }
        self.timeLeft = self.timeLeft -1;
        $("#Timer").text(self.timeLeft);
    },

    checkWin: function() {
        let unsolvedTiles = $(".game-board").find(".unsolved").length;
        // Win State
        if (unsolvedTiles === 0 && this.winPossible === true) {
            $(".score-container").empty();
            $(".score-container").append(`<div class="score-text"><h2>Winner!!!</h2><p>You won with ${this.timeLeft} seconds to spare!</p><a href="index.html">Main Menu</a></div>`);
            clearInterval(this.timer);
        }
    },

    showTile: function(tileToShow, tileContent) {
        tileToShow.addClass("tile-flip");
        setTimeout(function(){
            tileToShow.css("background-image", `url(assets/images/tiles/${tileContent}.jpg)`);
        }, 200);
    },

    hideTile: function(tileToHide, tileContent) {
        tileToHide.css("background-image", "").removeClass("tile-flip");
    },

    compareTiles: function(self, aRow, aCol, aTileRef, bRow, bCol, bTileRef) {
        // Hide Content of tile ready for comparison
        self.hideTile(aTileRef);
        self.hideTile(bTileRef);
        // Match marks tile solved, a solved tile cannot be reselected
        if (self.boardArray[aRow][aCol] === self.boardArray[bRow][bCol]) {
            aTileRef.removeClass("selected unsolved").addClass("solved");
            bTileRef.removeClass("selected unsolved").addClass("solved");
            self.aSelection = undefined;
            self.bSelection = undefined;
        } else {
        // Missmatch deselect tiles and clear a and b selection variables
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

        // If and selection is undefined allow selection to run
        if (this.aSelection === undefined || this.bSelection === undefined) {
            if (currentTile.hasClass("unsolved") && !currentTile.hasClass("selected")) {
                currentTile.addClass("selected");
                // Select & store tile 1 ref
                if (this.aSelection === undefined) {
                    this.aSelection = [r,c,currentTile];
                    this.showTile(currentTile, this.boardArray[r][c]);
                } else {
                    // Select & store tile 2 ref then compare tiles
                    this.bSelection = [r,c,currentTile];
                    this.showTile(currentTile, this.boardArray[r][c]);
                    // Send tiles to be compared
                    setTimeout(function() {
                        self.compareTiles(self, self.aSelection[0], self.aSelection[1], self.aSelection[2], self.bSelection[0], self.bSelection[1], self.bSelection[2]);
                    }, self.revealDuration);
                }
            }
        }
    }
}

