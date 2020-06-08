let gameBoard = {
    rows: 0,
    cols: 0,
    selected: 0,
    points: 0,

    setSize: function(r, c) {
        this.rows = r
        this.cols = c
    },

    getSize: function() {
        console.log(this.rows, this.cols);
    }

   
}
    

gameBoard.getSize();
gameBoard.setSize(19,32);
gameBoard.getSize();
console.log('in');

