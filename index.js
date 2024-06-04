import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
import postsRouter from './routes/posts.route';

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use('/api/posts/', postsRouter);

mongoose
  .connect(process.env.MONGOURL, { dbName: process.env.MONGODATABASE })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running at port 3000');
    });
  });
