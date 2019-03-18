import http from 'http';
import socketIO from 'socket.io';
import colors from 'colors';
import settings from './config/setting.mjs';
import logger from './util/logger.mjs';

const server = http.createServer();
const io = socketIO(server);
const { port } = settings;

io.on('connection', (socket) => {
  logger.info(`New connection from: ${colors.blue.bold(socket.client.id)}`);
  socket.on('disconnect', () => {
    logger.info(`Disconnected: ${colors.blue.bold(socket.client.id)}`);
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
