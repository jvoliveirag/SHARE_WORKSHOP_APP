import { SQLServerTechniciansRepository } from "../../repositories/implementations/SQLServerTechniciansRepository";
import { GetAllTechniciansController } from "./GetAllTechniciansController";
import { GetAllTechniciansUseCase } from "./GetAllTechniciansUseCase";

const sqlServerTechniciansRepository = new SQLServerTechniciansRepository

const getAllTechniciansUseCase = new GetAllTechniciansUseCase(
  sqlServerTechniciansRepository,
)

const getAllTechniciansController = new GetAllTechniciansController(
  getAllTechniciansUseCase
)

export { getAllTechniciansController, getAllTechniciansUseCase };

