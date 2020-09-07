<h1 style="text-align: center;">Pairs Game - Interactive FrontEnd</h1>

Pairs - The Matching Memory Game:

You are presented with a board of tiles.  The aim is to select each pair of matching tiles until there are none left.  You have a given amount of time to win.

* [Pairs Game](https://kelvinhere.github.io/Milestone-Interactive/ 'Pairs website GitHub pages link')
* [This Repository](https://github.com/KelvinHere/Milestone-Interactive/ 'Gitpod repository link')

## Contents

1. [**UX**](#ux)
    * [**Project Purpose**](#project-purpose)
    * [**Gameplay Rules & Player Experience**](#gameplay-rules-and-player-experience)
    * [**Wireframe Designs**](#wireframe-designs)
    * [**User Stories**](#user-stories)
    * [**Developer and Business Purpose**](#developer-and-business-purpose)
    * [**Design Choices**](#design-choices)    
        * [*Colours and Fonts*](#colours-and-fonts)
        * [*Image Choices*](#image-choices)
        * [*Sound Choices*](#sound-choices)
        * [*Winning and Losing*](#winning-and-losing)
        * [*Other Design Choices*](#other-design-choices)
    
2. [**Features**](#features)
    * [*Existing Features*](#existing-features)
    * [*Future Features*](#future-features)
        * [*Near Future*](#near-future)
        * [*Far Future*](#far-future)
        
3. * [**Changes in Development**](#changes-in-development)
4. * [**Testing**](#testing) 
5. * [**Technologies Used**](#technologies-used) 
6. * [**Deployment**](#deployment) 
7. * [**Technologies Used**](#technologies-used) 
8. * [**Credits**](#credits) 
        * [**Content**](#content) 
        * [**Media**](#media) 
        * [**Acknowledgements**](#acknowledgements)
    
   

    

## UX

#### Project Purpose

This website's purpose is to provide a fun challenging game with simple rules that can be scaled in difficulty to suit the user.

#### Gameplay Rules and Player Experience

1. The player will be presented with a game menu where they will be given the games rules and a choice of difficulty.
2. Once the player chooses a difficulty they will be given a grid of hidden tiles and a countdown begins.
3. The player has a given amount of seconds to match all the tiles.
4. The player either wins or loses and is asked if they would like to try again.
5. Repeat

* This game is simple enough to play for anyone who can control a mouse or use a touch screen, even without reading the rules the audio and graphical feedback form the game tiles let you know of your success or failure.

* If the game is lost because the player did not understand the rules, the retry button quickly takes the user back to to the difficulty selection page which also has the rules stated again, this give oppertunity not only to review the game rules but also change the difficulty.

#### Wireframe Designs

![GameDesign](https://github.com/KelvinHere/Milestone-Interactive/blob/master/design/wireframes/wireframes.jpg?raw=true "Mobile mockup index and menu")

During development the design of the webpage evolved to give a better user experience see [**Changes in Development**](#changes-in-development) for more information.

#### User Stories

As a user I want
1. To get to play the game as quickly as possible.
2. To be given the instructions for the game as concisely as possible.
3. The game to give me suitable feedback for my inputs through sound or animation.
4. Te be able to restart the game quickly.
5. To be able to change the games difficulty to my skill level.
6. To be given a challenge only if I want it.
7. The tiles to be distinctly different from each other so I don’t feel cheated.
8. The game to run on whatever device or screen size I decide to use.

#### Developer and Business Purpose

Each feature must be well programmed, function properly and be bug free to display a professional use of the programming language and test suite.

Defensive programming must be used to avoid users compromising the game loop or confusing the game with rapid input.

Business purpose is to engage the user and give incentive to stay and play the game, higher engagement and time spent could give oppertunity for mid game or banner advertisements in the future.

This milestone project will show an understanding of Javascript,  jQuery, jasmine, HTML, CSS, the DOM and how they all interact to form a final product.

#### Design Choices

##### Colours and Fonts

The website has a simple four colour design (two greens and two greys) to avoid colour overload when playing the game.  All of the variation in colour is to be used within the cards of the game.

The green header and footer are designed to frame the middle section of the page where the game will be played

The grey middle sections are designed to be as mute as possible so when the game starts there is little distraction or interference from the background as the user is choosing cards.

PT Sans Narrow was chosen as the font as it is soft, easy to read and not a particularly serious font.

##### Image Choices

Cartoon animal pictures were used as the objects to pair as they appeal to younger players while also having enough variation for the more complex difficulty levels.  Inanimate objects and simple geometric shapes were too boring, and real pictures were harder to quickly differentiate.

##### Sound Choices

A positive (bright) sound effect is used when the user pairs two cards.

The negative (dull) sound effect for a fail was intentionally quieter and less prominent as to not become annoying since it will be the most repeated sound in the game.

The win jingle is in the same style as the positive sound effect used for card matching, signifying more than just a single match has been made.

##### Winning and Losing

On winning the game you are left with a board of bright ticks, a win jingle plays, you are told “You Win” and shown how many seconds you had to spare to encourage replay.  This barrage of positive feedback leaves the user in no doubt they have accomplished something.
On losing, the game board is removed, you are informed of your loss and a button to “Try Again” is displayed to encourage you to try again.

##### Other Design Choices

The games difficulty can be changed to include a good experience for everyone

The website's main title is a link back to choose a difficulty, so if the player thinks the game is too hard, simply clicking back on the name of the game will drop the player back to the main game selection screen.

The game is designed to adapt to device and screen size, the layout can change from horizontal to vertical to give the user the most screen space to display the tiles.

## Features

### Existing Features

- On loading the website you will be presented with a simple and uncluttered selection page that informs you of game rules and how to select a difficulty, one click from here and the game begins.

- The game randomly places tiles for replayability and to stop players just learning a simple pattern to win.

- The game can function by mouse or touchscreen.

- Rapid input from the user cannot select more than two cards at a time.

- The cards have a flip animation to reveal their picture giving a more interactive feel to the game.

- When the flipping animation or correct/incorrect comparison methods are in progress, any user input on the grid is disabled to avoid errors/cheating.

- Tiles that have already been solved are marked with a 'tick' image and cannot be selected again.

- Pictures are only loaded into the correct grid space when the tile is selected to avoid users cheating by hiding/revealing elements in inspection mode.

- On a win the game board is preserved to show you how well you did, a win jingle is played and you are told how many seconds you have to spare.  On a loss the game board is removed, you are told you have lost.  In either case you are prompted to play the game again.

- The website can operate in a stacked layout for portrait screens and side by side layout for desktops.

- The game grid has been created to scale to its maximum size (to a sensible limit) to allow the tiles to be as big as they can within its own element.

- All card images are downloaded when first coming to the website to avoid loading problems when playing (some cards would only appear after a few seconds when selected).  This was solved by loading them into the footer with a zero height and width.

### Future Features

##### Near Future

* A scoreboard for personal bests.
* Randomise picture order so the easier difficulty has more image variation.

##### Far Future

* An online scoreboard with profanity filtered username input

### Changes in Development 

- Originally the game was score based and the aim was to complete the grid in as few attempts as possible.  You could cheat this easily by drawing the game board on paper.  The game was then adapted to a simple win/loss with a timer, showing you how much time you had to spare if you won.  This made the game much more frantic and fun at higher difficulty levels.

- Layout was changed from the wireframe designs above to look more modern.  By removing the win/loss modals and splitting the play area to have a dedicated area for the timer, win/loss, retry button the experience felt more consistent and familiar.  This also lead to a more consistent experience on mobile with the more varied screen sizes. 

## Testing

### Manual Testing

### Jasmine Testing

### Linters

jsHint : Javasctipt in this project produces no warnings or errors when run through jsHint /*jshint esversion: 6 */



## Technologies Used
 
- **HTML5/CSS3** - Languages
    - **HTML5/CSS3** industry standard web development
-[Javascript](https://www.javascript.com/) - Programing language used to create the logic for the matching game
-[jQuery](https://jquery.com/) - Javascript library used to simplify DOM traversal and manipulation
-[Jasmin](https://jasmine.github.io/) - A behavior-driven development framework for testing JavaScript code.
- [Gitpod](https://www.gitpod.com) - IDE
    - **Gitpod** was used for its one stop contained development workflow via browser
- [Git](https://git-scm.com/) - Version-control system
    - **Git** Used to version control the project
- [Github](https://www.github.com) - Code hosting platform
    - **Github** was used for its robust repository system and ability to view website through **GitHub Pages**
- [Google Fonts](https://fonts.google.com/) - Font library
    - Used to style websites fonts
- [Draw.io](https://www.draw.io/) - Wireframing tool
    - This project uses **Draw.io** for rapid wireframe prototyping
- [GNU Image Manipulation Program](https://www.gimp.org/) - Image editing software
    - Used to edit images on the website

## Deployment

This project was created in Gitpod and version controlled through 'Git', the project was committed and pushed to GitHub where it is hosted.

The deployed version of Pairs is hosted on GitHub Pages using the following steps :-

Log in to KelvinHere on GitHub.
Select the 'Milestone-Interactive' repository.
Select 'Settings' for the repository and scroll down to Github Pages.
Click 'Source' and change the source to be the master branch.
A link will appear this is the address of the live page, changes can take up to 5-10 minutes to appear.

Add this repository to your local workspace by :-

Opening the Pairs repository page >here<.https://github.com/KelvinHere/Milestone-Interactive
Click the green 'Code' button and then copy the 'Clone with HTTPS' URL.
In your local workspace open a terminal.
From inside the directory that you want to add the clone to type 'git clone' and paste the URL you copied from GitHub then press enter
example >git clone https://github.com/KelvinHere/example_repository.git<
Cloning will be completed when your terminal is waiting for its next command.
More information or changes in the cloning procedure HERE https://github.com/git-guides/git-clone


## Credits
 
### Content

- Created by KelvinHere

- Contents of this website created by KelvinHere

### Media

- Animal images - [Martin Berube on IconArchive](https://www.iconarchive.com/show/flat-animal-icons-by-martin-berube.html)
- SFX Incorrect sound - [Sonniss GDC-2016 Game Ausio Bundle](https://sonniss.com/gameaudiogdc2016/) - Noise Reactions - (SFX-ARCADIA_Error03 - renamed incorrect.wav)
- SFX Correct selection and Win sounds - [Gammemaster Audio - Pro Sound Collection v1.3](https://www.gamemasteraudio.com/product/pro-sound-collection/) Collectibles_items_Powerup (happy_collect_item 1/2/3/10 .wav - renamed to correct 1/2/3 and win respectivley)


### Acknowledgements

* [w3schools](https://www.w3schools.com/) - For documentation on scope

