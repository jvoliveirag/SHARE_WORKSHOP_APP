// GetAllProfessorsUseCase.spec.ts
import { IProfessorsRepository } from '../../repositories/IProfessorsRepository';
import { GetAllProfessorsUseCase } from './GetAllProfessorsUseCase';

// Mock for the repository
const mockProfessorsRepository: jest.Mocked<IProfessorsRepository> = {
  findByEmail: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  getAll: jest.fn(),
};

describe('GetAllProfessorsUseCase', () => {
  let getAllProfessorsUseCase: GetAllProfessorsUseCase;

  beforeEach(() => {
    // Reset mock calls before each test
    jest.clearAllMocks();

    getAllProfessorsUseCase = new GetAllProfessorsUseCase(
      mockProfessorsRepository,
    );
  });

  it('should get all professors', async () => {
    // Arrange
    // Mock the repository to return a list of professors
    const professorsList = [
      {
        id: '1a2b3c',
        name: 'John Doe',
        phoneNumber: '12345678',
        email: 'john.doe@example.com',
        address: 'rua 123 de oliveira 4',
        // other properties...
      },
      // Add more professors as needed...
    ];
    mockProfessorsRepository.getAll.mockResolvedValueOnce(professorsList);

    // Act
    const result = await getAllProfessorsUseCase.execute();

    // Assert
    expect(mockProfessorsRepository.getAll).toHaveBeenCalled();
    expect(result).toEqual(professorsList);
  });

  it('should throw an error if no professors are found', async () => {
    // Arrange
    // Mock the repository to return null (indicating no professors found)
    mockProfessorsRepository.getAll.mockResolvedValueOnce(null);

    // Act and Assert
    await expect(getAllProfessorsUseCase.execute()).rejects.toThrow('No professors found');
  });
});
