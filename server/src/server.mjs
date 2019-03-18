import http from 'http';
import socketIO from 'socket.io';
import colors from 'colors';
import settings from './config/setting.mjs';
import logger from './util/logger.mjs';

const server = http.createServer();
const io = socketIO(server);
const { port } = settings;
let totalConnections = 0;

io.on('connection', (socket) => {
  totalConnections += 1;
  logger.info(
    `${colors.green.bold(totalConnections)} New connection from: ${colors.blue.bold(
      socket.client.id,
    )}`,
  );
  socket.on('disconnect', () => {
    totalConnections -= 1;
    logger.info(
      `${colors.green.red(totalConnections)} Disconnected: ${colors.blue.bold(socket.client.id)}`,
    );
  });
  socket.on('quit', () => {
    socket.disconnect(true);
  });
  socket.on('listPools', () => {
    logger.info('List requested');
    socket.emit('pools', ['Certamen 2019', 'Otro', 'Ejemplo']);
  });
});

server
  .on('listening', () => {
    logger.info(colors.green(`Listening on port ${colors.yellow.bold(port)}`));
  })
  .on('error', (err) => {
    logger.error(colors.Red(`Error listening on port ${colors.yellow.bold(port)}:`, err));
  })
  .listen(port);
