class Chute {
  constructor(decks = 6) {
    this.cards = [];
    for (let i = 0; i < decks; i++) {
      const deck = new Deck().getCards();
      this.cards = this.cards.concat(deck);
    }

    this.shuffle();
  }

  shuffle() {
    let currentIndex = this.cards.length;
    let tempValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = tempValue;
    }
  }

  drawCard() {
    return this.cards.pop();
  }
}

class Deck {
  static suits = ['Heart', 'Spade', 'Clove', 'Spade'];
  static numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  static values = {
    'A': 11,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 10,
    'Q': 10,
    'K': 10,
  }

  constructor() {
    this.cards = [];

    Deck.suits.map((suit) => {
      Deck.numbers.map((value) => {
        this.cards.push(new Card(suit, value));
      });
    });
  }
  
  getCards() {
    return this.cards;
  }

  shuffle() {
    let currentIndex = this.cards.length;
    let tempValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = tempValue;
    }
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

class Player {
  constructor() {
    this.hand = [];
    //For test purposes adding two cards into the hand and then going to try checkValues func to test checking for Black Jack.
    for (var i=0; i < 2; i++) {
      this.hit();
    }
    this.checkValues();
  }

  checkValues() {
    // * Having this in a variable is fine, but name it something descriptive. 'obj', doesn't explain at all what this is.
    // var obj = Deck.values;
    
    // * Same here. It doesn't take much more effort to just type out card1/card2
    // var c1 = this.hand[0];
    // var c2 = this.hand[1];

    const cardValues = Deck.values;

    //  * Having the cards explicitely listed here is fine for this specific test, but won't scale with how the game is actually played
    //  * since it's likely that you would wand to use the checkValues/checkHand method beyond the first two cards.
    // const card1 = this.hand[0];
    // const card2 = this.hand[1];
    let sum = 0;
  
    // * This doesn't make any sense beacuse cardValues/obj is an object. Which means you get a lookup time of O(1). By wrapping it into
    // * a for loop you're making the lookup O(n)
    // for(const val in obj) {
    //   //console.log(`obj.${val} = ${obj[val]}`);

    //   // * By doing this you're modifying the actual object/instance of the class Card. It's also unnecessary since you can access
    //   // * the values with cardValues and just add it to a variable that tracks the sum.
    //   if (c1.value === val) {
    //     console.log(typeof(c1.value));
    //     c1.value = obj[val];
    //     console.log(`suit:  ${c1.suit} and value: ${c1.value}`);
    //     console.log(`val = ${obj[val]}`);
    //     console.log(typeof(c1.value));
    //   }

    //   if (c2.value === val) {
    //     console.log(typeof(c2.value));
    //     c2.value = obj[val];
    //     console.log(`suit:  ${c2.suit} and value: ${c2.value}`);
    //     console.log(`val = ${obj[val]}`);
    //     console.log(typeof(c2.value));
    //   }

    // }
      // if (c1.value + c2.value === 21) {
      //   console.log("BLACK JACK YO");
        
      // } else {
      //   console.log("Hit or Stand?");
      // }
    
    for (let card of this.hand) {
      sum += cardValues[card.value];
    }

    console.log(this.hand);
    console.log(sum);

    if (sum === 21) {
      console.log("BLACK JACK YO");
    } else {
      console.log("Hit or Stand?");
    }
  }

  hit() {
   var hitCard = chute.drawCard();
   this.hand.push(hitCard);
  }
  
  stand() {
    //do nothing
  }
}
class Dealer extends Player {
  
}

const chute = new Chute();
const player = new Player();

//Flow of Blackjack
/*
x Chute is shuffled. 
- Dealer hands Player 1 one card face up
- Dealer gives themself one card face up
- Dealer gives Player 1 one card face up
- Dealer gives themself one card face down
- If player has 21 and dealer does not, player wins.
- If player has 21 and dealer does too, push. 
- If Dealer's face up card is a 10 or face card, dealer checks face down card to see if they have a natural.
- If Dealer's face up card is not a 10 or a face card, dealer does not check the face down card.
- Player decides whether to "stand" or "hit".
- If player "stands", dealer unveils face down card.
- If dealer is at 17 or more, dealer must stand.
- If dealer is at 16 or less, dealer must draw cards until 17 or higher is reached.
- If player "hits", player is given a card. If less than 21, player can choose to "stand" or "hit".
*/