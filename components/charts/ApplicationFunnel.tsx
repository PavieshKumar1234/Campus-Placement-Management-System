'use client';

import React from 'react';
import { APPLICATION_FUNNEL_DATA } from '@/lib/mockData';

export default function ApplicationFunnel() {
  const max = APPLICATION_FUNNEL_DATA[0].count;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {APPLICATION_FUNNEL_DATA.map((stage, idx) => {
        const pct = Math.round((stage.count / max) * 100);
        return (
          <div key={stage.stage}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: '#F1F5F9',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#475569'
                  }}
                >
                  {idx + 1}
                </span>
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1C2638' }}>
                  {stage.stage}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1C2638' }}>
                  {stage.count.toLocaleString()}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748B', width: '36px', textAlign: 'right' }}>
                  {pct}%
                </span>
              </div>
            </div>

            <div
              style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#F8FAFC',
                borderRadius: '9999px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  width: `${pct}%`,
                  height: '100%',
                  backgroundColor: stage.fill,
                  borderRadius: '9999px',
                  transition: 'width 0.6s ease'
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
