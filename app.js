// Deck
var deck = [];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
const card = "";

// Create the deck
function createDeck (suits, values, deck, card) {
    for (i=0; i < suits.length; i++) {
        // console.log("suits"+suits[i]);
        for (j= 0; j < values.length; j++) {
            // console.log(values[j] + "of" + suits[i])
            card = values[j] + " " + "of" + " " + suits[i]
            console.log("this is my card"+card);
            deck.push(card);
            // console.log("deck in the making "+deck);
        };
    };

    console.log(deck);
    // console.log(suits + values);
};

createDeck(suits, values, deck, card);


