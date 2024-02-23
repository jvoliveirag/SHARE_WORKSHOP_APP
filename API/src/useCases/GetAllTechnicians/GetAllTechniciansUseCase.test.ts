// GetAllTechniciansUseCase.spec.ts
import { ITechniciansRepository } from '../../repositories/ITechniciansRepository';
import { GetAllTechniciansUseCase } from './GetAllTechniciansUseCase';

// Mock for the repository
const mockTechniciansRepository: jest.Mocked<ITechniciansRepository> = {
  findByEmail: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  getAll: jest.fn(),
};

describe('GetAllTechniciansUseCase', () => {
  let getAllTechniciansUseCase: GetAllTechniciansUseCase;

  beforeEach(() => {
    // Reset mock calls before each test
    jest.clearAllMocks();

    getAllTechniciansUseCase = new GetAllTechniciansUseCase(
      mockTechniciansRepository,
    );
  });

  it('should get all technicians', async () => {
    // Arrange
    // Mock the repository to return a list of technicians
    const techniciansList = [
      {
        id: '1a2b3c',
        name: 'John Doe',
        phoneNumber: '12345678',
        email: 'john.doe@example.com',
        address: 'rua 123 de oliveira 4',
        // other properties...
      },
      // Add more technicians as needed...
    ];
    mockTechniciansRepository.getAll.mockResolvedValueOnce(techniciansList);

    // Act
    const result = await getAllTechniciansUseCase.execute();

    // Assert
    expect(mockTechniciansRepository.getAll).toHaveBeenCalled();
    expect(result).toEqual(techniciansList);
  });

  it('should throw an error if no technicians are found', async () => {
    // Arrange
    // Mock the repository to return null (indicating no technicians found)
    mockTechniciansRepository.getAll.mockResolvedValueOnce(null);

    // Act and Assert
    await expect(getAllTechniciansUseCase.execute()).rejects.toThrow('No technicians found');
  });
});
