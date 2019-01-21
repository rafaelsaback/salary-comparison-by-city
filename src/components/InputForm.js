import {Form, Button} from 'antd';
import InputCity from './InputCity';
import InputSalary from './InputSalary';


function handleSubmit() {
  e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
}

function InputForm(props) {
  return (
    <Form layout="vertical" onSubmit={handleSubmit}>
      <InputCity cities={props.cities} />
      <InputSalary />
      <InputCity cities={props.cities} />
      <Button 
        type="primary"
        htmlType="submit"
      >Calculate</Button>
    </Form>
  );
}

export default InputForm;
