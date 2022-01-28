import 'dotenv/config';
import 'reflect-metadata';
import { app } from "./app";
import { createConnection } from './database/connection';

const PORT = process.env.PORT;

createConnection().then(connection => {
    console.log('Environment:', process.env.NODE_ENV)
    console.log('Successful database connection');
    app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
}).catch(error => console.log(error));
