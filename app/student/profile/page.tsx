'use client';

import React, { useState } from 'react';
import {
  User,
  GraduationCap,
  Award,
  FileText,
  Mail,
  Phone,
  MapPin,
  Plus,
  Trash2,
  Save,
  CheckCircle2,
  Upload
} from 'lucide-react';
import { INITIAL_STUDENTS } from '@/lib/mockData';
import { Student } from '@/types/student';
import Button from '@/components/ui/Button';

export default function StudentProfilePage() {
  const [student, setStudent] = useState<Student>(INITIAL_STUDENTS[0]); // Arun Kumar
  const [newSkill, setNewSkill] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Form states
  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [phone, setPhone] = useState(student.phone);
  const [address, setAddress] = useState(student.address || '');
  const [bio, setBio] = useState(student.bio || '');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setStudent(prev => ({
      ...prev,
      name,
      email,
      phone,
      address,
      bio
    }));
    setIsEditing(false);
    alert('Student Profile saved successfully!');
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !student.skills.includes(newSkill.trim())) {
      setStudent(prev => ({ ...prev, skills: [...prev.skills, newSkill.trim()] }));
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setStudent(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skillToRemove) }));
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
            My Candidate Profile & Dossier
          </h1>
          <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
            Keep your skills, verified projects, and resume updated for placement screening
          </p>
        </div>
        <Button
          variant={isEditing ? 'secondary' : 'primary'}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel Editing' : 'Edit Profile'}
        </Button>
      </div>

      {/* Top Banner / Avatar Card */}
      <div
        className="glow-card"
        style={{
          padding: '28px',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #635BFF 0%, #4D9AF5 100%)',
              color: '#FFFFFF',
              fontSize: '1.75rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(99, 91, 255, 0.25)'
            }}
          >
            AK
          </div>
          <div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#1C2638' }}>{student.name}</h2>
            <div style={{ fontSize: '0.865rem', color: '#64748B', marginTop: '4px' }}>
              Roll: <strong>{student.studentId}</strong> • {student.department} Engineering • Class of {student.graduationYear}
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '8px', fontSize: '0.825rem', color: '#475569' }}>
              <span>CGPA: <strong style={{ color: '#16A34A' }}>{student.cgpa.toFixed(2)}</strong></span>
              <span>Backlogs: <strong style={{ color: '#16A34A' }}>{student.backlogs}</strong></span>
              <span>Placement Status: <strong style={{ color: '#635BFF' }}>{student.placementStatus}</strong></span>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={() => alert('Resume PDF updated and submitted for placement cell verification.')}
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <Upload size={16} /> Upload New Resume (PDF)
          </button>
        </div>
      </div>

      {/* Edit Form or Read View */}
      {isEditing ? (
        <div className="glow-card" style={{ padding: '28px', backgroundColor: '#FFFFFF' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1C2638', marginBottom: '18px' }}>
            Edit Personal & Contact Details
          </h3>
          <form onSubmit={handleSaveProfile} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="form-label">City, State</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="form-label">Professional Summary & Bio</label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="input-field"
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <Button type="button" variant="secondary" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" icon={<Save size={15} />}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      ) : null}

      {/* Skills Section */}
      <div className="glow-card" style={{ padding: '24px', backgroundColor: '#FFFFFF' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638', marginBottom: '14px' }}>
          Verified Technical Skills
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
          {student.skills.map((skill) => (
            <span
              key={skill}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: '#F0EBFF',
                color: '#635BFF',
                fontWeight: 600,
                fontSize: '0.85rem',
                border: '1px solid #D8CEFE'
              }}
            >
              {skill}
              <button
                type="button"
                onClick={() => handleRemoveSkill(skill)}
                style={{ color: '#94A3B8', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                title="Remove Skill"
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px', maxWidth: '400px' }}>
          <input
            type="text"
            placeholder="Add new skill (e.g. AWS, Kubernetes)..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="input-field"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddSkill();
              }
            }}
          />
          <Button type="button" variant="secondary" onClick={handleAddSkill}>
            Add
          </Button>
        </div>
      </div>

      {/* Projects */}
      <div className="glow-card" style={{ padding: '24px', backgroundColor: '#FFFFFF' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638', marginBottom: '16px' }}>
          Featured Engineering Projects
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {student.projects.map((proj) => (
            <div
              key={proj.id}
              style={{
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E8EDF2'
              }}
            >
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1C2638' }}>{proj.title}</h4>
              <p style={{ fontSize: '0.825rem', color: '#64748B', marginTop: '4px', lineHeight: 1.45 }}>
                {proj.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                {proj.technologies.map(t => (
                  <span key={t} style={{ fontSize: '0.74rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#E2E8F0', color: '#334155' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="glow-card" style={{ padding: '24px', backgroundColor: '#FFFFFF' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638', marginBottom: '16px' }}>
          Industry Certifications
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          {student.certifications.map((cert) => (
            <div
              key={cert.id}
              style={{
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E8EDF2',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <Award size={24} color="#16A34A" />
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1C2638' }}>{cert.name}</div>
                <div style={{ fontSize: '0.785rem', color: '#64748B' }}>{cert.issuer} • {cert.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
