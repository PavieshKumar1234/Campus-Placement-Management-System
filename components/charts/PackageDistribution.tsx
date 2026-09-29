'use client';

import React from 'react';
import { PACKAGE_DISTRIBUTION_DATA } from '@/lib/mockData';

export default function PackageDistribution() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {PACKAGE_DISTRIBUTION_DATA.map((item) => (
        <div key={item.range}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1C2638' }}>
              {item.range}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                {item.count} offers
              </span>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: item.color,
                  backgroundColor: `${item.color}15`,
                  padding: '1px 6px',
                  borderRadius: '4px'
                }}
              >
                {item.percentage}%
              </span>
            </div>
          </div>

          <div
            style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#F1F5F9',
              borderRadius: '9999px',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: `${item.percentage}%`,
                height: '100%',
                backgroundColor: item.color,
                borderRadius: '9999px'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
