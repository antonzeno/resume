import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
        exposedHeaders: ['Content-Disposition']
    })
);
app.use(compression());
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
