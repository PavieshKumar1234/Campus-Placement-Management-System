import {
  INITIAL_STUDENTS,
  INITIAL_COMPANIES,
  INITIAL_DRIVES,
  INITIAL_APPLICATIONS,
  INITIAL_INTERVIEWS,
  INITIAL_PLACEMENTS,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_NOTIFICATIONS
} from './mockData';
import { Student } from '../types/student';
import { Company } from '../types/company';
import { Drive } from '../types/drive';
import { Application } from '../types/application';
import { Interview } from '../types/interview';
import { Placement } from '../types/placement';
import { Announcement, AppNotification } from '../types/announcement';

// In-memory frontend state store to allow adding, editing, and deleting without a backend
class MockApiStore {
  private students = [...INITIAL_STUDENTS];
  private companies = [...INITIAL_COMPANIES];
  private drives = [...INITIAL_DRIVES];
  private applications = [...INITIAL_APPLICATIONS];
  private interviews = [...INITIAL_INTERVIEWS];
  private placements = [...INITIAL_PLACEMENTS];
  private announcements = [...INITIAL_ANNOUNCEMENTS];
  private notifications = [...INITIAL_NOTIFICATIONS];

  // Students
  async getStudents(): Promise<Student[]> {
    return [...this.students];
  }
  async getStudentById(id: string): Promise<Student | undefined> {
    return this.students.find(s => s.id === id || s.studentId === id);
  }
  async createStudent(student: Omit<Student, 'id'>): Promise<Student> {
    const newStudent: Student = { ...student, id: `std-${Date.now()}` };
    this.students.unshift(newStudent);
    return newStudent;
  }
  async updateStudent(id: string, updates: Partial<Student>): Promise<Student | undefined> {
    const idx = this.students.findIndex(s => s.id === id);
    if (idx !== -1) {
      this.students[idx] = { ...this.students[idx], ...updates };
      return this.students[idx];
    }
    return undefined;
  }
  async deleteStudent(id: string): Promise<boolean> {
    const initialLen = this.students.length;
    this.students = this.students.filter(s => s.id !== id);
    return this.students.length !== initialLen;
  }

  // Companies
  async getCompanies(): Promise<Company[]> {
    return [...this.companies];
  }
  async getCompanyById(id: string): Promise<Company | undefined> {
    return this.companies.find(c => c.id === id);
  }
  async createCompany(company: Omit<Company, 'id'>): Promise<Company> {
    const newCompany: Company = { ...company, id: `comp-${Date.now()}` };
    this.companies.unshift(newCompany);
    return newCompany;
  }
  async deleteCompany(id: string): Promise<boolean> {
    const initialLen = this.companies.length;
    this.companies = this.companies.filter(c => c.id !== id);
    return this.companies.length !== initialLen;
  }

  // Drives
  async getDrives(): Promise<Drive[]> {
    return [...this.drives];
  }
  async getDriveById(id: string): Promise<Drive | undefined> {
    return this.drives.find(d => d.id === id);
  }
  async createDrive(drive: Omit<Drive, 'id' | 'applicantCount' | 'shortlistedCount' | 'selectedCount'>): Promise<Drive> {
    const newDrive: Drive = {
      ...drive,
      id: `drv-${Date.now()}`,
      applicantCount: 0,
      shortlistedCount: 0,
      selectedCount: 0
    };
    this.drives.unshift(newDrive);
    return newDrive;
  }

  // Applications
  async getApplications(): Promise<Application[]> {
    return [...this.applications];
  }
  async getApplicationById(id: string): Promise<Application | undefined> {
    return this.applications.find(a => a.id === id);
  }
  async updateApplicationStage(id: string, stage: Application['currentStage']): Promise<Application | undefined> {
    const idx = this.applications.findIndex(a => a.id === id);
    if (idx !== -1) {
      this.applications[idx] = { ...this.applications[idx], currentStage: stage };
      return this.applications[idx];
    }
    return undefined;
  }

  // Interviews
  async getInterviews(): Promise<Interview[]> {
    return [...this.interviews];
  }
  async getInterviewById(id: string): Promise<Interview | undefined> {
    return this.interviews.find(i => i.id === id);
  }

  // Placements
  async getPlacements(): Promise<Placement[]> {
    return [...this.placements];
  }
  async getPlacementById(id: string): Promise<Placement | undefined> {
    return this.placements.find(p => p.id === id);
  }

  // Announcements
  async getAnnouncements(): Promise<Announcement[]> {
    return [...this.announcements];
  }
  async createAnnouncement(ann: Omit<Announcement, 'id'>): Promise<Announcement> {
    const newAnn: Announcement = { ...ann, id: `ann-${Date.now()}` };
    this.announcements.unshift(newAnn);
    return newAnn;
  }
  async deleteAnnouncement(id: string): Promise<boolean> {
    const initialLen = this.announcements.length;
    this.announcements = this.announcements.filter(a => a.id !== id);
    return this.announcements.length !== initialLen;
  }

  // Notifications
  async getNotifications(): Promise<AppNotification[]> {
    return [...this.notifications];
  }
  async markNotificationAsRead(id: string): Promise<void> {
    const n = this.notifications.find(item => item.id === id);
    if (n) n.read = true;
  }
  async markAllNotificationsRead(): Promise<void> {
    this.notifications.forEach(n => (n.read = true));
  }
}

export const api = new MockApiStore();
