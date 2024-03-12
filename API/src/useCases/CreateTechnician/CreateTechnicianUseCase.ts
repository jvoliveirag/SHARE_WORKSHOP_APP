import { CreateTechnicianRequestDTO } from "../../dtos/CreateTechnicianDTO";
import { Technician } from "../../entities/Technician";
import { IMailProvider } from "../../providers/IMailProvider";
import { ITechniciansRepository } from "../../repositories/ITechniciansRepository";

export class CreateTechnicianUseCase {
  constructor(
    private techniciansRepository: ITechniciansRepository,
    private mailProvider: IMailProvider
  ) {}
  async execute(data: CreateTechnicianRequestDTO) {
    const technicianAlreadyExists = await this.techniciansRepository.findByEmail(data.email)

    if(technicianAlreadyExists) {
      throw new Error("Este professor já está cadastrado.")
    }

    const technician = new Technician(data)

    await this.techniciansRepository.save(technician)

    //independent of the protocol to send the email
    await this.mailProvider.sendMail({
      to: {
        name: technician.name,
        email: technician.email
      },
      from: {
        email: 'teste123@teste.com',
        name: 'Fulano de tal'
      },
      subject: 'Cadastro realizado com sucesso',
      body: '<p>Você foi cadastrado em nossa plataforma.</p>'
    })
  }
}