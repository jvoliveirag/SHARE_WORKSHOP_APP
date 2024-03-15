import { IProfessorsRepository } from "../../repositories/IProfessorsRepository";

export class DeleteProfessorUseCase {

  constructor(
    private professorsRepository: IProfessorsRepository,
  ) {}

  async execute(email: string): Promise<void> {

    const existingProfessor = await this.professorsRepository.findByEmail(email)

    if(!existingProfessor){
      throw new Error("Professor not found")
    }

    await this.professorsRepository.delete(email)
  }
}