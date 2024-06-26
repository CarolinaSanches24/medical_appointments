import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import { v1Router } from '../router/v1Router';

export const app: Express = express();

const options = {
    threshold: '1kb',
    filter: (req: Request, res: Response) => {
        if (res.getHeader('x-no-compression')) return false;
        if (res.statusCode === 304) return false;
        let type = res.getHeader('Content-Type') as string[];
        if (type && type.indexOf('text/event-stream') > -1) return false;
        return compression.filter(req, res);
    },
};

app.use(compression(options));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', v1Router);

app.use((err: any, req: Request, res: Response, next: any) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});