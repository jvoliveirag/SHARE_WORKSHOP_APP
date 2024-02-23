// FindTechnicianByEmailUseCase.spec.ts
import { ITechniciansRepository } from '../../repositories/ITechniciansRepository';
import { FindTechnicianByEmailUseCase } from './FindTechnicianByEmailUseCase';

// Mock for the repository
const mockTechniciansRepository: jest.Mocked<ITechniciansRepository> = {
  findByEmail: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  getAll: jest.fn()
};

describe('FindTechnicianByEmailUseCase', () => {
  let findTechnicianByEmailUseCase: FindTechnicianByEmailUseCase;

  beforeEach(() => {
    // Reset mock calls before each test
    jest.clearAllMocks();

    findTechnicianByEmailUseCase = new FindTechnicianByEmailUseCase(
      mockTechniciansRepository,
    );
  });

  it('should find a technician by email', async () => {
    // Arrange
    const technicianEmailToFind = 'john.doe@example.com';

    // Mock the repository to return an existing technician
    const existingTechnician = {
      id: '1a2b3c',
      name: 'John Doe',
      phoneNumber: '12345678',
      email: 'john.doe@example.com',
      address: 'rua 123 de oliveira 4'
      // other properties...
    };
    mockTechniciansRepository.findByEmail.mockResolvedValueOnce(existingTechnician);

    // Act
    const result = await findTechnicianByEmailUseCase.execute(technicianEmailToFind);

    // Assert
    expect(mockTechniciansRepository.findByEmail).toHaveBeenCalledWith(technicianEmailToFind);
    expect(result).toEqual(existingTechnician);
  });

  it('should throw an error if the technician does not exist', async () => {
    // Arrange
    const nonExistingTechnicianEmail = 'nonexisting@example.com';

    // Mock the repository to return null (indicating that the technician doesn't exist)
    mockTechniciansRepository.findByEmail.mockResolvedValueOnce(null);

    // Act and Assert
    await expect(
      findTechnicianByEmailUseCase.execute(nonExistingTechnicianEmail)
    ).rejects.toThrow('Technician not found');
  });
});
