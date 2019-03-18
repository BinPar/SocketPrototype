import getCookie from '../util/getCookie';
import getSocket from './getSocket';

const isServer = typeof window === 'undefined';

const getInitialProps = async (req, callback) => {
  const token = getCookie(req, 'github-token');
  const client = getSocket();
  await callback(client);
  if (isServer) {
    client.emit('quit');
  }
  return { token };
};

export default getInitialProps;
