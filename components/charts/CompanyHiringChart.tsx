'use client';

import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { COMPANY_HIRING_DATA } from '@/lib/mockData';

export default function CompanyHiringChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }}>Loading chart...</div>;
  }

  return (
    <div style={{ width: '100%', height: '280px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={COMPANY_HIRING_DATA}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
          <XAxis
            dataKey="company"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#7C8799', fontSize: 12, fontWeight: 500 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#7C8799', fontSize: 12, fontWeight: 500 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              padding: '10px 14px',
              fontSize: '12px',
              fontWeight: 600
            }}
          />
          <Bar
            dataKey="hired"
            name="Students Hired"
            fill="#635BFF"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
