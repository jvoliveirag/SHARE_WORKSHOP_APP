import { SQLServerTechniciansRepository } from "../../repositories/implementations/SQLServerTechniciansRepository";
import { UpdateTechnicianController } from "./UpdateTechnicianController";
import { UpdateTechnicianUseCase } from "./UpdateTechnicianUseCase";

const sqlServerTechniciansRepository = new SQLServerTechniciansRepository

const updateTechnicianUseCase = new UpdateTechnicianUseCase(
  sqlServerTechniciansRepository,
)

const updatTechnicianController = new UpdateTechnicianController(
  updateTechnicianUseCase
)

export { updatTechnicianController, updateTechnicianUseCase };

