// DeleteProfessorUseCase.spec.ts
import { IProfessorsRepository } from '../../repositories/IProfessorsRepository';
import { DeleteProfessorUseCase } from './DeleteProfessorUseCase';

// Mock for the repository
const mockProfessorsRepository: jest.Mocked<IProfessorsRepository> = {
  findByEmail: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  getAll: jest.fn()
};

describe('DeleteProfessorUseCase', () => {
  let deleteProfessorUseCase: DeleteProfessorUseCase;

  beforeEach(() => {
    // Reset mock calls before each test
    jest.clearAllMocks();

    deleteProfessorUseCase = new DeleteProfessorUseCase(
      mockProfessorsRepository,
    );
  });

  it('should delete a professor', async () => {
    // Arrange
    const professorEmailToDelete = 'john.doe@example.com';

    // Mock the repository to return an existing professor
    mockProfessorsRepository.findByEmail.mockResolvedValueOnce({
      id: '1a2b3c',
      name: 'John Doe',
      phoneNumber: '12345678',
      email: 'john.doe@example.com',
      address: 'rua 123 de oliveira 4'
      // other properties...
    });

    // Act
    await deleteProfessorUseCase.execute(professorEmailToDelete);

    // Assert
    expect(mockProfessorsRepository.findByEmail).toHaveBeenCalledWith(professorEmailToDelete);
    expect(mockProfessorsRepository.delete).toHaveBeenCalledWith(professorEmailToDelete);
  });

  it('should throw an error if the professor does not exist', async () => {
    // Arrange
    const nonExistingProfessorEmail = 'nonexisting@example.com';

    // Mock the repository to return null (indicating that the professor doesn't exist)
    mockProfessorsRepository.findByEmail.mockResolvedValueOnce(null);

    // Act and Assert
    await expect(
      deleteProfessorUseCase.execute(nonExistingProfessorEmail)
    ).rejects.toThrow('Professor not found');
  });
});
