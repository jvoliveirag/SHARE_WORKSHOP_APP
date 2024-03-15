import { Router } from 'express';
import { findProfessorByEmailController } from '../useCases/FindProfessorByEmail';

const findProfessorByEmail = Router()

findProfessorByEmail.get('/professor/:email', (request, response) => {
  return findProfessorByEmailController.handle(request, response)
})

export { findProfessorByEmail };

