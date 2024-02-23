import { CreateTechnicianRequestDTO } from '../../dtos/CreateTechnicianDTO';
import { ITechniciansRepository } from '../../repositories/ITechniciansRepository';

export class UpdateTechnicianUseCase {

  constructor(
    private techniciansRepository: ITechniciansRepository,
  ) {}

  async execute(email: string, data: CreateTechnicianRequestDTO): Promise<void> {
    const existingTechnician = await this.techniciansRepository.findByEmail(email);

    if (!existingTechnician) {
      throw new Error('Technician not found');
    }

    const updatedTechnician = { ...existingTechnician, ...data };

    await this.techniciansRepository.update(email, updatedTechnician);
  }
}
