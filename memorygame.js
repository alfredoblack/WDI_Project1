// $(document).ready(function(){
  // })



var squares = $('li');

squares.first().addClass('player');
var currentPosition = 0;
var youWin = false;
var width = 5;

// var score = $('h2');


//SETS PLAYER ON STARTING SQUARE
if(squares.first().addClass('neutral player'));


function listenForMove(){

  $('body').on('keydown', function(e){
    e.preventDefault();

    var previousPosition = currentPosition;

      //on keydown DOWN
      if(e.which === 40){
        currentPosition += width;
          
          if(currentPosition > width * width - 1 ){
            console.log("You can't move down!");
            currentPosition = previousPosition;
          }

        $(squares).removeClass('player');
        $(squares[currentPosition]).addClass('player');
        checkForCollision();
        checkForWin();


      console.log("square", currentPosition);

      } 

      //  MOVE RIGHT
      else if (e.which === 39){
        currentPosition += 1;

          if(previousPosition % width === width -1 && currentPosition % width === 0){
            console.log("cant move right")
            currentPosition = previousPosition;
          }

        $(squares).removeClass('player');
        $(squares[currentPosition]).addClass('player');
        checkForCollision();
        checkForWin();
        

        console.log("square", currentPosition);
      } 
      // MOVE LEFT
      else if (e.which === 37){
        currentPosition -= 1;

          if((currentPosition % width === width -1 && previousPosition % width === 0) || currentPosition < 0){
            console.log("cant move right")
            currentPosition = previousPosition;
          }

        $(squares).removeClass('player');
        $(squares[currentPosition]).addClass('player');
        checkForCollision();
        checkForWin();

        console.log("square", currentPosition);
      }

      // MOVE UP 

      else if (e.which === 38){
        currentPosition += -width;

          if(currentPosition < 0 ){
            console.log("You can't move up!");
            currentPosition = previousPosition;
          }

        $(squares).removeClass('player');
        $(squares[currentPosition]).addClass('player');
        checkForCollision();
        checkForWin();

        console.log("square", currentPosition);

      }

      })

}


function checkForCollision(){
  if ($(squares[currentPosition]).hasClass('bomb')) {
    console.log("It's a bomb!");
    $(squares).removeClass('player');
    setTimeout(resetBoard, 2000);
    alert("Boom! you lost");
  }
}

function checkForWin(){
  if($(squares[currentPosition]).hasClass('win')){
    //ADD POINTS TO SCORE
    youWin = true;
    // VAR NEW ARRAY WHERE SCORE IS PUSHED
    score.text.scoreKeeping.push()
    setTimeout(resetBoard, 1000);
    console.log("you win!");
  }


}

listenForMove();



function resetBoard(){
  squares.first().addClass('player');
  currentPosition = 0;
  // if collision youWin == false, if not true
    if(checkForCollision === true){
      youWin = false;
    }
    else{
      youWin = true;
    }
  
  // gameOver = true;
  //SETS PLAYER ON STARTING SQUARE
  // if(squares.first().addClass('neutral player'))
}


// function game(){
//   $('li').each
// }

// function gameOver(){
  

// return console.log('gameover!');
// }

// function score(){
//   var total = 0;

//   total = total + 1

//   if($(squares[currentPosition]).hasClass('win')){
//     //add points to score 
//   }
// }

// function turnImages(){

//   $('#start').on(click, function()){
//     $('bomb').hide();
//   }
//   //on click dissolve cover image in 3 seconds
//   // turn on bombs for 2 seconds
//   //turn off bombs
//   // activate timer
// }



$('#start').on('click', function(){
  var count = 15;
  var score = 150;
  var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    // $('bomb').hide();
    
    function timer() {
      count = count - 1;
      score = score - 10;
      if (count === -1 || youWin === true) {
        
        clearInterval(counter);
        // count = 20;
        // score = 120;
        // gameOver();
        youWin = true;
        return score;
      }

      var seconds = count % 60;
      var minutes = Math.floor(count / 60);
      minutes %= 60;
      

        document.getElementById("timer").innerHTML = seconds + " seconds left! " + score + " points remaining"; // watch for spelling
        console.log(score);

        $('#score').html(score);
        var scoreKeeping = []; 

      }



      // function forBombs(){
      //   var countB = 10;
      //   setInterval(timer, 1000);

      // }

    });








//BOMBS ON GRID
var bomb1= $('ul li:nth-child(6)');
var bomb2= $('ul li:nth-child(7)');
var bomb3= $('ul li:nth-child(14)');
var bomb4= $('ul li:nth-child(19)');

































