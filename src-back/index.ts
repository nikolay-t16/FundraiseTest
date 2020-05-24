import Koa from 'koa';
import cors from 'koa2-cors';
import koaBody from 'koa-bodyparser';
import Router from 'koa-router';
// @ts-ignore
import mongo from 'koa-mongo';

import donate from "./controller/donate";

const startServer = async () => {
  const app = new Koa();
  const routes = new Router();
  routes.post('/donate', donate);
  app
    .use(mongo())
    .use(koaBody())
    .use(cors())
    .use(routes.routes())
    .use(routes.allowedMethods())
    .listen(3001);
};

startServer().then(() => console.log('Server running on port 3001')).catch((reason => console.log(reason)));
