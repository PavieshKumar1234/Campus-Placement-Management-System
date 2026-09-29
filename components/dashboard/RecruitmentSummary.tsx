'use client';

import React from 'react';
import { RECRUITMENT_SUMMARY } from '@/lib/mockData';
import { FileText, UserCheck, Video, Gift } from 'lucide-react';

export default function RecruitmentSummary() {
  const cards = [
    { label: 'Applications', value: RECRUITMENT_SUMMARY.applications.toLocaleString(), bg: '#EAF3FF', text: '#1D6FD8', border: '#C4DCFD', icon: FileText },
    { label: 'Shortlisted', value: RECRUITMENT_SUMMARY.shortlisted.toLocaleString(), bg: '#F0EBFF', text: '#635BFF', border: '#D8CEFE', icon: UserCheck },
    { label: 'Interviews', value: RECRUITMENT_SUMMARY.interviews.toLocaleString(), bg: '#FFF1DD', text: '#C2410C', border: '#FED7AA', icon: Video },
    { label: 'Offers', value: RECRUITMENT_SUMMARY.offers.toLocaleString(), bg: '#E7FAEF', text: '#15803D', border: '#BBF7D0', icon: Gift }
  ];

  return (
    <div
      className="glow-card"
      style={{
        padding: '22px',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1C2638' }}>
          Recruitment Pipeline Summary
        </h3>
        <span style={{ fontSize: '0.785rem', color: '#64748B', fontWeight: 500 }}>
          Conversion Funnel
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.label}
              style={{
                padding: '16px',
                borderRadius: '14px',
                backgroundColor: c.bg,
                border: `1px solid ${c.border}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                transition: 'transform 0.18s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: c.text, textTransform: 'uppercase' }}>
                  {c.label}
                </span>
                <Icon size={16} color={c.text} />
              </div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
                {c.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
