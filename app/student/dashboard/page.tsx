'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Briefcase,
  CalendarCheck,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Building2,
  FileCheck2,
  UserCheck
} from 'lucide-react';
import { INITIAL_STUDENTS, INITIAL_DRIVES, INITIAL_APPLICATIONS, INITIAL_INTERVIEWS } from '@/lib/mockData';
import DashboardCard from '@/components/ui/DashboardCard';
import StatusBadge from '@/components/ui/StatusBadge';
import Button from '@/components/ui/Button';

export default function StudentDashboardPage() {
  const currentStudent = INITIAL_STUDENTS[0]; // Arun Kumar
  const myApplications = INITIAL_APPLICATIONS.filter(a => a.studentId === currentStudent.id);
  const myInterviews = INITIAL_INTERVIEWS.filter(i => i.studentId === currentStudent.id);
  const eligibleDrives = INITIAL_DRIVES.filter(d =>
    d.status === 'Active' &&
    d.minCgpa <= currentStudent.cgpa &&
    d.eligibleDepartments.includes(currentStudent.department)
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Welcome Banner */}
      <div
        className="glow-card glow-card-purple"
        style={{
          padding: '28px 32px',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}
      >
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, color: '#635BFF', textTransform: 'uppercase', backgroundColor: '#F0EBFF', padding: '3px 10px', borderRadius: '20px', marginBottom: '8px' }}>
            <Sparkles size={13} />
            STUDENT PLACEMENT DESK
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Welcome back, {currentStudent.name} 👋
          </h1>
          <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
            Roll No: <strong>{currentStudent.studentId}</strong> • {currentStudent.department} Engineering • Class of {currentStudent.graduationYear}
          </p>
        </div>

        {/* Profile Completion Widget */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#F8FAFC', padding: '14px 20px', borderRadius: '16px', border: '1px solid #E8EDF2' }}>
          <div>
            <div style={{ fontSize: '0.785rem', fontWeight: 600, color: '#64748B' }}>Profile Completion</div>
            <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#16A34A' }}>92%</div>
            <Link href="/student/profile" style={{ fontSize: '0.75rem', color: '#635BFF', fontWeight: 600 }}>
              Edit Resume & Skills →
            </Link>
          </div>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '4px solid #16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', color: '#16A34A' }}>
            92%
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <DashboardCard
          title="Current CGPA"
          value={currentStudent.cgpa.toFixed(2)}
          trend="Eligible"
          trendLabel="for Tier-1 & Dream"
          icon={GraduationCap}
          color="green"
        />
        <DashboardCard
          title="Eligible Active Drives"
          value={eligibleDrives.length.toString()}
          trend="Open now"
          trendLabel="closing soon"
          icon={Briefcase}
          color="blue"
        />
        <DashboardCard
          title="My Applications"
          value={myApplications.length.toString()}
          trend="1 Shortlisted"
          trendLabel="in progress"
          icon={FileCheck2}
          color="purple"
        />
        <DashboardCard
          title="Upcoming Interviews"
          value={myInterviews.length.toString()}
          trend="Oct 02, 10:30 AM"
          trendLabel="TCS Tech Round"
          icon={CalendarCheck}
          color="orange"
        />
      </div>

      {/* Main Grid: Eligible Opportunities & Next Interview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.2fr)', gap: '24px' }}>
        {/* Left: Eligible Drives Ready for Application */}
        <div className="glow-card" style={{ padding: '24px', backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638' }}>
                Open Drives for Your Discipline
              </h3>
              <p style={{ fontSize: '0.785rem', color: '#64748B' }}>
                Matches your CGPA ({currentStudent.cgpa}) and {currentStudent.department} department
              </p>
            </div>
            <Link href="/student/drives" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#635BFF', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              All Drives <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {eligibleDrives.slice(0, 3).map((d) => (
              <div
                key={d.id}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E8EDF2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#635BFF', backgroundColor: '#F0EBFF', padding: '2px 8px', borderRadius: '4px' }}>
                    {d.companyName}
                  </span>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1C2638', marginTop: '4px' }}>
                    {d.role}
                  </div>
                  <div style={{ fontSize: '0.785rem', color: '#64748B', marginTop: '2px' }}>
                    Deadline: {d.applicationDeadline} • Min CGPA: {d.minCgpa}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#16A34A', marginBottom: '6px' }}>
                    {d.packageText}
                  </div>
                  <Link href={`/student/drives/${d.id}`} className="btn btn-primary btn-sm">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Upcoming Interview Card */}
        <div className="glow-card" style={{ padding: '24px', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EA580C', fontWeight: 700, fontSize: '0.825rem', textTransform: 'uppercase', marginBottom: '8px' }}>
              <Clock size={16} /> NEXT INTERVIEW APPOINTMENT
            </div>
            {myInterviews.length > 0 ? (
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1C2638' }}>
                  {myInterviews[0].round}
                </h3>
                <div style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '4px' }}>
                  Company: <strong style={{ color: '#1C2638' }}>{myInterviews[0].companyName}</strong>
                </div>

                <div style={{ margin: '18px 0', padding: '16px', borderRadius: '12px', backgroundColor: '#FFF1DD', border: '1px solid #FED7AA' }}>
                  <div style={{ fontWeight: 700, color: '#C2410C', fontSize: '0.95rem' }}>
                    {myInterviews[0].date} at {myInterviews[0].time}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#9A3412', marginTop: '4px' }}>
                    Venue: {myInterviews[0].venue}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#9A3412', marginTop: '4px' }}>
                    Panel: {myInterviews[0].interviewerName}
                  </div>
                </div>

                <p style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.45 }}>
                  Please be in formals and keep your camera on. Review system design concepts and core project portfolio.
                </p>
              </div>
            ) : (
              <p style={{ color: '#94A3B8', fontSize: '0.85rem' }}>No pending interviews scheduled.</p>
            )}
          </div>

          <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginTop: '16px' }}>
            <Link href="/student/interviews" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
              View All Interview Schedules
            </Link>
          </div>
        </div>
      </div>

      {/* Applications Status Summary */}
      <div className="glow-card" style={{ padding: '24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638' }}>
              My Active Applications
            </h3>
            <p style={{ fontSize: '0.785rem', color: '#64748B' }}>
              Real-time tracker of your recruitment pipeline progression
            </p>
          </div>
          <Link href="/student/applications" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#635BFF' }}>
            View Full Timeline →
          </Link>
        </div>

        <div className="custom-table-container" style={{ border: 'none', boxShadow: 'none' }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Package</th>
                <th>Applied Date</th>
                <th>Current Status</th>
              </tr>
            </thead>
            <tbody>
              {myApplications.map((app) => (
                <tr key={app.id}>
                  <td style={{ fontWeight: 700, color: '#1C2638' }}>{app.companyName}</td>
                  <td style={{ color: '#475569' }}>{app.role}</td>
                  <td style={{ fontWeight: 700, color: '#16A34A' }}>{app.packageText}</td>
                  <td style={{ color: '#7C8799', fontSize: '0.8rem' }}>{app.appliedDate}</td>
                  <td><StatusBadge status={app.currentStage} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
