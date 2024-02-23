import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { SQLServerTechniciansRepository } from "../../repositories/implementations/SQLServerTechniciansRepository";
import { CreateTechnicianController } from "./CreateTechnicianController";
import { CreateTechnicianUseCase } from "./CreateTechnicianUseCase";

const sqlServerTechniciansRepository = new SQLServerTechniciansRepository
const mailtrapMailProvider = new MailtrapMailProvider

const createTechnicianUseCase = new CreateTechnicianUseCase(
  sqlServerTechniciansRepository,
  mailtrapMailProvider, 
)

const createTechnicianController = new CreateTechnicianController(
  createTechnicianUseCase
)

export { createTechnicianController, createTechnicianUseCase };

