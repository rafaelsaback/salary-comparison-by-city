import React from 'react';
import PropTypes from 'prop-types';

const Introduction = props => {
  const { datasetDate } = props;
  return (
    <div className="intro">
      <p>
        {`This salary converter compares the purchasing power of net salaries between `}
        {`different countries (it can also be used to compare salaries between two cities `}
        {`in the same country). The calculations are based on the cost index from `}
        <a
          rel="noreferrer noopener"
          label="Numbeo (opens in a new tab)"
          href="https://www.numbeo.com/cost-of-living/rankings_current.jsp"
          target="_blank"
        >
          Numbeo
        </a>
        {` `}
        {`and it also takes into account the currency exchange rate in case the cities `}
        {`have different currencies.`}
      </p>
      <p>The idea behind it is to use the cost of living index provided by
        <strong> Numbeo</strong> and also the currency exchange rate to calculate
        what would be an equivalent salary in the target location that would give
        the same purchasing power.</p>
      <p>
        {`Numbeo data was obtained on `}
        <strong>{datasetDate}</strong>
        {`.`}
      </p>
    </div>
  );
};

Introduction.propTypes = {
  datasetDate: PropTypes.string.isRequired,
};

export default Introduction;
