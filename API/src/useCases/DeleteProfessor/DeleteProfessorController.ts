import { Request, Response } from 'express';
import { DeleteProfessorUseCase } from './DeletePofessorUseCase';

export class DeleteProfessorController {
  constructor(
    private deleteProfessorUseCase: DeleteProfessorUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body

    try {
      await this.deleteProfessorUseCase.execute(email)

      return response.status(201).json('Professor succesfully deleted.').send()
    } catch (err) {
      console.error('Error: ', err);
      return response.status(404).json({
        error: err.message || 'Professor not found'
      })
    }
  }
}