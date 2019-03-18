import React from 'react';
import PropTypes from 'prop-types';
import getInitialProps from '../client/getInitialProps';
import { Link } from '../routes';

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

Home.getInitialProps = ({ req }) => getInitialProps(req, async (socket) => {});

export default Home;
