import React from 'react';
import PropTypes from 'prop-types';

const formatSalary = salary => {
  const strSalary = typeof salary === 'number' ? salary.toString() : salary;
  return strSalary.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const Result = ({ srcLocation, tgtLocation, salary }) => {
  const srcSalary = formatSalary(salary.source);
  const convTgtSalary = formatSalary(salary.convTarget);
  return (
    <div className="results-ctnr">
      {`In ${srcLocation.city}, a net salary of `}
      <strong>{`${srcLocation.currency} ${srcSalary} `}</strong>
      will give you the same purchasing power than a net salary of
      <strong>{` ${tgtLocation.currency} ${convTgtSalary} `}</strong>
      {`in ${tgtLocation.city}.`}
    </div>
  );
};

Result.propTypes = {
  srcLocation: PropTypes.shape({
    city: PropTypes.string,
    currency: PropTypes.string,
    costIndex: PropTypes.number,
  }).isRequired,
  tgtLocation: PropTypes.shape({
    city: PropTypes.string,
    currency: PropTypes.string,
    costIndex: PropTypes.number,
  }).isRequired,
  salary: PropTypes.shape({
    source: PropTypes.number,
    target: PropTypes.number,
    convTarget: PropTypes.number,
  }).isRequired,
};

export default Result;
