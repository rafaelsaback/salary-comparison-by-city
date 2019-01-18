const fs = require('fs');
const readline = require('readline');
const filePath = '../src/scripts/parsedData.json';
const numbeoFile = './numbeoData';
const parsedData = [];
const rd = readline.createInterface({
  input: fs.createReadStream(numbeoFile)
});


rd.on('line', function(line) {
  if(!isNaN(line[0])) {
    const parsedArray = line.split('\t');
    const parsedElement = {};

    // Cities from US have additionaly the State name
    if(parsedArray[1].split(',').length < 3) {
      parsedElement.country = parsedArray[1].split(',')[1].trim();
    } else {
      parsedElement.country = parsedArray[1].split(',')[2].trim();
    }
    parsedElement.city = parsedArray[1].split(',')[0];
    parsedElement.costOfLiving = parsedArray[2];
    parsedElement.date = getDate();
    parsedData.push(parsedElement);
  }
});
  
rd.on('close', () => {
  parsedData.sort(function(a, b) {
    if(a.country < b.country) {return -1;}
    if(a.country > b.country) {return 1;}
    if(a.city < b.city) {return -1;}
    if(a.city > b.city) {return 1;}
    return 0;
  });
  fs.writeFile(filePath, JSON.stringify(parsedData, null, 2), (err) => {
    if (err) throw err;
  });
});

function getDate() {
  const mtime = fs.statSync(numbeoFile).mtime;
  let month = (1 + mtime.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  let day = mtime.getDate().toString();
  day = day.length > 1? day : '0' + day;

  let year = mtime.getFullYear();
  return (day + '/' + month + '/' + year);
}
