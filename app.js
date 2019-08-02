const math = require('./math.js');
const validator = require('validator');
const fs = require('fs');

const sum = math.Add(9, 22);
console.log(sum);
const ISValid = validator.isEmail('ani@pmkj.com');
console.log('Is Valid: ' + ISValid);

try {
    fs.writeFileSync('pmkj.txt', 'PMKJ data to append 1st.');
    fs.appendFileSync('pmkj.txt', ' PMKJ data to append 2nd.');
    console.log('The "PMKJ data to append" was appended to file!');
  } catch (err) {
    /* Handle the error */
  }

  // Check if the file is readable.
fs.access('pmkj.txt', fs.constants.R_OK, (err) => {
    console.log(`${err ? 'is not readable' : 'is readable'}`);
  });

  console.log(fs.readFileSync('pmkj.txt', 'utf8'))