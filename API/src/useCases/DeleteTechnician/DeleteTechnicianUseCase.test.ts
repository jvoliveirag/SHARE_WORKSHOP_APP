// DeleteTechnicianUseCase.spec.ts
import { ITechniciansRepository } from '../../repositories/ITechniciansRepository';
import { DeleteTechnicianUseCase } from './DeleteTechnicianUseCase';

// Mock for the repository
const mockTechniciansRepository: jest.Mocked<ITechniciansRepository> = {
  findByEmail: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  getAll: jest.fn()
};

describe('DeleteTechnicianUseCase', () => {
  let deleteTechnicianUseCase: DeleteTechnicianUseCase;

  beforeEach(() => {
    // Reset mock calls before each test
    jest.clearAllMocks();

    deleteTechnicianUseCase = new DeleteTechnicianUseCase(
      mockTechniciansRepository,
    );
  });

  it('should delete a technician', async () => {
    // Arrange
    const technicianEmailToDelete = 'john.doe@example.com';

    // Mock the repository to return an existing technician
    mockTechniciansRepository.findByEmail.mockResolvedValueOnce({
      id: '1a2b3c',
      name: 'John Doe',
      phoneNumber: '12345678',
      email: 'john.doe@example.com',
      address: 'rua 123 de oliveira 4'
      // other properties...
    });

    // Act
    await deleteTechnicianUseCase.execute(technicianEmailToDelete);

    // Assert
    expect(mockTechniciansRepository.findByEmail).toHaveBeenCalledWith(technicianEmailToDelete);
    expect(mockTechniciansRepository.delete).toHaveBeenCalledWith(technicianEmailToDelete);
  });

  it('should throw an error if the technician does not exist', async () => {
    // Arrange
    const nonExistingTechnicianEmail = 'nonexisting@example.com';

    // Mock the repository to return null (indicating that the technician doesn't exist)
    mockTechniciansRepository.findByEmail.mockResolvedValueOnce(null);

    // Act and Assert
    await expect(
      deleteTechnicianUseCase.execute(nonExistingTechnicianEmail)
    ).rejects.toThrow('Technician not found');
  });
});
