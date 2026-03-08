let player = {
    name: "Per",
    chips: 145
};



let firstcard = getRandomCard();
let secondcard = getRandomCard();
let cards = [firstcard, secondcard];
let sum = firstcard + secondcard;
console.log("Sum: " + sum);
let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message");
console.log(messageEl);

let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": " + player.chips;

function getRandomCard() {

    let randomNumber = Math.floor( Math.random()*13 ) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
         return randomNumber;
    }
    
};

function startGame(){
    renderGame()
}




function renderGame() {
    cardsEl.textContent = "Cards: " ;
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    console.log("Game started!");
    if (sum <= 20) {
    message = "Do you want to draw a new card?";
} else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
} else {
    message = "You're out of the game!";
    isAlive = false;
}
messageEl.textContent = message;       

}

function newcard() {
    if(isAlive === true && hasBlackJack === false) {    
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}

}