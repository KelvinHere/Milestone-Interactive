# Pairs - Testing Methodology

## Contents

1. [**Automated testing**](#automated-testing)
    * [**Validation Tools**](#validation-tools)
    * [**Jasmine Testing**](#jasmine-testing)
        * [*About These Tests*](#about-these-tests)
        * [*Run Jasmine Tests Live*](#run-jasmine-tests-live)
        * [*Add and Run Your Own Jasmine Tests*](#add-and-run-your-own-jasmine-tests)
2. [**Manual Testing**](#manual-testing)
    * [**Regarding The Game**](#regarding-the-game)
    * [**Regarding Website Behaviour**](#regarding-website-behaviour)
    * [**Platform Testing**](#platform-testing)
    * [**User Testing**](#user-testing)
3. [**User Story Testing**](#user-story-testing)
4. [**Bugs**](#bugs)
    * [**Solved**](#solved)
    * [**Unsolved**](#unsolved)

## Automated testing

### Validation Tools

**HTML and CSS Validation**

The project has passed checks with the [W3C Markup Validation Service](https://validator.w3.org/), the [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator/) and the [W3C Spell Checker](https://www.w3.org/2002/01/spellchecker).  Test links below.

* [index.html markup test](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkelvinhere.github.io%2FMilestone-Interactive%2F)
* [index.html spell check](https://www.w3.org/2002/01/spellchecker?uri=https%3A%2F%2Fkelvinhere.github.io%2FMilestone-Interactive%2F&lang=en_US)
* [style.css validation test](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fkelvinhere.github.io%2FMilestone-Interactive%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

**Javascript**

[JSHint](https://jshint.com/) version 2.12.0 has been used to check JavaScript code quality with the qualifier of `/*jshint esversion: 6*/` at the top of the code.  There are no problems or warnings are present in the code using JSLint and the qualifier mentioned.

## Jasmine Testing

### About These Tests
Jasmine is an open source JavaScript testing framework, it allows tests to be run on JavaScript projects without intrusion.  This project uses jasmine through opening [spec_runner.html](https://github.com/KelvinHere/Milestone-Interactive/blob/master/assets/jasmine_testing/spec_runner.html) which:-

1. Loads :-
    * The Jasmine framework
    * jQuery
    * The script to be tested ([gameBoardClass.js](https://github.com/KelvinHere/Milestone-Interactive/blob/master/assets/js/gameBoardClass.js))
    * The tests to be performed on the script ([gameBoardClassSpec.js](https://github.com/KelvinHere/Milestone-Interactive/blob/master/assets/jasmine_testing/spec/gameBoardClassSpec.js))
2. The results are displayed in an easy to read format in the browser.

These automated tests can be performed on any update to the code with a single click so can save many hours of what would be manual testing.  All jasmine tests were tested to purposely fail before any confidence was given to any in spec results.

The tests in this project check 
1. That variables for the games initialisation are correct depending on difficulty.
2. That the grid sizes are the correct size for the difficulty level.
3. Any invalid input to the games 'tileSelect' method are caught and don't allow the code to carry on executing with invalid types or ranges.

### Run Jasmine Tests Live

The link below will run my jasmine tests and show the results.

* [Jasmine Testing](https://kelvinhere.github.io/Milestone-Interactive/assets/jasmine_testing/spec_runner.html)

### Add and Run Your Own Jasmine Tests

* Follow deployment in this repositories [README.md](https://github.com/KelvinHere/Milestone-Interactive/blob/master/README.md)
* Add your test to game-board-spec.js located in assets/jasmine_testing/spec
* Open spec_runner.html located in assets/jasmine_testing

## Manual Testing

Extensive manual testing was performed on this project to make sure the website and game work as expected.  Below is a list of tests carried out.

### Regarding The Game

 All game modes have been played to failure and completion to make sure :-
- Each difficulty creates the correct sized grid
- The tile positions are generated randomly each game
- The different difficulties have the correct time limits
- All tiles in the board flip
- When a pair is matched the success audio plays 
- When the pair does not match the fail audio plays
- When you run out of time the board is removed and you are prompted of a loss
- When you win the win jingle plays and the board remains completed
- When a pair is solved you cannot re-select the solved tiles in any way
- When the player clicks rapidly they cannot select more than one tile
- If the player reloads the page halfway through a game the game resets completely including solved tiles and timer
- The player cannot select tiles after the timer has run out
- On win or loss the 'Try again' button is displayed
- On a win the correct 'Time to spare' is displayed
- After a win the next game can also be won
- After a loss the next game can also be won
- Different difficulties can be played with the try again button without errors
- The tile pictures appear without delay
- There are enough tile pictures for each difficulty level
- Each difficulty level is possible to be completed in the assigned time
- If a user tries to modify the difficulty setting to anything other than the standard settings, the game defaults to hard
- If a user tries to modify the selectTile() method, it will catch invalid 'type' and 'out of range inputs', the game is not affected
- The correct classes are added and removed from the games elements during gameplay

### Regarding Website Behaviour

The website has been tested to make sure:-
- The game board scales to the maximum (sensible) size of its container
- The game changes orientation from landscape to portrait layouts depending on resolution
- Wherever possible there is no scroll bar on the page
- All spelling was correct
- The instructions prompt to choose a difficulty was giving the correct direction, down for portrait, right for Landscape
- The CSS grid header, content and footer scaled correctly
- The instructions were visible and easy to read
- All animations were smooth and free of graphical errors or incorrect z order
- The header title and 'try again' buttons take the player back to the difficulty settings

### Platform Testing

The project was visually inspected, displayed and played without bugs or errors on the following devices

- Desktop - Variable resolutions from 2560 x 1440 to 800 x 600 - Also tested on Firefox/Edge/Opera
- Redmi Note 4
- Redmi Lite 4A
- also simulated on :-
    - Moto G4
    - Galaxy S5
    - Pixel 2/2XL
    - iPhone 5/SE/6/7/8
    - iPhone 6/7/8 plus
    - iPhone X
    - iPad / iPad Pro

### User Testing

*  The project has been tested extensively by friends and family with varied devices.

* Watching users play the game allowed its rules to evolve to be more fun.

## User Story Testing

Users will want :-
1. To be playing the game as quickly as possible.
    * A single click can start the game at any difficulty level, no sub-menus or setup.
2. To be given the instructions for the game as concisely as possible.
    * Instructions are given in simple form on the first page.
3. The game to give suitable feedback for inputs through sound or animation.
    * Achievements and failures have sound effects, tiles animate a flip when clicked.
4. Te be able to restart the game quickly.
    * Clicking on the title brings the user back to difficulty selection.
5. To be able to change the games difficulty to their skill level.
    * Easy, Medium and Hard difficulties are available.
6. To be given a challenge only if I want it.
    * A win on easy is the same as a win on hard, the game is about personal challenge.
7. The tiles to be distinctly different from each other.
    * Cartoon animals are used as the images as they are easy to distinguish, more so than photographs or random objects.
8. The game to run on whatever device or screen size they decide to use.
    * The game is optimised for mobile, tablet and desktop.

## Bugs

### Solved
- Player could Win the game a second after the timer ran out.
    - *Fix* : a `winPossible` boolean was added and set to `false` as soon as the timer runs out.  A condition of a win is that this boolean be `true`.

- As some tiles flip the animal picture may not appear immediately.
    - *Fix* : the images were loading, to prevent this the images are preloaded into the footer before the player selects difficulty at a 0x0 size.

- The player could select more than two tiles.
    - *Fix* : When selecting a tile, the `tileSelect` method will only run if either of two variables 'selectionA' or 'selectionB' are undefined.

- Invalid `type` input to the `c` argument in gameBoard.selectTile(r,c) method did not return a warning and allowed code to continue to execute.
    - *Fix* : Jasmine testing allowed this bug to be found, the error was traced to an if statement where one of the conditions variables was `r` row instead of `c` col.

### Unsolved

- None so far found




