import React from 'react';
import PropTypes from 'prop-types';

const Introduction = props => {
  const { datasetDate } = props;
  return (
    <div className="intro">
      <p>
        {`This calculator compares net salaries between diferent cities that can `}
        {`also be located in different countries. The calculations are based on `}
        {`the cost index from `}
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
