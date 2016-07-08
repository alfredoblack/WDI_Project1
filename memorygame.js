// $(document).ready(function(){
  // })

//   $('h1').on('click', function(){
//     alert("you clicked me!");
//   })


  // var tile = document.getElementsByClassName("player");
var squares = $('li');
squares.first().addClass('player');

function listenForMove(){
   $('.neutral').on('click', function(){

   $(squares).removeClass('player');
   $(this).addClass('player');
  })

}

listenForMove();


   var currentPosition = 0;


// console.log($('.neutral'));




// function playerMove(){


// }

