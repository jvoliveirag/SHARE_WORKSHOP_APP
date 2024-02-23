import { Request, Response } from 'express';
import { FindTechnicianByEmailUseCase } from './FindTechnicianByEmailUseCase';

export class FindTechnicianByEmailController {
  constructor(private findTechnicianByEmailUseCase: FindTechnicianByEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    try {
      const technician = await this.findTechnicianByEmailUseCase.execute(email);

      return response.status(200).json(technician)

    } catch (err) {
      console.error('Error: ', err);
      return response.status(404).json({
        error: err.message || 'Technician not found',
      });
    }
  }
}
