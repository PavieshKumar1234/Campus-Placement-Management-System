export type InterviewRound = 'Technical Round 1' | 'Technical Round 2' | 'Coding Assessment' | 'HR Round' | 'Managerial Round';
export type InterviewStatus = 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled' | 'Recommended' | 'Not Selected';

export interface Interview {
  id: string;
  applicationId: string;
  studentId: string;
  studentName: string;
  studentRollNo: string;
  companyName: string;
  companyLogo: string;
  role: string;
  round: InterviewRound;
  date: string;
  time: string;
  venue: string; // e.g., "Seminar Hall 2 / Google Meet"
  meetingLink?: string;
  interviewerName: string;
  interviewerDesignation: string;
  status: InterviewStatus;
  feedback?: string;
  rating?: number;
}
