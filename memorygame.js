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
    player: 10,
    bomb1: 5,
    bomb2: 17,
    bomb3: 12,
    bomb4: 8,
    win: 19
  },
  {
    player: 3,
    bomb1: 7,
    bomb2: 10,
    bomb3: 15,
    bomb4: 19,
    win: 21
  },
  {
    player: 0,
    bomb1: 5,
    bomb2: 6,
    bomb3: 13,
    bomb4: 18,
    win: 24
  }
];

var score = 150;
var counter = null;
var count = 15;



$('li').hide();
// $('div').hide();
$('#reset').hide();



/// MAIN FUNCTION LISTENING FOR PLAYER'S MOVE

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

  // SET BOUNDARIES TO KEEP FROM MOVING OUTSIDE THE BOX  

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
    youWin = false;
    console.log("It's a bomb!");
    // $(squares).removeClass('player');
    $('li').removeClass("bomb player win");
    $('li').addClass("neutral");
    // alert("Boom! you lost");
    $('li').hide();
    $('#containerInst').text('BOOM! you lost!!!');
    gameOver();

   return; 
  }

}

function checkForWin(){
  if($(squares[currentPosition]).hasClass('win')){
    //ADD POINTS TO SCORE
    youWin = true;
    // setTimeout(resetBoard, 1000);
    console.log("you win!");
    $('li').removeClass("player bomb win");
    $('li').addClass("neutral");
    level++;

    if(!levelMaps[level]) {
      console.log("game Over!");
      clearTimeout(counter);
      $('div').hide()
      $('li').hide()
      $('body').css("background","url(Rainbow_Colorful_wood_background.jpg) no-repeat");
      $('body').append("<div id='win-box'><h1>Congrats!</h1></div>");
      $('#reset').show();

      return;
    }

    setTimeout(changeTheLevel, 2000);
  } 


}



$('#start').on('click', changeTheLevel);

$('#reset').on('click', function(){
  location.reload();

})


function changeTheLevel(){
  // level = 0;
  // $('#containerInst').text('<h5>Game Instructions</h5><p>Using the arrow keys get from start to finish within the timer</p>');
  $('li').show(2000);
  $('#containerInst').html('<h5>Game Instructions</h5>'+
    '<p>Using the arrow keys get from start to finish within the timer</p>');
  // if($('li').hasClass('neutral bomb')=== false){
  // //   console.log("hello you got there!")
  // //   setTimeout($('li').removeClass('bomb'), 1000)
  // }


  // {
  //   $('.neutral.bomb').removeClass();
  //   //$('.bomb').removeClass();
  //   // $('li').addClass('neutral');

  //   console.log('change class bomb neutral!!!')
  //   //change class to blue
  // }

  setTimeout(function(){
    $('li.bomb').addClass('neutral');
  },2000);
  
  currentPosition = levelMaps[level].player;
  $('li').eq(currentPosition).addClass("player");
  $('li').eq(levelMaps[level].bomb1).attr("class","bomb");
  $('li').eq(levelMaps[level].bomb2).attr("class","bomb");
  $('li').eq(levelMaps[level].bomb3).attr("class","bomb");
  $('li').eq(levelMaps[level].bomb4).attr("class","bomb");
  $('li').eq(levelMaps[level].win).addClass("win");
  youWin = false;
  score = 150;
  startTheClock();

}


/// TRACK TIME AND UPDATE SCORES

function timer() {
  console.log("timer function called");
  count = count - 1;
  score = score - 10;
  if (count === 0 || youWin === true) {
    
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

function startTheClock(){
  count = 15;
  clearInterval(counter);
  counter = setInterval(timer, 1000); //1000 will  run it every 1 second
}


function gameOver(){
  $("#timer").html = "Game Over";
  clearTimeout(counter)
}

 

































