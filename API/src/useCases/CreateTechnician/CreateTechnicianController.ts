import { Request, Response } from 'express';
import { CreateTechnicianUseCase } from './CreateTechnicianUseCase';

export class CreateTechnicianController {
  constructor(
    private createTechnicianUseCase: CreateTechnicianUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, phoneNumber, email, address } = request.body

    try {

      if (!name || !email || !phoneNumber || !address) {
        return response.status(400).json({ error: 'All fields required' });
      }

      await this.createTechnicianUseCase.execute({
        name,
        phoneNumber,
        email,
        address
      })

      return response.status(201).json('Technician succesfully created.').send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}