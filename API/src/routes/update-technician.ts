import { Router } from 'express';
import { updatTechnicianController } from '../useCases/UpdateTechnician';

const updateTechnician = Router()

updateTechnician.put('/tecnico/editar/:email', (request, response) => {
  return updatTechnicianController.handle(request, response)
})

export { updateTechnician };

