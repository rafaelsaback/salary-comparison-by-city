import React from 'react';
import InputForm from '../containers/InputForm';
import Result from './Result';

class App extends React.Component {
  render() {
    return (
      <div>
        <InputForm />
        <Result />
      </div>
    )
  }
}

export default App;
