const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let message = "";

  for (let i = 0; i < expr.length; i += 10) {
    const letter = expr.slice(i, i + 10);
    if (letter === "**********") {
      message += " ";
    } else {
      let morse = "";
      for (let j = 0; j < letter.length; j += 2) {
        const couple = letter.slice(j, j + 2);
        if (couple === "10") {
          morse += ".";
        } else if (couple === "11") {
          morse += "-";
        }
      }
      message += MORSE_TABLE[morse];
    }
  }

  return message;
}

module.exports = {
  decode,
};
