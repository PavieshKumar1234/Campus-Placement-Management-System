'use client';

import React from 'react';

import WelcomeSection from '@/components/dashboard/WelcomeSection';
import StatsGrid from '@/components/dashboard/StatsGrid';

import PlacementTrend from '@/components/charts/PlacementTrend';
import PlacementStatus from '@/components/charts/PlacementStatus';
import DepartmentPerformance from '@/components/charts/DepartmentPerformance';
import PackageDistribution from '@/components/charts/PackageDistribution';

import RecruitmentSummary from '@/components/dashboard/RecruitmentSummary';
import UpcomingDrives from '@/components/dashboard/UpcomingDrives';
import RecentAnnouncements from '@/components/dashboard/RecentAnnouncements';
import RecentPlacements from '@/components/dashboard/RecentPlacements';
import RecentApplications from '@/components/dashboard/RecentApplications';

export default function AdminDashboardPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
      }}
    >
      {/* =====================================================
          HEADER GREETING & ACTION
      ====================================================== */}

      <WelcomeSection />

      {/* =====================================================
          4 GLOWING KPI METRIC CARDS
      ====================================================== */}

      <StatsGrid />

      {/* =====================================================
          MAIN ROW
          Placement Trend + Placement Status
      ====================================================== */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'minmax(0, 1.8fr) minmax(0, 1.2fr)',
          gap: '24px',
        }}
      >
        {/* Placement & Offer Velocity */}

        <div
          className="glow-card"
          style={{
            padding: '24px',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#1C2638',
                }}
              >
                Placement & Offer Velocity
              </h2>

              <p
                style={{
                  fontSize: '0.8rem',
                  color: '#64748B',
                  marginTop: '4px',
                }}
              >
                Cumulative selections vs offer letters issued
                across academic cycle
              </p>
            </div>

            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#635BFF',
                backgroundColor: '#F0EBFF',
                padding: '4px 10px',
                borderRadius: '20px',
                whiteSpace: 'nowrap',
              }}
            >
              Academic Year 2026-27
            </span>
          </div>

          <PlacementTrend />
        </div>

        {/* Placement Rate & Status */}

        <div
          className="glow-card"
          style={{
            padding: '24px',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div
            style={{
              marginBottom: '16px',
            }}
          >
            <h2
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#1C2638',
              }}
            >
              Placement Rate & Status
            </h2>

            <p
              style={{
                fontSize: '0.8rem',
                color: '#64748B',
                marginTop: '4px',
              }}
            >
              Real-time candidate transition progress
            </p>
          </div>

          <PlacementStatus />
        </div>
      </div>

      {/* =====================================================
          RECRUITMENT PIPELINE SUMMARY
      ====================================================== */}

      <RecruitmentSummary />

      {/* =====================================================
          DEPARTMENT PERFORMANCE + PACKAGE DISTRIBUTION
      ====================================================== */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'minmax(0, 1.4fr) minmax(0, 1fr)',
          gap: '24px',
        }}
      >
        {/* Department Performance */}

        <div
          className="glow-card"
          style={{
            padding: '24px',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#1C2638',
                }}
              >
                Department Placement Performance
              </h3>

              <p
                style={{
                  fontSize: '0.78rem',
                  color: '#64748B',
                  marginTop: '4px',
                }}
              >
                Percentage of registered eligible candidates
                placed by discipline
              </p>
            </div>
          </div>

          <DepartmentPerformance />
        </div>

        {/* Salary Package Distribution */}

        <div
          className="glow-card"
          style={{
            padding: '24px',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div
            style={{
              marginBottom: '20px',
            }}
          >
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#1C2638',
              }}
            >
              Salary Package (CTC) Distribution
            </h3>

            <p
              style={{
                fontSize: '0.78rem',
                color: '#64748B',
                marginTop: '4px',
              }}
            >
              Breakdown of student offers by annual
              compensation bracket
            </p>
          </div>

          <PackageDistribution />
        </div>
      </div>

      {/* =====================================================
          UPCOMING DRIVES + RECENT ANNOUNCEMENTS
      ====================================================== */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px',
        }}
      >
        <UpcomingDrives />

        <RecentAnnouncements />
      </div>

      {/* =====================================================
          RECENT PLACEMENTS
          Shows latest selected/placed students
      ====================================================== */}

      <RecentPlacements />

      {/* =====================================================
          RECENT APPLICATIONS
      ====================================================== */}

      <RecentApplications />
    </div>
  );
}