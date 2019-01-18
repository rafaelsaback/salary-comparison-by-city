import {Form, Select} from 'antd';
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
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value="warsaw">Warsaw</Option>
    <Option value="krakow">Krakow</Option>
    <Option value="rio-de-janeiro">Rio de Janeiro</Option>
  </Select>
</Form.Item>
  );
}
export default InputCity;
