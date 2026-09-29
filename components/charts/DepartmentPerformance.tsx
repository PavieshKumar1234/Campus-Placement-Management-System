'use client';

import React from 'react';
import { DEPARTMENT_PERFORMANCE_DATA } from '@/lib/mockData';

export default function DepartmentPerformance() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {DEPARTMENT_PERFORMANCE_DATA.map((dept) => (
        <div key={dept.department}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  padding: '3px 8px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backgroundColor: `${dept.color}18`,
                  color: dept.color,
                  border: `1px solid ${dept.color}33`
                }}
              >
                {dept.department}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 500 }}>
                {dept.placedStudents} / {dept.totalStudents} placed
              </span>
            </div>
            <span style={{ fontSize: '0.885rem', fontWeight: 700, color: '#1C2638' }}>
              {dept.percentage}%
            </span>
          </div>

          {/* Progress Track */}
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
                width: `${dept.percentage}%`,
                height: '100%',
                backgroundColor: dept.color,
                borderRadius: '9999px',
                transition: 'width 0.8s ease-in-out'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
