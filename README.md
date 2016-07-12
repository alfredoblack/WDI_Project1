# WDI_Project1
 Mrs. McGillicuddy's Magical Mystery Memory Game

The point of the game is to get the yellow square to the green using the arrow keys.You have 15 seconds to get through as many levels possible and collect as many points. After you begin the game, bombs will light up for 2 seconds, make sure to REMEMBER not to land on them on your way to green.

- Technologies used:
- Javascript
- Jquery
- HTML
- CSS
- Box model positioning
- scope
- google fonts

Approach Taken:

The main part of my game sits within a function that contains a callback function.

- My grid is one array organized 5 by 5.

- I wanted all of the changes and actions made to be dependant on the key that was pressed. 

- Only the arrow keys are activaded once the player clicks starts and  they are responsible for:

- Assigning where the player begins and ends (yellow square / blue square).

- Tracking the current position via thier index numbers

- I started off by assinging the arrow keys to the elements I wanted to get control of (LI). This provided me my start point and location on the grid.

- I gave the start and finish squares thier unique classes and using the array making thier grid planted bombs as obstacles between start and finish.
- I switched classes in order give the impression of moving across the grid.

- Once placing the obstacles, a start and finish square, I created two funcitons that determined either a win (checkForWin fn), or a losing (checkForCollision fn).

- To add a bit of urgency to the game, I added a timer that counts down from 15 seconds until you either complete all the levels or hit a bomb.
- You start off with a score of 150 each level, you lose 10 points every second.





Unsolved Problems:

- The bombs don't disappear fast enough when changing levels, my timer is off
- Want to freeze the keys until the bombs disappear
- does not pass to level 2
- Winning celebration needs massive improvement
- Need to add more levels (I broke the changeTheLevel function by doing this last night)
- Need to make squares smaller increase difficulty
- Need to add audio and animation
- Want to redo it in OOP
