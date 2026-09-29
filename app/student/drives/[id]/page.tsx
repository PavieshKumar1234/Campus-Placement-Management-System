'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  Building2,
  FileCheck2,
  Check
} from 'lucide-react';
import { INITIAL_DRIVES, INITIAL_STUDENTS } from '@/lib/mockData';
import Button from '@/components/ui/Button';

export default function StudentDriveDetailPage() {
  const params = useParams();
  const driveId = params?.id as string;
  const drive = INITIAL_DRIVES.find(d => d.id === driveId) || INITIAL_DRIVES[0];
  const student = INITIAL_STUDENTS[0];

  const [hasApplied, setHasApplied] = useState(drive.id === 'drv-1');

  const isEligible =
    student.cgpa >= drive.minCgpa &&
    student.backlogs <= drive.maxBacklogs &&
    drive.eligibleDepartments.includes(student.department);

  const handleApply = () => {
    setHasApplied(true);
    alert(`Application successfully submitted for ${drive.role} at ${drive.companyName}!`);
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Link
          href="/student/drives"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.885rem',
            fontWeight: 600,
            color: '#64748B'
          }}
        >
          <ArrowLeft size={16} /> Back to Drives
        </Link>
      </div>

      <div className="glow-card" style={{ padding: '32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', borderBottom: '1px solid #E8EDF2', paddingBottom: '20px', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '0.785rem', fontWeight: 700, color: '#635BFF', backgroundColor: '#F0EBFF', padding: '3px 10px', borderRadius: '4px' }}>
              {drive.companyName}
            </span>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1C2638', marginTop: '8px' }}>
              {drive.role}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748B', fontSize: '0.85rem', marginTop: '6px' }}>
              <span>Job Type: <strong>{drive.jobType}</strong></span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={14} /> {drive.location}
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>ANNUAL CTC</span>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#16A34A', letterSpacing: '-0.02em' }}>
              {drive.packageText}
            </div>
          </div>
        </div>

        {/* Eligibility Status Banner */}
        <div
          style={{
            padding: '16px 20px',
            borderRadius: '12px',
            backgroundColor: isEligible ? '#E7FAEF' : '#FEE2E2',
            border: '1px solid',
            borderColor: isEligible ? '#BBF7D0' : '#FECACA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {isEligible ? <CheckCircle2 size={24} color="#16A34A" /> : <XCircle size={24} color="#DC2626" />}
            <div>
              <div style={{ fontWeight: 700, color: isEligible ? '#15803D' : '#991B1B', fontSize: '0.95rem' }}>
                {isEligible ? 'You Meet All Eligibility Criteria for This Drive' : 'You Are Ineligible for This Drive'}
              </div>
              <div style={{ fontSize: '0.8rem', color: isEligible ? '#166534' : '#B91C1C' }}>
                Your CGPA: {student.cgpa} (Min required: {drive.minCgpa}) • Backlogs: {student.backlogs} • Branch: {student.department}
              </div>
            </div>
          </div>

          {isEligible && (
            hasApplied ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#635BFF', fontSize: '0.85rem' }}>
                <Check size={16} /> Applied
              </span>
            ) : (
              <Button variant="primary" onClick={handleApply}>
                Apply Now
              </Button>
            )
          )}
        </div>

        {/* Description & Selection Pipeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638', marginBottom: '8px' }}>
              Role Overview & Responsibilities
            </h3>
            <p style={{ fontSize: '0.885rem', color: '#475569', lineHeight: 1.6 }}>
              {drive.description}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638', marginBottom: '8px' }}>
              Selection Process Pipeline
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {drive.selectionProcess.map((round, idx) => (
                <div key={round} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#1C2638' }}>
                  <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#F0EBFF', color: '#635BFF', fontWeight: 700, fontSize: '0.72rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {idx + 1}
                  </span>
                  <span>{round}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
