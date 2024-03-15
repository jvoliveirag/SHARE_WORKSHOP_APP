import { SQLServerProfessorsRepository } from "../../repositories/implementations/SQLServerProfessorsRepository";
import { FindProfessorByEmailController } from './FindProfessorByEmailController';
import { FindProfessorByEmailUseCase } from './FindProfessorByEmailUseCase';

const sqlServerProfessorsRepository = new SQLServerProfessorsRepository

const findProfessorByEmailUseCase = new FindProfessorByEmailUseCase(
  sqlServerProfessorsRepository,
)

const findProfessorByEmailController = new FindProfessorByEmailController(
  findProfessorByEmailUseCase
)

export { findProfessorByEmailController, findProfessorByEmailUseCase };

