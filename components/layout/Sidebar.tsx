'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  Building2,
  Briefcase,
  FileCheck2,
  CalendarCheck,
  Award,
  BarChart3,
  FileSpreadsheet,
  Megaphone,
  Bell,
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
  role?: 'admin' | 'student';
}

export default function Sidebar({ isMobileOpen, onCloseMobile, role = 'admin' }: SidebarProps) {
  const pathname = usePathname();

  const adminNavSections = [
    {
      title: 'OVERVIEW',
      items: [
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard }
      ]
    },
    {
      title: 'PLACEMENT',
      items: [
        { name: 'Students', href: '/admin/students', icon: Users },
        { name: 'Companies', href: '/admin/companies', icon: Building2 },
        { name: 'Drives', href: '/admin/drives', icon: Briefcase },
        { name: 'Applications', href: '/admin/applications', icon: FileCheck2 },
        { name: 'Interviews', href: '/admin/interviews', icon: CalendarCheck },
        { name: 'Placements', href: '/admin/placements', icon: Award }
      ]
    },
    {
      title: 'INSIGHTS',
      items: [
        { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
        { name: 'Reports', href: '/admin/reports', icon: FileSpreadsheet }
      ]
    },
    {
      title: 'SYSTEM',
      items: [
        { name: 'Announcements', href: '/admin/announcements', icon: Megaphone },
        { name: 'Notifications', href: '/admin/notifications', icon: Bell },
        { name: 'Settings', href: '/admin/settings', icon: Settings }
      ]
    }
  ];

  const studentNavSections = [
    {
      title: 'OVERVIEW',
      items: [
        { name: 'Dashboard', href: '/student/dashboard', icon: LayoutDashboard },
        { name: 'My Profile', href: '/student/profile', icon: Users }
      ]
    },
    {
      title: 'OPPORTUNITIES',
      items: [
        { name: 'Companies', href: '/student/companies', icon: Building2 },
        { name: 'Placement Drives', href: '/student/drives', icon: Briefcase },
        { name: 'My Applications', href: '/student/applications', icon: FileCheck2 }
      ]
    },
    {
      title: 'ASSESSMENT & RESULTS',
      items: [
        { name: 'Interviews', href: '/student/interviews', icon: CalendarCheck },
        { name: 'Offers & Results', href: '/student/results', icon: Award },
        { name: 'Notifications', href: '/student/notifications', icon: Bell }
      ]
    }
  ];

  const sections = role === 'admin' ? adminNavSections : studentNavSections;

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(28, 38, 56, 0.4)',
            backdropFilter: 'blur(3px)',
            zIndex: 40
          }}
        />
      )}

      <aside
        style={{
          width: '240px',
          minWidth: '240px',
          backgroundColor: '#FFFFFF',
          borderRight: '1px solid #E8EDF2',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          position: 'sticky',
          top: 0,
          zIndex: 45,
          transition: 'transform 0.25s ease-in-out'
        }}
      >
        {/* Brand Header */}
        <div
          style={{
            padding: '24px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            borderBottom: '1px solid #F1F5F9'
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #635BFF 0%, #4D9AF5 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(99, 91, 255, 0.25)'
            }}
          >
            <GraduationCap size={24} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.985rem', color: '#1C2638', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              PlacementOS
            </div>
            <div style={{ fontSize: '0.725rem', color: '#7C8799', fontWeight: 500 }}>
              {role === 'admin' ? 'Campus Admin Suite' : 'Student Career Portal'}
            </div>
          </div>
        </div>

        {/* Navigation List */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px 12px'
          }}
        >
          {sections.map((section, idx) => (
            <div key={idx} style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '0.675rem',
                  fontWeight: 700,
                  color: '#94A3B8',
                  letterSpacing: '0.06em',
                  padding: '4px 12px',
                  marginBottom: '6px'
                }}
              >
                {section.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {section.items.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && item.href !== '/student/dashboard' && pathname.startsWith(item.href));
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onCloseMobile}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '11px',
                        padding: '9px 12px',
                        borderRadius: '10px',
                        fontSize: '0.865rem',
                        fontWeight: isActive ? 600 : 500,
                        backgroundColor: isActive ? '#635BFF' : 'transparent',
                        color: isActive ? '#FFFFFF' : '#475569',
                        boxShadow: isActive ? '0 4px 12px rgba(99, 91, 255, 0.28)' : 'none',
                        transition: 'all 0.18s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = '#F8FAFC';
                          e.currentTarget.style.color = '#1C2638';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#475569';
                        }
                      }}
                    >
                      <Icon size={18} strokeWidth={isActive ? 2.4 : 1.9} color={isActive ? '#FFFFFF' : '#64748B'} />
                      <span style={{ flex: 1 }}>{item.name}</span>
                      {isActive && <ChevronRight size={14} color="#FFFFFF" />}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* User Footer Profile & Sign Out */}
        <div
          style={{
            padding: '16px',
            borderTop: '1px solid #F1F5F9',
            backgroundColor: '#FAFCFF'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '10px'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: role === 'admin' ? '#F0EBFF' : '#EAF3FF',
                color: role === 'admin' ? '#635BFF' : '#4D9AF5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
                border: '1px solid #E2E8F0'
              }}
            >
              {role === 'admin' ? 'PO' : 'AK'}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.825rem', fontWeight: 600, color: '#1C2638', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {role === 'admin' ? 'Placement Officer' : 'Arun Kumar'}
              </div>
              <div style={{ fontSize: '0.7rem', color: '#7C8799' }}>
                {role === 'admin' ? 'Administrator' : '2023CSE042'}
              </div>
            </div>
          </div>

          <Link
            href="/login"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              padding: '7px 10px',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              backgroundColor: '#FFFFFF',
              color: '#64748B',
              fontSize: '0.785rem',
              fontWeight: 600,
              transition: 'all 0.18s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FEE2E2';
              e.currentTarget.style.color = '#DC2626';
              e.currentTarget.style.borderColor = '#FECACA';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#64748B';
              e.currentTarget.style.borderColor = '#E2E8F0';
            }}
          >
            <LogOut size={14} />
            Sign Out
          </Link>
        </div>
      </aside>
    </>
  );
}
