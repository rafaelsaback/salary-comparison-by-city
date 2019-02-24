import React from 'react';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';

const { Option } = Select;

const InputCity = props => {
  const {
    cities,
    isError,
    fieldID,
    errorMessage,
    getFieldDecorator,
    onChange,
  } = props;
  return (
    <Form.Item
      label="City"
      validateStatus={isError ? 'error' : ''}
      help={isError || ''}
    >
      {getFieldDecorator(fieldID, {
        rules: [{ required: true, message: errorMessage }],
      })(
        <Select
          showSearch
          placeholder="Select a city"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {cities.map(city => (
            <Option key={city.id} value={city.name}>
              {city.name}
            </Option>
          ))}
        </Select>
      )}
    </Form.Item>
  );
};

InputCity.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  isError: PropTypes.arrayOf(PropTypes.string),
  fieldID: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  getFieldDecorator: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

InputCity.defaultProps = {
  onChange: () => {},
  isError: undefined,
};

export default InputCity;
