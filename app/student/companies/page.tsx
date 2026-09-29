'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Search,
  ExternalLink,
  MapPin,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { INITIAL_COMPANIES, INITIAL_DRIVES } from '@/lib/mockData';
import Button from '@/components/ui/Button';

export default function StudentCompaniesPage() {
  const [companies] = useState(INITIAL_COMPANIES);
  const [search, setSearch] = useState('');

  const filtered = companies.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.industry.toLowerCase().includes(search.toLowerCase()) ||
    c.rolesOffered.some(r => r.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
          Partner Recruiting Companies
        </h1>
        <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
          Explore corporate hiring partners, job profiles, and historical campus packages
        </p>
      </div>

      {/* Search Bar */}
      <div className="glow-card" style={{ padding: '16px 20px' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
          <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '12px' }} />
          <input
            type="text"
            placeholder="Search company name, skills, role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field"
            style={{ paddingLeft: '36px' }}
          />
        </div>
      </div>

      {/* Grid of Company Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {filtered.map((comp) => {
          const activeDrive = INITIAL_DRIVES.find(d => d.companyId === comp.id && d.status === 'Active');
          return (
            <div
              key={comp.id}
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
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        backgroundColor: '#F0EBFF',
                        color: '#635BFF',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #D8CEFE'
                      }}
                    >
                      {comp.logo}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638' }}>{comp.name}</h3>
                      <div style={{ fontSize: '0.785rem', color: '#64748B' }}>{comp.industry}</div>
                    </div>
                  </div>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '20px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      backgroundColor: comp.tier === 'Dream' ? '#FFEAF4' : '#EAF3FF',
                      color: comp.tier === 'Dream' ? '#DB2777' : '#1D6FD8'
                    }}
                  >
                    {comp.tier}
                  </span>
                </div>

                <div style={{ margin: '14px 0', padding: '12px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #E8EDF2', display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>TYPICAL CTC</span>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#16A34A' }}>{comp.packageRange}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>CAMPUS HIRED</span>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1C2638' }}>{comp.totalHired} students</div>
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#64748B' }}>Common Roles:</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '6px' }}>
                    {comp.rolesOffered.map(r => (
                      <span key={r} style={{ fontSize: '0.72rem', backgroundColor: '#F1F5F9', color: '#334155', padding: '2px 7px', borderRadius: '4px' }}>
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '12px' }}>
                <a
                  href={comp.website}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: '0.75rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  Website <ExternalLink size={12} />
                </a>

                {activeDrive ? (
                  <Link href={`/student/drives/${activeDrive.id}`} className="btn btn-primary btn-sm">
                    Open Drive Available →
                  </Link>
                ) : (
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>No active drives</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
