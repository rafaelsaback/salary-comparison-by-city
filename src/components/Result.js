import { connect } from 'react-redux';

function Result({srcSalary, srcCurrency, srcCity, tgtSalary, tgtConvSalary, tgtCurrency, tgtCity, showResults}) {
  return (showResults ?
    (
      <div className="results-ctn">
          In {srcCity}, a net salary of <strong> {srcCurrency} {srcSalary}</strong> will give you the same purchasing power than a net salary of <strong> {tgtCurrency} {tgtConvSalary}</strong> in {tgtCity}.
      </div>
    ) :
    null
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
    showResults: state.showResults,
  };
}

export default connect(mapStateToProps)(Result);
