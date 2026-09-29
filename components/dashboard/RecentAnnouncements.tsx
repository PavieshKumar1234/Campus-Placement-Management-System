'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Megaphone, Calendar, AlertCircle } from 'lucide-react';
import { INITIAL_ANNOUNCEMENTS } from '@/lib/mockData';

export default function RecentAnnouncements() {
  const announcements = INITIAL_ANNOUNCEMENTS.slice(0, 4);

  const PRIORITY_BADGES: Record<string, { bg: string; color: string; border: string }> = {
    Urgent: { bg: '#FEE2E2', color: '#DC2626', border: '#FECACA' },
    High: { bg: '#FFF1DD', color: '#EA580C', border: '#FED7AA' },
    Medium: { bg: '#EAF3FF', color: '#1D6FD8', border: '#C4DCFD' },
    Low: { bg: '#F1F5F9', color: '#64748B', border: '#E2E8F0' }
  };

  return (
    <div
      className="glow-card"
      style={{
        padding: '24px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638' }}>
            Placement Notices & Circulars
          </h3>
          <p style={{ fontSize: '0.78rem', color: '#64748B' }}>
            Official announcements issued by placement secretariat
          </p>
        </div>
        <Link
          href="/admin/announcements"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#635BFF'
          }}
        >
          View all <ArrowRight size={14} />
        </Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
        {announcements.map((ann) => {
          const badge = PRIORITY_BADGES[ann.priority] || PRIORITY_BADGES.Medium;
          return (
            <div
              key={ann.id}
              style={{
                padding: '14px',
                borderRadius: '12px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E8EDF2',
                transition: 'all 0.18s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.borderColor = '#CBD5E1';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F8FAFC';
                e.currentTarget.style.borderColor = '#E8EDF2';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span
                  style={{
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: badge.bg,
                    color: badge.color,
                    border: `1px solid ${badge.border}`
                  }}
                >
                  {ann.category} • {ann.priority}
                </span>
                <span style={{ fontSize: '0.74rem', color: '#94A3B8' }}>
                  {ann.publishedDate}
                </span>
              </div>
              <h4 style={{ fontSize: '0.885rem', fontWeight: 600, color: '#1C2638', marginBottom: '4px' }}>
                {ann.title}
              </h4>
              <p style={{ fontSize: '0.785rem', color: '#64748B', lineHeight: 1.4 }}>
                {ann.content.substring(0, 110)}...
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
