import io from 'socket.io-client';
import settings from '../config/setting.mjs';

const isServer = typeof window === 'undefined';

let globalSocket;

if (!isServer) {
  globalSocket = io(settings.server, {
    autoConnect: false,
    forceNew: isServer,
  });
  globalSocket.connect();
}

const getSocket = () => {
  if (globalSocket) {
    return globalSocket;
  }
  return io(settings.server, {
    forceNew: isServer,
  });
};

export default getSocket;
