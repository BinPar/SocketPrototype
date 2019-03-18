import React from 'react';
import PropTypes from 'prop-types';
import client from '../client';
import { Link } from '../routes';
import getCookie from '../util/getCookie';

const Home = ({ token }) => (
  <React.Fragment>
    <h1>Hola mundo</h1>
    <p>
      Tu token es
      <strong>{token}</strong>
    </p>
    <Link route="test" params={{ slug: 'hello-world' }}>
      <a>Otra</a>
    </Link>
  </React.Fragment>
);

Home.defaultProps = {
  token: '',
};

Home.propTypes = {
  token: PropTypes.string,
};

Home.getInitialProps = ({ req }) => {
  const token = getCookie(req, 'github-token');
  return { token };
};

export default Home;
