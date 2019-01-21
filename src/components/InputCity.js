import {Select, Form} from 'antd';
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

function InputCity(props) {
  return (
    <Form.Item label="City">
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a city"
        optionFilterProp="children"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {props.cities.map(city =>
          <Option
            value={city.replace(/\s+/g, '-').toLowerCase()}
          >
            {city}
          </Option>
        )}
      </Select>
    </Form.Item>
  );
}
export default InputCity;
