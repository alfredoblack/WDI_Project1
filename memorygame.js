// $(document).ready(function(){
  // })



var squares = $('li');

squares.first().addClass('player');
var currentPosition = 0;
var youWin = false;

// var score = $('h2');


//SETS PLAYER ON STARTING SQUARE
if(squares.first().addClass('neutral player'));




function listenForMove(){


  $('body').on('keydown', function(e){
    // e.preventDefault();


      //on keydown DOWN
      if(e.which === 40){
        currentPosition += 5;
    
      $(squares).removeClass('player');
      $(squares[currentPosition]).addClass('player');
      checkForCollision();
      checkForWin();


      console.log("square", currentPosition);

      } 

      //  MOVE RIGHT
      else if (e.which === 39){
        currentPosition += 1;
        $(squares).removeClass('player');
        $(squares[currentPosition]).addClass('player');
        checkForCollision();
        checkForWin();
        

        console.log("square", currentPosition);
      } 
      // MOVE LEFT
      else if (e.which === 37){
        currentPosition -= 1;
        $(squares).removeClass('player');
        $(squares[currentPosition]).addClass('player');
        checkForCollision();
        checkForWin();

        console.log("square", currentPosition);
      }

      // MOVE UP 

      else if (e.which === 38){
        currentPosition += -5;
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
    setTimeout(resetBoard, 1000);
  }
}

function checkForWin(){
  if($(squares[currentPosition]).hasClass('win')){
    //ADD POINTS TO SCORE
    setTimeout(resetBoard, 2000);
    console.log("you win!");
  }
}

listenForMove();


function resetBoard(){
  squares.first().addClass('player');
  currentPosition = 0;
  youWin = true;
  // gameOver = true;
  //SETS PLAYER ON STARTING SQUARE
  // if(squares.first().addClass('neutral player'))
}


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



$('#start').on('click', function(){
  var count = 15;
  var score = 120;
  var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    
    function timer() {
      count = count - 1;
      score = score - 20;
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
      var hours = Math.floor(minutes / 60);
      minutes %= 60;
      // hours %= 60;

        document.getElementById("timer").innerHTML = seconds + " seconds left! " + score + " points remaining"; // watch for spelling
        console.log(score);

        $('#score').html(score);
      }

    });








//BOMBS ON GRID
var bomb1= $('ul li:nth-child(6)');
var bomb2= $('ul li:nth-child(7)');
var bomb3= $('ul li:nth-child(14)');
var bomb4= $('ul li:nth-child(19)');

































