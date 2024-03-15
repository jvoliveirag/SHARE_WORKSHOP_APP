import { Router } from 'express';
import { deleteProfessorController } from '../useCases/DeleteProfessor';

const deleteProfessor = Router()

deleteProfessor.delete('/professor/deletar', (request, response) => {
  return deleteProfessorController.handle(request, response)
})

export { deleteProfessor };

