import express from 'express';
import postsRouter from './routes/posts.route';

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use('/api/posts/', postsRouter);

app.listen(3000, () => {
  console.log('Server running at port 3000');
});
