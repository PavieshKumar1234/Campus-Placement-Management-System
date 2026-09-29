'use client';

import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Download,
  Eye,
  RefreshCw,
  FileText,
  Building2,
  Users,
  Briefcase,
  Layers,
  Award,
  Calendar
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';

interface ReportCard {
  id: string;
  title: string;
  description: string;
  lastGenerated: string;
  format: string;
  size: string;
  icon: any;
  color: string;
  bg: string;
}

const REPORTS_LIST: ReportCard[] = [
  {
    id: 'rep-1',
    title: 'Placement Executive Summary',
    description: 'Overall statistics, placement rates by branch, top hiring recruiters, and CTC benchmarks.',
    lastGenerated: 'Today, 02:30 PM',
    format: 'PDF / XLSX',
    size: '2.4 MB',
    icon: Award,
    color: '#16A34A',
    bg: '#E7FAEF'
  },
  {
    id: 'rep-2',
    title: 'Student Cohort Dossier & Eligibility',
    description: 'Full roster of registered students, CGPA verification, backlog status, and placement states.',
    lastGenerated: 'Yesterday',
    format: 'XLSX',
    size: '4.8 MB',
    icon: Users,
    color: '#1D6FD8',
    bg: '#EAF3FF'
  },
  {
    id: 'rep-3',
    title: 'Recruiting Company Engagement Report',
    description: 'Corporate participation index, CTC tiers offered, feedback ratings, and historical hiring numbers.',
    lastGenerated: '2 days ago',
    format: 'PDF / CSV',
    size: '1.8 MB',
    icon: Building2,
    color: '#635BFF',
    bg: '#F0EBFF'
  },
  {
    id: 'rep-4',
    title: 'Placement Drives & Assessment Audit',
    description: 'Turnout rates, shortlist ratios per round, online test outcomes, and final conversion metrics.',
    lastGenerated: '3 days ago',
    format: 'PDF',
    size: '3.1 MB',
    icon: Briefcase,
    color: '#EA580C',
    bg: '#FFF1DD'
  },
  {
    id: 'rep-5',
    title: 'Application Pipeline Stage Funnel',
    description: 'Detailed stage-by-stage candidate progression and interview scorecards.',
    lastGenerated: 'Oct 01, 2026',
    format: 'CSV / XLSX',
    size: '5.2 MB',
    icon: FileText,
    color: '#DB2777',
    bg: '#FFEAF4'
  },
  {
    id: 'rep-6',
    title: 'Department Performance & Discipline Analysis',
    description: 'Comparative analytics across CSE, AIML, IT, ECE, EEE, and Mechanical departments.',
    lastGenerated: 'Sep 28, 2026',
    format: 'PDF / XLSX',
    size: '2.1 MB',
    icon: Layers,
    color: '#CA8A04',
    bg: '#FFF7D9'
  },
  {
    id: 'rep-7',
    title: 'Salary Package & CTC Distribution Matrix',
    description: 'Stratification by package brackets (<5 LPA, 5-10 LPA, 10-15 LPA, >15 LPA) and dream tiers.',
    lastGenerated: 'Sep 25, 2026',
    format: 'XLSX',
    size: '1.2 MB',
    icon: FileSpreadsheet,
    color: '#4F46E5',
    bg: '#EEF2FF'
  }
];

export default function ReportsPage() {
  const [reports, setReports] = useState(REPORTS_LIST);
  const [selectedReport, setSelectedReport] = useState<ReportCard | null>(null);

  const handleGenerate = (id: string, title: string) => {
    alert(`Regenerating "${title}" with latest database records...`);
    setReports(prev => prev.map(r => r.id === id ? { ...r, lastGenerated: 'Just now' } : r));
  };

  const handleDownload = (title: string, format: string) => {
    alert(`Downloading "${title}" (${format})...`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
          Compliance & Analytical Reports
        </h1>
        <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
          Generate, preview, and export official reports for university accreditations, NBA, and NIRF audits
        </p>
      </div>

      {/* Grid of Report Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
        {reports.map((rep) => {
          const Icon = rep.icon;
          return (
            <div
              key={rep.id}
              className="glow-card"
              style={{
                padding: '24px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '18px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: rep.bg,
                      color: rep.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      backgroundColor: '#F1F5F9',
                      color: '#475569'
                    }}
                  >
                    {rep.format}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638', marginTop: '14px', marginBottom: '6px' }}>
                  {rep.title}
                </h3>
                <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: 1.45 }}>
                  {rep.description}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94A3B8', borderTop: '1px solid #F1F5F9', paddingTop: '12px', marginBottom: '14px' }}>
                  <span>Last generated: <strong style={{ color: '#475569' }}>{rep.lastGenerated}</strong></span>
                  <span>{rep.size}</span>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button
                    variant="secondary"
                    size="sm"
                    style={{ flex: 1 }}
                    icon={<Eye size={13} />}
                    onClick={() => setSelectedReport(rep)}
                  >
                    Preview
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={<RefreshCw size={13} />}
                    onClick={() => handleGenerate(rep.id, rep.title)}
                    title="Regenerate"
                  >
                    Refresh
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    style={{ flex: 1 }}
                    icon={<Download size={13} />}
                    onClick={() => handleDownload(rep.title, rep.format)}
                  >
                    Export
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Report Preview Modal */}
      {selectedReport && (
        <Modal
          isOpen={!!selectedReport}
          onClose={() => setSelectedReport(null)}
          title={`Document Preview: ${selectedReport.title}`}
          maxWidth="640px"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#F8FAFC', border: '1px solid #E8EDF2' }}>
              <div style={{ fontSize: '0.885rem', fontWeight: 700, color: '#1C2638', marginBottom: '4px' }}>
                Executive Metadata
              </div>
              <p style={{ fontSize: '0.8rem', color: '#64748B' }}>
                Format: {selectedReport.format} • Size: {selectedReport.size} • Last compiled: {selectedReport.lastGenerated}
              </p>
            </div>

            <div style={{ border: '1px dashed #CBD5E1', borderRadius: '12px', padding: '32px 20px', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
              <FileSpreadsheet size={40} color="#635BFF" style={{ margin: '0 auto 12px' }} />
              <div style={{ fontWeight: 700, color: '#1C2638', fontSize: '0.95rem' }}>
                {selectedReport.title} (Verified Dataset)
              </div>
              <p style={{ fontSize: '0.8rem', color: '#64748B', maxWidth: '400px', margin: '6px auto 16px' }}>
                This report aggregates candidate test scores, offer disbursements, company hiring volumes, and audit parameters.
              </p>
              <div style={{ display: 'inline-flex', gap: '10px' }}>
                <Button variant="primary" icon={<Download size={14} />} onClick={() => handleDownload(selectedReport.title, selectedReport.format)}>
                  Download Complete Dataset
                </Button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="secondary" onClick={() => setSelectedReport(null)}>
                Close Preview
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
