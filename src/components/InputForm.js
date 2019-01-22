import React from 'react';
import {Form, Button} from 'antd';
import InputCity from './InputCity';
import InputSalary from './InputSalary';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit(e, onSubmit) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values);
      }
    });
  }

  render() {
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = this.props.form;

     // Only show error after a field is touched.
    const salaryError = isFieldTouched('salary') && getFieldError('salary');
    return (
      <Form layout="vertical" onSubmit={(e) => 
        this.handleSubmit(e, this.props.onSubmit) 
        }>
        <InputCity
          fieldID="srcCity"
          getFieldDecorator={getFieldDecorator}
          errorMessage="Please select a source city!"
        />
        <InputSalary
          fieldID="salary"
          isError={salaryError}
          getFieldDecorator={getFieldDecorator}
          errorMessage="Please input a salary!"
        />
        <InputCity
          fieldID="tgtCity"
          getFieldDecorator={getFieldDecorator}
          errorMessage="Please select a target city!"
        />
        <Button 
          type="primary"
          htmlType="submit"
        >Calculate</Button>
      </Form>
    );
  }
}

const WrappedInputForm = Form.create({ name: 'input_form' })(InputForm);
export default WrappedInputForm;
