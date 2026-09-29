'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  XCircle,
  Filter,
  FileCheck2,
  AlertTriangle
} from 'lucide-react';
import { INITIAL_DRIVES, INITIAL_STUDENTS } from '@/lib/mockData';
import StatusBadge from '@/components/ui/StatusBadge';
import Button from '@/components/ui/Button';

export default function DriveDetailsPage() {
  const params = useParams();
  const driveId = params?.id as string;

  const drive = INITIAL_DRIVES.find(d => d.id === driveId) || INITIAL_DRIVES[0];
  const [eligibilityTab, setEligibilityTab] = useState<'eligible' | 'ineligible'>('eligible');

  // Compute student eligibility dynamically
  const studentsWithEligibility = INITIAL_STUDENTS.map((s) => {
    const reasons: string[] = [];
    if (s.cgpa < drive.minCgpa) {
      reasons.push(`CGPA below requirement (${s.cgpa.toFixed(2)} < ${drive.minCgpa})`);
    }
    if (s.backlogs > drive.maxBacklogs) {
      reasons.push(`Standing backlogs (${s.backlogs} > ${drive.maxBacklogs} allowed)`);
    }
    if (!drive.eligibleDepartments.includes(s.department)) {
      reasons.push(`Department (${s.department}) not eligible`);
    }
    if (s.graduationYear !== drive.graduationYear) {
      reasons.push(`Graduation year mismatch (${s.graduationYear} != ${drive.graduationYear})`);
    }

    return {
      student: s,
      isEligible: reasons.length === 0,
      reasons
    };
  });

  const eligibleList = studentsWithEligibility.filter(item => item.isEligible);
  const ineligibleList = studentsWithEligibility.filter(item => !item.isEligible);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Link
          href="/admin/drives"
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

      {/* Main Drive Header Card */}
      <div
        className="glow-card"
        style={{
          padding: '28px',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1C2638' }}>
              {drive.role}
            </h1>
            <StatusBadge status={drive.status} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748B', fontSize: '0.9rem', marginTop: '6px' }}>
            <span style={{ fontWeight: 700, color: '#635BFF' }}>{drive.companyName}</span>
            <span>•</span>
            <span>{drive.jobType}</span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={14} /> {drive.location}
            </span>
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#16A34A', letterSpacing: '-0.02em' }}>
            {drive.packageText}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
            Application Deadline: <strong>{drive.applicationDeadline}</strong>
          </div>
        </div>
      </div>

      {/* Grid: Details & Process vs Eligibility Matrix */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)', gap: '24px' }}>
        {/* Left: Criteria & Selection Pipeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Criteria Card */}
          <div className="glow-card" style={{ padding: '22px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '0.985rem', fontWeight: 700, color: '#1C2638', marginBottom: '14px' }}>
              Eligibility Criteria
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>Minimum CGPA</span>
                <span style={{ fontWeight: 700, color: '#1C2638' }}>{drive.minCgpa.toFixed(1)} / 10.0</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>Max Active Backlogs</span>
                <span style={{ fontWeight: 700, color: '#1C2638' }}>{drive.maxBacklogs}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>Target Batch</span>
                <span style={{ fontWeight: 700, color: '#1C2638' }}>Class of {drive.graduationYear}</span>
              </div>
              <div>
                <span style={{ color: '#64748B', display: 'block', marginBottom: '6px' }}>Permitted Branches</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {drive.eligibleDepartments.map((d) => (
                    <span key={d} style={{ fontSize: '0.74rem', backgroundColor: '#F0EBFF', color: '#635BFF', padding: '2px 8px', borderRadius: '6px', fontWeight: 600 }}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Selection Pipeline */}
          <div className="glow-card" style={{ padding: '22px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '0.985rem', fontWeight: 700, color: '#1C2638', marginBottom: '14px' }}>
              Selection Process Stages
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {drive.selectionProcess.map((stage, idx) => (
                <div
                  key={stage}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E8EDF2',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    color: '#263146'
                  }}
                >
                  <span
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: '#635BFF',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {idx + 1}
                  </span>
                  <span>{stage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Dynamic Eligibility UI */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            className="glow-card"
            style={{
              padding: '24px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1C2638' }}>
                  Candidate Cohort Eligibility Engine
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#64748B' }}>
                  Automated qualification checking against criteria
                </p>
              </div>

              {/* Eligibility Tabs */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setEligibilityTab('eligible')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    backgroundColor: eligibilityTab === 'eligible' ? '#E7FAEF' : '#FFFFFF',
                    color: eligibilityTab === 'eligible' ? '#15803D' : '#64748B',
                    border: '1px solid',
                    borderColor: eligibilityTab === 'eligible' ? '#BBF7D0' : '#E8EDF2'
                  }}
                >
                  <CheckCircle2 size={16} color="#16A34A" />
                  Eligible Students ({eligibleList.length})
                </button>
                <button
                  onClick={() => setEligibilityTab('ineligible')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    backgroundColor: eligibilityTab === 'ineligible' ? '#FEE2E2' : '#FFFFFF',
                    color: eligibilityTab === 'ineligible' ? '#DC2626' : '#64748B',
                    border: '1px solid',
                    borderColor: eligibilityTab === 'ineligible' ? '#FECACA' : '#E8EDF2'
                  }}
                >
                  <XCircle size={16} color="#DC2626" />
                  Not Eligible ({ineligibleList.length})
                </button>
              </div>
            </div>

            {/* List */}
            {eligibilityTab === 'eligible' ? (
              <div className="custom-table-container" style={{ border: 'none', boxShadow: 'none' }}>
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Roll No & Name</th>
                      <th>Department</th>
                      <th>CGPA</th>
                      <th>Backlogs</th>
                      <th>Eligibility Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eligibleList.map(({ student }) => (
                      <tr key={student.id}>
                        <td>
                          <div style={{ fontWeight: 600, color: '#1C2638' }}>{student.name}</div>
                          <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>{student.studentId}</div>
                        </td>
                        <td>{student.department}</td>
                        <td style={{ fontWeight: 700, color: '#16A34A' }}>{student.cgpa.toFixed(2)}</td>
                        <td>{student.backlogs}</td>
                        <td>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '3px 8px',
                              borderRadius: '20px',
                              backgroundColor: '#E7FAEF',
                              color: '#15803D',
                              fontSize: '0.75rem',
                              fontWeight: 700
                            }}
                          >
                            <CheckCircle2 size={13} /> Eligible
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="custom-table-container" style={{ border: 'none', boxShadow: 'none' }}>
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Roll No & Name</th>
                      <th>Department</th>
                      <th>CGPA</th>
                      <th>Reason for Disqualification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ineligibleList.map(({ student, reasons }) => (
                      <tr key={student.id}>
                        <td>
                          <div style={{ fontWeight: 600, color: '#1C2638' }}>{student.name}</div>
                          <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>{student.studentId}</div>
                        </td>
                        <td>{student.department}</td>
                        <td style={{ fontWeight: 700, color: student.cgpa < drive.minCgpa ? '#DC2626' : '#1C2638' }}>
                          {student.cgpa.toFixed(2)}
                        </td>
                        <td>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {reasons.map((r, idx) => (
                              <span
                                key={idx}
                                style={{
                                  fontSize: '0.75rem',
                                  color: '#DC2626',
                                  backgroundColor: '#FEE2E2',
                                  padding: '2px 8px',
                                  borderRadius: '6px',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '4px'
                                }}
                              >
                                <AlertTriangle size={12} /> {r}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
