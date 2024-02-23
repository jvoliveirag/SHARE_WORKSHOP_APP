import { Router } from 'express';
import { createTechnicianController } from '../useCases/CreateTechnician';

const createTechnician = Router()

createTechnician.post('/tecnico/cadastrar', (request, response) => {
  return createTechnicianController.handle(request, response)
})

export { createTechnician };

