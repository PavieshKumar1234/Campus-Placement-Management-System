'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  UserCheck,
  Award,
  Search,
  Plus,
  Eye,
  Trash2,
  Filter,
  GraduationCap
} from 'lucide-react';
import { INITIAL_STUDENTS } from '@/lib/mockData';
import { Student } from '@/types/student';
import { Department } from '@/types/common';
import StatusBadge from '@/components/ui/StatusBadge';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import DashboardCard from '@/components/ui/DashboardCard';

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    studentId: '',
    email: '',
    phone: '',
    department: 'CSE' as Department,
    cgpa: 8.5,
    graduationYear: 2027,
    backlogs: 0,
    skills: 'React, Node.js'
  });

  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = departmentFilter === 'All' || s.department === departmentFilter;
    const matchesStatus = statusFilter === 'All' || s.placementStatus === statusFilter;
    return matchesSearch && matchesDept && matchesStatus;
  });

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this student record?')) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.studentId || !newStudent.email) {
      alert('Please fill out all required fields');
      return;
    }

    const created: Student = {
      id: `std-${Date.now()}`,
      studentId: newStudent.studentId,
      name: newStudent.name,
      email: newStudent.email,
      phone: newStudent.phone || '+91 98765 00000',
      department: newStudent.department,
      cgpa: Number(newStudent.cgpa),
      graduationYear: Number(newStudent.graduationYear),
      backlogs: Number(newStudent.backlogs),
      placementStatus: 'Seeking',
      skills: newStudent.skills.split(',').map((sk) => sk.trim()),
      projects: [],
      certifications: [],
      offersCount: 0,
      applicationsCount: 0
    };

    setStudents([created, ...students]);
    setIsModalOpen(false);
    setNewStudent({
      name: '',
      studentId: '',
      email: '',
      phone: '',
      department: 'CSE',
      cgpa: 8.5,
      graduationYear: 2027,
      backlogs: 0,
      skills: 'React, Node.js'
    });
  };

  const totalPlaced = students.filter(s => s.placementStatus === 'Placed').length;
  const totalSeeking = students.filter(s => s.placementStatus === 'Seeking' || s.placementStatus === 'In Process').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
            Student Management
          </h1>
          <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
            Maintain candidate profiles, academic eligibility, and career tracking
          </p>
        </div>
        <Button
          variant="primary"
          icon={<Plus size={16} />}
          onClick={() => setIsModalOpen(true)}
        >
          Add New Student
        </Button>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <DashboardCard
          title="Total Students"
          value={students.length.toString()}
          trend="+8"
          trendLabel="this month"
          icon={Users}
          color="blue"
        />
        <DashboardCard
          title="Eligible Candidates"
          value={students.filter(s => s.cgpa >= 7.0 && s.backlogs === 0).length.toString()}
          trend="88%"
          trendLabel="of total cohort"
          icon={UserCheck}
          color="purple"
        />
        <DashboardCard
          title="Placed Students"
          value={totalPlaced.toString()}
          trend={`${Math.round((totalPlaced / students.length) * 100)}%`}
          trendLabel="placement rate"
          icon={Award}
          color="green"
        />
        <DashboardCard
          title="Seeking Offers"
          value={totalSeeking.toString()}
          trend="In pipeline"
          trendLabel="drives active"
          icon={GraduationCap}
          color="orange"
        />
      </div>

      {/* Filters and Search Bar */}
      <div
        className="glow-card"
        style={{
          padding: '16px 20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '260px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
            <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '12px' }} />
            <input
              type="text"
              placeholder="Search by name, roll no, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field"
              style={{ paddingLeft: '36px' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Filter size={15} color="#64748B" />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748B' }}>Dept:</span>
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="input-field"
              style={{ width: 'auto', padding: '6px 12px', fontSize: '0.825rem' }}
            >
              <option value="All">All Departments</option>
              <option value="CSE">CSE</option>
              <option value="AIML">AIML</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="Mechanical">Mechanical</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748B' }}>Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input-field"
              style={{ width: 'auto', padding: '6px 12px', fontSize: '0.825rem' }}
            >
              <option value="All">All Statuses</option>
              <option value="Placed">Placed</option>
              <option value="Shortlisted">Shortlisted</option>
              <option value="In Process">In Process</option>
              <option value="Seeking">Seeking</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Students Table */}
      <div className="custom-table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Department</th>
              <th>CGPA</th>
              <th>Grad Year</th>
              <th>Backlogs</th>
              <th>Placement Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan={8} style={{ textAlign: 'center', padding: '36px', color: '#94A3B8' }}>
                  No students matched your search criteria.
                </td>
              </tr>
            ) : (
              filteredStudents.map((s) => (
                <tr key={s.id}>
                  <td>
                    <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#635BFF', fontSize: '0.825rem' }}>
                      {s.studentId}
                    </span>
                  </td>
                  <td>
                    <div>
                      <div style={{ fontWeight: 600, color: '#1C2638' }}>{s.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{s.email}</div>
                    </div>
                  </td>
                  <td>
                    <span
                      style={{
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: '#F1F5F9',
                        color: '#475569'
                      }}
                    >
                      {s.department}
                    </span>
                  </td>
                  <td>
                    <span
                      style={{
                        fontWeight: 700,
                        color: s.cgpa >= 8.5 ? '#16A34A' : s.cgpa >= 7.0 ? '#1C2638' : '#EA580C'
                      }}
                    >
                      {s.cgpa.toFixed(2)}
                    </span>
                  </td>
                  <td>{s.graduationYear}</td>
                  <td>
                    <span
                      style={{
                        fontWeight: 600,
                        color: s.backlogs === 0 ? '#16A34A' : '#DC2626'
                      }}
                    >
                      {s.backlogs}
                    </span>
                  </td>
                  <td>
                    <StatusBadge status={s.placementStatus} />
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <Link
                        href={`/admin/students/${s.id}`}
                        className="btn-icon"
                        style={{ width: '32px', height: '32px' }}
                        title="View Profile"
                      >
                        <Eye size={15} />
                      </Link>
                      <button
                        onClick={() => handleDelete(s.id)}
                        className="btn-icon"
                        style={{ width: '32px', height: '32px', color: '#DC2626' }}
                        title="Delete Student"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Student Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Candidate Profile"
      >
        <form onSubmit={handleAddStudent} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Arun Kumar"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              className="input-field"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label className="form-label">Student Roll / ID *</label>
              <input
                type="text"
                required
                placeholder="2023CSE099"
                value={newStudent.studentId}
                onChange={(e) => setNewStudent({ ...newStudent, studentId: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Department *</label>
              <select
                value={newStudent.department}
                onChange={(e) => setNewStudent({ ...newStudent, department: e.target.value as Department })}
                className="input-field"
              >
                <option value="CSE">CSE</option>
                <option value="AIML">AIML</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="Mechanical">Mechanical</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label className="form-label">College Email *</label>
              <input
                type="email"
                required
                placeholder="student@college.edu"
                value={newStudent.email}
                onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                placeholder="+91 98765 43210"
                value={newStudent.phone}
                onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
                className="input-field"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            <div>
              <label className="form-label">CGPA *</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                required
                value={newStudent.cgpa}
                onChange={(e) => setNewStudent({ ...newStudent, cgpa: parseFloat(e.target.value) })}
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Grad Year</label>
              <input
                type="number"
                value={newStudent.graduationYear}
                onChange={(e) => setNewStudent({ ...newStudent, graduationYear: parseInt(e.target.value) })}
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Backlogs</label>
              <input
                type="number"
                min="0"
                value={newStudent.backlogs}
                onChange={(e) => setNewStudent({ ...newStudent, backlogs: parseInt(e.target.value) })}
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Skills (comma-separated)</label>
            <input
              type="text"
              placeholder="e.g. React, Python, Docker"
              value={newStudent.skills}
              onChange={(e) => setNewStudent({ ...newStudent, skills: e.target.value })}
              className="input-field"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
            <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save Student
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
