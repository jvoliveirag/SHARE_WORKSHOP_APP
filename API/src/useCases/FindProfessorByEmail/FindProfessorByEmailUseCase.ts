import { Professor } from "../../entities/Professor";
import { IProfessorsRepository } from "../../repositories/IProfessorsRepository";

export class FindProfessorByEmailUseCase {

  constructor(
    private professorsRepository: IProfessorsRepository,
  ) {}

  async execute(email: string): Promise<Professor> {

    const existingProfessor = await this.professorsRepository.findByEmail(email)

    if(!existingProfessor){
      throw new Error("Professor not found")
    }

    return existingProfessor
  }
}