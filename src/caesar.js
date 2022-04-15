// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const caesarModule = (function () {
  // you can add any code you want within this function scope
  function encoder(input, shift) {
    const message = input.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newMessage = '';
    for (let i = 0; i < message.length; i++) {
      const letter = message[i];
      if (!alphabet.includes(letter)) {
        newMessage += letter;
      } else {
        const position = alphabet.indexOf(letter);
        let shifted = position + shift;
        if (shifted >= 26) {
          shifted -= 26;
        };
        if (shifted < 0) {
          shifted += 26;
        };
        newMessage += alphabet[shifted];
      };
    };
    return newMessage;
  };

  function decoder(input, shift) {
    let message = input.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newMessage = '';
    for (let i = 0; i < message.length; i++) {
      const letter = message[i];
      if (!alphabet.includes(letter)) {
        newMessage += letter;
      } else {
        const position = alphabet.indexOf(letter);
        let shifted = 0;
        if (shift >= 0) {
          shifted = position - shift;
        } else {
          shifted = position - (shift + 26);
        };
        if (shifted < 0) {
          shifted += 26;
        };
        newMessage += alphabet[shifted];
      };
    };
    return newMessage;
  };

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift < -25 || shift === 0 || shift > 25) return false;
    if (encode) {
      return encoder(input, shift);
    } else {
      return decoder(input, shift);
    };

  };  
  return {
    caesar,
  };
})();

module.exports = {caesar: caesarModule.caesar}

