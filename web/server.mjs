import next from 'next';
import express from 'express';
import cookieParser from 'cookie-parser';
import colors from 'colors';
import setting from './config/setting.mjs';
import logger from './server/logger.mjs';
// eslint-disable-next-line import/extensions
import routes from './routes/index.js';

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);
const port = parseInt(process.env.PORT, 10) || setting.port;

app.prepare().then(() => {
  express()
    .use(cookieParser())
    .use(handler)
    .listen(port, () => {
      logger.info(colors.green(`Listening on port ${colors.yellow.bold(port)}`));
    });
});
