import { Technician } from "../entities/Technician";

export interface ITechniciansRepository {
  findByEmail(email: string): Promise<Technician>
  save(technician: Technician): Promise<Technician>
  update(email: string, data: Partial<Technician>): Promise<Technician>
  delete(email: string): Promise<void>
  getAll(): Promise<Technician[]>
}