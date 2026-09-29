import { Department } from './common';

export type SelectionStage = 
  | 'Online Assessment'
  | 'Aptitude Test' 
  | 'Coding Round' 
  | 'Technical Interview' 
  | 'Group Discussion' 
  | 'HR Interview';

export type DriveStatus = 'Active' | 'Upcoming' | 'Completed' | 'Draft';

export interface Drive {
  id: string;
  companyId: string;
  companyName: string;
  companyLogo?: string;
  role: string;
  packageLPA: number;
  packageText: string; // e.g. "₹8.5 LPA"
  jobType: 'Full-time' | 'Internship + PPO' | 'Internship';
  location: string;
  description: string;
  requirements: string[];
  selectionProcess: SelectionStage[];
  
  // Eligibility
  minCgpa: number;
  eligibleDepartments: Department[];
  graduationYear: number;
  maxBacklogs: number;
  
  // Dates
  applicationDeadline: string;
  driveDate: string;
  
  status: DriveStatus;
  applicantCount: number;
  shortlistedCount: number;
  selectedCount: number;
}
