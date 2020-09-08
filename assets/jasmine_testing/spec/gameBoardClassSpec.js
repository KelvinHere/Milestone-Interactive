describe('Difficulty Settings', function() {

    describe('Time limits', function() {
        it('easy time limit should be 10 seconds', function() {
            gameBoard.initialize('easy');
            expect(gameBoard.timeLeft).toBe(10);
        });
        it('medium time limit should be 45 seconds', function() {
            gameBoard.initialize('medium');
            expect(gameBoard.timeLeft).toBe(45);
        });
        it('hard time limit should be 90 seconds', function() {
            gameBoard.initialize('hard');
            expect(gameBoard.timeLeft).toBe(90);
        });
        it('invalid difficulty defaults to hard (90sec)', function() {
            gameBoard.initialize('iTryToCheat');
            expect(gameBoard.timeLeft).toBe(90);
        });
    });

    describe('Grid sizes', function() {
        it('easy grid should be 2 rows', function() {
            gameBoard.initialize('easy');
            expect(gameBoard.rows).toBe(2);
        });
        it('easy grid should be 2 cols', function() {
            gameBoard.initialize('easy');
            expect(gameBoard.cols).toBe(2);
        });
        it('medium grid should be 4 rows', function() {
            gameBoard.initialize('medium');
            expect(gameBoard.rows).toBe(4);
        });
        it('medium grid should be 4 cols', function() {
            gameBoard.initialize('medium');
            expect(gameBoard.cols).toBe(4);
        });
        it('hard grid should be 6 rows', function() {
            gameBoard.initialize('hard');
            expect(gameBoard.rows).toBe(6);
        });
        it('hard grid should be 6 cols', function() {
            gameBoard.initialize('hard');
            expect(gameBoard.cols).toBe(6);
        });
    });

    describe('Tile Selection Variables', function() {
        it('selectionA should be (1,1)', function() {
            gameBoard.selectTile(1,1);
            expect(gameBoard.selectionA).toBe(2);

        });
    });
});
/*
describe('jQuery tests', function() {

    beforeEach(function () {
        setFixtures(`
            <section class="game-container">
                <div class="board-container">
                    <table class="game-board">
                        <tr class="row-0">
                            <td class="col-0 tile unsolved" onclick="gameBoard.selectTile(0,0)"></td>
                            <td class="col-1 tile unsolved" onclick="gameBoard.selectTile(0,1)"></td>
                        </tr><tr class="row-1">
                            <td class="col-0 tile unsolved" onclick="gameBoard.selectTile(1,0)"></td>
                            <td class="col-1 tile unsolved" onclick="gameBoard.selectTile(1,1)"></td>
                        </tr>
                    </table>
                </div>
                <div class="score-container">
                    <div class="timer-container">
                        <h2>Time Left</h2>
                        <h3><span id="Timer">0</span><span> seconds</span></h3>
                    </div>
                </div>
            </section>
        `);
    });
    
});*/