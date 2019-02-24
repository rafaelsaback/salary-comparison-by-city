import React from 'react';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';

const { Option } = Select;

class InputCity extends React.Component {
  constructor(props) {
    super(props);
    const { cities } = this.props;
    this.state = {
      filteredCities: cities.filter(city => city.name[0] === 'A'),
    };
  }

  onSearch = value => {
    const { cities } = this.props;
    let filteredCities;
    if (value.length === 0) {
      filteredCities = cities.filter(city => city.name[0] === 'A');
    } else if (value.length === 1) {
      filteredCities = cities.filter(
        city => city.name[0] === value[0].toUpperCase()
      );
    } else {
      filteredCities = cities;
    }

    this.setState({ filteredCities });
  };

  render() {
    const {
      isError,
      fieldID,
      errorMessage,
      getFieldDecorator,
      onChange,
    } = this.props;
    const { filteredCities } = this.state;
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
