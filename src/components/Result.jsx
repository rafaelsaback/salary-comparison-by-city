import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ srcLocation, tgtLocation, salary }) => {
  return (
    <div className="results-ctn">
      {`In ${srcLocation.city}, a net salary of `}
      <strong>{`${srcLocation.currency} ${salary.source} `}</strong>
      will give you the same purchasing power than a net salary of
      <strong>{` ${tgtLocation.currency} ${salary.convTarget} `}</strong>
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
