import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import createError from 'http-errors';
import {sendJsonErrors} from './helpers/responseHandler';

import acticlesRouter from './routes/articles.route';

const app: Express = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: 'Express + TypeScript Server'});
});


app.use('/api/v1/articles',acticlesRouter);

app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler --> tất cả lỗi khác rơi vào đây
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.log('<<< Error Handler Stack >>>', err.stack);
  //console.error('<< Middleware Error >>', err);
  
  sendJsonErrors(res, err);
});
//Xuất app ra cho server.ts
export default app