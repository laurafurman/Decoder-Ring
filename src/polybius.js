// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphaArray = ['a','b','c','d','e','f','g','h','(i/j)','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const cipher = [11, 21, 31, 41, 51, 12, 22, 32, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55, 00];
  const square = { 
    1: ['a','b','c','d','e'], 
    2: ['f','g','h','(i/j)','k'], 
    3: ['l','m','n','o','p'], 
    4: ['q','r','s','t','u'], 
    5: ['v','w','x','y','z'] 
  };

  function encoder(input) {
    let message = input.toLowerCase();
    let newMessage = '';
    for (let i = 0; i < message.length; i++) {
      let letter = message[i];
      if (!alphabet.includes(letter)) {
        newMessage += letter;
      };
      if (letter === 'i' || letter === 'j') {
        newMessage += 42;
      };
      for (let row in square) {
        if (square[row].includes(letter)) {
          newMessage += `${square[row].indexOf(letter)+1}` + `${row}`;
        };
      };
    };
    return newMessage;
  };

  function decoder(input) {
    let newInput = input.replace(/ /g, '00');
    if (newInput.length % 2 != 0) return false;
    let inputArray = newInput.match(/../g);
    let newMessage = '';
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === '00') {
        newMessage += ' ';
      } else {
        let alphaI = cipher.indexOf(Number(inputArray[i]));
        newMessage += alphaArray[alphaI];
      };
    };
    return newMessage;
  };

  function polybius(input, encode = true) {
    // your solution code here
    if (encode) {
      return encoder(input);
    } else {
      return decoder(input);
    };
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
