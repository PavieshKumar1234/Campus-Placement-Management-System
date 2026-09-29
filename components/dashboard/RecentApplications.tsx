'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import StatusBadge from '@/components/ui/StatusBadge';
import { INITIAL_APPLICATIONS } from '@/lib/mockData';

export default function RecentApplications() {
  const applications = INITIAL_APPLICATIONS.slice(0, 5);

  return (
    <div
      className="glow-card"
      style={{
        padding: '24px',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638' }}>
            Recent Applications
          </h3>
          <p style={{ fontSize: '0.78rem', color: '#64748B' }}>
            Latest candidate submissions across active drives
          </p>
        </div>
        <Link
          href="/admin/applications"
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

      <div className="custom-table-container" style={{ border: 'none', boxShadow: 'none' }}>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Company</th>
              <th>Role</th>
              <th>CGPA</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>
                  <div style={{ fontWeight: 600, color: '#1C2638' }}>{app.studentName}</div>
                  <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>{app.studentRollNo} • {app.department}</div>
                </td>
                <td>
                  <span style={{ fontWeight: 600, color: '#263146' }}>{app.companyName}</span>
                </td>
                <td style={{ color: '#475569' }}>
                  {app.role}
                </td>
                <td>
                  <span
                    style={{
                      fontWeight: 700,
                      color: app.cgpa >= 8.5 ? '#16A34A' : '#1C2638'
                    }}
                  >
                    {app.cgpa.toFixed(2)}
                  </span>
                </td>
                <td>
                  <StatusBadge status={app.currentStage} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
