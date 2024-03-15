import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { SQLServerProfessorsRepository } from "../../repositories/implementations/SQLServerProfessorsRepository";
import { CreateProfessorController } from "./CreateProfessorController";
import { CreateProfessorUseCase } from "./CreateProfessorUseCase";

const sqlServerProfessorsRepository = new SQLServerProfessorsRepository
const mailtrapMailProvider = new MailtrapMailProvider

const createProfessorUseCase = new CreateProfessorUseCase(
  sqlServerProfessorsRepository,
  mailtrapMailProvider, 
)

const createProfessorController = new CreateProfessorController(
  createProfessorUseCase
)

export { createProfessorController, createProfessorUseCase };

