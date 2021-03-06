import http from 'http';
import socketIO from 'socket.io';
import settings from './config/setting.mjs';
import colors from 'colors';
import logger from './util/logger.mjs';

const server = http.createServer();
const io = socketIO(server);
const { port } = settings;

io.on('connection', (socket) => {
  logger.info(`New connection from: ${colors.blue.bold(socket.client.id)}`);
});

server
  .on('listening', () => {
    logger.info(colors.green(`Listening on port ${colors.yellow.bold(port)}`));
  })
  .on('error', (err) => {
    logger.error(colors.Red(`Error listening on port ${colors.yellow.bold(port)}:`, err));
  })
  .listen(port);
