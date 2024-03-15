import { CreateProfessorRequestDTO } from '../../dtos/CreateProfessorDTO';
import { IProfessorsRepository } from '../../repositories/IProfessorsRepository';

export class UpdateProfessorUseCase {

  constructor(
    private professorsRepository: IProfessorsRepository,
  ) {}

  async execute(email: string, data: CreateProfessorRequestDTO): Promise<void> {
    const existingProfessor = await this.professorsRepository.findByEmail(email);

    if (!existingProfessor) {
      throw new Error('Professor not found');
    }

    const updatedProfessor = { ...existingProfessor, ...data };

    await this.professorsRepository.update(email, updatedProfessor);
  }
}
