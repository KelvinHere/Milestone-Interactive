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
                it('easy grid should be 4 rows', function() {
            gameBoard.initialize('medium');
            expect(gameBoard.rows).toBe(4);
        });
        it('easy grid should be 4 cols', function() {
            gameBoard.initialize('medium');
            expect(gameBoard.cols).toBe(4);
        });
                it('easy grid should be 6 rows', function() {
            gameBoard.initialize('hard');
            expect(gameBoard.rows).toBe(6);
        });
        it('easy grid should be 6 cols', function() {
            gameBoard.initialize('hard');
            expect(gameBoard.cols).toBe(6);
        });
    });

});