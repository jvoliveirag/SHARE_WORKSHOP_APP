import { Request, Response } from 'express';
import { UpdateProfessorUseCase } from './UpdateProfessorUseCase';

export class UpdateProfessorController {
  constructor(private updateProfessorUseCase: UpdateProfessorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;
    const { name, phoneNumber, address } = request.body;

    try {
      await this.updateProfessorUseCase.execute(email, {
        name,
        phoneNumber,
        email,
        address,
      });

      return response.status(200).json({ message: 'Professor updated successfully.' });
    } catch (err) {
      console.error('Error: ', err);
      return response.status(404).json({
        error: err.message || 'Professor not found',
      });
    }
  }
}
