// Deck
var deck = new Array();
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const shoot = new Object();

// Create the deck
function createDeck (suits, values, deck) {
    // Iterate through suits array
    for (i=0; i < suits.length; i++) {
    // Iterate through values array
        for (j= 0; j < values.length; j++) {
            var weight = parseInt(values[j]);
            if (values[j] === "J" || values[j] === "Q" || values[j] === "K") {
                weight = 10;
            };
            if (values[j] === "A") {
                weight = 11;
            };
            var card = { Value: values[j], Suit: suits[i], Weight: weight };
            deck.push(card);
        };
    };
    console.log(deck);
};

function shuffle (deck) {
    for (var i = 0; i < 100; i++) {
        var l1 = Math.floor((Math.random() * deck.length));
        console.log(l1);
        var l2 = Math.floor((Math.random() * deck.length));
        console.log(l2);
        var tmp = deck[l1];

        console.log(deck[l1] = deck[l2]);
        console.log(deck[l2] = tmp);
    };
    console.log(deck);
};

function init (suits, values, deck) {
    createDeck(suits, values, deck);
    shuffle(deck);
};

init(suits, values, deck);
// Create the shoot
// function createShoot (deck, suits, values, card, shoot) {
//     for (i = 0; i = 6; i++) {
//         createDeck(suits, values, deck, card);
//         shoot
//     };
//     console.log(shoot);
// };
// Functions
// createShoot(deck, suits, values, card, shoot);



