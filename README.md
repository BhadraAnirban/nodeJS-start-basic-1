Start nodeJS with - package.json, Export module, nodemon, validator, File system

### NodeJS use V8 engine. Chrome browser also use V8 engine. At the end it use c++ code.
Like browser, console.log() is nodeJS’s own predefine method
## 1.	Export module –
In a file called math.js –
```
const Math = {};
Math.Add = function(a, b) {
    return a + b;
}

module.exports = Math;
```
In starting file called app.js -
```
const math = require('./math.js');

const sum = math.Add(4, 22);
console.log(sum);
```
Execute in command line - node app.js

## 2.	add a package.json file-
```
Execute npm init command.
```
## 3.	NodeMON –
nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
```
npm install –g nodemon
```
// install globally is important.
To execute – nodemon app.js
No need to execute node app.js again.

### 4.	Validator.js-
A library of string validators and sanitizers.
```
const validator = require('validator');
const ISValid = validator.isEmail('ani@pmkj.com');
console.log('Is Valid: ' + ISValid);
```
### 5.	FileSystem append/write-
‘fs’ is in-build module in node js.
```
const fs = require('fs');

try {
    fs.writeFileSync('pmkj.txt', 'PMKJ data to append 1st.');
    fs.appendFileSync('pmkj.txt', ' PMKJ data to append 2nd.');
    console.log('The PMKJ data was appended to file!');
  } catch (err) {
    /* Handle the error */
  }
```

### 6.	Filesystem- Check if file is readable and readfile
```
fs.access('pmkj.txt', fs.constants.R_OK, (err) => {
    console.log(`${err ? 'is not readable' : 'is readable'}`);
  });
console.log(fs.readFileSync('pmkj.txt', 'utf8'))

```


