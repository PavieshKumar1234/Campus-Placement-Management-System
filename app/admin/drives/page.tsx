'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Calendar,
  Users,
  Plus,
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { INITIAL_DRIVES } from '@/lib/mockData';
import { Drive, DriveStatus } from '@/types/drive';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import DashboardCard from '@/components/ui/DashboardCard';

export default function DrivesPage() {
  const [drives] = useState<Drive[]>(INITIAL_DRIVES);
  const [activeTab, setActiveTab] = useState<'All' | DriveStatus>('All');

  const filteredDrives = activeTab === 'All' ? drives : drives.filter(d => d.status === activeTab);

  const activeCount = drives.filter(d => d.status === 'Active').length;
  const upcomingCount = drives.filter(d => d.status === 'Upcoming').length;
  const completedCount = drives.filter(d => d.status === 'Completed').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
            Placement Drives
          </h1>
          <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
            Manage campus recruitment events, eligibility thresholds, and candidate funnels
          </p>
        </div>
        <Link href="/admin/drives/create" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={16} /> Create Placement Drive
        </Link>
      </div>

      {/* KPI Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <DashboardCard
          title="Active Drives"
          value={activeCount.toString()}
          trend="Accepting"
          trendLabel="applications"
          icon={Briefcase}
          color="green"
        />
        <DashboardCard
          title="Upcoming Drives"
          value={upcomingCount.toString()}
          trend="Next 30 days"
          trendLabel="scheduled"
          icon={Calendar}
          color="blue"
        />
        <DashboardCard
          title="Completed"
          value={completedCount.toString()}
          trend="Offers rolled out"
          trendLabel="this batch"
          icon={CheckCircle2}
          color="purple"
        />
        <DashboardCard
          title="Total Registrations"
          value="1,757"
          trend="+320"
          trendLabel="this week"
          icon={Users}
          color="orange"
        />
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #E8EDF2', paddingBottom: '12px' }}>
        {(['All', 'Active', 'Upcoming', 'Completed'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: activeTab === tab ? '#635BFF' : '#FFFFFF',
              color: activeTab === tab ? '#FFFFFF' : '#64748B',
              border: '1px solid',
              borderColor: activeTab === tab ? '#635BFF' : '#E8EDF2',
              transition: 'all 0.18s ease'
            }}
          >
            {tab} Drives {tab === 'All' ? `(${drives.length})` : tab === 'Active' ? `(${activeCount})` : tab === 'Upcoming' ? `(${upcomingCount})` : `(${completedCount})`}
          </button>
        ))}
      </div>

      {/* Drives Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
        {filteredDrives.map((d) => (
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
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1C2638' }}>
                    {d.role}
                  </h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#635BFF', marginTop: '2px' }}>
                    {d.companyName}
                  </div>
                </div>
                <StatusBadge status={d.status} />
              </div>

              {/* Package & Location */}
              <div
                style={{
                  margin: '14px 0',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E8EDF2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>COMPENSATION</span>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#16A34A' }}>
                    {d.packageText}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>JOB TYPE</span>
                  <div style={{ fontSize: '0.825rem', fontWeight: 600, color: '#1C2638' }}>
                    {d.jobType}
                  </div>
                </div>
              </div>

              {/* Dates & Timeline */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.785rem', color: '#64748B' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={14} color="#EA580C" />
                  <span>Deadline: <strong style={{ color: '#1C2638' }}>{d.applicationDeadline}</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={14} color="#635BFF" />
                  <span>Drive Date: <strong style={{ color: '#1C2638' }}>{d.driveDate}</strong></span>
                </div>
              </div>

              {/* Eligibility badges */}
              <div style={{ marginTop: '14px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', marginBottom: '6px' }}>
                  Eligible Disciplines (Min CGPA {d.minCgpa}):
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {d.eligibleDepartments.map((dept) => (
                    <span
                      key={dept}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        backgroundColor: '#F1F5F9',
                        color: '#475569',
                        padding: '2px 8px',
                        borderRadius: '6px'
                      }}
                    >
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer with counts and link */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #F1F5F9',
                paddingTop: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748B' }}>
                <Users size={15} />
                <span><strong>{d.applicantCount}</strong> applicants</span>
              </div>
              <Link
                href={`/admin/drives/${d.id}`}
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                View & Eligibility <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
