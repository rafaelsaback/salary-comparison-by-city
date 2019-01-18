import { InputNumber, Form } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

function InputSalary(props) {
  const currency = "BRL";
  return (
    <Form.Item label="Net salary">
      <InputNumber
        // defaultValue={0}
        min={0}
        step={100}
        style={{width: 200}}
        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\s?|(,*)/g, '')}
        onChange={onChange}
        placeholder={`0.00 ${currency}`}
      />
    </Form.Item>
  );
}

export default InputSalary;
