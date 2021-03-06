import React from 'react';

import Introduction from './Introduction';
import InputForm from './InputForm';
import Result from './Result';
import Loading from './Loading';
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
    }, this.getExchangeRate);
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

  getExchangeRate = () => {
    const { srcLocation, tgtLocation, exchangeRateCache } = this.state;
    const srcCurrency = srcLocation.currency;
    const tgtCurrency = tgtLocation.currency;

    if (srcCurrency === tgtCurrency) {
      this.setState({ exchangeRate: 1 }, this.calcTgtSalary);
      return;
    }

    // Check if an exchange rate has already been fetched
    const exchangeRate = exchangeRateCache[`${srcCurrency}_${tgtCurrency}`];

    if (exchangeRate) {
      this.setState({ exchangeRate }, this.calcTgtSalary);
    } else {
      this.fetchExchangeRate(srcCurrency, tgtCurrency);
    }
  };

  fetchExchangeRate = (srcCurrency, tgtCurrency) => {
    const { exchangeRateCache } = this.state;
    const baseUrl = 'https://api.exchangeratesapi.io/latest?';
    const url = `${baseUrl}base=${srcCurrency}&symbols=${tgtCurrency}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.rates[tgtCurrency];
        const newRateObj = {};
        newRateObj[`${srcCurrency}_${tgtCurrency}`] = exchangeRate;
        newRateObj[`${tgtCurrency}_${srcCurrency}`] = 1 / exchangeRate;
        Object.assign(exchangeRateCache, newRateObj);
        this.setState(
          { exchangeRate, exchangeRateCache },
          this.calcTgtSalary
        );
      })
      .catch(() =>
        this.setState({ exchangeRate: undefined }, this.calcTgtSalary)
      );
  };

  calcTgtSalary = () => {
    const { srcLocation, tgtLocation, salary, exchangeRate } = this.state;
    const tgtSalary =
      salary.source * (tgtLocation.costIndex / srcLocation.costIndex);
    salary.target = Math.round(tgtSalary);
    if (exchangeRate) {
      const convTgtSalary = tgtSalary * exchangeRate;
      salary.convTarget = Math.round(convTgtSalary);
    } else {
      salary.convTarget = undefined;
    }
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
    const datasetDate = cities[0].date;
    return (
      <div>
        <Introduction datasetDate={datasetDate} />
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
        {isLoading && <Loading />}
      </div>
    );
  }
}

export default App;
