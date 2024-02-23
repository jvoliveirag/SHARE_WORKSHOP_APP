import { Technician } from "../../entities/Technician";
import { ITechniciansRepository } from "../../repositories/ITechniciansRepository";

export class GetAllTechniciansUseCase {

  constructor(
    private techniciansRepository: ITechniciansRepository,
  ) {}

  async execute(): Promise<Technician[]> {

    const technicians = await this.techniciansRepository.getAll()

    if(!technicians){
      throw new Error("No technicians found")
    }

    return technicians
  }
}