import { Professor } from "../../entities/Professor";
import { IProfessorsRepository } from "../../repositories/IProfessorsRepository";

export class GetAllProfessorsUseCase {

  constructor(
    private professorsRepository: IProfessorsRepository,
  ) {}

  async execute(): Promise<Professor[]> {

    const professors = await this.professorsRepository.getAll()

    if(!professors){
      throw new Error("No professors found")
    }

    return professors
  }
}