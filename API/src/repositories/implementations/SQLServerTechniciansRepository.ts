import { Professor } from "../../entities/Professor";
import { prisma } from "../../lib/prisma";
import { IProfessorsRepository } from "../IProfessorsRepository";

export class SQLServerProfessorsRepository implements IProfessorsRepository {

  async findByEmail(email: string): Promise<Professor | null> {
    const professor = await prisma.professor.findUnique({
      where: {
        email,
      },
    })
    return professor ? professor : null
  }

  async save(professor: Professor): Promise<Professor> {
    const createdProfessor = await prisma.professor.create({
      data: {
        name: professor.name,
        phoneNumber: professor.phoneNumber,
        email: professor.email,
        address: professor.address,
      },
    });
    return createdProfessor;
  }

  async update(email: string, data: Partial<Professor>): Promise<Professor> {
    const updatedProfessor = await prisma.professor.update({
      where: {
        email: email
      },
      data: {
        name: data.name,
        phoneNumber: data.phoneNumber,
        email: data.email,
        address: data.address,
      }
    });
    return updatedProfessor
  }

  async delete(email: string): Promise<void> {
    await prisma.professor.delete({
      where: {
        email: email
      }
    })
    console.log('Professor succesfully deleted')
  }

  async getAll(): Promise<Professor[]> {
    try {

      const professorsList = await prisma.professor.findMany()

      const modifiedProfessorsList = Array.from(professorsList).map((professor) => {
        const { createdAt, ...rest } = professor;
        return rest;
      });

      return modifiedProfessorsList

    } catch(err) {
      console.log('Erro: ', err);
    }
  }
}