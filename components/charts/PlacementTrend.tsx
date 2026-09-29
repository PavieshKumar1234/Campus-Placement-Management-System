'use client';

import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { MONTHLY_PLACEMENT_TREND } from '@/lib/mockData';

export default function PlacementTrend() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }}>Loading chart...</div>;
  }

  return (
    <div style={{ width: '100%', height: '320px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={MONTHLY_PLACEMENT_TREND}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPlaced" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#635BFF" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#635BFF" stopOpacity={0.0} />
            </linearGradient>
            <linearGradient id="colorOffers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#32C98B" stopOpacity={0.30} />
              <stop offset="95%" stopColor="#32C98B" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
          <XAxis
            dataKey="month"
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
          <Legend
            iconType="circle"
            wrapperStyle={{ paddingTop: '10px', fontSize: '13px', fontWeight: 600 }}
          />
          <Area
            type="monotone"
            dataKey="placed"
            name="Students Placed"
            stroke="#635BFF"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorPlaced)"
          />
          <Area
            type="monotone"
            dataKey="offers"
            name="Total Offers"
            stroke="#32C98B"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorOffers)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
