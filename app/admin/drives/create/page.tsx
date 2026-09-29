'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Briefcase, Plus, Check } from 'lucide-react';
import { Department } from '@/types/common';
import { SelectionStage } from '@/types/drive';
import { INITIAL_COMPANIES } from '@/lib/mockData';
import { api } from '@/lib/api';
import Button from '@/components/ui/Button';

const ALL_DEPARTMENTS: Department[] = ['CSE', 'AIML', 'IT', 'ECE', 'EEE', 'Mechanical'];
const ALL_STAGES: SelectionStage[] = [
  'Aptitude Test',
  'Coding Round',
  'Technical Interview',
  'Group Discussion',
  'HR Interview'
];

export default function CreateDrivePage() {
  const router = useRouter();

  const [companyId, setCompanyId] = useState(INITIAL_COMPANIES[0].id);
  const [role, setRole] = useState('');
  const [packageLPA, setPackageLPA] = useState(7.5);
  const [jobType, setJobType] = useState<'Full-time' | 'Internship + PPO' | 'Internship'>('Full-time');
  const [location, setLocation] = useState('Campus / Hybrid');
  const [minCgpa, setMinCgpa] = useState(7.0);
  const [maxBacklogs, setMaxBacklogs] = useState(0);
  const [graduationYear, setGraduationYear] = useState(2027);
  const [applicationDeadline, setApplicationDeadline] = useState('2026-10-15');
  const [driveDate, setDriveDate] = useState('2026-10-20');
  const [description, setDescription] = useState('');
  const [selectedDepts, setSelectedDepts] = useState<Department[]>(['CSE', 'AIML', 'IT']);
  const [selectedStages, setSelectedStages] = useState<SelectionStage[]>([
    'Aptitude Test',
    'Technical Interview',
    'HR Interview'
  ]);

  const toggleDept = (dept: Department) => {
    if (selectedDepts.includes(dept)) {
      setSelectedDepts(selectedDepts.filter(d => d !== dept));
    } else {
      setSelectedDepts([...selectedDepts, dept]);
    }
  };

  const toggleStage = (stage: SelectionStage) => {
    if (selectedStages.includes(stage)) {
      setSelectedStages(selectedStages.filter(s => s !== stage));
    } else {
      setSelectedStages([...selectedStages, stage]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const comp = INITIAL_COMPANIES.find(c => c.id === companyId) || INITIAL_COMPANIES[0];

    await api.createDrive({
      companyId: comp.id,
      companyName: comp.name,
      companyLogo: comp.logo,
      role: role || 'Software Development Engineer',
      packageLPA: Number(packageLPA),
      packageText: `₹${packageLPA.toFixed(1)} LPA`,
      jobType,
      location,
      description: description || 'Exciting graduate engineering opportunity with competitive growth and mentorship.',
      requirements: [`Minimum CGPA of ${minCgpa}`, `No more than ${maxBacklogs} backlogs`],
      selectionProcess: selectedStages,
      minCgpa: Number(minCgpa),
      eligibleDepartments: selectedDepts,
      graduationYear: Number(graduationYear),
      maxBacklogs: Number(maxBacklogs),
      applicationDeadline,
      driveDate,
      status: 'Active'
    });

    alert('Placement Drive successfully published!');
    router.push('/admin/drives');
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Link
          href="/admin/drives"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.885rem',
            fontWeight: 600,
            color: '#64748B'
          }}
        >
          <ArrowLeft size={16} /> Back to Drives
        </Link>
      </div>

      <div className="glow-card" style={{ padding: '32px', backgroundColor: '#FFFFFF' }}>
        <div style={{ marginBottom: '24px', borderBottom: '1px solid #E8EDF2', paddingBottom: '16px' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1C2638' }}>
            Publish New Placement Drive
          </h1>
          <p style={{ fontSize: '0.865rem', color: '#64748B', marginTop: '4px' }}>
            Configure job specifications, eligibility filters, and selection stages
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Company & Role */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label className="form-label">Recruiting Company *</label>
              <select
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                className="input-field"
                required
              >
                {INITIAL_COMPANIES.map(c => (
                  <option key={c.id} value={c.id}>{c.name} ({c.tier})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="form-label">Job Role Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Associate Software Engineer"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="input-field"
              />
            </div>
          </div>

          {/* Package, Job Type & Location */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            <div>
              <label className="form-label">Annual CTC Package (in ₹ LPA) *</label>
              <input
                type="number"
                step="0.1"
                min="1"
                required
                value={packageLPA}
                onChange={(e) => setPackageLPA(parseFloat(e.target.value))}
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Job Type</label>
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value as any)}
                className="input-field"
              >
                <option value="Full-time">Full-time</option>
                <option value="Internship + PPO">Internship + PPO</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div>
              <label className="form-label">Job Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input-field"
              />
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: '#F8FAFC', border: '1px solid #E8EDF2' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1C2638', marginBottom: '14px' }}>
              Academic Eligibility Thresholds
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label className="form-label">Minimum CGPA</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="10"
                  value={minCgpa}
                  onChange={(e) => setMinCgpa(parseFloat(e.target.value))}
                  className="input-field"
                />
              </div>
              <div>
                <label className="form-label">Graduation Batch Year</label>
                <input
                  type="number"
                  value={graduationYear}
                  onChange={(e) => setGraduationYear(parseInt(e.target.value))}
                  className="input-field"
                />
              </div>
              <div>
                <label className="form-label">Max Allowed Backlogs</label>
                <input
                  type="number"
                  min="0"
                  value={maxBacklogs}
                  onChange={(e) => setMaxBacklogs(parseInt(e.target.value))}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="form-label">Eligible Engineering Departments</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                {ALL_DEPARTMENTS.map((dept) => {
                  const isSelected = selectedDepts.includes(dept);
                  return (
                    <button
                      type="button"
                      key={dept}
                      onClick={() => toggleDept(dept)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '8px',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        backgroundColor: isSelected ? '#635BFF' : '#FFFFFF',
                        color: isSelected ? '#FFFFFF' : '#475569',
                        border: '1px solid',
                        borderColor: isSelected ? '#635BFF' : '#CBD5E1',
                        cursor: 'pointer'
                      }}
                    >
                      {dept} {isSelected && '✓'}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dates & Timeline */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label className="form-label">Application Deadline *</label>
              <input
                type="date"
                required
                value={applicationDeadline}
                onChange={(e) => setApplicationDeadline(e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Recruitment Drive Date *</label>
              <input
                type="date"
                required
                value={driveDate}
                onChange={(e) => setDriveDate(e.target.value)}
                className="input-field"
              />
            </div>
          </div>

          {/* Selection Stages */}
          <div>
            <label className="form-label">Selection Process Rounds</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
              {ALL_STAGES.map((stg) => {
                const isSelected = selectedStages.includes(stg);
                return (
                  <button
                    type="button"
                    key={stg}
                    onClick={() => toggleStage(stg)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      backgroundColor: isSelected ? '#32C98B' : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : '#475569',
                      border: '1px solid',
                      borderColor: isSelected ? '#32C98B' : '#CBD5E1',
                      cursor: 'pointer'
                    }}
                  >
                    {stg} {isSelected && '✓'}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="form-label">Job Description & Responsibilities</label>
            <textarea
              rows={4}
              placeholder="Describe candidate responsibilities, training period, and prerequisites..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-field"
              style={{ resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
            <Link href="/admin/drives" className="btn btn-secondary">
              Cancel
            </Link>
            <Button type="submit" variant="primary">
              Publish Placement Drive
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
