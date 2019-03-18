import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

const Test = ({
  router: {
    query: { slug },
  },
}) => (
  <h1>
    Hola mundo
    {' '}
    <strong>{slug}</strong>
  </h1>
);

Test.propTypes = {
  router: PropTypes.shape().isRequired,
};

export default withRouter(Test);
