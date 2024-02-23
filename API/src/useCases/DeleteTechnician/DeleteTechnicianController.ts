import { Request, Response } from 'express';
import { DeleteTechnicianUseCase } from './DeleteTechnicianUseCase';

export class DeleteTechnicianController {
  constructor(
    private deleteTechnicianUseCase: DeleteTechnicianUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body

    try {
      await this.deleteTechnicianUseCase.execute(email)

      return response.status(201).json('Technician succesfully deleted.').send()
    } catch (err) {
      console.error('Error: ', err);
      return response.status(404).json({
        error: err.message || 'Technician not found'
      })
    }
  }
}