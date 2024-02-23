import { Router } from 'express';
import { getAllTechniciansController } from '../useCases/GetAllTechnicians';

const getAllTechnicians = Router()

getAllTechnicians.get('/tecnicos', (request, response) => {
  return getAllTechniciansController.handle(request, response)
})

export { getAllTechnicians };

