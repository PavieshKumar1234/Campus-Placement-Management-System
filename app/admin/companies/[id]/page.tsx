'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Globe,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Users,
  Award,
  ExternalLink
} from 'lucide-react';
import { INITIAL_COMPANIES, INITIAL_DRIVES, INITIAL_PLACEMENTS } from '@/lib/mockData';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';

export default function CompanyDetailsPage() {
  const params = useParams();
  const companyId = params?.id as string;

  const company = INITIAL_COMPANIES.find(c => c.id === companyId) || INITIAL_COMPANIES[0];
  const drives = INITIAL_DRIVES.filter(d => d.companyId === company.id || d.companyName.toLowerCase().includes(company.name.toLowerCase()));
  const hires = INITIAL_PLACEMENTS.filter(p => p.companyName.toLowerCase().includes(company.name.toLowerCase()) || company.name.toLowerCase().includes(p.companyName.toLowerCase()));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Back button */}
      <div>
        <Link
          href="/admin/companies"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.885rem',
            fontWeight: 600,
            color: '#64748B'
          }}
        >
          <ArrowLeft size={16} /> Back to Companies
        </Link>
      </div>

      {/* Main Company Header Card */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '74px',
              height: '74px',
              borderRadius: '20px',
              backgroundColor: '#F0EBFF',
              color: '#635BFF',
              fontSize: '1.65rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #D8CEFE',
              boxShadow: '0 8px 20px rgba(99, 91, 255, 0.2)'
            }}
          >
            {company.logo}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1C2638' }}>
                {company.name}
              </h1>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backgroundColor: '#FFEAF4',
                  color: '#DB2777',
                  border: '1px solid #FBCFE8'
                }}
              >
                {company.tier}
              </span>
            </div>
            <p style={{ fontSize: '0.865rem', color: '#64748B', marginTop: '4px' }}>
              {company.industry} • Headquarters: {company.headquarters}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <a
            href={company.website}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Globe size={15} /> Company Website <ExternalLink size={13} />
          </a>
          <Link href="/admin/drives/create" className="btn btn-primary">
            Schedule Drive
          </Link>
        </div>
      </div>

      {/* Grid: Recruiter Info & Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)', gap: '24px' }}>
        {/* Left Column: Recruiter and Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Recruiter Card */}
          <div className="glow-card" style={{ padding: '22px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '0.985rem', fontWeight: 700, color: '#1C2638', marginBottom: '14px' }}>
              Key Recruiter Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <div style={{ fontWeight: 700, color: '#1C2638', fontSize: '0.95rem' }}>
                {company.recruiter.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                {company.recruiter.designation}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#475569' }}>
                <Mail size={16} color="#635BFF" />
                <span>{company.recruiter.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#475569' }}>
                <Phone size={16} color="#32C98B" />
                <span>{company.recruiter.phone}</span>
              </div>
            </div>
          </div>

          {/* Hiring Snapshot */}
          <div className="glow-card" style={{ padding: '22px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '0.985rem', fontWeight: 700, color: '#1C2638', marginBottom: '14px' }}>
              Hiring Snapshot
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ fontSize: '0.825rem', color: '#64748B' }}>Package Range</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#16A34A' }}>{company.packageRange}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ fontSize: '0.825rem', color: '#64748B' }}>Total Hired (Campus)</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1C2638' }}>{company.totalHired} students</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                <span style={{ fontSize: '0.825rem', color: '#64748B' }}>Partner Rating</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#D97706' }}>★ {company.rating} / 5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Drives & Hired Candidates */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Drives */}
          <div className="glow-card" style={{ padding: '24px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638', marginBottom: '16px' }}>
              Placement Recruitment Drives
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {drives.length === 0 ? (
                <p style={{ color: '#94A3B8', fontSize: '0.85rem' }}>No drives currently scheduled.</p>
              ) : (
                drives.map((d) => (
                  <div
                    key={d.id}
                    style={{
                      padding: '16px',
                      borderRadius: '12px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E8EDF2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: '#1C2638', fontSize: '0.95rem' }}>{d.role}</div>
                      <div style={{ fontSize: '0.785rem', color: '#64748B', marginTop: '2px' }}>
                        Drive Date: {d.driveDate} • Deadline: {d.applicationDeadline}
                      </div>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
                        {d.eligibleDepartments.map(dep => (
                          <span key={dep} style={{ fontSize: '0.7rem', padding: '1px 6px', backgroundColor: '#E2E8F0', borderRadius: '4px' }}>
                            {dep}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#16A34A', marginBottom: '4px' }}>
                        {d.packageText}
                      </div>
                      <StatusBadge status={d.status} size="sm" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Hired Students Table */}
          <div className="glow-card" style={{ padding: '24px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638', marginBottom: '16px' }}>
              Recently Selected Candidates
            </h3>
            <div className="custom-table-container" style={{ border: 'none', boxShadow: 'none' }}>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Department</th>
                    <th>Role</th>
                    <th>Package</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {hires.length === 0 ? (
                    <tr>
                      <td colSpan={5} style={{ textAlign: 'center', color: '#94A3B8' }}>Selections will appear after interview rounds complete.</td>
                    </tr>
                  ) : (
                    hires.map((h) => (
                      <tr key={h.id}>
                        <td>
                          <div style={{ fontWeight: 600, color: '#1C2638' }}>{h.studentName}</div>
                          <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>{h.studentRollNo}</div>
                        </td>
                        <td>{h.department}</td>
                        <td>{h.role}</td>
                        <td style={{ fontWeight: 700, color: '#16A34A' }}>{h.packageText}</td>
                        <td><StatusBadge status={h.offerStatus} size="sm" /></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
