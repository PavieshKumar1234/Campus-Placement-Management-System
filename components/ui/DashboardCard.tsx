'use client';

import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

export type CardColor = 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'yellow';

interface DashboardCardProps {
  title: string;
  value: string | number;
  trend?: string;
  trendDirection?: 'up' | 'down';
  trendLabel?: string;
  icon: LucideIcon;
  color?: CardColor;
  subtitle?: string;
}

const COLOR_CONFIGS: Record<CardColor, {
  bgLight: string;
  text: string;
  borderHover: string;
  glow: string;
  iconBg: string;
  iconColor: string;
  decorShape: string;
}> = {
  blue: {
    bgLight: '#EAF3FF',
    text: '#1D6FD8',
    borderHover: 'rgba(77, 154, 245, 0.5)',
    glow: '0 12px 28px -4px rgba(77, 154, 245, 0.28), 0 4px 10px rgba(0,0,0,0.03)',
    iconBg: '#D5E8FE',
    iconColor: '#2A75D3',
    decorShape: 'radial-gradient(circle at top right, rgba(77, 154, 245, 0.15) 0%, transparent 70%)'
  },
  purple: {
    bgLight: '#F0EBFF',
    text: '#635BFF',
    borderHover: 'rgba(99, 91, 255, 0.5)',
    glow: '0 12px 28px -4px rgba(99, 91, 255, 0.28), 0 4px 10px rgba(0,0,0,0.03)',
    iconBg: '#DFD4FF',
    iconColor: '#635BFF',
    decorShape: 'radial-gradient(circle at top right, rgba(99, 91, 255, 0.15) 0%, transparent 70%)'
  },
  green: {
    bgLight: '#E7FAEF',
    text: '#16A34A',
    borderHover: 'rgba(50, 201, 139, 0.5)',
    glow: '0 12px 28px -4px rgba(50, 201, 139, 0.25), 0 4px 10px rgba(0,0,0,0.03)',
    iconBg: '#CCF6DF',
    iconColor: '#16A34A',
    decorShape: 'radial-gradient(circle at top right, rgba(50, 201, 139, 0.15) 0%, transparent 70%)'
  },
  orange: {
    bgLight: '#FFF1DD',
    text: '#EA580C',
    borderHover: 'rgba(255, 169, 77, 0.5)',
    glow: '0 12px 28px -4px rgba(255, 169, 77, 0.28), 0 4px 10px rgba(0,0,0,0.03)',
    iconBg: '#FFE0B5',
    iconColor: '#D97706',
    decorShape: 'radial-gradient(circle at top right, rgba(255, 169, 77, 0.15) 0%, transparent 70%)'
  },
  pink: {
    bgLight: '#FFEAF4',
    text: '#DB2777',
    borderHover: 'rgba(232, 111, 168, 0.5)',
    glow: '0 12px 28px -4px rgba(232, 111, 168, 0.25), 0 4px 10px rgba(0,0,0,0.03)',
    iconBg: '#FDCFE3',
    iconColor: '#DB2777',
    decorShape: 'radial-gradient(circle at top right, rgba(232, 111, 168, 0.15) 0%, transparent 70%)'
  },
  yellow: {
    bgLight: '#FFF7D9',
    text: '#CA8A04',
    borderHover: 'rgba(245, 196, 81, 0.5)',
    glow: '0 12px 28px -4px rgba(245, 196, 81, 0.25), 0 4px 10px rgba(0,0,0,0.03)',
    iconBg: '#FEECA8',
    iconColor: '#CA8A04',
    decorShape: 'radial-gradient(circle at top right, rgba(245, 196, 81, 0.15) 0%, transparent 70%)'
  }
};

export default function DashboardCard({
  title,
  value,
  trend,
  trendDirection = 'up',
  trendLabel = 'vs last season',
  icon: Icon,
  color = 'purple',
  subtitle
}: DashboardCardProps) {
  const config = COLOR_CONFIGS[color] || COLOR_CONFIGS.purple;

  return (
    <div
      className="glow-card"
      style={{
        padding: '24px',
        borderRadius: '18px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E8EDF2',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '160px',
        backgroundImage: config.decorShape,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = config.glow;
        e.currentTarget.style.borderColor = config.borderHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
        e.currentTarget.style.borderColor = '#E8EDF2';
      }}
    >
      {/* Header: Title + Icon */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div>
          <span
            style={{
              fontSize: '0.84rem',
              fontWeight: 600,
              color: '#64748B',
              letterSpacing: '0.01em',
              textTransform: 'uppercase'
            }}
          >
            {title}
          </span>
          {subtitle && (
            <p style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '2px' }}>{subtitle}</p>
          )}
        </div>
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '14px',
            backgroundColor: config.bgLight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: config.iconColor,
            border: `1px solid ${config.borderHover}`
          }}
        >
          <Icon size={22} strokeWidth={2.2} />
        </div>
      </div>

      {/* Metric Value */}
      <div style={{ margin: '6px 0 12px' }}>
        <span
          style={{
            fontSize: '2.15rem',
            fontWeight: 800,
            color: '#1C2638',
            letterSpacing: '-0.03em',
            lineHeight: 1
          }}
        >
          {value}
        </span>
      </div>

      {/* Trend Row */}
      {trend && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontWeight: 700,
              color: trendDirection === 'up' ? '#16A34A' : '#DC2626',
              backgroundColor: trendDirection === 'up' ? '#E7FAEF' : '#FEE2E2',
              padding: '2px 8px',
              borderRadius: '20px'
            }}
          >
            {trendDirection === 'up' ? (
              <TrendingUp size={13} strokeWidth={2.6} />
            ) : (
              <TrendingDown size={13} strokeWidth={2.6} />
            )}
            <span>{trend}</span>
          </div>
          <span style={{ color: '#7C8799', fontWeight: 500 }}>{trendLabel}</span>
        </div>
      )}
    </div>
  );
}
