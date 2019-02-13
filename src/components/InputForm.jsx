import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';

import InputCity from './InputCity';
import InputSalary from './InputSalary';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currency: '' };
  }

  componentDidMount() {
    // To disable submit button at the beginning.
    const { form } = this.props;
    form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form, setInputFormStates } = this.props;
    form.validateFields((err, input) => {
      if (!err) {
        setInputFormStates(input.srcCity, input.tgtCity, input.salary);
      }
    });
  };

  onCityChange = city => {
    const { cities } = this.props;
    const [currency] = cities
      .filter(item => item.name === city)
      .map(item => item.currency);
    this.setState({ currency });
  };

  render() {
    const { form, cities } = this.props;
    const { currency } = this.state;

    // Only show error after a field is touched.
    const salaryError =
      (form.isFieldTouched('salary') && form.getFieldError('salary')) || false;
    const citiesInfo = cities.map(city => {
      return { id: city.id, name: city.name };
    });
    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <InputCity
          fieldID="srcCity"
          isError={salaryError}
          getFieldDecorator={form.getFieldDecorator}
          errorMessage="Please select a source city!"
          cities={citiesInfo}
          onChange={this.onCityChange}
        />
        <InputSalary
          fieldID="salary"
          isError={salaryError}
          getFieldDecorator={form.getFieldDecorator}
          errorMessage="Please input a salary!"
          currency={currency}
        />
        <InputCity
          fieldID="tgtCity"
          isError={salaryError}
          getFieldDecorator={form.getFieldDecorator}
          errorMessage="Please select a target city!"
          cities={citiesInfo}
        />
        <Button type="primary" htmlType="submit">
          Calculate
        </Button>
      </Form>
    );
  }
}

InputForm.propTypes = {
  form: PropTypes.shape({
    isFieldTouched: PropTypes.func,
    getFieldError: PropTypes.func,
  }),
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
  setInputFormStates: PropTypes.func.isRequired,
};

const WrappedInputForm = Form.create({ name: 'input_form' })(InputForm);
export default WrappedInputForm;
