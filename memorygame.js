// $(document).ready(function(){
  // })



var squares = $('li');
var currentPosition = 0;
var youWin = false;
var width = 5;
var totalScore = 0;
var level = 0;
var levelMaps = [
  {
    player: 0,
    bomb1: 5,
    bomb2: 6,
    bomb3: 13,
    bomb4: 18,
    win: 24
  },
  {
    player: 3,
    bomb1: 7,
    bomb2: 10,
    bomb3: 15,
    bomb4: 19,
    win: 21
  }
]


//SETS PLAYER ON STARTING SQUARE
// if(squares.first().addClass('neutral player'));



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

});


function checkForCollision(){
  if ($(squares[currentPosition]).hasClass('bomb')) {
    console.log("It's a bomb!");
    $(squares).removeClass('player');
    // setTimeout(resetBoard, 2000);
    alert("Boom! you lost");
  }
}

function checkForWin(){
  if($(squares[currentPosition]).hasClass('win')){
    //ADD POINTS TO SCORE
    youWin = true;
    // setTimeout(resetBoard, 1000);
    console.log("you win!");
    $('li').removeClass("player bomb win");
    level++;

    if(!levelMaps[level]) {
      console.log("game Over!");
      return;
    }

    setTimeout(changeTheLevel, 2000);
  } 


}



$('#start').on('click', changeTheLevel);


function changeTheLevel(){
  currentPosition = levelMaps[level].player;
  $('li').eq(currentPosition).addClass("player");
  $('li').eq(levelMaps[level].bomb1).addClass("bomb");
  $('li').eq(levelMaps[level].bomb2).addClass("bomb");
  $('li').eq(levelMaps[level].bomb3).addClass("bomb");
  $('li').eq(levelMaps[level].bomb4).addClass("bomb");
  $('li').eq(levelMaps[level].win).addClass("win");
  youWin = false;
  startTheClock();
}


function startTheClock(){
  var count = 15;
  counter = setInterval(timer, 1000); //1000 will  run it every 1 second
  var score = 120;
    
    
  function timer() {
    count = count - 1;
    score = score - 10;
    if (count === -1 || youWin === true) {
      
      clearInterval(counter);
     
      youWin = true;
      totalScore += score;
    }

    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    minutes %= 60;
    

    $("#timer").html(seconds + " seconds left! " + score + " points remaining"); // watch for spelling
    console.log(score);

    $('#score').html(totalScore);

  }
}


function resetTimer(){
  if(checkForCollision ===true){

  }
  setInterval(timer, 3000)
  startTheClock();
}
 

































