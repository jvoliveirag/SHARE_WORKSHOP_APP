import { SQLServerProfessorsRepository } from "../../repositories/implementations/SQLServerProfessorsRepository";
import { UpdateProfessorController } from "./UpdateProfessorController";
import { UpdateProfessorUseCase } from "./UpdateProfessorUseCase";

const sqlServerProfessorsRepository = new SQLServerProfessorsRepository

const updateProfessorUseCase = new UpdateProfessorUseCase(
  sqlServerProfessorsRepository,
)

const updatProfessorController = new UpdateProfessorController(
  updateProfessorUseCase
)

export { updatProfessorController, updateProfessorUseCase };

