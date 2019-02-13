import React from 'react';

import InputForm from './InputForm';
import Result from './Result';
import cities from '../../extras/parsedData.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      srcLocation: { city: '', currency: '', costIndex: null },
      tgtLocation: { city: '', currency: '', costIndex: null },
      salary: { source: null, target: null, convTarget: null },
      exchangeRateCache: [],
      exchangeRate: null,
      showResults: false,
      isLoading: false,
    };
  }

  setInputFormStates = (srcCity, tgtCity, srcSalary) => {
    this.setState({ isLoading: true, showResults: false });
    const srcLocation = this.getLocationInfo(srcCity);
    const tgtLocation = this.getLocationInfo(tgtCity);
    this.setState(prevState => {
      return {
        srcLocation,
        tgtLocation,
        salary: { ...prevState.salary, source: srcSalary },
      };
    }, this.fetchExchangeRate);
  };

  getLocationInfo = filterCity => {
    return cities
      .filter(city => city.cityCountry === filterCity)
      .map(city => {
        return {
          city: city.cityCountry,
          currency: city.currencyCode,
          costIndex: parseFloat(city.costIndex),
        };
      })[0];
  };

  fetchExchangeRate = () => {
    const { srcLocation, tgtLocation, exchangeRateCache } = this.state;
    const srcCurrency = srcLocation.currency;
    const tgtCurrency = tgtLocation.currency;
    let exchangeRate = exchangeRateCache[`${srcCurrency}_${tgtCurrency}`];

    if (exchangeRate) {
      this.setState({ exchangeRate }, this.calcTgtSalary);
    } else {
      const baseUrl = 'https://api.exchangeratesapi.io/latest?';
      const url = `${baseUrl}base=${srcCurrency}&symbols=${tgtCurrency}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          exchangeRate = data.rates[tgtCurrency];
          const newRateObj = {};
          newRateObj[`${srcCurrency}_${tgtCurrency}`] = exchangeRate;
          newRateObj[`${tgtCurrency}_${srcCurrency}`] =
            1 / data.rates[tgtCurrency];
          Object.assign(exchangeRateCache, newRateObj);
          this.setState(
            { exchangeRate, exchangeRateCache },
            this.calcTgtSalary
          );
        });
    }
  };

  calcTgtSalary = () => {
    const { srcLocation, tgtLocation, salary, exchangeRate } = this.state;
    const tgtSalary =
      salary.source * (tgtLocation.costIndex / srcLocation.costIndex);
    const convTgtSalary = tgtSalary * exchangeRate;
    salary.target = Math.round(tgtSalary);
    salary.convTarget = Math.round(convTgtSalary);
    this.setState({ salary, showResults: true, isLoading: false });
  };

  render() {
    const {
      srcLocation,
      tgtLocation,
      salary,
      showResults,
      isLoading,
    } = this.state;
    const citiesInfo = cities.map(item => {
      return {
        id: item.id,
        name: item.cityCountry,
        currency: item.currencyCode,
      };
    });
    return (
      <div>
        <InputForm
          cities={citiesInfo}
          srcCurrency={srcLocation.currency}
          setInputFormStates={this.setInputFormStates}
        />
        {showResults && (
          <Result
            srcLocation={srcLocation}
            tgtLocation={tgtLocation}
            salary={salary}
          />
        )}
        {isLoading && <div> Loading ... </div>}
      </div>
    );
  }
}

export default App;
