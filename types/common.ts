export type UserRole = 'admin' | 'student';

export type Department = 'CSE' | 'AIML' | 'IT' | 'ECE' | 'EEE' | 'Mechanical';

export type StatusVariant = 
  | 'blue' 
  | 'purple' 
  | 'green' 
  | 'orange' 
  | 'pink' 
  | 'yellow' 
  | 'teal' 
  | 'red' 
  | 'gray';

export interface FilterOption {
  label: string;
  value: string;
}

export interface PaginationState {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
}
