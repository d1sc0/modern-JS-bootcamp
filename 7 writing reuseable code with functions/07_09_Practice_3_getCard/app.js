// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getCard() {
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const suits = ["clubs", "spades", "hearts", "diamonds"];

  let valueIndex = Math.floor(Math.random() * values.length);
  let suitIndex = Math.floor(Math.random() * suits.length);

  let card = {
    value: values[valueIndex],
    suit: suits[suitIndex]
  };

  return card;
}

//-------------------------------------

function getCardTwo() {
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const suits = ["clubs", "spades", "hearts", "diamonds"];

  return {
    value: pickRandom(values),
    suit: pickRandom(suits)
  };
}

function pickRandom(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
