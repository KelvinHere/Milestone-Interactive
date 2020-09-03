describe('Difficulty Settings', function() {
    
    describe('time limit for easy', function() {
        it('should return time = 10', function() {
            let result = gameBoard.initialize('easy');
            expect(result.time).toBe(10);
        });
    });
});