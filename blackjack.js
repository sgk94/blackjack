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
    'A': 1,
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

const chute = new Chute();

//Needs for game to work
/*
- A dealer and a player
- A board to play on
- A button to deal
- A button to hit
- A button to stay
- Calculate a win, bust, push.
*/