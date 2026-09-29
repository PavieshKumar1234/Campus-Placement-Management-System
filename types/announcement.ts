export type AnnouncementCategory = 
  | 'General' 
  | 'Placement Drive' 
  | 'Interview' 
  | 'Deadline' 
  | 'Result';

export type AnnouncementPriority = 'Low' | 'Medium' | 'High' | 'Urgent';

export interface Announcement {
  id: string;
  title: string;
  category: AnnouncementCategory;
  priority: AnnouncementPriority;
  content: string;
  publishedDate: string;
  author: string;
  authorRole: string;
  isPublished: boolean;
  targetAudience: string;
  attachmentName?: string;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  category: 'drive' | 'interview' | 'offer' | 'deadline' | 'announcement';
  link?: string;
}
