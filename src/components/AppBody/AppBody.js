import React from 'react';
import PropTypes from 'prop-types';

const AppBody = ({ text }) => (
  <div>{text}</div>
);

AppBody.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AppBody;
