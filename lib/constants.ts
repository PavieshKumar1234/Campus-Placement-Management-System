import { Department, StatusVariant } from '../types/common';

export const DEPARTMENTS: Department[] = ['CSE', 'AIML', 'IT', 'ECE', 'EEE', 'Mechanical'];

export const ACADEMIC_YEARS = ['2023-2024', '2024-2025', '2025-2026', '2026-2027'];

export const GRADUATION_YEARS = [2024, 2025, 2026, 2027];

export const STATUS_COLORS: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  Applied: {
    bg: '#EAF3FF',
    text: '#2A75D3',
    border: '#C3DCFF',
    glow: 'rgba(77, 154, 245, 0.22)',
  },
  Shortlisted: {
    bg: '#F0EBFF',
    text: '#635BFF',
    border: '#D8CEFE',
    glow: 'rgba(99, 91, 255, 0.22)',
  },
  Interview: {
    bg: '#FFF1DD',
    text: '#D97706',
    border: '#FED7AA',
    glow: 'rgba(255, 169, 77, 0.22)',
  },
  Selected: {
    bg: '#E7FAEF',
    text: '#16A34A',
    border: '#BBF7D0',
    glow: 'rgba(50, 201, 139, 0.20)',
  },
  Rejected: {
    bg: '#FEE2E2',
    text: '#DC2626',
    border: '#FECACA',
    glow: 'rgba(239, 68, 68, 0.20)',
  },
  Pending: {
    bg: '#FEF9C3',
    text: '#CA8A04',
    border: '#FEF08A',
    glow: 'rgba(245, 196, 81, 0.20)',
  },
  Placed: {
    bg: '#E7FAEF',
    text: '#16A34A',
    border: '#BBF7D0',
    glow: 'rgba(50, 201, 139, 0.20)',
  },
  Active: {
    bg: '#E7FAEF',
    text: '#16A34A',
    border: '#BBF7D0',
    glow: 'rgba(50, 201, 139, 0.20)',
  },
  Upcoming: {
    bg: '#EAF3FF',
    text: '#2A75D3',
    border: '#C3DCFF',
    glow: 'rgba(77, 154, 245, 0.22)',
  },
  Completed: {
    bg: '#F3F4F6',
    text: '#4B5563',
    border: '#E5E7EB',
    glow: 'rgba(156, 163, 175, 0.20)',
  },
};
