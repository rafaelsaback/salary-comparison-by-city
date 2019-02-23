import React from 'react';
import PropTypes from 'prop-types';
import { InputNumber, Form } from 'antd';

const InputSalary = props => {
  const { currency, isError, fieldID, errorMessage, getFieldDecorator } = props;
  return (
    <Form.Item
      label="Net salary"
      validateStatus={isError ? 'error' : ''}
      help={isError || ''}
    >
      {getFieldDecorator(fieldID, {
        rules: [{ required: true, message: errorMessage }],
      })(
        <InputNumber
          min={0}
          step={100}
          formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          placeholder={`0.00 ${currency}`}
        />
      )}
    </Form.Item>
  );
};

InputSalary.propTypes = {
  currency: PropTypes.string.isRequired,
  isError: PropTypes.arrayOf(PropTypes.string),
  fieldID: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  getFieldDecorator: PropTypes.func.isRequired,
};

InputSalary.defaultProps = {
  isError: undefined,
};

export default InputSalary;
