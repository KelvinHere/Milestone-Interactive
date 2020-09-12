/*! Contains code for gameBoard object for the Pairs matching game
* 
* This object contains methods for the logic of the pairs memory game.
* The object has to be initialized by passing one argument (easy, medium or hard) 
* to the initialize method.
*/

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
    incorrectAudio: new Audio('assets/audio/incorrect.mp3'),
    correctOneAudio: new Audio('assets/audio/correct-1.mp3'),
    winAudio: new Audio('assets/audio/win.mp3'),

    //Sets bord size depending on difficulty and creates random positions for each tile
    initialize: function(difficulty) {
        this.winPossible = true;
        if(difficulty == "easy"){
            this.rows = 2;
            this.cols = 2;
            this.timeLeft = 10;
        } else if(difficulty == "medium") {
            this.rows = 4;
            this.cols = 4;
            this.timeLeft = 45;
        } else {
            this.rows = 6;
            this.cols = 6;
            this.timeLeft = 90;
        }

        //How many pairs of tiles are needed
        let pairsNeeded = (this.rows*this.cols)/2;
        let pairs = [];

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
       }
        this.createHTMLGrid();
    },

    // Creates the game board in HTML
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

        // Grid is created now Start the Timer
        this.timer = setInterval(this.countdownTimer, 1000, self);
    },

    // Countdown timer, will activaite fail state when out of time
    countdownTimer: function(self) {
        // Lose state
        if (self.timeLeft == 0) {
            self.winPossible = false;
            clearInterval(self.timer);
            $(".board-container").empty();
            $(".score-container").empty();
            $(".score-container").append(`<div class="score-text"><h2>Sorry you Lose!!!</h2><br><a class="main-menu-link" href="index.html">Try Again</a></div>`);
        }
        self.timeLeft = self.timeLeft -1;
        $("#Timer").text(self.timeLeft);
    },

    // Check if the player has won the game
    checkWin: function() {
        let unsolvedTiles = $(".game-board").find(".unsolved").length;
        // Win State
        if (unsolvedTiles === 0 && this.winPossible === true) {
            this.winAudio.play();
            $(".score-container").empty();
            $(".score-container").append(`<div class="score-text"><h2>Winner!!!</h2><p>You won with ${this.timeLeft} seconds to spare!</p><a class="main-menu-link" href="index.html">Main Menu</a></div>`);
            clearInterval(this.timer);
        }
    },

    // Flips to reveal a given tile
    showTile: function(tileToShow, tileContent) {
        tileToShow.addClass("tile-flip");
        setTimeout(function(){
            tileToShow.css("background-image", `url(assets/images/tiles/${tileContent}.jpg)`);
        }, 200);
    },

    // Re-hides a given revealed tile
    hideTile: function(tileToHide, tileContent) {
        tileToHide.css("background-image", "").removeClass("tile-flip");
    },

    //Compares two tiles
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
            this.correctOneAudio.play();
        } else {
        // Missmatch deselect tiles and clear a and b selection variables
            aTileRef.removeClass("selected");
            bTileRef.removeClass("selected");
            self.aSelection = undefined;
            self.bSelection = undefined;
            this.incorrectAudio.play();
        }
        self.checkWin();
    },

    // Selects a tile if allowed
    selectTile: function(r, c) {
        //Check input type
        if ((!(Number.isInteger(r))) || (!(Number.isInteger(c)))) {
            /*return alert("Invalid input type for Row or Column");*/
            return "Invalid input type for Row or Column";
        }
        //Check input range
        console.log(this.rows, this.cols);
        if ((r+1 > this.rows) || (r < 0) || (c+1 > this.cols) || (c < 0)) {
            return "Row or Column out of range";
        }

        let currentTile = $(`.row-${r} > .col-${c}`);
        let self = this;

        // Allow selection to be made if two tiles are not already selected
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
};