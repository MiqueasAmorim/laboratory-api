import express, { Request, Response } from 'express';
// import routes from './routers'

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello World!');
});

// routes.forEach(router => {
//     app.use(router);
// })

export { app }