import { Router } from 'express';
import { findTechnicianByEmailController } from '../useCases/FindTechnicianByEmail';

const findTechnicianByEmail = Router()

findTechnicianByEmail.get('/tecnico/:email', (request, response) => {
  return findTechnicianByEmailController.handle(request, response)
})

export { findTechnicianByEmail };

