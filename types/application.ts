import { Department } from './common';

export type ApplicationStage = 
  | 'Applied' 
  | 'Shortlisted' 
  | 'Aptitude' 
  | 'Technical' 
  | 'HR' 
  | 'Selected' 
  | 'Rejected';

export interface Application {
  id: string;
  studentId: string;
  studentRollNo: string;
  studentName: string;
  studentEmail: string;
  department: Department;
  cgpa: number;
  driveId: string;
  companyName: string;
  companyLogo: string;
  role: string;
  packageText: string;
  appliedDate: string;
  currentStage: ApplicationStage;
  stageStatus: 'In Review' | 'Cleared' | 'Failed' | 'Scheduled' | 'Offer Extended';
  updatedAt: string;
  notes?: string;
}
