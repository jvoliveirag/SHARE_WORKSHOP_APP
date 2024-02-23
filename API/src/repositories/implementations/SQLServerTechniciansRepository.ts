import { Technician } from "../../entities/Technician";
import { prisma } from "../../lib/prisma";
import { ITechniciansRepository } from "../ITechniciansRepository";

export class SQLServerTechniciansRepository implements ITechniciansRepository {

  async findByEmail(email: string): Promise<Technician | null> {
    const technician = await prisma.technician.findUnique({
      where: {
        email,
      },
    })
    return technician ? technician : null
  }

  async save(technician: Technician): Promise<Technician> {
    const createdTechnician = await prisma.technician.create({
      data: {
        name: technician.name,
        phoneNumber: technician.phoneNumber,
        email: technician.email,
        address: technician.address,
      },
    });
    return createdTechnician;
  }

  async update(email: string, data: Partial<Technician>): Promise<Technician> {
    const updatedTechnician = await prisma.technician.update({
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
    return updatedTechnician
  }

  async delete(email: string): Promise<void> {
    await prisma.technician.delete({
      where: {
        email: email
      }
    })
    console.log('Technician succesfully deleted')
  }

  async getAll(): Promise<Technician[]> {
    try {

      const techniciansList = await prisma.technician.findMany()

      const modifiedTechniciansList = Array.from(techniciansList).map((technician) => {
        const { createdAt, ...rest } = technician;
        return rest;
      });

      return modifiedTechniciansList

    } catch(err) {
      console.log('Erro: ', err);
    }
  }
}