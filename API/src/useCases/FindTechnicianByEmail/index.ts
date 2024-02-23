import { SQLServerTechniciansRepository } from "../../repositories/implementations/SQLServerTechniciansRepository";
import { FindTechnicianByEmailController } from './FindTechnicianByEmailController';
import { FindTechnicianByEmailUseCase } from './FindTechnicianByEmailUseCase';

const sqlServerTechniciansRepository = new SQLServerTechniciansRepository

const findTechnicianByEmailUseCase = new FindTechnicianByEmailUseCase(
  sqlServerTechniciansRepository,
)

const findTechnicianByEmailController = new FindTechnicianByEmailController(
  findTechnicianByEmailUseCase
)

export { findTechnicianByEmailController, findTechnicianByEmailUseCase };

