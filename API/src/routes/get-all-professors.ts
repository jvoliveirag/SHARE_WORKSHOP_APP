import { Router } from 'express';
import { getAllProfessorsController } from '../useCases/GetAllProfessors';

const getAllProfessors = Router()

getAllProfessors.get('/professors', (request, response) => {
  return getAllProfessorsController.handle(request, response)
})

export { getAllProfessors };

