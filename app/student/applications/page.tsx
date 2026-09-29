'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileText,
  CheckCircle2,
  Clock,
  ArrowRight,
  Building2,
  Calendar,
  Check
} from 'lucide-react';
import { INITIAL_APPLICATIONS, INITIAL_STUDENTS } from '@/lib/mockData';
import StatusBadge from '@/components/ui/StatusBadge';

const STAGES = ['Applied', 'Shortlisted', 'Aptitude', 'Technical', 'HR', 'Selected'];

export default function StudentApplicationsPage() {
  const student = INITIAL_STUDENTS[0];
  const applications = INITIAL_APPLICATIONS.filter(a => a.studentId === student.id || a.studentRollNo === student.studentId);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
          My Applications & Selection Timelines
        </h1>
        <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
          Real-time milestones across online assessments, coding rounds, and technical panels
        </p>
      </div>

      {/* Applications Timeline Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {applications.map((app) => {
          const currentIdx = STAGES.indexOf(app.currentStage);

          return (
            <div
              key={app.id}
              className="glow-card"
              style={{
                padding: '28px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1C2638' }}>
                      {app.role}
                    </h3>
                    <StatusBadge status={app.currentStage} />
                  </div>
                  <div style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
                    Company: <strong style={{ color: '#635BFF' }}>{app.companyName}</strong> • Applied on {app.appliedDate}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#64748B' }}>COMPENSATION</span>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#16A34A' }}>
                    {app.packageText}
                  </div>
                </div>
              </div>

              {/* Step Timeline */}
              <div style={{ padding: '20px', borderRadius: '16px', backgroundColor: '#F8FAFC', border: '1px solid #E8EDF2', overflowX: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '600px', position: 'relative' }}>
                  {STAGES.map((stg, idx) => {
                    const isCompleted = idx < currentIdx;
                    const isCurrent = idx === currentIdx;
                    const isUpcoming = idx > currentIdx;

                    return (
                      <div key={stg} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 2, position: 'relative' }}>
                        <div
                          style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            backgroundColor: isCompleted ? '#16A34A' : isCurrent ? '#635BFF' : '#FFFFFF',
                            color: isCompleted || isCurrent ? '#FFFFFF' : '#94A3B8',
                            border: `2px solid ${isCompleted ? '#16A34A' : isCurrent ? '#635BFF' : '#E2E8F0'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 800,
                            fontSize: '0.85rem',
                            boxShadow: isCurrent ? '0 0 0 4px rgba(99, 91, 255, 0.2)' : 'none'
                          }}
                        >
                          {isCompleted ? <Check size={18} strokeWidth={3} /> : idx + 1}
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '0.8rem', fontWeight: isCurrent ? 700 : 600, color: isCurrent ? '#635BFF' : isCompleted ? '#1C2638' : '#94A3B8' }}>
                            {stg}
                          </div>
                          <div style={{ fontSize: '0.7rem', color: isCurrent ? '#635BFF' : '#94A3B8' }}>
                            {isCompleted ? 'Cleared ✓' : isCurrent ? 'In Review' : 'Upcoming'}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer Note */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748B' }}>
                <span>Latest Update: <strong style={{ color: '#1C2638' }}>{app.stageStatus}</strong></span>
                <span style={{ fontStyle: 'italic' }}>Recruitment cell updates within 48 hours of test completion</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
