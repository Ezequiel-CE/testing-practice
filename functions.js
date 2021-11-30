const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const reverseString = (word) => {
  return word.split("").reverse().join("");
};

const calculator = {
  add(a, b) {
    return a + b;
  },
  substract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

function isCharacterALetter(char) {
  return char.toLowerCase() != char.toUpperCase();
}

const encrypt = (word, k, letters) => {
  const encryptWord = word.split("").map((letter) => {
    //si no es letra lo deja como esta
    if (!isCharacterALetter(letter)) return letter;

    const index = letters.indexOf(letter);
    if (index > letters.length - k) {
      return letters[index - (letters.length - k)];
    }
    return letters[index + k];
  });
  return encryptWord.join("");
};

const caesarCipher = function (text, k) {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const words = text.toLowerCase().split(" ");

  return words.map((word) => encrypt(word, k, letters)).join(" ");
};

const analyzeArray = (arr) => {
  const average = arr.reduce((acc, current) => acc + current, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return { average, min, max, length };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
