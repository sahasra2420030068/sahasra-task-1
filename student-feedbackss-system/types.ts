
export type UserRole = 'student' | 'faculty';

export interface User {
  role: UserRole;
  name: string;
}

export interface Course {
  id: string;
  name:string;
  faculty: string;
}

export interface Feedback {
  courseId: string;
  rating: number;
  clarity: 'excellent' | 'good' | 'average' | 'poor';
  pace: 'too_fast' | 'just_right' | 'too_slow';
  comments: string;
}

export interface ActionTaken {
  id: string;
  title: string;
  description: string;
  date: string;
  relatedFeedbackIds: string[];
}

export interface Suggestion {
  id: string;
  text: string;
  date: string;
}

export interface ChartData {
    name: string;
    value: number;
}
