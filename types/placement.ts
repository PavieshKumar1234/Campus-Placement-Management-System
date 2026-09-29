import { Department } from './common';

export type OfferStatus = 'Accepted' | 'Declined' | 'Pending Decision' | 'Revoked';

export interface Placement {
  id: string;
  studentId: string;
  studentRollNo: string;
  studentName: string;
  department: Department;
  cgpa: number;
  companyName: string;
  companyLogo: string;
  role: string;
  packageLPA: number;
  packageText: string;
  offerDate: string;
  joiningDate: string;
  location: string;
  offerLetterUrl?: string;
  offerStatus: OfferStatus;
  tier: string;
}
