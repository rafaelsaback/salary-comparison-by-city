import { connect } from 'react-redux';
import InputFormPres from '../components/InputForm';
import { setSrcLocation,
  setTgtLocation,
  setSrcSalary,
  calcTgtSalary,
  updateExchangeRate,
  showResults,
} from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (input) => {
      dispatch(setSrcLocation(input.srcCity));
      dispatch(setTgtLocation(input.tgtCity));
      dispatch(setSrcSalary(input.salary));
      dispatch(updateExchangeRate());
      dispatch(calcTgtSalary(input.salary));
      dispatch(showResults());
    }
  }
}

export default connect(null, mapDispatchToProps)(InputFormPres);
