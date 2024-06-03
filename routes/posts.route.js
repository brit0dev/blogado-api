import express from 'express';

const postsRouter = express.Router();
//Example
const postsController = {
  list: () => {},
  show: () => {},
  create: () => {},
  update: () => {},
  delete: () => {},
};

postsRouter.get('/', postsController.list);
postsRouter.get('/:id', postsController.show);
postsRouter.post('/', postsController.create);
postsRouter.delete('/:id', postsController.delete);
postsRouter.update('/:id', postsController.update);

export default postsRouter;
