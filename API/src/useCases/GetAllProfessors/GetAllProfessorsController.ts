import { Request, Response } from 'express';
import { GetAllProfessorsUseCase } from './GetAllProfessorsUseCase';

export class GetAllProfessorsController {
  constructor(private getAllProfessorsUseCase: GetAllProfessorsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const professors = await this.getAllProfessorsUseCase.execute();

      return response.status(200).json(professors)

    } catch (err) {
      console.error('Error: ', err);
      return response.status(404).json({
        error: err.message || 'No professors found',
      });
    }
  }
}
