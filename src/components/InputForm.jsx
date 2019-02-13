import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';

import InputCity from './InputCity';
import InputSalary from './InputSalary';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    const { form, cities, srcCurrency } = this.props;

    // Only show error after a field is touched.
    const salaryError =
      form.isFieldTouched('salary') && form.getFieldError('salary') || false;
    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <InputCity
          fieldID="srcCity"
          isError={salaryError}
          getFieldDecorator={form.getFieldDecorator}
          errorMessage="Please select a source city!"
          cities={cities}
        />
        <InputSalary
          fieldID="salary"
          isError={salaryError}
          getFieldDecorator={form.getFieldDecorator}
          errorMessage="Please input a salary!"
          currency={srcCurrency}
        />
        <InputCity
          fieldID="tgtCity"
          isError={salaryError}
          getFieldDecorator={form.getFieldDecorator}
          errorMessage="Please select a target city!"
          cities={cities}
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
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  srcCurrency: PropTypes.string.isRequired,
  setInputFormStates: PropTypes.func.isRequired,
};

const WrappedInputForm = Form.create({ name: 'input_form' })(InputForm);
export default WrappedInputForm;
