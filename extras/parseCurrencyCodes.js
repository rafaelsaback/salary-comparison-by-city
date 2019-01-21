const fs = require('fs');
const readline = require('readline');
const filePath = './currencyCodes.json';
const numbeoFile = './currencyCodes';
const parsedData = [];
const rd = readline.createInterface({
  input: fs.createReadStream(numbeoFile)
});


rd.on('line', function(line) {
  if(line.split(',')[0] !== 'Country') {
    const parsedArray = line.split(',');
    const parsedElement = {};

    parsedElement.country = parsedArray[0];
    parsedElement.currencyCode = parsedArray[3];
    parsedData.push(parsedElement);
  }
});
  
rd.on('close', () => {
  parsedData.sort(function(a, b) {
    if(a.country < b.country) {return -1;}
    if(a.country > b.country) {return 1;}
    return 0;
  });
  fs.writeFile(filePath, JSON.stringify(parsedData, null, 2), (err) => {
    if (err) throw err;
  });
});
