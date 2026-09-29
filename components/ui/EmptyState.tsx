'use client';

import React, { ReactNode } from 'react';
import { LucideIcon, Inbox } from 'lucide-react';
import Button from './Button';

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  children?: ReactNode;
}

export default function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  actionText,
  onAction,
  children
}: EmptyStateProps) {
  return (
    <div
      style={{
        padding: '48px 24px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px dashed #CBD5E1',
        margin: '16px 0'
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          backgroundColor: '#F0EBFF',
          color: '#635BFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px'
        }}
      >
        <Icon size={28} />
      </div>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638', marginBottom: '6px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.865rem', color: '#64748B', maxWidth: '420px', lineHeight: 1.5, marginBottom: '20px' }}>
        {description}
      </p>
      {actionText && onAction && (
        <Button onClick={onAction} variant="primary">
          {actionText}
        </Button>
      )}
      {children}
    </div>
  );
}
