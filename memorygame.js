// $(document).ready(function(){
  // })

//   $('h1').on('click', function(){
//     alert("you clicked me!");
//   })

var squares = $('li');
squares.first().addClass('player');
var currentPosition = 0;
// var gameOver = false;

//SETS PLAYER ON STARTING SQUARE
if(squares.first().addClass('neutral player'));

// var $mines = $('.bomb');
// var $neutral = $('.neutral');


// LIST OF INDEX AND VALUE OF EVERY SQUARE

// function game(){

//   $.each(squares, function(index, value){
//     // console.log(index, value);
//     var squarePlaces =[index,value];
//     console.log(squarePlaces);
//      })
// }
// game();


//TRACK PLAYER MOVE

// $.each(squares, function(value){
//   console.log([value]);
// })

// var firstMove = 0;
// function playerMove(){


// }


function listenForMove(){

  // $.each(squares, function(index, value){
  //   // console.log(index, value);
  //   var squarePlaces =[index,value];
  //   // console.log(squarePlaces);
  //    })



  $('body').on('keydown', function(e){
    // e.preventDefault();


    //on keydown DOWN
    if(e.which === 40){
      currentPosition += 5;
/// push index to new array
$(squares).removeClass('player');
$(squares[currentPosition]).addClass('player');
checkForCollision();

console.log("square", currentPosition);

} 

//  MOVE RIGHT
else if (e.which === 39){
  currentPosition += 1;
  $(squares).removeClass('player');
  $(squares[currentPosition]).addClass('player');
  checkForCollision();

  console.log("square", currentPosition);
} 
// MOVE LEFT
else if (e.which === 37){
  currentPosition -= 1;
  $(squares).removeClass('player');
  $(squares[currentPosition]).addClass('player');
  checkForCollision();

  console.log("square", currentPosition);
}

// MOVE UP 

else if (e.which === 38){
  currentPosition += -5;
  $(squares).removeClass('player');
  $(squares[currentPosition]).addClass('player');
  checkForCollision();

  console.log("square", currentPosition);

}

})

}


function checkForCollision(){
  if ($(squares[currentPosition]).hasClass('bomb')) {
    console.log("It's a bomb!");
    $(squares).removeClass('player');
    setTimeout(resetBoard, 2000);
  }
}

listenForMove();


function resetBoard(){
  squares.first().addClass('player');
  currentPosition = 0;
  // gameOver = true;
  //SETS PLAYER ON STARTING SQUARE
  // if(squares.first().addClass('neutral player'))
}



$('#start').on('click', function(){
  // var count = 10;
  // var score = 120;
  // var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

  //   function timer() {
  //     count = count - 1;
  //     score = score - 2;
  //     if (count === -1 || gameOver === true ) {
  //       clearInterval(counter);
  //       count = 20;
  //       score = 120;
  //       // gameOver();
  //       return;
  //     }

  //     var seconds = count % 60;
  //     var minutes = Math.floor(count / 60);
  //     var hours = Math.floor(minutes / 60);
  //     minutes %= 60;
  //     hours %= 60;

  //       document.getElementById("timer").innerHTML = seconds + " seconds left! " + score + " points remaining"; // watch for spelling
  //     }

    });








//BOMBS ON GRID
var bomb1= $('ul li:nth-child(6)');
var bomb2= $('ul li:nth-child(7)');
var bomb3= $('ul li:nth-child(14)');
var bomb4= $('ul li:nth-child(19)');

































