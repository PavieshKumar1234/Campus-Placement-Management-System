'use client';

import React from 'react';
import { PLACEMENT_STATUS_BREAKDOWN } from '@/lib/mockData';
import { Award, Briefcase, Users, Clock } from 'lucide-react';

export default function PlacementStatus() {
  const data = PLACEMENT_STATUS_BREAKDOWN;

  const items = [
    { label: 'Placed', count: data.placed, color: '#32C98B', bg: '#E7FAEF', icon: Award },
    { label: 'Interview', count: data.interview, color: '#FFA94D', bg: '#FFF1DD', icon: Briefcase },
    { label: 'Applications', count: data.applications, color: '#4D9AF5', bg: '#EAF3FF', icon: Users },
    { label: 'Pending', count: data.pending, color: '#F5C451', bg: '#FFF7D9', icon: Clock }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Rate circle / big banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #F0EBFF 0%, #EAF3FF 100%)',
          padding: '20px',
          borderRadius: '16px',
          border: '1px solid #D8CEFE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#635BFF', textTransform: 'uppercase' }}>
            Current Placement Rate
          </span>
          <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.03em' }}>
            {data.overallPlacementRate}%
          </div>
          <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Target: 85% for 2027 Batch</span>
        </div>

        {/* Circular Progress Ring */}
        <div style={{ position: 'relative', width: '84px', height: '84px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="84" height="84" viewBox="0 0 84 84">
            <circle
              cx="42"
              cy="42"
              r="34"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="7"
            />
            <circle
              cx="42"
              cy="42"
              r="34"
              fill="none"
              stroke="#635BFF"
              strokeWidth="7"
              strokeDasharray="213.6"
              strokeDashoffset={213.6 * (1 - data.overallPlacementRate / 100)}
              strokeLinecap="round"
              transform="rotate(-90 42 42)"
            />
          </svg>
          <span style={{ position: 'absolute', fontSize: '0.9rem', fontWeight: 700, color: '#635BFF' }}>
            {data.overallPlacementRate}%
          </span>
        </div>
      </div>

      {/* Segmented Progress Bar */}
      <div>
        <div style={{ display: 'flex', height: '10px', borderRadius: '6px', overflow: 'hidden', gap: '3px' }}>
          <div style={{ flex: data.placed, backgroundColor: '#32C98B' }} title="Placed" />
          <div style={{ flex: data.interview, backgroundColor: '#FFA94D' }} title="Interview" />
          <div style={{ flex: data.pending, backgroundColor: '#F5C451' }} title="Pending" />
        </div>
      </div>

      {/* Grid of status numbers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div
              key={it.label}
              style={{
                padding: '14px',
                borderRadius: '12px',
                backgroundColor: it.bg,
                border: '1px solid #FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  color: it.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
                }}
              >
                <Icon size={18} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1C2638', lineHeight: 1.1 }}>
                  {it.count}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>
                  {it.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
