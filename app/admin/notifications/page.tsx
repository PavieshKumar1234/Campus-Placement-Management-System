'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  CheckCircle2,
  Clock,
  Briefcase,
  Award,
  Video,
  ExternalLink,
  Check
} from 'lucide-react';
import { INITIAL_NOTIFICATIONS } from '@/lib/mockData';
import { AppNotification } from '@/types/announcement';
import Button from '@/components/ui/Button';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<AppNotification[]>(INITIAL_NOTIFICATIONS);
  const [filter, setFilter] = useState<'All' | 'Unread' | 'Read'>('All');

  const filtered = notifications.filter(n => {
    if (filter === 'Unread') return !n.read;
    if (filter === 'Read') return n.read;
    return true;
  });

  const toggleRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: !n.read } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const CATEGORY_ICONS: Record<string, any> = {
    drive: Briefcase,
    interview: Video,
    offer: Award,
    deadline: Clock,
    announcement: Bell
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
            System Notifications & Alerts
          </h1>
          <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
            Real-time triggers on candidate status changes, drive openings, and scheduling milestones
          </p>
        </div>
        <Button
          variant="secondary"
          icon={<Check size={16} />}
          onClick={markAllAsRead}
        >
          Mark All Read
        </Button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {(['All', 'Unread', 'Read'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: filter === tab ? '#635BFF' : '#FFFFFF',
              color: filter === tab ? '#FFFFFF' : '#64748B',
              border: '1px solid',
              borderColor: filter === tab ? '#635BFF' : '#E8EDF2',
              cursor: 'pointer'
            }}
          >
            {tab} Alerts ({tab === 'All' ? notifications.length : tab === 'Unread' ? notifications.filter(n => !n.read).length : notifications.filter(n => n.read).length})
          </button>
        ))}
      </div>

      {/* Notification List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filtered.length === 0 ? (
          <div className="glow-card" style={{ padding: '36px', textAlign: 'center', color: '#94A3B8' }}>
            No notifications in this view.
          </div>
        ) : (
          filtered.map((item) => {
            const Icon = CATEGORY_ICONS[item.category] || Bell;
            return (
              <div
                key={item.id}
                className="glow-card"
                style={{
                  padding: '18px 20px',
                  backgroundColor: item.read ? '#FFFFFF' : '#F8FAFD',
                  borderLeft: item.read ? '1px solid #E8EDF2' : '4px solid #635BFF',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      backgroundColor: item.read ? '#F1F5F9' : '#F0EBFF',
                      color: item.read ? '#64748B' : '#635BFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: item.read ? 600 : 700, color: '#1C2638' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.84rem', color: '#64748B', marginTop: '3px', lineHeight: 1.45 }}>
                      {item.message}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px', fontSize: '0.75rem', color: '#94A3B8' }}>
                      <span>{item.timestamp}</span>
                      {item.link && (
                        <Link href={item.link} style={{ color: '#635BFF', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                          View Record <ExternalLink size={12} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleRead(item.id)}
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    color: item.read ? '#94A3B8' : '#635BFF',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    backgroundColor: item.read ? 'transparent' : '#F0EBFF',
                    cursor: 'pointer'
                  }}
                >
                  {item.read ? 'Mark Unread' : 'Mark Read'}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
