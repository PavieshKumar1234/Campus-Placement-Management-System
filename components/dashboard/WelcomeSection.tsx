'use client';

import React from 'react';
import { Download, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function WelcomeSection() {
  const handleExport = () => {
    alert('Generating Placement Analytics & Audit Report for Batch 2027...');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        marginBottom: '28px'
      }}
    >
      <div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.725rem',
            fontWeight: 700,
            color: '#635BFF',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            backgroundColor: '#F0EBFF',
            padding: '3px 10px',
            borderRadius: '20px',
            marginBottom: '8px'
          }}
        >
          <Sparkles size={12} />
          PLACEMENT OVERVIEW
        </div>
        <h1
          style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            color: '#1C2638',
            letterSpacing: '-0.025em',
            lineHeight: 1.2
          }}
        >
          Good Morning, Placement Officer 👋
        </h1>
        <p
          style={{
            fontSize: '0.9rem',
            color: '#7C8799',
            marginTop: '4px'
          }}
        >
          Monitor students, recruitment drives and placement activities from one place.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Button
          variant="primary"
          icon={<Download size={16} />}
          onClick={handleExport}
        >
          Export Report
        </Button>
      </div>
    </div>
  );
}
