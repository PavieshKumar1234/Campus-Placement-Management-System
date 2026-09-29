'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Sparkles,
  Award,
  Users,
  Search,
  Plus,
  ExternalLink,
  MapPin,
  Trash2,
  Eye,
  Filter
} from 'lucide-react';
import { INITIAL_COMPANIES } from '@/lib/mockData';
import { Company } from '@/types/company';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import DashboardCard from '@/components/ui/DashboardCard';

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>(INITIAL_COMPANIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [tierFilter, setTierFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newCompany, setNewCompany] = useState({
    name: '',
    industry: 'Enterprise Software & SaaS',
    website: 'https://',
    headquarters: 'Bengaluru, India',
    tier: 'Tier 1' as Company['tier'],
    packageRange: '₹6.0 - ₹12.0 LPA',
    recruiterName: '',
    recruiterEmail: '',
    recruiterPhone: ''
  });

  const filteredCompanies = companies.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.headquarters.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTier = tierFilter === 'All' || c.tier === tierFilter;
    return matchesSearch && matchesTier;
  });

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this recruiting company?')) {
      setCompanies(companies.filter(c => c.id !== id));
    }
  };

  const handleAddCompany = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompany.name) return;

    const created: Company = {
      id: `comp-${Date.now()}`,
      name: newCompany.name,
      logo: newCompany.name.substring(0, 3).toUpperCase(),
      industry: newCompany.industry,
      website: newCompany.website,
      about: `${newCompany.name} is a premier recruiting partner offering high-impact engineering roles.`,
      headquarters: newCompany.headquarters,
      locations: [newCompany.headquarters],
      recruiter: {
        name: newCompany.recruiterName || 'Campus Relations Team',
        email: newCompany.recruiterEmail || 'careers@company.com',
        phone: newCompany.recruiterPhone || '+91 98000 00000',
        designation: 'Talent Acquisition'
      },
      rolesOffered: ['Software Engineer', 'Associate Analyst'],
      packageRange: newCompany.packageRange,
      minPackage: 6.0,
      maxPackage: 12.0,
      tier: newCompany.tier,
      totalHired: 0,
      activeDrivesCount: 1,
      rating: 4.5
    };

    setCompanies([created, ...companies]);
    setIsModalOpen(false);
  };

  const totalHiredAll = companies.reduce((acc, c) => acc + c.totalHired, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1C2638', letterSpacing: '-0.02em' }}>
            Recruiting Companies
          </h1>
          <p style={{ fontSize: '0.885rem', color: '#64748B', marginTop: '4px' }}>
            Corporate partnerships, tier classification, and hiring track records
          </p>
        </div>
        <Button
          variant="primary"
          icon={<Plus size={16} />}
          onClick={() => setIsModalOpen(true)}
        >
          Add Company
        </Button>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <DashboardCard
          title="Total Partners"
          value={companies.length.toString()}
          trend="+4"
          trendLabel="new this season"
          icon={Building2}
          color="purple"
        />
        <DashboardCard
          title="Dream Companies"
          value={companies.filter(c => c.tier === 'Dream' || c.tier === 'Super Dream').length.toString()}
          trend="> 10 LPA"
          trendLabel="package"
          icon={Sparkles}
          color="blue"
        />
        <DashboardCard
          title="Total Hired"
          value={totalHiredAll.toString()}
          trend="Students"
          trendLabel="historic offers"
          icon={Users}
          color="green"
        />
        <DashboardCard
          title="Avg Package"
          value="₹8.4 LPA"
          trend="+15%"
          trendLabel="vs last year"
          icon={Award}
          color="orange"
        />
      </div>

      {/* Search and Filters */}
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
        <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
          <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '12px' }} />
          <input
            type="text"
            placeholder="Search company or industry..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field"
            style={{ paddingLeft: '36px' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Filter size={15} color="#64748B" />
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748B' }}>Tier:</span>
          <select
            value={tierFilter}
            onChange={(e) => setTierFilter(e.target.value)}
            className="input-field"
            style={{ width: 'auto', padding: '6px 12px', fontSize: '0.825rem' }}
          >
            <option value="All">All Tiers</option>
            <option value="Tier 1">Tier 1</option>
            <option value="Tier 2">Tier 2</option>
            <option value="Dream">Dream</option>
          </select>
        </div>
      </div>

      {/* Company Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {filteredCompanies.map((comp) => (
          <div
            key={comp.id}
            className="glow-card glow-card-purple"
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
              {/* Header: Logo, Name, Tier */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#F0EBFF',
                      color: '#635BFF',
                      fontWeight: 800,
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #D8CEFE'
                    }}
                  >
                    {comp.logo}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C2638' }}>
                      {comp.name}
                    </h3>
                    <div style={{ fontSize: '0.785rem', color: '#64748B' }}>
                      {comp.industry}
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    padding: '3px 9px',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    backgroundColor: comp.tier === 'Dream' ? '#FFEAF4' : '#EAF3FF',
                    color: comp.tier === 'Dream' ? '#DB2777' : '#1D6FD8',
                    border: '1px solid',
                    borderColor: comp.tier === 'Dream' ? '#FBCFE8' : '#C4DCFD'
                  }}
                >
                  {comp.tier}
                </span>
              </div>

              {/* Package & Headquarter */}
              <div
                style={{
                  margin: '16px 0',
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E8EDF2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>COMPENSATION</span>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#16A34A' }}>
                    {comp.packageRange}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>TOTAL HIRED</span>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1C2638' }}>
                    {comp.totalHired} students
                  </div>
                </div>
              </div>

              {/* Roles Offered */}
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>Roles Offered:</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                  {comp.rolesOffered.map((role) => (
                    <span
                      key={role}
                      style={{
                        fontSize: '0.74rem',
                        backgroundColor: '#F1F5F9',
                        color: '#334155',
                        padding: '2px 8px',
                        borderRadius: '6px'
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #F1F5F9',
                paddingTop: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#64748B' }}>
                <MapPin size={13} />
                <span>{comp.headquarters}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Link
                  href={`/admin/companies/${comp.id}`}
                  className="btn-icon"
                  style={{ width: '32px', height: '32px' }}
                  title="View Profile"
                >
                  <Eye size={15} />
                </Link>
                <button
                  onClick={() => handleDelete(comp.id)}
                  className="btn-icon"
                  style={{ width: '32px', height: '32px', color: '#DC2626' }}
                  title="Delete Company"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Company Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Recruiting Company Partner"
      >
        <form onSubmit={handleAddCompany} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label className="form-label">Company Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Microsoft India"
              value={newCompany.name}
              onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
              className="input-field"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label className="form-label">Industry</label>
              <input
                type="text"
                value={newCompany.industry}
                onChange={(e) => setNewCompany({ ...newCompany, industry: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Tier</label>
              <select
                value={newCompany.tier}
                onChange={(e) => setNewCompany({ ...newCompany, tier: e.target.value as Company['tier'] })}
                className="input-field"
              >
                <option value="Tier 1">Tier 1</option>
                <option value="Tier 2">Tier 2</option>
                <option value="Dream">Dream</option>
                <option value="Super Dream">Super Dream</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label className="form-label">Headquarters / Location</label>
              <input
                type="text"
                value={newCompany.headquarters}
                onChange={(e) => setNewCompany({ ...newCompany, headquarters: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Package Range</label>
              <input
                type="text"
                placeholder="₹8.0 - ₹15.0 LPA"
                value={newCompany.packageRange}
                onChange={(e) => setNewCompany({ ...newCompany, packageRange: e.target.value })}
                className="input-field"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label className="form-label">Recruiter Contact Name</label>
              <input
                type="text"
                placeholder="e.g. Divya Bharathi"
                value={newCompany.recruiterName}
                onChange={(e) => setNewCompany({ ...newCompany, recruiterName: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="form-label">Recruiter Email</label>
              <input
                type="email"
                placeholder="recruiter@company.com"
                value={newCompany.recruiterEmail}
                onChange={(e) => setNewCompany({ ...newCompany, recruiterEmail: e.target.value })}
                className="input-field"
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
            <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Register Company
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
