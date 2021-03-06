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

shuffle();

//list of cards that have been opened
var openCards=[];

//timer:
  //display appropriate message in minutes and seconds depending on how much time has elapsed
 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now

var startGame= Date.now();
var seconds= 0;
var minutes= 0;
var elapsedTime= "Time elapsed: " + minutes + " minute(s) " + seconds%60 + " seconds";


  var gameClock = function (){
    seconds= Math.floor((Date.now() - startGame)/1000);
    minutes= Math.floor(seconds/60);
    if (seconds<60){
      elapsedTime="Time elapsed:" + " " + seconds + " seconds";
      document.getElementById('Clock').innerText= elapsedTime;

    }else if(60>=seconds && seconds<120){
      elapsedTime= "Time elapsed: " + minutes + " minute " + seconds%60 + " seconds";
      document.getElementById('Clock').innerText= elapsedTime;
    }else{
      elapsedTime= "Time elapsed: " + minutes + " minutes " + seconds%60 + " seconds";
      document.getElementById('Clock').innerText= elapsedTime;
    }

  }

  // var timer= setInterval(gameClock,1000);

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


//event listener
var numMatches=0;

var timer;

$(".card").click(function display() {

  //only start timer if it has been reset to undefined
  //start timer from 0 regardless of whether page has been refreshed

  if (timer==undefined){
    startGame=Date.now();
    timer= setInterval(gameClock,1000);
  }

  //prevent more than 2 cards from being clicked and opened at the same time

  if(!$(this).attr("class").includes("match")){
    if (openCards.length - numMatches == 2) {
      return;
    }

      console.log(openCards.length-numMatches);

      //if card is displaying, close (remove class)
      //if card is not shown, open (add class)

      $(this).toggleClass("show");
      $(this).toggleClass("open");

      //add card to OpenCards array

      if ($(this).is(openCards[openCards.length-1])){
        openCards.pop();

      }else{
        openCards.push($(this));

        //if two different cards are clicked, then count that as one move
        //increment number of moves

        if(openCards.length%2==0 && openCards.length!==0){
          numberClicks+=1;
          $(".moves").html(numberClicks);

        }

      }

      //see if there are any matches in OpenCards
      //with elements used from https://www.w3resource.com/javascript-exercises/javascript-array-exercise-20.php

      if (openCards.length%2==0 && openCards.length!==0) {
        const attribute= "class";

        if(openCards[openCards.length-2].children().attr(attribute)==openCards[openCards.length-1].children().attr(attribute)){
          console.log("Attribute Function");

          //lock matches in open position

          openCards[openCards.length-1].addClass("match");
          openCards[openCards.length-2].addClass("match");
          numMatches+=2;

          console.log(numMatches);

          //winning game
          //congratulations message
          var gameWon=false;
          if (openCards.length==16){
            gameWon= true;
            clearInterval(timer);
          } else{
            gameWon=false;
          }

          var popupModal=document.getElementById('congratsModal');
          var span=document.getElementById('close');
          var closebutton=document.getElementById('closebutton');

          if (gameWon==true){
            setTimeout(function(){
              // alert("Congratulations! You have won!\n" + elapsedTime  + "\nStar rating: " + stars);
              // <a data-toggle="modal" href="#congratsModal"></a>
              //use document.getElementById('congrats').innerText="Congratulations! You have won!\n" + elapsedTime  + "\nStar rating: " + stars + "\nDo you want to play again?";
              //use $('#congratsModal').modal('show');
              // popupModal.style.display="block";
              swal({
                title: "Congratulations!",
                text: "You have won!\n" + elapsedTime  + "\nStar rating: " + stars,
                button: "Play again?",
              });

            },100);
          }

          span.onclick=function(){
            popupModal.style.display="none";
          }

          closebutton.onclick=function() {
            popupModal.style.display="none";

          }

          //remove cards that don't match
        } else {

          //timeout for how long card displays if no match
          setTimeout(function(){
            const card1= openCards.pop();
            const card2= openCards.pop();
            $(card1).removeClass("show open");
            $(card2).removeClass("show open");
          }, 3000);

        }

      }

  }

});



//creating a click function to monitor number of moves 

var numberClicks=0;

$(".card").click(function moves(){

  //decrease star rating for more moves
  if (numberClicks==17){
    $(".stars > li:first-child").hide();
    stars=2;
    // continue;
  }else if(numberClicks==25){
    $(".stars > li:nth-child(2)").hide();
    stars=1;

  }

})

// var starsRating= moves();
var stars= $(".stars > li").length;


//reset game
//set return value of shuffle function to CardList array
//iterate over each icon and remove the class
//add the class in CardList after shuffle function to each element
function restart(){
  CardList=shuffle();
  $(".card > i").each(function(index, element){
    $(element).removeClass();
    $(element).addClass(CardList[index]);
  });
  startGame=Date.now();
  seconds=0;
  minutes=0;
  $(".stars > li").show();

  //hide all cards again
  $(".card").removeClass("match show open");

  //reset time to 0
  //clear any time on timer and moves in move counter
  clearInterval(timer);
  timer=undefined;

  // var timer= setInterval(gameClock,1000);

  numberClicks=0;
  $(".moves").html(numberClicks);

  //remove any leftover cards in openCards

  while(openCards.length!==0){
    openCards.pop();
  }

  //reset numMatches
  numMatches=0;
}

$(".restart").click(restart);
restart();
