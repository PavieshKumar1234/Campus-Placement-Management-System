'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CalendarCheck,
  Clock,
  MapPin,
  User,
  Video,
  Plus,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { INITIAL_INTERVIEWS, INITIAL_STUDENTS, INITIAL_COMPANIES } from '@/lib/mockData';
import { Interview, InterviewRound, InterviewStatus } from '@/types/interview';
import StatusBadge from '@/components/ui/StatusBadge';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import DashboardCard from '@/components/ui/DashboardCard';

export default function InterviewsPage() {
  const [interviews, setInterviews] = useState<Interview[]>(INITIAL_INTERVIEWS);
  const [activeTab, setActiveTab] = useState<'All' | 'Scheduled' | 'Completed'>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newInterview, setNewInterview] = useState({
    studentId: INITIAL_STUDENTS[0].id,
    companyName: 'Tata Consultancy Services',
    role: 'Digital Software Engineer',
    round: 'Technical Round 1' as InterviewRound,
    date: '2026-10-05',
    time: '11:00 AM',
    venue: 'Seminar Hall 2 / Virtual Room A',
    interviewerName: 'Dr. S. Ranganathan',
    interviewerDesignation: 'Principal Architect'
  });

  const filtered = activeTab === 'All'
    ? interviews
    : interviews.filter(i => activeTab === 'Scheduled' ? i.status === 'Scheduled' : i.status === 'Completed');

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    const std = INITIAL_STUDENTS.find(s => s.id === newInterview.studentId) || INITIAL_STUDENTS[0];

    const created: Interview = {
      id: `int-${Date.now()}`,
      applicationId: `app-${Date.now()}`,
      studentId: std.id,
      studentName: std.name,
      studentRollNo: std.studentId,
      companyName: newInterview.companyName,
      companyLogo: 'TCS',
      role: newInterview.role,
      round: newInterview.round,
      date: newInterview.date,
      time: newInterview.time,
      venue: newInterview.venue,
      interviewerName: newInterview.interviewerName,
      interviewerDesignation: newInterview.interviewerDesignation,
      status: 'Scheduled'
    };

    setInterviews([created, ...interviews]);
    setIsModalOpen(false);
    alert('Interview slot successfully scheduled and notification dispatched to student!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
            Interview Schedules & Evaluations
          </h1>
          <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
            Coordinate technical panels, virtual meetings, and feedback scoring
          </p>
        </div>
        <Button
          variant="primary"
          icon={<Plus size={16} />}
          onClick={() => setIsModalOpen(true)}
        >
          Schedule Interview
        </Button>
      </div>

      {/* KPI Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <DashboardCard
          title="Scheduled Rounds"
          value={interviews.filter(i => i.status === 'Scheduled').length.toString()}
          trend="Next 7 days"
          trendLabel="active panels"
          icon={CalendarCheck}
          color="blue"
        />
        <DashboardCard
          title="Completed Today"
          value="8"
          trend="+100%"
          trendLabel="all panels on time"
          icon={Clock}
          color="green"
        />
        <DashboardCard
          title="Total Evaluated"
          value="426"
          trend="92%"
          trendLabel="recommendation rate"
          icon={User}
          color="purple"
        />
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {(['All', 'Scheduled', 'Completed'] as const).map(tab => (
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
              cursor: 'pointer'
            }}
          >
            {tab} Interviews
          </button>
        ))}
      </div>

      {/* Interview Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
        {filtered.map((item) => (
          <div
            key={item.id}
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
                  <span
                    style={{
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      color: '#635BFF',
                      backgroundColor: '#F0EBFF',
                      padding: '2px 8px',
                      borderRadius: '6px'
                    }}
                  >
                    {item.round}
                  </span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638', marginTop: '6px' }}>
                    {item.studentName}
                  </h3>
                  <div style={{ fontSize: '0.785rem', color: '#64748B' }}>
                    {item.studentRollNo} • for <strong style={{ color: '#1C2638' }}>{item.companyName}</strong>
                  </div>
                </div>
                <StatusBadge status={item.status} />
              </div>

              {/* Date, Time & Venue */}
              <div
                style={{
                  margin: '14px 0',
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E8EDF2',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  fontSize: '0.8rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1C2638' }}>
                  <Clock size={14} color="#635BFF" />
                  <span><strong>{item.date}</strong> at <strong>{item.time}</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569' }}>
                  <MapPin size={14} color="#FFA94D" />
                  <span>{item.venue}</span>
                </div>
              </div>

              {/* Interviewer */}
              <div style={{ fontSize: '0.785rem', color: '#64748B' }}>
                Interviewer: <strong style={{ color: '#1C2638' }}>{item.interviewerName}</strong> ({item.interviewerDesignation})
              </div>
              {item.feedback && (
                <div style={{ marginTop: '8px', fontSize: '0.76rem', color: '#15803D', backgroundColor: '#E7FAEF', padding: '6px 10px', borderRadius: '6px' }}>
                  Feedback: {item.feedback}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '12px' }}>
              {item.meetingLink ? (
                <a
                  href={item.meetingLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.785rem', color: '#4D9AF5', fontWeight: 600 }}
                >
                  <Video size={14} /> Join Meeting <ExternalLink size={12} />
                </a>
              ) : <span />}
              <Link
                href={`/admin/interviews/${item.id}`}
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Evaluation & Result <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Schedule Interview Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Schedule Candidate Interview"
      >
        <form onSubmit={handleSchedule} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label className="form-label">Select Candidate *</label>
            <select
              value={newInterview.studentId}
              onChange={(e) => setNewInterview({ ...newInterview, studentId: e.target.value })}
              className="input-field"
            >
              {INITIAL_STUDENTS.map(s => (
                <option key={s.id} value={s.id}>{s.name} ({s.studentId} - {s.department})</option>
              ))}
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label className="form-label">Recruiting Company</label>
              <input
                type="text"
                value={newInterview.companyName}
                onChange={(e) => setNewInterview({ ...newInterview, companyName: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Interview Round</label>
              <select
                value={newInterview.round}
                onChange={(e) => setNewInterview({ ...newInterview, round: e.target.value as InterviewRound })}
                className="input-field"
              >
                <option value="Technical Round 1">Technical Round 1</option>
                <option value="Technical Round 2">Technical Round 2</option>
                <option value="Coding Assessment">Coding Assessment</option>
                <option value="HR Round">HR Round</option>
                <option value="Managerial Round">Managerial Round</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label className="form-label">Date</label>
              <input
                type="date"
                value={newInterview.date}
                onChange={(e) => setNewInterview({ ...newInterview, date: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Time</label>
              <input
                type="text"
                placeholder="10:30 AM"
                value={newInterview.time}
                onChange={(e) => setNewInterview({ ...newInterview, time: e.target.value })}
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Venue / Meeting URL</label>
            <input
              type="text"
              placeholder="Seminar Hall 2 / Google Meet link"
              value={newInterview.venue}
              onChange={(e) => setNewInterview({ ...newInterview, venue: e.target.value })}
              className="input-field"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label className="form-label">Interviewer Name</label>
              <input
                type="text"
                placeholder="Dr. S. Ranganathan"
                value={newInterview.interviewerName}
                onChange={(e) => setNewInterview({ ...newInterview, interviewerName: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Interviewer Role</label>
              <input
                type="text"
                placeholder="Lead Architect"
                value={newInterview.interviewerDesignation}
                onChange={(e) => setNewInterview({ ...newInterview, interviewerDesignation: e.target.value })}
                className="input-field"
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
            <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Confirm & Schedule
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
