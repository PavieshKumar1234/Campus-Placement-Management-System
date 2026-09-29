'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  Check,
  Search,
  ArrowRight
} from 'lucide-react';
import { INITIAL_DRIVES, INITIAL_STUDENTS } from '@/lib/mockData';
import { Drive } from '@/types/drive';
import Button from '@/components/ui/Button';

export default function StudentDrivesPage() {
  const currentStudent = INITIAL_STUDENTS[0]; // Arun Kumar (CSE, CGPA 8.92)
  const [drives] = useState<Drive[]>(INITIAL_DRIVES);
  const [appliedDriveIds, setAppliedDriveIds] = useState<string[]>(['drv-1']);
  const [search, setSearch] = useState('');

  const handleApply = (driveId: string, role: string, company: string) => {
    setAppliedDriveIds(prev => [...prev, driveId]);
    alert(`Successfully applied for "${role}" at ${company}! Application tracking status has been initiated.`);
  };

  const filtered = drives.filter(d =>
    d.companyName.toLowerCase().includes(search.toLowerCase()) ||
    d.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
          Campus Placement Drives
        </h1>
        <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
          Explore corporate job opportunities, check your eligibility status, and submit online applications
        </p>
      </div>

      {/* Search */}
      <div className="glow-card" style={{ padding: '16px 20px' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
          <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '12px' }} />
          <input
            type="text"
            placeholder="Search drive by company or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field"
            style={{ paddingLeft: '36px' }}
          />
        </div>
      </div>

      {/* Grid of Drives */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
        {filtered.map((d) => {
          const isEligible =
            currentStudent.cgpa >= d.minCgpa &&
            currentStudent.backlogs <= d.maxBacklogs &&
            d.eligibleDepartments.includes(currentStudent.department) &&
            currentStudent.graduationYear === d.graduationYear;

          const hasApplied = appliedDriveIds.includes(d.id);
          const isClosed = d.status === 'Completed';

          return (
            <div
              key={d.id}
              className="glow-card"
              style={{
                padding: '24px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                  <div>
                    <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#635BFF', backgroundColor: '#F0EBFF', padding: '2px 8px', borderRadius: '4px' }}>
                      {d.companyName}
                    </span>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1C2638', marginTop: '6px' }}>
                      {d.role}
                    </h3>
                  </div>

                  {/* Status Indicator Pill */}
                  {hasApplied ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', borderRadius: '20px', backgroundColor: '#F0EBFF', color: '#635BFF', fontSize: '0.75rem', fontWeight: 700, border: '1px solid #D8CEFE' }}>
                      <Check size={12} /> Applied
                    </span>
                  ) : isClosed ? (
                    <span style={{ padding: '4px 10px', borderRadius: '20px', backgroundColor: '#F1F5F9', color: '#64748B', fontSize: '0.75rem', fontWeight: 700 }}>
                      Closed
                    </span>
                  ) : isEligible ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', borderRadius: '20px', backgroundColor: '#E7FAEF', color: '#15803D', fontSize: '0.75rem', fontWeight: 700, border: '1px solid #BBF7D0' }}>
                      <CheckCircle2 size={12} /> Eligible
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', borderRadius: '20px', backgroundColor: '#FEE2E2', color: '#DC2626', fontSize: '0.75rem', fontWeight: 700, border: '1px solid #FECACA' }}>
                      <XCircle size={12} /> Not Eligible
                    </span>
                  )}
                </div>

                <div style={{ margin: '14px 0', padding: '12px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #E8EDF2', display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>COMPENSATION</span>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#16A34A' }}>{d.packageText}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>MIN CGPA</span>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1C2638' }}>{d.minCgpa}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.785rem', color: '#64748B' }}>
                  <div>Deadline: <strong style={{ color: '#1C2638' }}>{d.applicationDeadline}</strong></div>
                  <div>Drive Date: <strong style={{ color: '#1C2638' }}>{d.driveDate}</strong></div>
                  <div>Location: <strong>{d.location}</strong></div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '14px' }}>
                <Link href={`/student/drives/${d.id}`} style={{ fontSize: '0.8rem', fontWeight: 600, color: '#635BFF', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  View Full Details <ArrowRight size={14} />
                </Link>

                {hasApplied ? (
                  <Button variant="secondary" size="sm" disabled>
                    Application Submitted
                  </Button>
                ) : isClosed ? (
                  <Button variant="secondary" size="sm" disabled>
                    Drive Closed
                  </Button>
                ) : isEligible ? (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleApply(d.id, d.role, d.companyName)}
                  >
                    Apply Now
                  </Button>
                ) : (
                  <Button variant="secondary" size="sm" disabled title="Criteria not met">
                    Not Eligible
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
