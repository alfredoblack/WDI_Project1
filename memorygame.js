// $(document).ready(function(){
  // })

//   $('h1').on('click', function(){
//     alert("you clicked me!");
//   })


  
var squares = $('li');
squares.first().addClass('player');


var currentPosition = 0;

function listenForMove(){
   $('body').on('keydown', function(e){
    // e.preventDefault();


    //on keydown DOWN
    if(e.which === 40){
      currentPosition += 5;
      $(squares).removeClass('player');
      $(squares[currentPosition]).addClass('player');
      console.log("square", currentPosition);
    } 
//  MOVE RIGHT
    else if (e.which === 39){
      currentPosition += 1;
      $(squares).removeClass('player');
      $(squares[currentPosition]).addClass('player');
      console.log("square", currentPosition);
    } 
// MOVE LEFT
    else if (e.which === 37){
      currentPosition += -1;
      $(squares).removeClass('player');
      $(squares[currentPosition]).addClass('player');
      console.log("square", currentPosition);

    }

// MOVE UP key code ==38 - can not set condition for moving up when starting from 0

    else if (e.which === 38){
      currentPosition += -1;
      $(squares).removeClass('player');
      $(squares[currentPosition]).addClass('player');
      console.log("square", currentPosition);

    }



  })

}

listenForMove();


   




// function playerMove(){


// }

