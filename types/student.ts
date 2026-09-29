import { Department } from './common';

export type PlacementStatus = 'Placed' | 'Shortlisted' | 'In Process' | 'Seeking' | 'Opted Out';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: number;
}

export interface Student {
  id: string;
  studentId: string; // e.g. "2022CSE042"
  name: string;
  email: string;
  phone: string;
  department: Department;
  cgpa: number;
  graduationYear: number;
  backlogs: number;
  placementStatus: PlacementStatus;
  avatar?: string;
  bio?: string;
  address?: string;
  skills: string[];
  projects: Project[];
  certifications: Certification[];
  resumeUrl?: string;
  offersCount: number;
  highestPackage?: string;
  applicationsCount: number;
}
