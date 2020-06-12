<<<<<<< HEAD
// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false
=======
// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(phrase) {
  let lowerPhrase = phrase.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwyz") {
    if (lowerPhrase.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

function isPangramTwo(phrase) {
  let lowerPhrase = phrase.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwyz") {
    if (!lowerPhrase.includes(char)) {
      return false;
    }
  }
  return true;
}
>>>>>>> 971fb234c4ec75d64385b14aa6687f9030e9fff6
