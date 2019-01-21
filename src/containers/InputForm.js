import { connect } from 'react-redux';
import InputFormPres from '../components/InputForm';
import { setSrcLocation } from '../actions';
import { setTgtLocation } from '../actions';
import { setSrcSalary } from '../actions';


const mapStateToProps = (state) => {
  return {
    cities: state.cities.map(item => item.cityCountry)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (input) => {
      dispatch(setSrcLocation(input.srcCity));
      dispatch(setTgtLocation(input.tgtCity));
      dispatch(setSrcSalary(input.salary));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputFormPres);
