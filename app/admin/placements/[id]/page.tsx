'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Award,
  Calendar,
  MapPin,
  Building2,
  FileCheck2,
  Download,
  CheckCircle2
} from 'lucide-react';
import { INITIAL_PLACEMENTS } from '@/lib/mockData';
import StatusBadge from '@/components/ui/StatusBadge';
import Button from '@/components/ui/Button';

export default function PlacementOfferDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const placement = INITIAL_PLACEMENTS.find(p => p.id === id) || INITIAL_PLACEMENTS[0];

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Link
          href="/admin/placements"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.885rem',
            fontWeight: 600,
            color: '#64748B'
          }}
        >
          <ArrowLeft size={16} /> Back to Placements
        </Link>
      </div>

      <div className="glow-card" style={{ padding: '32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E8EDF2', paddingBottom: '20px', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h1 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#1C2638' }}>
                Employment Offer Confirmation
              </h1>
              <StatusBadge status={placement.offerStatus} />
            </div>
            <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '4px' }}>
              Official record id: #{placement.id} • Tier: {placement.tier}
            </p>
          </div>
          <Button
            variant="secondary"
            icon={<Download size={15} />}
            onClick={() => alert('Downloading Verified Campus Offer Letter Certificate (PDF)...')}
          >
            Download Letter
          </Button>
        </div>

        {/* Big Offer Banner */}
        <div
          style={{
            padding: '24px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #E7FAEF 0%, #F0EBFF 100%)',
            border: '1px solid #BBF7D0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '28px'
          }}
        >
          <div>
            <span style={{ fontSize: '0.785rem', fontWeight: 700, color: '#15803D', textTransform: 'uppercase' }}>
              Annual CTC Package
            </span>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#15803D', letterSpacing: '-0.02em', lineHeight: 1.1, marginTop: '4px' }}>
              {placement.packageText}
            </div>
            <div style={{ fontSize: '0.825rem', color: '#475569', marginTop: '4px' }}>
              Base Salary + Performance Incentives + Retention Bonus
            </div>
          </div>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              color: '#15803D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(22, 163, 74, 0.2)'
            }}
          >
            <Award size={32} />
          </div>
        </div>

        {/* Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '0.885rem' }}>
          <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#F8FAFC', border: '1px solid #E8EDF2' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>CANDIDATE DETAILS</span>
            <div style={{ fontWeight: 700, color: '#1C2638', fontSize: '1rem', marginTop: '6px' }}>{placement.studentName}</div>
            <div style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '2px' }}>Roll: {placement.studentRollNo}</div>
            <div style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '2px' }}>Department: {placement.department}</div>
            <div style={{ color: '#15803D', fontWeight: 700, fontSize: '0.8rem', marginTop: '4px' }}>CGPA: {placement.cgpa.toFixed(2)}</div>
          </div>

          <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#F8FAFC', border: '1px solid #E8EDF2' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>COMPANY & TENURE</span>
            <div style={{ fontWeight: 700, color: '#1C2638', fontSize: '1rem', marginTop: '6px' }}>{placement.companyName}</div>
            <div style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '2px' }}>Role: {placement.role}</div>
            <div style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '2px' }}>Offer Date: {placement.offerDate}</div>
            <div style={{ color: '#1C2638', fontWeight: 600, fontSize: '0.8rem', marginTop: '4px' }}>Expected Joining: {placement.joiningDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
