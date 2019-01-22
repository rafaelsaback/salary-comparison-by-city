import { connect } from 'react-redux';

function Result({srcSalary, srcCurrency, srcCity, tgtSalary, tgtConvSalary, tgtCurrency, tgtCity}) {
  return (
    <p>
      A net salary of <strong> {srcCurrency} {srcSalary} in {srcCity} </strong> is equivalent to a net salary of <strong> {tgtCurrency} {tgtConvSalary} in {tgtCity} </strong>.
    </p>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    srcSalary: state.salary.srcSalary,
    srcCurrency: state.srcLocation.currency,
    srcCity: state.srcLocation.city,
    tgtSalary: state.salary.tgtSalary,
    tgtConvSalary: state.salary.tgtConvSalary,
    tgtCurrency: state.tgtLocation.currency,
    tgtCity: state.tgtLocation.city,
  };
}

export default connect(mapStateToProps)(Result);
// export default Result;
