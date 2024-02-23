import { Request, Response } from 'express';
import { GetAllTechniciansUseCase } from './GetAllTechniciansUseCase';

export class GetAllTechniciansController {
  constructor(private getAllTechniciansUseCase: GetAllTechniciansUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const technicians = await this.getAllTechniciansUseCase.execute();

      return response.status(200).json(technicians)

    } catch (err) {
      console.error('Error: ', err);
      return response.status(404).json({
        error: err.message || 'No technicians found',
      });
    }
  }
}
