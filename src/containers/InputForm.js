import { connect } from 'react-redux';
import InputFormPres from '../components/InputForm';


const mapStateToProps = (state) => {
  return {
    cities: state.cities.map(item => item.cityCountry)
  };
}

export default connect(mapStateToProps)(InputFormPres);
