// CreateTechnicianUseCase.spec.ts
import { CreateTechnicianRequestDTO } from '../../dtos/CreateTechnicianDTO';
import { IMailProvider } from '../../providers/IMailProvider';
import { ITechniciansRepository } from '../../repositories/ITechniciansRepository';
import { CreateTechnicianUseCase } from './CreateTechnicianUseCase';

// Mocks for the dependencies
const mockTechniciansRepository: jest.Mocked<ITechniciansRepository> = {
  findByEmail: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  getAll: jest.fn()
};

const mockMailProvider: jest.Mocked<IMailProvider> = {
  sendMail: jest.fn(),
};

describe('CreateTechnicianUseCase', () => {
  let createTechnicianUseCase: CreateTechnicianUseCase;

  beforeEach(() => {
    // Reset mock calls before each test
    jest.clearAllMocks();

    createTechnicianUseCase = new CreateTechnicianUseCase(
      mockTechniciansRepository,
      mockMailProvider
    );
  });

  it('should create a new technician and send a confirmation email', async () => {
    // Arrange
    const createTechnicianRequest: CreateTechnicianRequestDTO = {
      name: 'John Doe',
      phoneNumber: '12345678',
      email: 'john.doe@example.com',
      address: 'rua 123 de oliveira 4'
    };

    // Mock the repository to return null (indicating that the technician doesn't exist)
    mockTechniciansRepository.findByEmail.mockResolvedValueOnce(null);

    // Act
    await createTechnicianUseCase.execute(createTechnicianRequest);

    // Assert
    expect(mockTechniciansRepository.findByEmail).toHaveBeenCalledWith(
      createTechnicianRequest.email
    );
    expect(mockTechniciansRepository.save).toHaveBeenCalledWith(
      expect.objectContaining({
        name: createTechnicianRequest.name,
        phoneNumber: createTechnicianRequest.phoneNumber,
        email: createTechnicianRequest.email,
        address: createTechnicianRequest.address
      })
    );
    expect(mockMailProvider.sendMail).toHaveBeenCalledWith({
      to: {
        name: createTechnicianRequest.name,
        email: createTechnicianRequest.email,
      },
      from: {
        email: 'teste123@teste.com',
        name: 'Fulano de tal',
      },
      subject: 'Cadastro realizado com sucesso',
      body: '<p>Você foi cadastrado em nossa plataforma.</p>',
    });
  });

  it('should throw an error if the technician already exists', async () => {
    // Arrange
    const createTechnicianRequest: CreateTechnicianRequestDTO = {
      name: 'John Doe',
      phoneNumber: '12345678',
      email: 'john.doe@example.com',
      address: 'rua 123 de oliveira 4'
      // other properties...
    };

    // Mock the repository to return a technician (indicating that the technician already exists)
    mockTechniciansRepository.findByEmail.mockResolvedValueOnce({
      // technician data...
      id: '1a2b3c',
      name: 'Joao 123',
      phoneNumber: '1234567',
      email: 'tecnico123@gmail.com',
      address: 'rua 123 de oliveira 4'
    });

    // Act and Assert
    await expect(
      createTechnicianUseCase.execute(createTechnicianRequest)
    ).rejects.toThrow('Este técnico já está cadastrado.');

  });
});
