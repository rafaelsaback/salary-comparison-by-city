import React from 'react';
import PropTypes from 'prop-types';

const BASE_URL = 'https://www.google.com/search?q=';
const formatSalary = salary => {
  const strSalary = typeof salary === 'number' ? salary.toString() : salary;
  return strSalary.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const Result = ({ srcLocation, tgtLocation, salary }) => {
  const srcSalary = formatSalary(salary.source);
  const tgtSalary = formatSalary(
    salary.convTarget ? salary.convTarget : salary.target
  );
  const tgtCurrency = salary.convTarget
    ? tgtLocation.currency
    : srcLocation.currency;
  return (
    <>
      {!salary.convTarget && (
        <div className="warning">
          {`Sorry, we could not fetch the exchange rate. Hence, the salary in the `}
          {`target country is being shown in the same currency as in the source `}
          {`country. You can check the equivalent value on `}
          <a
            rel="noreferrer noopener"
            label="Google exchange rate"
            href={`${BASE_URL}+${salary.target}+${srcLocation.currency}+to+${
              tgtLocation.currency
            }`}
            target="_blank"
          >
            Google
          </a>
          {`.`}
        </div>
      )}
      <div className="results-ctnr">
        {`In ${srcLocation.city}, a net salary of `}
        <strong>{`${srcLocation.currency} ${srcSalary} `}</strong>
        gives you the same purchasing power that a net salary of
        <strong>{` ${tgtCurrency} ${tgtSalary} `}</strong>
        {`will give you in ${tgtLocation.city}.`}
      </div>
    </>
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
