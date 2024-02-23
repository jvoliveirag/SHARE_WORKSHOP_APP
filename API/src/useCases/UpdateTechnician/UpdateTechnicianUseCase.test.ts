// UpdateTechnicianUseCase.spec.ts
import { CreateTechnicianRequestDTO } from '../../dtos/CreateTechnicianDTO';
import { ITechniciansRepository } from '../../repositories/ITechniciansRepository';
import { UpdateTechnicianUseCase } from './UpdateTechnicianUseCase';

// Mock for the repository
const mockTechniciansRepository: jest.Mocked<ITechniciansRepository> = {
  findByEmail: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  getAll: jest.fn(),
};

describe('UpdateTechnicianUseCase', () => {
  let updateTechnicianUseCase: UpdateTechnicianUseCase;

  beforeEach(() => {
    // Reset mock calls before each test
    jest.clearAllMocks();

    updateTechnicianUseCase = new UpdateTechnicianUseCase(
      mockTechniciansRepository,
    );
  });

  it('should update an existing technician', async () => {
    // Arrange
    const email = 'john.doe@example.com';
    const updateTechnicianRequest: CreateTechnicianRequestDTO = {
      email:'john.doe@example.com',
      name: 'John Doe Updated',
      phoneNumber: '87654321',
      address: 'Updated address',
    };

    // Mock the repository to return an existing technician
    const existingTechnician = {
      id: '1a2b3c',
      name: 'John Doe',
      phoneNumber: '12345678',
      email: 'john.doe@example.com',
      address: 'Old address',
      // other properties...
    };
    mockTechniciansRepository.findByEmail.mockResolvedValueOnce(existingTechnician);

    // Act
    await updateTechnicianUseCase.execute(email, updateTechnicianRequest);

    // Assert
    expect(mockTechniciansRepository.findByEmail).toHaveBeenCalledWith(email);
    expect(mockTechniciansRepository.update).toHaveBeenCalledWith(
      email,
      expect.objectContaining({
        name: updateTechnicianRequest.name,
        phoneNumber: updateTechnicianRequest.phoneNumber,
        address: updateTechnicianRequest.address,
        // other expected properties...
      }),
    );
  });

  it('should throw an error if the technician does not exist', async () => {
    // Arrange
    const email = 'nonexistent@example.com';
    const updateTechnicianRequest: CreateTechnicianRequestDTO = {
      email: 'test@gmail.com',
      name: 'John Doe Updated',
      phoneNumber: '87654321',
      address: 'Updated address',
    };

    // Mock the repository to return null (indicating no technician found)
    mockTechniciansRepository.findByEmail.mockResolvedValueOnce(null);

    // Act and Assert
    await expect(
      updateTechnicianUseCase.execute(email, updateTechnicianRequest),
    ).rejects.toThrow('Technician not found');
  });
});
