// const fs = require('fs');
// const cities = JSON.parse(fs.readFileSync("../../extras/parsedData.json"));
import cities from '../../extras/parsedData.json';

function citiesReducer(state = cities, action) {
  switch(action.type) {
    default: return state;
  }
}

export default citiesReducer;
