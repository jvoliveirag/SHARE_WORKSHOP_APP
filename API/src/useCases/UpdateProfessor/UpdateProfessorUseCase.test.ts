// UpdateProfessorUseCase.spec.ts
import { CreateProfessorRequestDTO } from '../../dtos/CreateProfessorDTO';
import { IProfessorsRepository } from '../../repositories/IProfessorsRepository';
import { UpdateProfessorUseCase } from './UpdateProfessorUseCase';

// Mock for the repository
const mockProfessorsRepository: jest.Mocked<IProfessorsRepository> = {
  findByEmail: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  getAll: jest.fn(),
};

describe('UpdateProfessorUseCase', () => {
  let updateProfessorUseCase: UpdateProfessorUseCase;

  beforeEach(() => {
    // Reset mock calls before each test
    jest.clearAllMocks();

    updateProfessorUseCase = new UpdateProfessorUseCase(
      mockProfessorsRepository,
    );
  });

  it('should update an existing professor', async () => {
    // Arrange
    const email = 'john.doe@example.com';
    const updateProfessorRequest: CreateProfessorRequestDTO = {
      email:'john.doe@example.com',
      name: 'John Doe Updated',
      phoneNumber: '87654321',
      address: 'Updated address',
    };

    // Mock the repository to return an existing professor
    const existingProfessor = {
      id: '1a2b3c',
      name: 'John Doe',
      phoneNumber: '12345678',
      email: 'john.doe@example.com',
      address: 'Old address',
      // other properties...
    };
    mockProfessorsRepository.findByEmail.mockResolvedValueOnce(existingProfessor);

    // Act
    await updateProfessorUseCase.execute(email, updateProfessorRequest);

    // Assert
    expect(mockProfessorsRepository.findByEmail).toHaveBeenCalledWith(email);
    expect(mockProfessorsRepository.update).toHaveBeenCalledWith(
      email,
      expect.objectContaining({
        name: updateProfessorRequest.name,
        phoneNumber: updateProfessorRequest.phoneNumber,
        address: updateProfessorRequest.address,
        // other expected properties...
      }),
    );
  });

  it('should throw an error if the professor does not exist', async () => {
    // Arrange
    const email = 'nonexistent@example.com';
    const updateProfessorRequest: CreateProfessorRequestDTO = {
      email: 'test@gmail.com',
      name: 'John Doe Updated',
      phoneNumber: '87654321',
      address: 'Updated address',
    };

    // Mock the repository to return null (indicating no professor found)
    mockProfessorsRepository.findByEmail.mockResolvedValueOnce(null);

    // Act and Assert
    await expect(
      updateProfessorUseCase.execute(email, updateProfessorRequest),
    ).rejects.toThrow('Professor not found');
  });
});
