'use client';

import React from 'react';
import {
  CalendarCheck,
  Clock,
  MapPin,
  Video,
  User,
  ExternalLink,
  Award
} from 'lucide-react';
import { INITIAL_INTERVIEWS, INITIAL_STUDENTS } from '@/lib/mockData';
import StatusBadge from '@/components/ui/StatusBadge';
import Button from '@/components/ui/Button';

export default function StudentInterviewsPage() {
  const student = INITIAL_STUDENTS[0];
  const interviews = INITIAL_INTERVIEWS.filter(i => i.studentId === student.id || i.studentRollNo === student.studentId);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
          My Interview Appointments
        </h1>
        <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
          Review technical panels, scheduled time slots, and virtual meeting links
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {interviews.length === 0 ? (
          <div className="glow-card" style={{ padding: '36px', textAlign: 'center', color: '#94A3B8' }}>
            No interview rounds currently scheduled for your profile.
          </div>
        ) : (
          interviews.map((item) => (
            <div
              key={item.id}
              className="glow-card"
              style={{
                padding: '24px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#635BFF',
                      backgroundColor: '#F0EBFF',
                      padding: '3px 8px',
                      borderRadius: '6px'
                    }}
                  >
                    {item.round}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1C2638', marginTop: '6px' }}>
                    {item.role}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
                    Company: <strong style={{ color: '#1C2638' }}>{item.companyName}</strong>
                  </div>
                </div>
                <StatusBadge status={item.status} />
              </div>

              {/* Time, Venue, Panel */}
              <div
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E8EDF2',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>
                    <Clock size={14} color="#635BFF" /> DATE & TIME
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1C2638', marginTop: '4px' }}>
                    {item.date} at {item.time}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>
                    <MapPin size={14} color="#FFA94D" /> VENUE / PLATFORM
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1C2638', marginTop: '4px' }}>
                    {item.venue}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>
                    <User size={14} color="#32C98B" /> INTERVIEWER
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1C2638', marginTop: '4px' }}>
                    {item.interviewerName}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#7C8799' }}>{item.interviewerDesignation}</div>
                </div>
              </div>

              {item.feedback && (
                <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: '#E7FAEF', border: '1px solid #BBF7D0', fontSize: '0.8rem', color: '#15803D' }}>
                  Panel Feedback: {item.feedback}
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                {item.meetingLink && (
                  <a
                    href={item.meetingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Video size={14} /> Join Virtual Room <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
