/* This file contains Jasmine Tests for assets/js/game-board.js
It can be executed by opening assets/jasmine_testing/spec_runner.html
*/

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
});

describe('Tile Selection Errors', function() {
    describe('Type Errors', function() {
        beforeEach(function() {
            gameBoard.initialize('easy');
        });
        it('should return "Invalid input type for Row or Column" because of invalid type in row argument', function() {
            let result = gameBoard.selectTile("InvalidArgument",1);
            expect(result).toBe("Invalid input type for Row or Column");
        });
        it('should return "Invalid input type for Row or Column" because of invalid type in col argument', function() {
            let result = gameBoard.selectTile(1,"InvalidArgument");
            expect(result).toBe("Invalid input type for Row or Column");
        });
    });

    describe('Range errors', function() {
        describe('Easy difficulty range', function() {
            beforeEach(function() {
                gameBoard.initialize('easy');
            });
            it('should return "Row or Column out of range" because row argument too large', function() {
                let result = gameBoard.selectTile(2,1);
                expect(result).toBe("Row or Column out of range");
            });
            it('should return "Row or Column out of range" because row argument too small', function() {
                let result = gameBoard.selectTile(-1,1);
                expect(result).toBe("Row or Column out of range");
            });
            it('should return "Row or Column out of range" because col argument too large', function() {
                let result = gameBoard.selectTile(1,2);
                expect(result).toBe("Row or Column out of range");
            });
            it('should return "Row or Column out of range" because col argument too Small', function() {
                let result = gameBoard.selectTile(1,-1);
                expect(result).toBe("Row or Column out of range");
            });
        });

        describe('Medium difficulty range', function() {
            beforeEach(function() {
                gameBoard.initialize('medium');
            });
            it('should return "Row or Column out of range" because row argument too large', function() {
                let result = gameBoard.selectTile(4,1);
                expect(result).toBe("Row or Column out of range");
            });
            it('should return "Row or Column out of range" because row argument too small', function() {
                let result = gameBoard.selectTile(-1,1);
                expect(result).toBe("Row or Column out of range");
            });
            it('should return "Row or Column out of range" because col argument too large', function() {
                let result = gameBoard.selectTile(1,4);
                expect(result).toBe("Row or Column out of range");
            });
            it('should return "Row or Column out of range" because col argument too Small', function() {
                let result = gameBoard.selectTile(1,-1);
                expect(result).toBe("Row or Column out of range");
            });
        });

        describe('Hard difficulty range', function() {
            beforeEach(function() {
                gameBoard.initialize('hard');
            });
            it('should return "Row or Column out of range" because row argument too large', function() {
                let result = gameBoard.selectTile(6,1);
                expect(result).toBe("Row or Column out of range");
            });
            it('should return "Row or Column out of range" because row argument too small', function() {
                let result = gameBoard.selectTile(-1,1);
                expect(result).toBe("Row or Column out of range");
            });
            it('should return "Row or Column out of range" because col argument too large', function() {
                let result = gameBoard.selectTile(1,6);
                expect(result).toBe("Row or Column out of range");
            });
            it('should return "Row or Column out of range" because col argument too Small', function() {
                let result = gameBoard.selectTile(1,-1);
                expect(result).toBe("Row or Column out of range");
            });
        });
    });
});