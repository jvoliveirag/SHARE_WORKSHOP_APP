import { Professor } from "../entities/Professor";

export interface IProfessorsRepository {
  findByEmail(email: string): Promise<Professor>
  save(professor: Professor): Promise<Professor>
  update(email: string, data: Partial<Professor>): Promise<Professor>
  delete(email: string): Promise<void>
  getAll(): Promise<Professor[]>
}