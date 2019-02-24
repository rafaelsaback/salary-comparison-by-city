import React from 'react';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';

const { Option } = Select;

class InputCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLetter: 'A',
    };
  }

  onSearch = value => {
    if (value) {
      this.setState({ firstLetter: value[0].toUpperCase() });
    } else {
      this.setState({ firstLetter: 'A' });
    }
  };

  render() {
    const {
      cities,
      isError,
      fieldID,
      errorMessage,
      getFieldDecorator,
      onChange,
    } = this.props;
    const { firstLetter } = this.state;
    const filteredCities = cities.filter(city => city.name[0] === firstLetter);
    return (
      <Form.Item
        label={fieldID === 'srcCity' ? 'Source City' : 'Target City'}
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
            onSearch={this.onSearch}
            onChange={onChange}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {filteredCities.map(city => (
              <Option key={city.id} value={city.name}>
                {city.name}
              </Option>
            ))}
          </Select>
        )}
      </Form.Item>
    );
  }
}

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
