'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { INITIAL_DRIVES } from '@/lib/mockData';

export default function UpcomingDrives() {
  const drives = INITIAL_DRIVES.slice(0, 4);

  const LOGO_COLORS: Record<string, { bg: string; color: string }> = {
    TCS: { bg: '#EAF3FF', color: '#1D6FD8' },
    INFY: { bg: '#F0EBFF', color: '#635BFF' },
    ZOHO: { bg: '#FFF1DD', color: '#EA580C' },
    ACN: { bg: '#FFEAF4', color: '#DB2777' }
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
            Upcoming Placement Drives
          </h3>
          <p style={{ fontSize: '0.78rem', color: '#64748B' }}>
            Scheduled recruitment events & deadlines
          </p>
        </div>
        <Link
          href="/admin/drives"
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        {drives.map((d) => {
          const logoStyle = LOGO_COLORS[d.companyLogo || 'TCS'] || { bg: '#F1F5F9', color: '#475569' };
          return (
            <Link
              key={d.id}
              href={`/admin/drives/${d.id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: '12px',
                border: '1px solid #F1F5F9',
                backgroundColor: '#FFFFFF',
                transition: 'all 0.18s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F8FAFD';
                e.currentTarget.style.borderColor = '#C4DCFD';
                e.currentTarget.style.transform = 'translateX(3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.borderColor = '#F1F5F9';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: logoStyle.bg,
                    color: logoStyle.color,
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    letterSpacing: '-0.02em',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  {d.companyLogo || d.companyName.substring(0, 3).toUpperCase()}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.885rem', color: '#1C2638' }}>
                    {d.companyName}
                  </div>
                  <div style={{ fontSize: '0.785rem', color: '#64748B' }}>
                    {d.role}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '0.865rem',
                    color: '#16A34A',
                    backgroundColor: '#E7FAEF',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    display: 'inline-block'
                  }}
                >
                  {d.packageText}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.745rem',
                    color: '#7C8799',
                    marginTop: '4px',
                    justifyContent: 'flex-end'
                  }}
                >
                  <Calendar size={12} />
                  <span>{d.driveDate}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
