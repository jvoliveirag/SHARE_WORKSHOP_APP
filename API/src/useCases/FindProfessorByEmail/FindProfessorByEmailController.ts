import { Request, Response } from 'express';
import { FindProfessorByEmailUseCase } from './FindProfessorByEmailUseCase';

export class FindProfessorByEmailController {
  constructor(private findProfessorByEmailUseCase: FindProfessorByEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    try {
      const professor = await this.findProfessorByEmailUseCase.execute(email);

      return response.status(200).json(professor)

    } catch (err) {
      console.error('Error: ', err);
      return response.status(404).json({
        error: err.message || 'Professor not found',
      });
    }
  }
}
