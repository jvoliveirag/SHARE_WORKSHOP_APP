import { Technician } from "../../entities/Technician";
import { ITechniciansRepository } from "../../repositories/ITechniciansRepository";

export class FindTechnicianByEmailUseCase {

  constructor(
    private techniciansRepository: ITechniciansRepository,
  ) {}

  async execute(email: string): Promise<Technician> {

    const existingTechnician = await this.techniciansRepository.findByEmail(email)

    if(!existingTechnician){
      throw new Error("Technician not found")
    }

    return existingTechnician
  }
}