import { UserData } from '../types';


const mockData: UserData[] = [
  { id: '1', timestamp: '2024-03-01T10:00:00', feature: 'A', timeSpent: 120, age: 22, gender: 'male' },
  { id: '2', timestamp: '2024-03-01T11:00:00', feature: 'B', timeSpent: 90, age: 28, gender: 'female' },
  { id: '3', timestamp: '2024-03-01T12:00:00', feature: 'C', timeSpent: 150, age: 25, gender: 'male' },
  { id: '4', timestamp: '2024-03-01T13:00:00', feature: 'D', timeSpent: 75, age: 30, gender: 'female' },
  { id: '5', timestamp: '2024-03-01T14:00:00', feature: 'E', timeSpent: 180, age: 35, gender: 'male' },
  { id: '6', timestamp: '2024-03-01T15:00:00', feature: 'F', timeSpent: 110, age: 26, gender: 'female' },
  { id: '7', timestamp: '2024-03-01T16:00:00', feature: 'G', timeSpent: 95, age: 22, gender: 'male' },
  { id: '8', timestamp: '2024-03-01T17:00:00', feature: 'H', timeSpent: 60, age: 28, gender: 'female' },
  { id: '9', timestamp: '2024-03-01T18:00:00', feature: 'I', timeSpent: 200, age: 24, gender: 'male' },
  { id: '10', timestamp: '2024-03-01T19:00:00', feature: 'A', timeSpent: 140, age: 27, gender: 'female' },
  { id: '11', timestamp: '2024-03-01T20:00:00', feature: 'B', timeSpent: 85, age: 23, gender: 'male' },
  { id: '12', timestamp: '2024-03-01T21:00:00', feature: 'C', timeSpent: 125, age: 29, gender: 'female' },
  { id: '13', timestamp: '2024-03-01T10:00:00', feature: 'A', timeSpent: 120, age: 22, gender: 'male' }, 
  { id: '14', timestamp: '2024-03-01T11:00:00', feature: 'B', timeSpent: 90, age: 28, gender: 'female' }, 
  { id: '15', timestamp: '2024-03-01T12:00:00', feature: 'C', timeSpent: 150, age: 25, gender: 'male' }, 

  { id: '16', timestamp: '2024-03-01T10:00:00', feature: 'A', timeSpent: 120, age: 22, gender: 'male' },
  { id: '17', timestamp: '2024-03-01T11:00:00', feature: 'B', timeSpent: 90, age: 28, gender: 'female' },
  { id: '18', timestamp: '2024-03-01T12:00:00', feature: 'C', timeSpent: 150, age: 25, gender: 'male' },
  { id: '19', timestamp: '2024-03-01T13:00:00', feature: 'D', timeSpent: 75, age: 25, gender: 'female' },
  { id: '20', timestamp: '2024-03-01T14:00:00', feature: 'E', timeSpent: 180, age: 35, gender: 'male' },
  { id: '21', timestamp: '2024-03-01T15:00:00', feature: 'F', timeSpent: 110, age: 24, gender: 'female' }, 
  { id: '22', timestamp: '2024-03-01T16:00:00', feature: 'G', timeSpent: 95, age: 22, gender: 'male' },
  { id: '23', timestamp: '2024-03-01T17:00:00', feature: 'H', timeSpent: 60, age: 23, gender: 'female' }, 
  { id: '24', timestamp: '2024-03-01T18:00:00', feature: 'I', timeSpent: 200, age: 24, gender: 'female' }, 
  { id: '25', timestamp: '2024-03-01T19:00:00', feature: 'A', timeSpent: 140, age: 27, gender: 'female' },
  { id: '26', timestamp: '2024-03-01T20:00:00', feature: 'B', timeSpent: 85, age: 23, gender: 'female' }, 
  { id: '27', timestamp: '2024-03-01T21:00:00', feature: 'C', timeSpent: 125, age: 29, gender: 'female' },
];

export const fetchData = async (
  startDate?: Date | null,
  endDate?: Date | null,
  ageRange?: string | null,
  gender?: string | null
): Promise<UserData[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return mockData.filter((item) => {
    const date = new Date(item.timestamp);
    const matchesDateRange =
      !startDate || !endDate || (date >= startDate && date <= endDate);
    const matchesAgeRange =
      !ageRange ||
      (ageRange === '15-25' && item.age >= 15 && item.age <= 25) ||
      (ageRange === '>25' && item.age > 25);
    const matchesGender = !gender || item.gender === gender;

    return matchesDateRange && matchesAgeRange && matchesGender;
  });
};


