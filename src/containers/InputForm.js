import { connect } from 'react-redux';
import InputFormPres from '../components/InputForm';
import { setSrcLocation } from '../actions';
import { setTgtLocation } from '../actions';
import { setSrcSalary } from '../actions';
import { calcTgtSalary } from '../actions';
import { updateExchangeRate } from '../actions';


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (input) => {
      dispatch(setSrcLocation(input.srcCity));
      dispatch(setTgtLocation(input.tgtCity));
      dispatch(setSrcSalary(input.salary));
      dispatch(updateExchangeRate());
      dispatch(calcTgtSalary(input.salary));
    }
  }
}

export default connect(null, mapDispatchToProps)(InputFormPres);
