import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import router from './router';
import session from 'express-session';
import path from 'path';

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: {
            path: '/',
            httpOnly: true,
            secure: false,
            sameSite: true
        }
    })
);

app.use(
    cors({
        origin: process.env.FRONT_LOCAL_URL,
        credentials: true,
        optionsSuccessStatus: 200
    })
);

app.use('/', router);
app.listen(process.env.PORT_BACKEND, () =>
    console.log(`server is running at ${process.env.BACK_LOCAL_URL}`)
);
