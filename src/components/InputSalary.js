import { InputNumber, Form } from 'antd';

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
        initialValue: 5000,
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
}

export default InputSalary;
