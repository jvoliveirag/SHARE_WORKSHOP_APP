import { Request, Response } from 'express';
import { UpdateTechnicianUseCase } from './UpdateTechnicianUseCase';

export class UpdateTechnicianController {
  constructor(private updateTechnicianUseCase: UpdateTechnicianUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;
    const { name, phoneNumber, address } = request.body;

    try {
      await this.updateTechnicianUseCase.execute(email, {
        name,
        phoneNumber,
        email,
        address,
      });

      return response.status(200).json({ message: 'Technician updated successfully.' });
    } catch (err) {
      console.error('Error: ', err);
      return response.status(404).json({
        error: err.message || 'Technician not found',
      });
    }
  }
}
