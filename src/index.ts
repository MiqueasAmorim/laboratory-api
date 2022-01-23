import 'dotenv/config';
import 'reflect-metadata';
import { app } from "./app";
import { createConnection } from './database/connection';

const SERVER_PORT = process.env.SERVER_PORT;

createConnection().then(connection => {
    console.log('Successful database connection');
    app.listen(SERVER_PORT, () => console.log(`Server started at http://localhost:${SERVER_PORT}`));
}).catch(error => console.log(error));
