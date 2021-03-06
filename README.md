<h1 style="text-align: center;">Pairs Game - Interactive FrontEnd</h1>
 
Pairs - The Matching Memory Game:
 
You are presented with a board of tiles.  The aim is to select each pair of matching tiles until there are none left.  You have a given amount of time to win.
 
* [Pairs Game - Play Now](https://kelvinhere.github.io/Milestone-Interactive/ 'Pairs website GitHub pages link')
* [This Repository](https://github.com/KelvinHere/Milestone-Interactive/ 'Gitpod repository link')
 
## Contents
 
1. [**UX**](#ux)
   * [**Project Purpose**](#project-purpose)
   * [**Gameplay Rules & Player Experience**](#gameplay-rules-and-player-experience)
   * [**Wireframe Designs**](#wireframe-designs)
   * [**User Stories**](#user-stories)
   * [**Business and Developer Goals**](#business-and-developer-goals)
   * [**Design Choices**](#design-choices)   
       * [*Colours and Fonts*](#colours-and-fonts)
       * [*Image Choices*](#image-choices)
       * [*Sound Choices*](#sound-choices)
       * [*Winning and Losing*](#winning-and-losing)
       * [*Other Design Choices*](#other-design-choices)
2. [**Features**](#features)
   * [**Existing Features**](#existing-features)
   * [**Future Features**](#future-features)
       * [*Near Future*](#near-future)
       * [*Far Future*](#far-future)
3. * [**Changes in Development**](#changes-in-development)
4. * [**Testing**](#testing)
5. * [**Technologies Used**](#technologies-used)
6. * [**Deployment**](#deployment)
7. * [**Credits**](#credits)
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
 
* This game is simple enough to play for anyone who can control a mouse or use a touch screen, even without reading the rules the audio and graphical feedback from the game lets you know of your success or failure.
 
* If the game is lost because the player did not understand the rules, the retry button quickly takes the user back to the difficulty selection page which also has the rules stated again, this gives the opportunity not only to review the game rules but also change the difficulty.
 
#### Wireframe Designs
 
![GameDesign](https://github.com/KelvinHere/Milestone-Interactive/blob/master/design/wireframes/wireframes.jpg?raw=true "Mobile mockup index and menu")
 
During development the design of the webpage evolved to give a better user experience see [**Changes in Development**](#changes-in-development) for more information.
 
#### User Stories
 
As a user I want
1. To be playing the game as quickly as possible.
2. To be given the instructions for the game as concisely as possible.
3. The game to give me suitable feedback for my inputs through sound or animation.
4. To be able to restart the game quickly.
5. To be able to change the games difficulty to my skill level.
6. To be given a challenge only if I want it.
7. The tiles to be distinctly different from each other.
8. The game to run on whatever device or screen size I decide to use.
 
#### Business and Developer Goals
 
Each feature must be well programmed, function properly and be bug free.  This will display a professional use of the programming language and test suite.
 
Defensive programming must be used to avoid users compromising the game loop or confusing the game logic with rapid input.
 
Business purpose is to engage the user and give incentive to stay and play the game, higher engagement and time spent could give opportunity for banner advertisements in the future.
 
This milestone project will show an understanding of Javascript,  jQuery, jasmine, HTML, CSS, the DOM and how they all interact to form a final product.
 
#### Design Choices
 
##### Colours and Fonts
 
The website has a simple four colour design (two greens and two greys) for all text and backgrounds to avoid colour overload when playing the game.  All of the variation in colour is to be used within the tiles of the game.
 
All fonts are displayed on a contrasting background for easy readability.
 
The green header and footer are designed to frame the middle section of the page where the game will be played.
 
The grey middle sections are designed to be as mute as possible so when the game starts there is little distraction or interference from the background as the user is choosing tiles.
 
PT Sans Narrow was chosen as the font as it is soft, easy to read and not a particularly serious font.
 
##### Image Choices
 
Cartoon animal pictures were used as the objects to pair, as they appeal to younger players while also having enough variation for the more complex difficulty levels.  Animal pictures also allow anyone with colorblindness to still play the game as matching is still possible by shape only.
 
Inanimate objects and simple geometric shapes were too boring, and photographs were harder to quickly differentiate.
 
##### Sound Choices
 
A positive (bright) sound effect is used when the user pairs two tiles.
 
The negative (dull) sound effect for a fail was intentionally quieter and less prominent as to not become annoying since it will be the most repeated sound in the game.
 
The win jingle is in the same style as the positive sound effect used for tile matching to keep in theme.
 
##### Winning and Losing
 
On winning the game you are left with a board of bright ticks, a win jingle plays, you are told “You Win” and shown how many seconds you had to spare to encourage replay.  This barrage of positive feedback leaves the user in no doubt they have accomplished something.
 
On losing, the game board is removed, you are informed of your loss and a button to “Try Again” is displayed to encourage you to try again.
 
##### Other Design Choices
 
The games difficulty can be changed to allow a good experience for every skill level.
 
The game board is only loaded when the user picks a difficulty and the timer starts immediately to avoid cheating.
 
The website's main title is a link back to 'choose a difficulty', so if the player thinks the game is too hard, simply clicking back on the name of the game will drop the player back to the main game selection screen where difficulty is selected.
 
The game is designed to adapt to device and screen size, the layout can change from horizontal to vertical to give the user the most screen space to display the tiles.
 
Navigation and selection are consistent in the project.
 
## Features
 
### Existing Features
 
- On loading the website you will be presented with a simple and uncluttered selection page that informs you of game rules and how to select a difficulty, one click from here and the game begins.
 
- The game randomly places tiles for replayability and to stop players just learning a simple pattern to win.
 
- The game can function by mouse or touchscreen.
 
- Rapid input from the user cannot select more than two tiles at a time.
 
- The tiles have a flip animation to reveal their picture giving a more interactive feel to the game.
 
- When the flipping animation or correct/incorrect comparison methods are in progress, any user input on the grid is disabled to avoid errors/cheating.
 
- Tiles that have already been solved are marked with a 'tick' image and cannot be selected again.
 
- Pictures are only loaded into the correct grid space when the tile is selected to avoid users cheating by hiding/revealing elements in inspection mode.
 
- On a win the game board is preserved to show you how well you did, a win jingle is played and you are told how many seconds you have to spare.  On a loss the game board is removed, you are told you have lost.  In either case you are prompted to play the game again.
 
- The website can operate in a stacked layout for portrait screens and side by side layout for desktops.
 
- The game grid has been created to scale to fill its parent element (to a sensible limit), this allows the tiles to be as large as possible.
 
- All tile images are downloaded when first coming to the website to avoid loading problems when playing (some tiles would only appear after a few seconds when selected).  This was solved by loading them into the footer with a zero height and width.

- The hidden images mentioned above are not for user viewing so they do not have alternate text and are set to `alt""` to follow [w3.org](https://www.w3.org/) guidelines.
 
### Future Features
 
##### Near Future
 
* A scoreboard for personal bests.
* Randomise picture order so the easier difficulty has more image variation.
 
##### Far Future
 
* An online scoreboard with profanity filtered username input
 
### Changes in Development
 
- Originally the game was score based and the aim was to complete the grid in as few attempts as possible.  You could cheat this easily by drawing the game board on paper.  The game was then adapted to a simple win/loss with a timer, showing you how much time you had to spare if you won.  This made the game much more frantic and fun at higher difficulty levels.
 
- The layout was changed from the wireframe designs above to look more modern see below.  By removing the win/loss modals and splitting the play area to have a dedicated area for the timer, win/loss, retry button the experience felt more consistent and familiar.  This also leads to a more consistent experience on mobile which have more varied screen sizes.  Below in order are Start Screen / Gameplay / Loss / Win.
![New Design](https://github.com/KelvinHere/Milestone-Interactive/blob/master/design/completed/new-design.jpg?raw=true "Images of new design")


 
## Testing
 
[Testing documentation in this link (testing.md)](https://github.com/KelvinHere/Milestone-Interactive/blob/master/testing.md)
 
## Technologies Used
- **HTML5/CSS3** - Languages
   - Industry standard web development
- [Javascript](https://www.javascript.com/) - Programming Language
   - Used to create the logic for the matching game.
- [jQuery](https://jquery.com/) - JavaScript Library
   - Used to simplify DOM traversal and manipulation
- [Jasmin](https://jasmine.github.io/) - Testing
   - A behavior-driven development framework for testing JavaScript code.
- [Gitpod](https://www.gitpod.com) - IDE
   - Used for its one stop contained development workflow via browser
- [Git](https://git-scm.com/) - Version-control system
   - Used to version control the project
- [Github](https://www.github.com) - Code hosting platform
   - Was used for its robust repository system and ability to view website through **GitHub Pages**
- [Google Fonts](https://fonts.google.com/) - Font library
   - Used to style websites fonts
- [Draw.io](https://www.draw.io/) - Wireframing tool
   - Used for rapid wireframe prototyping
- [GNU Image Manipulation Program](https://www.gimp.org/) - Image editing software
   - Used to edit images for the website
 
## Deployment
 
This project was created in Git Pod and version controlled through 'Git', the project was committed and pushed to GitHub where it is hosted through GitHub Pages.
 
The deployed version of Pairs was hosted on GitHub Pages using the following steps :-
 
1. Login to KelvinHere on [GitHub](https://github.com/).
2. Select the [Milestone-Interactive](https://github.com/KelvinHere/Milestone-Interactive) repository.
3. Select 'Settings' for this repository and scroll down to Github Pages.
4. Click 'Source' and change the source to be the master branch.
5. A link will appear this is the address of the live page, changes can take up to 5-10 minutes to appear.
 
Add this repository to your local workspace by :-
 
1. Opening the [Milestone-Interactive](https://github.com/KelvinHere/Milestone-Interactive) repository.
2. Click the green 'Code' button and then copy the 'Clone with HTTPS' URL.
3. In your local workspace open a terminal.
4. From inside the directory you want to copy the clone to, type `git clone` and paste the URL you copied from GitHub then press enter.  Example below.
 
`git clone https://github.com/KelvinHere/example.git`
 
5. Cloning will be completed when your terminal is waiting for its next command.
6. For more information or changes in the cloning procedure [>Click Here<](https://github.com/git-guides/git-clone)

Project Development :-
* This project was developed using GitPod.
* After files are created or modified they are committed to a GitHub repository by :-
    - adding the modified files locally using `git add .`
    - commiting the modified files with a message of changes using `git commit -m "changes here"`
    - pushing the new commit to the master branch on GitHub repository with `git push`

* During development a new branch on GitHub was created via pull request.  This was for a major change to the code (the game board was refactored to an object) and allowed experimentation without affecting the master branch.  This new branch worked out well and was merged into the master branch.

## Credits
### Content
 
- This project was created by KelvinHere
 
### Media
 
- Animal images - [Martin Berube on IconArchive](https://www.iconarchive.com/show/flat-animal-icons-by-martin-berube.html)
- SFX Incorrect sound - [Sonniss GDC-2016 Game Audio Bundle](https://sonniss.com/gameaudiogdc2016/) - Noise Reactions - SFX-ARCADIA_Error03 - renamed to incorrect.wav
- SFX Correct selection and Win sounds - [Gammemaster Audio - Pro Sound Collection v1.3](https://www.gamemasteraudio.com/product/pro-sound-collection/) Collectibles_items_Powerup (happy_collect_item_1.wav - renamed to correct-1 and win respectively)
 
 
### Acknowledgements
 
* [w3schools](https://www.w3schools.com/) - For documentation on scope
* [Code Institute](https://codeinstitute.net/).
* The poor Raspberry Pi that was thrashed within an inch of its life making this.
* My mentor Spencer.