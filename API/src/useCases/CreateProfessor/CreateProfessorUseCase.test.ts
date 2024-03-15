// CreateProfessorUseCase.spec.ts
import { CreateProfessorRequestDTO } from '../../dtos/CreateProfessorDTO';
import { IMailProvider } from '../../providers/IMailProvider';
import { IProfessorsRepository } from '../../repositories/IProfessorsRepository';
import { CreateProfessorUseCase } from './CreateProfessorUseCase';

// Mocks for the dependencies
const mockProfessorsRepository: jest.Mocked<IProfessorsRepository> = {
  findByEmail: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  getAll: jest.fn()
};

const mockMailProvider: jest.Mocked<IMailProvider> = {
  sendMail: jest.fn(),
};

describe('CreateProfessorUseCase', () => {
  let createProfessorUseCase: CreateProfessorUseCase;

  beforeEach(() => {
    // Reset mock calls before each test
    jest.clearAllMocks();

    createProfessorUseCase = new CreateProfessorUseCase(
      mockProfessorsRepository,
      mockMailProvider
    );
  });

  it('should create a new professor and send a confirmation email', async () => {
    // Arrange
    const createProfessorRequest: CreateProfessorRequestDTO = {
      name: 'John Doe',
      phoneNumber: '12345678',
      email: 'john.doe@example.com',
      address: 'rua 123 de oliveira 4'
    };

    // Mock the repository to return null (indicating that the professor doesn't exist)
    mockProfessorsRepository.findByEmail.mockResolvedValueOnce(null);

    // Act
    await createProfessorUseCase.execute(createProfessorRequest);

    // Assert
    expect(mockProfessorsRepository.findByEmail).toHaveBeenCalledWith(
      createProfessorRequest.email
    );
    expect(mockProfessorsRepository.save).toHaveBeenCalledWith(
      expect.objectContaining({
        name: createProfessorRequest.name,
        phoneNumber: createProfessorRequest.phoneNumber,
        email: createProfessorRequest.email,
        address: createProfessorRequest.address
      })
    );
    expect(mockMailProvider.sendMail).toHaveBeenCalledWith({
      to: {
        name: createProfessorRequest.name,
        email: createProfessorRequest.email,
      },
      from: {
        email: 'teste123@teste.com',
        name: 'Fulano de tal',
      },
      subject: 'Cadastro realizado com sucesso',
      body: '<p>Você foi cadastrado em nossa plataforma.</p>',
    });
  });

  it('should throw an error if the professor already exists', async () => {
    // Arrange
    const createProfessorRequest: CreateProfessorRequestDTO = {
      name: 'John Doe',
      phoneNumber: '12345678',
      email: 'john.doe@example.com',
      address: 'rua 123 de oliveira 4'
      // other properties...
    };

    // Mock the repository to return a professor (indicating that the professor already exists)
    mockProfessorsRepository.findByEmail.mockResolvedValueOnce({
      // professor data...
      id: '1a2b3c',
      name: 'Joao 123',
      phoneNumber: '1234567',
      email: 'professor123@gmail.com',
      address: 'rua 123 de oliveira 4'
    });

    // Act and Assert
    await expect(
      createProfessorUseCase.execute(createProfessorRequest)
    ).rejects.toThrow('Este professor já está cadastrado.');

  });
});
