import { CreateProfessorRequestDTO } from "../../dtos/CreateProfessorDTO";
import { Professor } from "../../entities/Professor";
import { IMailProvider } from "../../providers/IMailProvider";
import { IProfessorsRepository } from "../../repositories/IProfessorsRepository";

export class CreateProfessorUseCase {
  constructor(
    private professorsRepository: IProfessorsRepository,
    private mailProvider: IMailProvider
  ) {}
  async execute(data: CreateProfessorRequestDTO) {
    const professorAlreadyExists = await this.professorsRepository.findByEmail(data.email)

    if(professorAlreadyExists) {
      throw new Error("Este professor já está cadastrado.")
    }

    const professor = new Professor(data)

    await this.professorsRepository.save(professor)

    //independent of the protocol to send the email
    await this.mailProvider.sendMail({
      to: {
        name: professor.name,
        email: professor.email
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