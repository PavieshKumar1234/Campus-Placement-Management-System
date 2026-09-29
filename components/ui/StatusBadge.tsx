'use client';

import React from 'react';

interface StatusBadgeProps {
  status: string;
  size?: 'sm' | 'md';
}

const BADGE_MAP: Record<string, { bg: string; text: string; border: string }> = {
  // Placement / Application Stages
  Applied: { bg: '#EAF3FF', text: '#1D6FD8', border: '#C4DCFD' },
  Shortlisted: { bg: '#F0EBFF', text: '#635BFF', border: '#D8CEFE' },
  Aptitude: { bg: '#FFF7D9', text: '#B45309', border: '#FDE68A' },
  Technical: { bg: '#FFF1DD', text: '#C2410C', border: '#FED7AA' },
  HR: { bg: '#FFEAF4', text: '#BE185D', border: '#FBCFE8' },
  Interview: { bg: '#FFF1DD', text: '#C2410C', border: '#FED7AA' },
  Selected: { bg: '#E7FAEF', text: '#15803D', border: '#BBF7D0' },
  Placed: { bg: '#E7FAEF', text: '#15803D', border: '#BBF7D0' },
  Rejected: { bg: '#FEE2E2', text: '#DC2626', border: '#FECACA' },
  'Opted Out': { bg: '#F1F5F9', text: '#64748B', border: '#CBD5E1' },
  Seeking: { bg: '#EAF3FF', text: '#2563EB', border: '#BFDBFE' },
  'In Process': { bg: '#FFF7D9', text: '#B45309', border: '#FDE68A' },

  // Drive Status
  Active: { bg: '#E7FAEF', text: '#15803D', border: '#BBF7D0' },
  Upcoming: { bg: '#EAF3FF', text: '#1D6FD8', border: '#C4DCFD' },
  Completed: { bg: '#F1F5F9', text: '#475569', border: '#E2E8F0' },
  Draft: { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' },

  // Interview Status
  Scheduled: { bg: '#EAF3FF', text: '#1D6FD8', border: '#C4DCFD' },
  'In Progress': { bg: '#FFF1DD', text: '#C2410C', border: '#FED7AA' },
  Recommended: { bg: '#E7FAEF', text: '#15803D', border: '#BBF7D0' },
  'Not Selected': { bg: '#FEE2E2', text: '#DC2626', border: '#FECACA' },

  // Offers
  Accepted: { bg: '#E7FAEF', text: '#15803D', border: '#BBF7D0' },
  Declined: { bg: '#FEE2E2', text: '#DC2626', border: '#FECACA' },
  'Pending Decision': { bg: '#FFF7D9', text: '#B45309', border: '#FDE68A' }
};

export default function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const style = BADGE_MAP[status] || { bg: '#F1F5F9', text: '#475569', border: '#E2E8F0' };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: size === 'sm' ? '2px 8px' : '4px 10px',
        backgroundColor: style.bg,
        color: style.text,
        border: `1px solid ${style.border}`,
        borderRadius: '9999px',
        fontSize: size === 'sm' ? '0.725rem' : '0.775rem',
        fontWeight: 600,
        letterSpacing: '0.02em',
        lineHeight: 1.2,
        whiteSpace: 'nowrap'
      }}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: style.text
        }}
      />
      {status}
    </span>
  );
}
