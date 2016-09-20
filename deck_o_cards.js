
function PlayGame () {
  this.deck = {
    spades: ['sA', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sJ', 'sQ', 'sK'],
    hearts: ['hA', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hJ', 'hQ', 'hK'],
    clubs: ['cA', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cJ', 'cQ', 'cK'],
    diamonds: ['dA', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dJ', 'dQ', 'dK']
  };
}

PlayGame.prototype.shuffle = function() {
  this.deckArr = this.deck.spades.concat(this.deck.hearts, this.deck.clubs, this.deck.diamonds);
  for (var i = this.deckArr.length; i; i--) {
    var j = Math.floor(Math.random() * i);
    var x = this.deckArr[i - 1];
    this.deckArr[i - 1] = this.deckArr[j];
    this.deckArr[j] = x;
  }
  console.log(this.deckArr);
};

PlayGame.prototype.getNextCard = function() {
  if (this.deckArr === undefined) {
    this.shuffle();
  }

  if (this.deckArr.length === 0) {
    alert('No more cards in deck, call the shuffle function to get a new random deck');
  } else {
    var nextCard = this.deckArr.shift();
    console.log(nextCard);
  }
};

var newGame = new PlayGame();
