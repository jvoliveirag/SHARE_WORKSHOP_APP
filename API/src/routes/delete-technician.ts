import { Router } from 'express';
import { deleteTechnicianController } from '../useCases/DeleteTechnician';

const deleteTechnician = Router()

deleteTechnician.delete('/tecnico/deletar', (request, response) => {
  return deleteTechnicianController.handle(request, response)
})

export { deleteTechnician };

