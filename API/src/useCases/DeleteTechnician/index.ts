import { SQLServerTechniciansRepository } from "../../repositories/implementations/SQLServerTechniciansRepository";
import { DeleteTechnicianController } from "./DeleteTechnicianController";
import { DeleteTechnicianUseCase } from "./DeleteTechnicianUseCase";

const sqlServerTechniciansRepository = new SQLServerTechniciansRepository

const deleteTechnicianUseCase = new DeleteTechnicianUseCase(
  sqlServerTechniciansRepository,
)

const deleteTechnicianController = new DeleteTechnicianController(
  deleteTechnicianUseCase
)

export { deleteTechnicianController, deleteTechnicianUseCase };

