'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Bell,
  Globe,
  ChevronDown,
  Menu,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { INITIAL_NOTIFICATIONS } from '@/lib/mockData';

interface NavbarProps {
  title?: string;
  onOpenMobile?: () => void;
  role?: 'admin' | 'student';
}

export default function Navbar({ title = 'Dashboard', onOpenMobile, role = 'admin' }: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <header
      style={{
        height: '70px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E8EDF2',
        position: 'sticky',
        top: 0,
        zIndex: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px'
      }}
    >
      {/* Left: Mobile hamburger & Page Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={onOpenMobile}
          className="btn-icon"
          style={{ display: 'none' }}
          id="mobile-nav-toggle"
          aria-label="Open Navigation"
        >
          <Menu size={20} />
        </button>
        <div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1C2638', letterSpacing: '-0.02em', margin: 0 }}>
            {title}
          </h1>
        </div>
      </div>

      {/* Right: Search, Language/Batch, Notifications, User Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Search Input */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '260px'
          }}
        >
          <Search
            size={16}
            color="#94A3B8"
            style={{ position: 'absolute', left: '12px', pointerEvents: 'none' }}
          />
          <input
            type="text"
            placeholder="Search drives, students..."
            style={{
              width: '100%',
              padding: '8px 12px 8px 36px',
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              fontSize: '0.85rem',
              color: '#1C2638',
              outline: 'none',
              transition: 'all 0.18s ease'
            }}
            onFocus={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.borderColor = '#635BFF';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99, 91, 255, 0.15)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.backgroundColor = '#F8FAFC';
              e.currentTarget.style.borderColor = '#E2E8F0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Portal Switcher Pill */}
        <Link
          href={role === 'admin' ? '/student/dashboard' : '/admin/dashboard'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            backgroundColor: role === 'admin' ? '#F0EBFF' : '#EAF3FF',
            color: role === 'admin' ? '#635BFF' : '#1D6FD8',
            border: '1px solid',
            borderColor: role === 'admin' ? '#D8CEFE' : '#C4DCFD',
            borderRadius: '20px',
            fontSize: '0.785rem',
            fontWeight: 600,
            transition: 'all 0.18s ease'
          }}
          title={role === 'admin' ? 'Switch to Student View' : 'Switch to Admin View'}
        >
          {role === 'admin' ? <UserCheck size={14} /> : <ShieldCheck size={14} />}
          <span>{role === 'admin' ? 'Switch to Student' : 'Switch to Admin'}</span>
        </Link>

        {/* Language / Academic Session Indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            backgroundColor: '#F8FAFC',
            border: '1px solid #E8EDF2',
            borderRadius: '10px',
            fontSize: '0.8rem',
            color: '#475569',
            fontWeight: 500
          }}
        >
          <Globe size={14} color="#64748B" />
          <span>Batch 2027</span>
        </div>

        {/* Notification Bell with Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            style={{
              position: 'relative',
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              backgroundColor: '#F8FAFC',
              border: '1px solid #E8EDF2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#475569',
              transition: 'all 0.18s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F5F9';
              e.currentTarget.style.borderColor = '#CBD5E1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F8FAFC';
              e.currentTarget.style.borderColor = '#E8EDF2';
            }}
            aria-label="Notifications"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#EF4444',
                  boxShadow: '0 0 0 2px #FFFFFF'
                }}
              />
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div
              style={{
                position: 'absolute',
                top: '48px',
                right: 0,
                width: '320px',
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid #E8EDF2',
                boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                padding: '16px',
                zIndex: 50,
                animation: 'fadeIn 0.2s ease'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1C2638' }}>
                  Notifications
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllRead}
                    style={{ fontSize: '0.75rem', color: '#635BFF', fontWeight: 600 }}
                  >
                    Mark all read
                  </button>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '280px', overflowY: 'auto' }}>
                {notifications.slice(0, 4).map((n) => (
                  <div
                    key={n.id}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      backgroundColor: n.read ? '#FFFFFF' : '#F8FAFC',
                      border: '1px solid #F1F5F9',
                      fontSize: '0.8rem'
                    }}
                  >
                    <div style={{ fontWeight: 600, color: '#1C2638', marginBottom: '2px' }}>
                      {n.title}
                    </div>
                    <div style={{ color: '#64748B', fontSize: '0.75rem', lineHeight: 1.4 }}>
                      {n.message}
                    </div>
                    <div style={{ color: '#94A3B8', fontSize: '0.7rem', marginTop: '4px' }}>
                      {n.timestamp}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #F1F5F9', marginTop: '12px', paddingTop: '8px', textAlign: 'center' }}>
                <Link
                  href={role === 'admin' ? '/admin/notifications' : '/student/notifications'}
                  onClick={() => setShowNotifications(false)}
                  style={{ fontSize: '0.785rem', fontWeight: 600, color: '#635BFF' }}
                >
                  View All Notifications →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Pill */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '5px 10px 5px 6px',
              borderRadius: '24px',
              backgroundColor: '#F8FAFC',
              border: '1px solid #E8EDF2',
              transition: 'all 0.18s ease'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: role === 'admin'
                  ? 'linear-gradient(135deg, #635BFF 0%, #7C6FF2 100%)'
                  : 'linear-gradient(135deg, #4D9AF5 0%, #32C98B 100%)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.785rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {role === 'admin' ? 'PO' : 'AK'}
            </div>
            <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1C2638' }}>
                {role === 'admin' ? 'Dr. Krishnamoorthy' : 'Arun Kumar'}
              </div>
              <div style={{ fontSize: '0.685rem', color: '#7C8799' }}>
                {role === 'admin' ? 'Head of Placement' : 'CSE Student'}
              </div>
            </div>
            <ChevronDown size={14} color="#64748B" />
          </button>

          {/* Profile Dropdown */}
          {showProfileDropdown && (
            <div
              style={{
                position: 'absolute',
                top: '48px',
                right: 0,
                width: '200px',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E8EDF2',
                boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                padding: '8px',
                zIndex: 50,
                animation: 'fadeIn 0.2s ease'
              }}
            >
              <Link
                href={role === 'admin' ? '/admin/settings' : '/student/profile'}
                onClick={() => setShowProfileDropdown(false)}
                style={{
                  display: 'block',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.825rem',
                  color: '#1C2638',
                  fontWeight: 500,
                  transition: 'background-color 0.15s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {role === 'admin' ? 'Platform Settings' : 'View Profile'}
              </Link>
              <Link
                href="/login"
                onClick={() => setShowProfileDropdown(false)}
                style={{
                  display: 'block',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.825rem',
                  color: '#DC2626',
                  fontWeight: 500,
                  transition: 'background-color 0.15s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FEE2E2')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
