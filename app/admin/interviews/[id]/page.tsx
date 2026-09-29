'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  XCircle,
  Star,
  Award
} from 'lucide-react';
import { INITIAL_INTERVIEWS } from '@/lib/mockData';
import { InterviewStatus } from '@/types/interview';
import StatusBadge from '@/components/ui/StatusBadge';
import Button from '@/components/ui/Button';

export default function InterviewDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const initial = INITIAL_INTERVIEWS.find(i => i.id === id) || INITIAL_INTERVIEWS[0];

  const [interview, setInterview] = useState(initial);
  const [feedback, setFeedback] = useState(interview.feedback || '');
  const [rating, setRating] = useState(interview.rating || 4);
  const [status, setStatus] = useState<InterviewStatus>(interview.status);

  const handleSaveEvaluation = (e: React.FormEvent) => {
    e.preventDefault();
    setInterview(prev => ({
      ...prev,
      feedback,
      rating,
      status
    }));
    alert('Candidate evaluation scorecard successfully saved!');
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Link
          href="/admin/interviews"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.885rem',
            fontWeight: 600,
            color: '#64748B'
          }}
        >
          <ArrowLeft size={16} /> Back to Interviews
        </Link>
      </div>

      <div className="glow-card" style={{ padding: '32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E8EDF2', paddingBottom: '20px', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h1 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#1C2638' }}>
                {interview.round}
              </h1>
              <StatusBadge status={interview.status} />
            </div>
            <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '4px' }}>
              {interview.studentName} ({interview.studentRollNo}) • for {interview.companyName}
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '28px' }}>
          <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#F8FAFC', border: '1px solid #E8EDF2' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>TIME & VENUE</span>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1C2638', marginTop: '6px' }}>
              {interview.date} at {interview.time}
            </div>
            <div style={{ fontSize: '0.825rem', color: '#64748B', marginTop: '2px' }}>
              {interview.venue}
            </div>
          </div>
          <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#F8FAFC', border: '1px solid #E8EDF2' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>EVALUATION PANEL</span>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1C2638', marginTop: '6px' }}>
              {interview.interviewerName}
            </div>
            <div style={{ fontSize: '0.825rem', color: '#64748B', marginTop: '2px' }}>
              {interview.interviewerDesignation}
            </div>
          </div>
        </div>

        {/* Evaluation Form */}
        <form onSubmit={handleSaveEvaluation} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label className="form-label">Interview Status / Decision</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as InterviewStatus)}
              className="input-field"
            >
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
              <option value="Recommended">Recommended for Next Round</option>
              <option value="Not Selected">Not Selected</option>
            </select>
          </div>

          <div>
            <label className="form-label">Technical & Behavioral Rating (1 to 5 Stars)</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    backgroundColor: rating >= star ? '#FFF7D9' : '#F8FAFC',
                    border: '1px solid',
                    borderColor: rating >= star ? '#FDE68A' : '#E2E8F0',
                    color: rating >= star ? '#B45309' : '#64748B',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <Star size={16} fill={rating >= star ? '#F59E0B' : 'none'} color="#F59E0B" />
                  <span>{star}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="form-label">Interviewer Notes & Qualitative Feedback</label>
            <textarea
              rows={4}
              placeholder="Candidate demonstrated exceptional knowledge of data structures, clean code habits, and clear problem formulation..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="input-field"
              style={{ resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <Button type="submit" variant="primary">
              Save Evaluation & Finalize
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
