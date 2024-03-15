import { SQLServerProfessorsRepository } from "../../repositories/implementations/SQLServerProfessorsRepository";
import { GetAllProfessorsController } from "./GetAllProfessorsController";
import { GetAllProfessorsUseCase } from "./GetAllProfessorsUseCase";

const sqlServerProfessorsRepository = new SQLServerProfessorsRepository

const getAllProfessorsUseCase = new GetAllProfessorsUseCase(
  sqlServerProfessorsRepository,
)

const getAllProfessorsController = new GetAllProfessorsController(
  getAllProfessorsUseCase
)

export { getAllProfessorsController, getAllProfessorsUseCase };

