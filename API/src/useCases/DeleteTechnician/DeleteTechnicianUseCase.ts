import { ITechniciansRepository } from "../../repositories/ITechniciansRepository";

export class DeleteTechnicianUseCase {

  constructor(
    private techniciansRepository: ITechniciansRepository,
  ) {}

  async execute(email: string): Promise<void> {

    const existingTechnician = await this.techniciansRepository.findByEmail(email)

    if(!existingTechnician){
      throw new Error("Technician not found")
    }

    await this.techniciansRepository.delete(email)
  }
}