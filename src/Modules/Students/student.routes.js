import { Router } from 'express';
// import validate from 'express-validation';

import * as studentController from './students.controller';

const routes = new Router();

routes.get('/', studentController.getStudentsList);
routes.post('/', studentController.createStudent);
routes.get('/:id', studentController.getStudentById);

// routes.get('/:id', postController.getPostById);
// routes.get('/', postController.getPostsList);
routes.patch('/:id', studentController.updateStudent);
// routes.delete('/:id', authJwt, postController.deletePost);

export default routes;
