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

   $(this).toggleClass("show");
   $(this).toggleClass("open");

   //add card to OpenCards array

   openCards.push($(this));

   //see if there are any matches in OpenCards

   if (openCards.length=2) {


   }


   // if $(this).text(jQuery.inArray("", OpenCards));

   //remove cards that do not match

   $(this).removeClass("show" "open"); 

    //lock matches in open position

    $(this).addClass("match");

 });


 //keeping track of score
 $(".score-panel").add(function(){
   $(".stars").add(".fa fa-star");

   //if statement adding points if match

 })

//counting moves

var numberClicks=0;

$(".card").click(function(){
  // var numberClicks;
  for(var numberClicks=0; numberClicks<100; numberClicks++){
      numberClicks++;
      $(".moves").html(numberClicks);
      console.log(numberClicks);
  }

  //if statement to increment by 1 for each click before the game is won

  // var numberClicks=0;
  // numberClicks=+1;



})


//reset game
  //set return value of shuffle function to CardList array
  //iterate over each icon and remove the class
  //add the class in CardList after shuffle function to each element

$(".restart").click(function(){
  numberClicks=0;
  CardList=shuffle();
  $(".card > i").each(function(index, element){
    $(element).removeClass();
    $(element).addClass(CardList[index]);

  });

})
