import {Select, Form} from 'antd';
const Option = Select.Option;

function InputCity(props) {
  return (
    <Form.Item
      label="City"
      validateStatus={props.isError ? 'error' : ''}
      help={props.isError || ''}
    >
      {props.getFieldDecorator(props.fieldID, {
        rules: [{ required: true, message: props.errorMessage }],
      })(
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a city"
        optionFilterProp="children"
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {props.cities.map(city =>
          <Option
            value={city}
          >
            {city}
          </Option>
        )}
      </Select>
      )}
    </Form.Item>
  );
}
export default InputCity;
