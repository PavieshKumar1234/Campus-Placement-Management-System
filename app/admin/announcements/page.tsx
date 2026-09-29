'use client';

import React, { useState } from 'react';
import {
  Megaphone,
  Plus,
  Trash2,
  Calendar,
  CheckCircle,
  Eye,
  Filter,
  AlertCircle
} from 'lucide-react';
import { INITIAL_ANNOUNCEMENTS } from '@/lib/mockData';
import { Announcement, AnnouncementCategory, AnnouncementPriority } from '@/types/announcement';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(INITIAL_ANNOUNCEMENTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('All');

  const [newAnn, setNewAnn] = useState({
    title: '',
    category: 'Placement Drive' as AnnouncementCategory,
    priority: 'High' as AnnouncementPriority,
    content: '',
    targetAudience: 'All Final Year B.Tech'
  });

  const filtered = categoryFilter === 'All'
    ? announcements
    : announcements.filter(a => a.category === categoryFilter);

  const handleDelete = (id: string) => {
    if (confirm('Delete this announcement circular?')) {
      setAnnouncements(announcements.filter(a => a.id !== id));
    }
  };

  const handleTogglePublish = (id: string) => {
    setAnnouncements(prev => prev.map(a => a.id === id ? { ...a, isPublished: !a.isPublished } : a));
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAnn.title || !newAnn.content) return;

    const created: Announcement = {
      id: `ann-${Date.now()}`,
      title: newAnn.title,
      category: newAnn.category,
      priority: newAnn.priority,
      content: newAnn.content,
      publishedDate: new Date().toISOString().split('T')[0],
      author: 'Dr. M. Krishnamoorthy',
      authorRole: 'Head of Placement',
      isPublished: true,
      targetAudience: newAnn.targetAudience
    };

    setAnnouncements([created, ...announcements]);
    setIsModalOpen(false);
    setNewAnn({
      title: '',
      category: 'Placement Drive',
      priority: 'High',
      content: '',
      targetAudience: 'All Final Year B.Tech'
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
            Campus Placement Announcements
          </h1>
          <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
            Broadcast urgent schedule updates, drive guidelines, and official results to student cohorts
          </p>
        </div>
        <Button
          variant="primary"
          icon={<Plus size={16} />}
          onClick={() => setIsModalOpen(true)}
        >
          New Announcement
        </Button>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #E8EDF2', paddingBottom: '12px', flexWrap: 'wrap' }}>
        {(['All', 'Placement Drive', 'Interview', 'Deadline', 'Result', 'General'] as const).map(cat => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '0.825rem',
              fontWeight: 600,
              backgroundColor: categoryFilter === cat ? '#635BFF' : '#FFFFFF',
              color: categoryFilter === cat ? '#FFFFFF' : '#64748B',
              border: '1px solid',
              borderColor: categoryFilter === cat ? '#635BFF' : '#E8EDF2',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Announcements List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filtered.map((item) => (
          <div
            key={item.id}
            className="glow-card"
            style={{
              padding: '24px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              opacity: item.isPublished ? 1 : 0.65
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    padding: '3px 10px',
                    borderRadius: '6px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    backgroundColor: item.priority === 'Urgent' ? '#FEE2E2' : item.priority === 'High' ? '#FFF1DD' : '#EAF3FF',
                    color: item.priority === 'Urgent' ? '#DC2626' : item.priority === 'High' ? '#EA580C' : '#1D6FD8'
                  }}
                >
                  {item.priority}
                </span>
                <span
                  style={{
                    padding: '3px 10px',
                    borderRadius: '6px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    backgroundColor: '#F0EBFF',
                    color: '#635BFF'
                  }}
                >
                  {item.category}
                </span>
                <span style={{ fontSize: '0.785rem', color: '#94A3B8' }}>
                  Audience: <strong style={{ color: '#475569' }}>{item.targetAudience}</strong>
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => handleTogglePublish(item.id)}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    backgroundColor: item.isPublished ? '#E7FAEF' : '#F1F5F9',
                    color: item.isPublished ? '#15803D' : '#64748B',
                    border: '1px solid',
                    borderColor: item.isPublished ? '#BBF7D0' : '#E2E8F0',
                    cursor: 'pointer'
                  }}
                >
                  {item.isPublished ? 'Published' : 'Draft / Hidden'}
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn-icon"
                  style={{ width: '30px', height: '30px', color: '#DC2626' }}
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1C2638' }}>
              {item.title}
            </h3>

            <p style={{ fontSize: '0.885rem', color: '#475569', lineHeight: 1.55 }}>
              {item.content}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '12px', fontSize: '0.785rem', color: '#94A3B8' }}>
              <span>Issued by: <strong style={{ color: '#1C2638' }}>{item.author}</strong> ({item.authorRole})</span>
              <span>{item.publishedDate}</span>
            </div>
          </div>
        ))}
      </div>

      {/* New Announcement Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Broadcast New Placement Announcement"
      >
        <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label className="form-label">Notice Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Schedule Update for Deloitte Interview Round"
              value={newAnn.title}
              onChange={(e) => setNewAnn({ ...newAnn, title: e.target.value })}
              className="input-field"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label className="form-label">Category</label>
              <select
                value={newAnn.category}
                onChange={(e) => setNewAnn({ ...newAnn, category: e.target.value as AnnouncementCategory })}
                className="input-field"
              >
                <option value="Placement Drive">Placement Drive</option>
                <option value="Interview">Interview</option>
                <option value="Deadline">Deadline</option>
                <option value="Result">Result</option>
                <option value="General">General</option>
              </select>
            </div>
            <div>
              <label className="form-label">Priority</label>
              <select
                value={newAnn.priority}
                onChange={(e) => setNewAnn({ ...newAnn, priority: e.target.value as AnnouncementPriority })}
                className="input-field"
              >
                <option value="Urgent">Urgent</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          <div>
            <label className="form-label">Target Student Cohort</label>
            <input
              type="text"
              value={newAnn.targetAudience}
              onChange={(e) => setNewAnn({ ...newAnn, targetAudience: e.target.value })}
              className="input-field"
            />
          </div>

          <div>
            <label className="form-label">Announcement Content *</label>
            <textarea
              rows={4}
              required
              placeholder="Provide exact timings, venue instructions, and checklist items..."
              value={newAnn.content}
              onChange={(e) => setNewAnn({ ...newAnn, content: e.target.value })}
              className="input-field"
              style={{ resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
            <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Publish Notice
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
