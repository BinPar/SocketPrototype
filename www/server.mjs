import next from 'next';
import express from 'express';
import cookieParser from 'cookie-parser';
import colors from 'colors';
import setting from './config/setting.mjs';
import routes from './routes/index';
import logger from './server/logger.mjs';

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  express()
    .use(cookieParser())
    .use(handler)
    .listen(setting.port, () => {
      logger.info(colors.green(`Listening on port ${colors.yellow.bold(setting.port)}`));
    });
});
