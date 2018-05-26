/*
* Create a list that holds all of your cards
*/
var CardList =["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle","fa fa-diamond","fa fa-bomb","fa fa-leaf","fa fa-bomb","fa fa-bolt","fa fa-bicycle", "fa fa-paper-plane-o","fa fa-cube"];

/*
* Display the cards on the page
*   - shuffle the list of cards using the provided "shuffle" method below
*   - loop through each card and create its HTML
*   - add each card's HTML to the page
*/

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle() {
  var currentIndex = CardList.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = CardList[currentIndex];
    CardList[currentIndex] = CardList[randomIndex];
    CardList[randomIndex] = temporaryValue;
  }

  return CardList;
}

//using innerHTML and textcontent and innertext to create and add HTML to page
//document create element

// $(".card > i").each(function(index, element){
//   $(element).removeClass();
//   $(element).addClass(CardList[index]);
//
// });


/*
* set up the event listener for a card. If a card is clicked:
*  - display the card's symbol (put this functionality in another function that you call from this one)
*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
*  - if the list already has another card, check to see if the two cards match
*    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
*    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
*    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
*    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
*/

//list of cards that have been opened
var openCards=[];

//event listener

$(".card").click(function display() {
  //if card is displaying, close (remove class)
  //if card is not shown, open (add class)
  console.dir($(this));

  $(this).toggleClass("show");
  $(this).toggleClass("open");

  //add card to OpenCards array

  if ($(this).is(openCards[openCards.length-1])){
    openCards.pop();

  }else{
    openCards.push($(this));

  }




  //see if there are any matches in OpenCards
  //with elements used from https://www.w3resource.com/javascript-exercises/javascript-array-exercise-20.php


  //
  if (openCards.length%2==0 && openCards.length!==0) {
    var attribute= "class";

    if(openCards[openCards.length-2].children().attr(attribute)==openCards[openCards.length-1].children().attr(attribute)){
      console.log("Attribute Function");

      //lock matches in open position

      openCards[openCards.length-1].addClass("match");
      openCards[openCards.length-2].addClass("match");

    } else {
      openCards.pop();
      openCards.pop();

      //timeout for how long card displays if no match
      setTimeout(function(){
        $(".card").removeClass("show open");
      }, 4000);

    }




    //   $(this).each(function(index,element){
    //     //if(element.class == '')
    //
    //
    //   })else if (openCards.length>2){
    //   $(this).removeClass("show open");
    // }

  }

  //
  //    //remove cards that do not match from OpenCards Array
  //    openCards.pop($(this));
  //
  //
  //    //hide cards that do not match
  //    $(this).removeClass("show" "open");
  //



  //
});
//
//
//
//
//counting moves

var numberClicks=0;

$(".card").click(function(){

  //increment number of moves
  numberClicks+=1;
  $(".moves").html(numberClicks);
  console.log(numberClicks);

  //decrease star rating for more moves
  // if (10<numberClicks<15){
  //   $(".stars > i").removeClass(".fa fa-star");
  // }

  // keeping track of star rating
  // $(".score-panel").remove(function(){
  //   $(".stars").remove(".fa fa-star");
  //
  // })


})

//timer

setInterval(function(){
  var timeClock= "0";
  document.getElementsByClassName('Timer').innerText= timeClock;
},3000)

//winning game
//congratulations message
var gameWon=false;
if (openCards.length==16){
  gameWon= true;
} else{
  gameWon=false;
}


if (gameWon==true){
  alert("Congratulations! You have won!\nTime elapsed:\nStar rating");
}

//reset game
//set return value of shuffle function to CardList array
//iterate over each icon and remove the class
//add the class in CardList after shuffle function to each element

$(".restart").click(function(){
  CardList=shuffle();
  $(".card > i").each(function(index, element){
    $(element).removeClass();
    $(element).addClass(CardList[index]);
    numberClicks=0;
  });

})
