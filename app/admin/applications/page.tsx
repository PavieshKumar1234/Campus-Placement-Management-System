'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  UserCheck,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Filter,
  Eye,
  ArrowRight
} from 'lucide-react';
import { INITIAL_APPLICATIONS } from '@/lib/mockData';
import { Application, ApplicationStage } from '@/types/application';
import StatusBadge from '@/components/ui/StatusBadge';
import DashboardCard from '@/components/ui/DashboardCard';

const PIPELINE_STAGES: ApplicationStage[] = [
  'Applied',
  'Shortlisted',
  'Aptitude',
  'Technical',
  'HR',
  'Selected',
  'Rejected'
];

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>(INITIAL_APPLICATIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [stageFilter, setStageFilter] = useState('All');
  const [deptFilter, setDeptFilter] = useState('All');

  const filtered = applications.filter((app) => {
    const matchesSearch =
      app.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.studentRollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStage = stageFilter === 'All' || app.currentStage === stageFilter;
    const matchesDept = deptFilter === 'All' || app.department === deptFilter;
    return matchesSearch && matchesStage && matchesDept;
  });

  const totalApplied = applications.length;
  const totalShortlisted = applications.filter(a => a.currentStage === 'Shortlisted').length;
  const totalInterview = applications.filter(a => a.currentStage === 'Technical' || a.currentStage === 'HR').length;
  const totalSelected = applications.filter(a => a.currentStage === 'Selected').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
          Application Pipeline & Submissions
        </h1>
        <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
          Track candidate progression through multi-tier screening and assessment rounds
        </p>
      </div>

      {/* KPI Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <DashboardCard
          title="Total Applications"
          value={totalApplied.toString()}
          trend="+18%"
          trendLabel="this month"
          icon={FileText}
          color="blue"
        />
        <DashboardCard
          title="Shortlisted"
          value={totalShortlisted.toString()}
          trend="Screened"
          trendLabel="for tests"
          icon={UserCheck}
          color="purple"
        />
        <DashboardCard
          title="Interview Stage"
          value={totalInterview.toString()}
          trend="In rounds"
          trendLabel="this week"
          icon={Clock}
          color="orange"
        />
        <DashboardCard
          title="Selected / Offers"
          value={totalSelected.toString()}
          trend="Final offers"
          trendLabel="accepted"
          icon={CheckCircle}
          color="green"
        />
      </div>

      {/* Interactive Visual Pipeline Stages */}
      <div
        className="glow-card"
        style={{
          padding: '20px',
          backgroundColor: '#FFFFFF',
          overflowX: 'auto'
        }}
      >
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Hiring Pipeline Progression Stages
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '12px', minWidth: '720px' }}>
          {PIPELINE_STAGES.map((stage, idx) => {
            const count = applications.filter(a => a.currentStage === stage).length;
            const isFilterActive = stageFilter === stage;
            return (
              <React.Fragment key={stage}>
                <button
                  onClick={() => setStageFilter(isFilterActive ? 'All' : stage)}
                  style={{
                    flex: 1,
                    padding: '12px 10px',
                    borderRadius: '12px',
                    backgroundColor: isFilterActive ? '#635BFF' : '#F8FAFC',
                    border: '1px solid',
                    borderColor: isFilterActive ? '#635BFF' : '#E8EDF2',
                    color: isFilterActive ? '#FFFFFF' : '#1C2638',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: isFilterActive ? '#E0E7FF' : '#64748B' }}>
                    {stage}
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '2px' }}>
                    {count}
                  </div>
                </button>
                {idx < PIPELINE_STAGES.length - 1 && (
                  <ArrowRight size={16} color="#CBD5E1" style={{ flexShrink: 0 }} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div
        className="glow-card"
        style={{
          padding: '16px 20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px'
        }}
      >
        <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
          <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '12px' }} />
          <input
            type="text"
            placeholder="Search candidate, company, role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field"
            style={{ paddingLeft: '36px' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Filter size={15} color="#64748B" />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748B' }}>Stage:</span>
            <select
              value={stageFilter}
              onChange={(e) => setStageFilter(e.target.value)}
              className="input-field"
              style={{ width: 'auto', padding: '6px 12px', fontSize: '0.825rem' }}
            >
              <option value="All">All Stages</option>
              {PIPELINE_STAGES.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748B' }}>Dept:</span>
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="input-field"
              style={{ width: 'auto', padding: '6px 12px', fontSize: '0.825rem' }}
            >
              <option value="All">All Departments</option>
              <option value="CSE">CSE</option>
              <option value="AIML">AIML</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="Mechanical">Mechanical</option>
            </select>
          </div>
        </div>
      </div>

      {/* Applications Table */}
      <div className="custom-table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Company & Role</th>
              <th>CGPA</th>
              <th>Package</th>
              <th>Applied Date</th>
              <th>Pipeline Stage</th>
              <th>Stage Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((app) => (
              <tr key={app.id}>
                <td>
                  <div style={{ fontWeight: 600, color: '#1C2638' }}>{app.studentName}</div>
                  <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>{app.studentRollNo} • {app.department}</div>
                </td>
                <td>
                  <div style={{ fontWeight: 600, color: '#1C2638' }}>{app.companyName}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{app.role}</div>
                </td>
                <td>
                  <span style={{ fontWeight: 700, color: app.cgpa >= 8.5 ? '#16A34A' : '#1C2638' }}>
                    {app.cgpa.toFixed(2)}
                  </span>
                </td>
                <td>{app.packageText}</td>
                <td style={{ fontSize: '0.8rem', color: '#7C8799' }}>{app.appliedDate}</td>
                <td>
                  <StatusBadge status={app.currentStage} />
                </td>
                <td>
                  <span style={{ fontSize: '0.785rem', fontWeight: 600, color: '#475569' }}>
                    {app.stageStatus}
                  </span>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <Link
                    href={`/admin/applications/${app.id}`}
                    className="btn-icon"
                    style={{ width: '32px', height: '32px' }}
                    title="View Details"
                  >
                    <Eye size={15} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
