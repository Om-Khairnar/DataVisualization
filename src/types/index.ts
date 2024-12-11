export interface UserData {
  id: string;
  timestamp: string;
  feature: string;
  timeSpent: number;
  age: number;
  gender: string;
}

export interface FilterState {
  ageRange: '15-25' | '>25' | null;
  gender: 'male' | 'female' | null;
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
}

export interface ChartData {
  feature: string;
  timeSpent: number;
}