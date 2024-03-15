import { Router } from 'express';
import { updatProfessorController } from '../useCases/UpdateProfessor';

const updateProfessor = Router()

updateProfessor.put('/professor/editar/:email', (request, response) => {
  return updatProfessorController.handle(request, response)
})

export { updateProfessor };

