'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Calendar,
  Building2,
  FileCheck2,
  User,
  GraduationCap
} from 'lucide-react';
import { INITIAL_APPLICATIONS } from '@/lib/mockData';
import { ApplicationStage } from '@/types/application';
import StatusBadge from '@/components/ui/StatusBadge';
import Button from '@/components/ui/Button';

export default function ApplicationDetailsPage() {
  const params = useParams();
  const appId = params?.id as string;

  const initialApp = INITIAL_APPLICATIONS.find(a => a.id === appId) || INITIAL_APPLICATIONS[0];
  const [app, setApp] = useState(initialApp);

  const handleStageChange = (newStage: ApplicationStage) => {
    setApp(prev => ({
      ...prev,
      currentStage: newStage,
      stageStatus: newStage === 'Selected' ? 'Offer Extended' : newStage === 'Rejected' ? 'Failed' : 'In Review',
      updatedAt: '2026-09-29'
    }));
    alert(`Application stage moved to: ${newStage}`);
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Link
          href="/admin/applications"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.885rem',
            fontWeight: 600,
            color: '#64748B'
          }}
        >
          <ArrowLeft size={16} /> Back to Applications
        </Link>
      </div>

      <div className="glow-card" style={{ padding: '32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E8EDF2', paddingBottom: '20px', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h1 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#1C2638' }}>
                Application #{app.id}
              </h1>
              <StatusBadge status={app.currentStage} />
            </div>
            <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '4px' }}>
              Applied on {app.appliedDate} • Last updated {app.updatedAt}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>OFFER CTC</span>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#16A34A' }}>
              {app.packageText}
            </div>
          </div>
        </div>

        {/* Candidate & Drive Summary */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px' }}>
          <div style={{ padding: '18px', borderRadius: '12px', backgroundColor: '#F8FAFC', border: '1px solid #E8EDF2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: '#635BFF', fontWeight: 700, fontSize: '0.85rem' }}>
              <User size={16} />
              <span>CANDIDATE DOSSIER</span>
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1C2638' }}>{app.studentName}</div>
            <div style={{ fontSize: '0.825rem', color: '#64748B', marginTop: '4px' }}>
              Roll: {app.studentRollNo} • {app.department}
            </div>
            <div style={{ fontSize: '0.825rem', color: '#64748B', marginTop: '2px' }}>
              Email: {app.studentEmail}
            </div>
            <div style={{ marginTop: '8px' }}>
              <span style={{ fontSize: '0.825rem', fontWeight: 700, color: '#16A34A' }}>CGPA: {app.cgpa.toFixed(2)}</span>
            </div>
          </div>

          <div style={{ padding: '18px', borderRadius: '12px', backgroundColor: '#F8FAFC', border: '1px solid #E8EDF2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: '#4D9AF5', fontWeight: 700, fontSize: '0.85rem' }}>
              <Building2 size={16} />
              <span>RECRUITMENT DRIVE</span>
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1C2638' }}>{app.companyName}</div>
            <div style={{ fontSize: '0.825rem', color: '#64748B', marginTop: '4px' }}>
              Designation: {app.role}
            </div>
            <div style={{ fontSize: '0.825rem', color: '#64748B', marginTop: '2px' }}>
              Status: {app.stageStatus}
            </div>
            {app.notes && (
              <div style={{ marginTop: '8px', fontSize: '0.785rem', color: '#475569', fontStyle: 'italic' }}>
                Note: {app.notes}
              </div>
            )}
          </div>
        </div>

        {/* Change Stage Actions */}
        <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '20px' }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1C2638', marginBottom: '14px' }}>
            Update Application Pipeline Stage
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {(['Shortlisted', 'Aptitude', 'Technical', 'HR', 'Selected', 'Rejected'] as ApplicationStage[]).map((stg) => (
              <Button
                key={stg}
                variant={stg === 'Selected' ? 'success' : stg === 'Rejected' ? 'danger' : 'secondary'}
                size="sm"
                onClick={() => handleStageChange(stg)}
              >
                Mark as {stg}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
