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
function shuffle(CardList) {
    var currentIndex = CardList.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
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

var openCards=[];

$(".card").click(function display() {
   //if card is displaying, close (remove class)
  //if card is not shown, open (add class)
  //with elements from w3 notation https://www.w3schools.com/howto/howto_js_toggle_class.asp
   // var CardElement = document.getElementById("card"); //doesn't work in IE 9
   // CardElement.classList.toggle("show" "open");
   $(this).toggleClass("show");
   $(this).toggleClass("open");

 });

 display();

 //keeping track of score
 $(".score-panel").add(function(){
   $(".stars").add(".fa fa-star");

 })

//counting moves

$(".card").click(function(){
  var numberClicks=0;
  numberClicks=+1;
  console.log(numberClicks);

})


//reset game

  $(".restart").onclick(function(){
    var numberClicks=0;
    shuffle();

  })
