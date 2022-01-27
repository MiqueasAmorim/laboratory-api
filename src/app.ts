import express, { Request, Response } from 'express';
import routes from './routers'

const app = express();

app.use(express.json());

routes.forEach(router => {
    app.use(router);
})

export { app }