import { InputNumber, Form } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

function InputSalary(props) {
  const currency = "BRL";
  return (
    <Form.Item 
      label="Net salary"
      validateStatus={props.isError ? 'error' : ''}
      help={props.isError || ''}
    >
      {props.getFieldDecorator(props.fieldID, {
        rules: [{ required: true, message: props.errorMessage }],
      })(
        <InputNumber
          min={0}
          step={100}
          style={{width: 200}}
          formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\s?|(,*)/g, '')}
          placeholder={`0.00 ${currency}`}
        />
      )}
    </Form.Item>
  );
}

export default InputSalary;
