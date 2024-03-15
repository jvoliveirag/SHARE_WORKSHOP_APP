// FindProfessorByEmailUseCase.spec.ts
import { IProfessorsRepository } from '../../repositories/IProfessorsRepository';
import { FindProfessorByEmailUseCase } from './FindProfessorByEmailUseCase';

// Mock for the repository
const mockProfessorsRepository: jest.Mocked<IProfessorsRepository> = {
  findByEmail: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  getAll: jest.fn()
};

describe('FindProfessorByEmailUseCase', () => {
  let findProfessorByEmailUseCase: FindProfessorByEmailUseCase;

  beforeEach(() => {
    // Reset mock calls before each test
    jest.clearAllMocks();

    findProfessorByEmailUseCase = new FindProfessorByEmailUseCase(
      mockProfessorsRepository,
    );
  });

  it('should find a professor by email', async () => {
    // Arrange
    const professorEmailToFind = 'john.doe@example.com';

    // Mock the repository to return an existing professor
    const existingProfessor = {
      id: '1a2b3c',
      name: 'John Doe',
      phoneNumber: '12345678',
      email: 'john.doe@example.com',
      address: 'rua 123 de oliveira 4'
      // other properties...
    };
    mockProfessorsRepository.findByEmail.mockResolvedValueOnce(existingProfessor);

    // Act
    const result = await findProfessorByEmailUseCase.execute(professorEmailToFind);

    // Assert
    expect(mockProfessorsRepository.findByEmail).toHaveBeenCalledWith(professorEmailToFind);
    expect(result).toEqual(existingProfessor);
  });

  it('should throw an error if the professor does not exist', async () => {
    // Arrange
    const nonExistingProfessorEmail = 'nonexisting@example.com';

    // Mock the repository to return null (indicating that the professor doesn't exist)
    mockProfessorsRepository.findByEmail.mockResolvedValueOnce(null);

    // Act and Assert
    await expect(
      findProfessorByEmailUseCase.execute(nonExistingProfessorEmail)
    ).rejects.toThrow('Professor not found');
  });
});
