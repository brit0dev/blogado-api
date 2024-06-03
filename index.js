import express from 'express';

const app = express();

//Middlewares
app.use(express.json());

app.listen(3000, () => {
  console.log('Server running at port 3000');
});
