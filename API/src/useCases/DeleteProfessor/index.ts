import { SQLServerProfessorsRepository } from "../../repositories/implementations/SQLServerProfessorsRepository";
import { DeleteProfessorUseCase } from "./DeletePofessorUseCase";
import { DeleteProfessorController } from "./DeleteProfessorController";

const sqlServerProfessorsRepository = new SQLServerProfessorsRepository

const deleteProfessorUseCase = new DeleteProfessorUseCase(
  sqlServerProfessorsRepository,
)

const deleteProfessorController = new DeleteProfessorController(
  deleteProfessorUseCase
)

export { deleteProfessorController, deleteProfessorUseCase };

