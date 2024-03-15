import { Router } from 'express';
import { createProfessorController } from '../useCases/CreateProfessor';

const createProfessor = Router()

createProfessor.post('/professor/cadastrar', (request, response) => {
  return createProfessorController.handle(request, response)
})

export { createProfessor };

