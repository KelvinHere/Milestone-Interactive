# Pairs - Testing Methodology

### Automated testing

## Validation Tools

HTML and CSS Validation

The project has been checked with the HTML validator at validator.w3.org.

index.html test

CSS direct input test - Copy CSS from style_no_variables.css - see note below
Note - WC3 validator does not support the use of CSS variables example. --font-main-color: rgb(155,212,150); It will give a parse error when declared and a value error when used. Without the declared variables and references to them in the CSS it passes with no errors. Here is a link to the issue on W3C, all new reports on this issure are directed to this link. Here is the css used on the live site which includes variables -> style.css.

The project has been spell checked with W3C Spell checker.



## Jasmine Testing

## Linters

jsHint : Javasctipt in this project produces no warnings or errors when run through jsHint /*jshint esversion: 6 */

## Manual Testing

Extensive manual testsing was done on this project to make sure the website and game work as expected.  Below is a list of tests carried out.

### Regarding The game

 All game modes have been completed to make sure :-
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
- After a win the next game can also won
- After a loss the next game can also be won
- Different difficulties can be played with the try again button without errors
- The tile pictures appear without delay
- There are enough tile pictures for each difficulty level
- Each difficulty level is possible to be completed in the assigned time
    

### Regarding the websites behaviour

The website has been tested to :-
- Make sure the game board scales to the maximum (sensible) size of its container
- Landscape has the gameboard left and the timer to the right
- Portrait has the game board at the top and the timer to the bottom
- Wherever possible there is no scroll bar on the page
- All spelling was correct
- The prompt to chose a difficulty was giving the correct direction, down for portrait, right for Landscape
- The CSS grid header, content and footer scaled correctly
- The instructions were visible and easy to reloads
- All animations were smooth and free of graphical errors or incorrect z order
- The header title and 'try again buttons take the player back to the difficulty settings


### Platform Testing

The project was visually inspected, displayed and played without bugs or errors on the following devices

- Desktop - Variable resolutions from 2560 x 1440 to 800 x 600 - Also tested on Firefox/Edge/Opera
- Redmi Note 4
- also simulated on :-
    - Moto G4
    - Galaxy S5
    - Pixel 2/2XL
    - iPhone 5/SE/6/7/8
    - iPhone 6/7/8 plus
    - iPhone X
    - iPad / iPad Pro

## Bugs

### Solved
- Player could Win the game a second after the timer ran out.
    - *Fix* : a `winPossible` boolean was added and set to false as soon as the timer runs out.  A condition of a win is that this boolean be `true`.

- The as the tiles flip the animal pictures do not appear immeadiatley.
    - *Fix* : the images were loading, to prevent this the images are preloaded into the footer before the player selects difficulty at a 0x0 size.

- The player could select more than two tiles.
    - *Fix* : When selecting a tile, the `tileSelect` method will only run if 'selectionA' or 'selectionB' are undefined.

### Unsolved

- None so far




