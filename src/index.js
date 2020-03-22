const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let output = '';
   for(let i = 0; i < expr.length; i += 10){
      let str = expr.slice(i, i + 10);
      let decodeStr = '';
      if(str === '**********'){
        output += ' ';
        continue;
      }

      for(let j = 0; j < str.length; j += 2){
          let phraze = str.slice(j, j + 2);
          decodeStr += phraze === '10' ? '.' : phraze === '11' ? '-' : '';
      }
      output += MORSE_TABLE[decodeStr];
   }
   return output;
}

module.exports = {
    decode
}