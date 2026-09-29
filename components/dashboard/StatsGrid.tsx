'use client';

import React from 'react';
import DashboardCard from '@/components/ui/DashboardCard';
import { Users, Building2, Award, Briefcase } from 'lucide-react';

export default function StatsGrid() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        marginBottom: '28px'
      }}
    >
      <DashboardCard
        title="Total Students"
        value="1,248"
        trend="+12%"
        trendDirection="up"
        trendLabel="registered"
        icon={Users}
        color="blue"
      />
      <DashboardCard
        title="Companies"
        value="86"
        trend="+8"
        trendDirection="up"
        trendLabel="partnered"
        icon={Building2}
        color="purple"
      />
      <DashboardCard
        title="Students Placed"
        value="342"
        trend="+24%"
        trendDirection="up"
        trendLabel="this month"
        icon={Award}
        color="green"
      />
      <DashboardCard
        title="Active Drives"
        value="14"
        trend="4 closing"
        trendDirection="up"
        trendLabel="this week"
        icon={Briefcase}
        color="orange"
      />
    </div>
  );
}
