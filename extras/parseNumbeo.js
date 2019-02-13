const fs = require('fs');
const readline = require('readline');

const filePath = './parsedData.json';
const numbeoFile = './numbeoData';
const parsedData = [];
const currencyCodes = JSON.parse(fs.readFileSync('currencyCodes.json'));
const rd = readline.createInterface({
  input: fs.createReadStream(numbeoFile),
});

const getDate = () => {
  const { mtime } = fs.statSync(numbeoFile);
  let month = (1 + mtime.getMonth()).toString();
  month = month.length > 1 ? month : `0${month}`;

  let day = mtime.getDate().toString();
  day = day.length > 1 ? day : `0${day}`;

  const year = mtime.getFullYear();
  return `${day}/${month}/${year}`;
};

let id = 0;

rd.on('line', line => {
  if (!Number.isNaN(parseFloat(line[0]))) {
    const parsedArray = line.split('\t');
    const parsedElement = {};

    // Cities from US have additionaly the State name
    if (parsedArray[1].split(',').length < 3) {
      parsedElement.country = parsedArray[1].split(',')[1].trim();
    } else {
      parsedElement.country = parsedArray[1].split(',')[2].trim();
    }
    if (parsedElement.country === 'Kosovo (Disputed Territory)') return false;
    id += 1;
    parsedElement.id = id;
    const [, cityCountry, costIndex] = parsedArray;
    [parsedElement.city] = cityCountry.split(',');
    parsedElement.cityCountry = cityCountry;
    [parsedElement.currencyCode] = currencyCodes
      .filter(currency => currency.country === parsedElement.country)
      .map(currency => currency.currencyCode);
    parsedElement.costIndex = costIndex;
    parsedElement.date = getDate();
    parsedData.push(parsedElement);
  }
  return true;
});

rd.on('close', () => {
  parsedData.sort((a, b) => {
    if (a.cityCountry < b.cityCountry) {
      return -1;
    }
    if (a.cityCountry > b.cityCountry) {
      return 1;
    }
    return 0;
  });
  fs.writeFile(filePath, JSON.stringify(parsedData, null, 2), err => {
    if (err) throw err;
  });
});
