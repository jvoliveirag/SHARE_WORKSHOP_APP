import { Request, Response } from 'express';
import { CreateProfessorUseCase } from './CreateProfessorUseCase';

export class CreateProfessorController {
  constructor(
    private createProfessorUseCase: CreateProfessorUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, phoneNumber, email, address } = request.body

    try {

      if (!name || !email || !phoneNumber || !address) {
        return response.status(400).json({ error: 'All fields required' });
      }

      await this.createProfessorUseCase.execute({
        name,
        phoneNumber,
        email,
        address
      })

      return response.status(201).json('Professor succesfully created.').send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}