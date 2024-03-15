import { SQLServerProfessorsRepository } from "../../repositories/implementations/SQLServerProfessorsRepository";
import { DeleteProfessorController } from "./DeleteProfessorController";
import { DeleteProfessorUseCase } from "./DeleteProfessorUseCase";

const sqlServerProfessorsRepository = new SQLServerProfessorsRepository

const deleteProfessorUseCase = new DeleteProfessorUseCase(
  sqlServerProfessorsRepository,
)

const deleteProfessorController = new DeleteProfessorController(
  deleteProfessorUseCase
)

export { deleteProfessorController, deleteProfessorUseCase };

