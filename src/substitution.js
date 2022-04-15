// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  
  function sub(alphabet) {
    return new Set(alphabet).size === alphabet.length;
  }

  function encoder(input, alphabet) {
    if (!alphabet) return false;
    let test = sub(alphabet);
    if (!test) return false;
    if (alphabet.length != 26) return false;
    let newMessage = '';
    message = input.toLowerCase();
    for (let i = 0; i < message.length; i++) {
      let letter = message[i];
      if (letter === ' ') {
        newMessage += ' ';
      } else {
        let index = alpha.indexOf(letter);
        newMessage += alphabet[index];
      };
    };
    return newMessage;
  };

  function decoder(input, alphabet) {
    if (!alphabet) return false;
    let test = sub(alphabet);
    if (!test) return false;
    if (alphabet.length != 26) return false;
    let newMessage = '';
    message = input.toLowerCase();
    for (let i = 0; i < message.length; i++) {
      let letter = message[i];
      if (letter === ' ') {
        newMessage += ' ';
      } else {
        let index = alphabet.indexOf(letter);
        newMessage += alpha[index];
      };
    };
    return newMessage;
  };


  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (encode) {
      return encoder(input, alphabet);
    } else {
      return decoder(input, alphabet);
    };
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
