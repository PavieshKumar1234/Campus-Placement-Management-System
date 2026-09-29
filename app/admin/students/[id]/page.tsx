'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  Briefcase,
  FileText,
  Calendar,
  ExternalLink,
  Code
} from 'lucide-react';
import { INITIAL_STUDENTS, INITIAL_APPLICATIONS, INITIAL_INTERVIEWS, INITIAL_PLACEMENTS } from '@/lib/mockData';
import StatusBadge from '@/components/ui/StatusBadge';
import Button from '@/components/ui/Button';

export default function StudentDetailsPage() {
  const params = useParams();
  const studentId = params?.id as string;

  const student = INITIAL_STUDENTS.find(s => s.id === studentId || s.studentId === studentId) || INITIAL_STUDENTS[0];
  const applications = INITIAL_APPLICATIONS.filter(a => a.studentId === student.id || a.studentRollNo === student.studentId);
  const interviews = INITIAL_INTERVIEWS.filter(i => i.studentId === student.id || i.studentRollNo === student.studentId);
  const offers = INITIAL_PLACEMENTS.filter(p => p.studentId === student.id || p.studentRollNo === student.studentId);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Breadcrumb & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link
          href="/admin/students"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.885rem',
            fontWeight: 600,
            color: '#64748B'
          }}
        >
          <ArrowLeft size={16} /> Back to Students
        </Link>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button variant="secondary" onClick={() => window.print()}>
            Print Dossier
          </Button>
        </div>
      </div>

      {/* Main Student Header Card */}
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
              background: 'linear-gradient(135deg, #635BFF 0%, #4D9AF5 100%)',
              color: '#FFFFFF',
              fontSize: '1.65rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(99, 91, 255, 0.25)'
            }}
          >
            {student.name.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1C2638' }}>
                {student.name}
              </h1>
              <StatusBadge status={student.placementStatus} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748B', fontSize: '0.85rem', marginTop: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 600, color: '#635BFF' }}>{student.studentId}</span>
              <span>•</span>
              <span>{student.department} Engineering</span>
              <span>•</span>
              <span>Class of {student.graduationYear}</span>
            </div>
          </div>
        </div>

        {/* Quick KPI stats */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ padding: '12px 18px', backgroundColor: '#F8FAFC', borderRadius: '12px', border: '1px solid #E8EDF2', textAlign: 'center' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>CGPA</span>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#16A34A' }}>{student.cgpa.toFixed(2)}</div>
          </div>
          <div style={{ padding: '12px 18px', backgroundColor: '#F8FAFC', borderRadius: '12px', border: '1px solid #E8EDF2', textAlign: 'center' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Backlogs</span>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: student.backlogs === 0 ? '#16A34A' : '#DC2626' }}>{student.backlogs}</div>
          </div>
          <div style={{ padding: '12px 18px', backgroundColor: '#F0EBFF', borderRadius: '12px', border: '1px solid #D8CEFE', textAlign: 'center' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#635BFF', textTransform: 'uppercase' }}>Offers</span>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#635BFF' }}>{student.offersCount}</div>
          </div>
        </div>
      </div>

      {/* Grid: Left Dossier / Right Career Activities */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)', gap: '24px' }}>
        {/* Left Column: Personal, Contact & Skills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Contact Details */}
          <div className="glow-card" style={{ padding: '22px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '0.985rem', fontWeight: 700, color: '#1C2638', marginBottom: '14px' }}>
              Contact & Personal Information
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#475569' }}>
                <Mail size={16} color="#635BFF" />
                <span>{student.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#475569' }}>
                <Phone size={16} color="#32C98B" />
                <span>{student.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#475569' }}>
                <MapPin size={16} color="#FFA94D" />
                <span>{student.address || 'Chennai, Tamil Nadu'}</span>
              </div>
            </div>
            {student.bio && (
              <p style={{ marginTop: '14px', fontSize: '0.825rem', color: '#64748B', lineHeight: 1.5, borderTop: '1px solid #F1F5F9', paddingTop: '12px' }}>
                {student.bio}
              </p>
            )}
          </div>

          {/* Technical Skills */}
          <div className="glow-card" style={{ padding: '22px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '0.985rem', fontWeight: 700, color: '#1C2638', marginBottom: '14px' }}>
              Core Technical Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {student.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '8px',
                    backgroundColor: '#F0EBFF',
                    color: '#635BFF',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    border: '1px solid #D8CEFE'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glow-card" style={{ padding: '22px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '0.985rem', fontWeight: 700, color: '#1C2638', marginBottom: '14px' }}>
              Verified Certifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {student.certifications.length === 0 ? (
                <span style={{ fontSize: '0.825rem', color: '#94A3B8' }}>No certifications uploaded</span>
              ) : (
                student.certifications.map((c) => (
                  <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Award size={16} color="#16A34A" />
                    <div>
                      <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1C2638' }}>{c.name}</div>
                      <div style={{ fontSize: '0.74rem', color: '#7C8799' }}>{c.issuer} • {c.year}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Applications, Projects, Offers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Placement Offers Card */}
          {offers.length > 0 && (
            <div
              className="glow-card"
              style={{
                padding: '22px',
                backgroundColor: '#FFFFFF',
                borderLeft: '4px solid #16A34A'
              }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1C2638', marginBottom: '12px' }}>
                Secured Placement Offers
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {offers.map((off) => (
                  <div
                    key={off.id}
                    style={{
                      padding: '14px',
                      backgroundColor: '#E7FAEF',
                      borderRadius: '12px',
                      border: '1px solid #BBF7D0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: '#15803D', fontSize: '0.95rem' }}>{off.companyName}</div>
                      <div style={{ fontSize: '0.8rem', color: '#166534' }}>{off.role} • Joining {off.joiningDate}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#15803D' }}>{off.packageText}</div>
                      <StatusBadge status={off.offerStatus} size="sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Active Applications */}
          <div className="glow-card" style={{ padding: '22px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1C2638', marginBottom: '14px' }}>
              Campus Drive Applications
            </h3>
            <div className="custom-table-container" style={{ border: 'none', boxShadow: 'none' }}>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Company & Role</th>
                    <th>Package</th>
                    <th>Applied Date</th>
                    <th>Current Stage</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.length === 0 ? (
                    <tr>
                      <td colSpan={4} style={{ textAlign: 'center', color: '#94A3B8' }}>No applications registered.</td>
                    </tr>
                  ) : (
                    applications.map((app) => (
                      <tr key={app.id}>
                        <td>
                          <div style={{ fontWeight: 600, color: '#1C2638' }}>{app.companyName}</div>
                          <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{app.role}</div>
                        </td>
                        <td>{app.packageText}</td>
                        <td style={{ fontSize: '0.8rem', color: '#7C8799' }}>{app.appliedDate}</td>
                        <td><StatusBadge status={app.currentStage} size="sm" /></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Student Projects */}
          <div className="glow-card" style={{ padding: '22px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1C2638', marginBottom: '14px' }}>
              Capstone & Technical Projects
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {student.projects.length === 0 ? (
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>No projects registered.</span>
              ) : (
                student.projects.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      padding: '14px',
                      borderRadius: '12px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E8EDF2'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1C2638' }}>{p.title}</h4>
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#635BFF', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 600 }}
                        >
                          Repository <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4, marginBottom: '8px' }}>
                      {p.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {p.technologies.map((t) => (
                        <span key={t} style={{ fontSize: '0.72rem', backgroundColor: '#E2E8F0', color: '#334155', padding: '2px 6px', borderRadius: '4px' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
