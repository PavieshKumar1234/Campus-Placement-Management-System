'use client';

import React, { useMemo, useState } from 'react';
import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  FileText,
  GraduationCap,
  TrendingUp,
  Users,
} from 'lucide-react';

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const placementTrend = [
  { month: 'Jan', applications: 148, interviews: 46, placed: 22 },
  { month: 'Feb', applications: 190, interviews: 58, placed: 31 },
  { month: 'Mar', applications: 235, interviews: 74, placed: 45 },
  { month: 'Apr', applications: 286, interviews: 93, placed: 63 },
  { month: 'May', applications: 342, interviews: 114, placed: 82 },
  { month: 'Jun', applications: 427, interviews: 141, placed: 109 },
  { month: 'Jul', applications: 544, interviews: 177, placed: 151 },
  { month: 'Aug', applications: 712, interviews: 236, placed: 201 },
  { month: 'Sep', applications: 936, interviews: 318, placed: 271 },
  { month: 'Oct', applications: 1184, interviews: 426, placed: 342 },
];

const departmentData = [
  {
    name: 'CSE',
    placed: 91,
    students: 286,
    offers: 112,
  },
  {
    name: 'AIML',
    placed: 87,
    students: 214,
    offers: 94,
  },
  {
    name: 'IT',
    placed: 78,
    students: 198,
    offers: 81,
  },
  {
    name: 'ECE',
    placed: 71,
    students: 176,
    offers: 62,
  },
  {
    name: 'EEE',
    placed: 63,
    students: 142,
    offers: 41,
  },
];

const packageData = [
  {
    name: 'Below ₹5 LPA',
    value: 124,
  },
  {
    name: '₹5–10 LPA',
    value: 148,
  },
  {
    name: '₹10–15 LPA',
    value: 51,
  },
  {
    name: 'Above ₹15 LPA',
    value: 19,
  },
];

const companyHiring = [
  {
    name: 'TCS',
    hired: 42,
  },
  {
    name: 'Infosys',
    hired: 37,
  },
  {
    name: 'Zoho',
    hired: 29,
  },
  {
    name: 'Accenture',
    hired: 51,
  },
  {
    name: 'Cognizant',
    hired: 34,
  },
  {
    name: 'Deloitte',
    hired: 22,
  },
];

const statusData = [
  {
    name: 'Placed',
    value: 342,
    className: 'analytics-green',
  },
  {
    name: 'Interview',
    value: 126,
    className: 'analytics-purple',
  },
  {
    name: 'Applied',
    value: 842,
    className: 'analytics-blue',
  },
  {
    name: 'Pending',
    value: 215,
    className: 'analytics-orange',
  },
];

const PIE_COLORS = [
  '#32C98B',
  '#635BFF',
  '#4D9AF5',
  '#FFA94D',
];

export default function AnalyticsPage() {
  const [academicYear, setAcademicYear] =
    useState('2026-27');

  const [department, setDepartment] =
    useState('All Departments');

  const [overview, setOverview] =
    useState('Placement');

  const departmentFilteredData = useMemo(() => {
    if (department === 'All Departments') {
      return departmentData;
    }

    return departmentData.filter(
      (item) => item.name === department
    );
  }, [department]);

  const selectedDepartment =
    department === 'All Departments'
      ? null
      : departmentData.find(
        (item) => item.name === department
      );

  return (
    <div className="analytics-page animate-fade-in">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <section className="analytics-header">
        <div>
          <span className="analytics-kicker">
            PLACEMENT INTELLIGENCE
          </span>

          <h1>Placement Analytics</h1>

          <p>
            Analyze recruitment performance, placement trends,
            departments and salary outcomes.
          </p>
        </div>

        <div className="analytics-header-actions">
          <div className="analytics-filter">
            <span>Academic Year</span>

            <select
              value={academicYear}
              onChange={(event) =>
                setAcademicYear(event.target.value)
              }
            >
              <option value="2026-27">2026–27</option>
              <option value="2025-26">2025–26</option>
              <option value="2024-25">2024–25</option>
            </select>
          </div>

          <div className="analytics-filter">
            <span>Department</span>

            <select
              value={department}
              onChange={(event) =>
                setDepartment(event.target.value)
              }
            >
              <option>All Departments</option>
              <option>CSE</option>
              <option>AIML</option>
              <option>IT</option>
              <option>ECE</option>
              <option>EEE</option>
            </select>
          </div>
        </div>
      </section>

      {/* =====================================================
          KPI CARDS
      ====================================================== */}

      <section className="analytics-stats-grid">
        <div className="glow-card glow-card-blue analytics-stat-card">
          <div className="analytics-stat-top">
            <div className="analytics-stat-icon blue">
              <GraduationCap size={19} />
            </div>

            <TrendingUp size={15} />
          </div>

          <span>Students Placed</span>

          <strong>342</strong>

          <small>
            <b>+18.4%</b> compared with last cycle
          </small>
        </div>

        <div className="glow-card glow-card-purple analytics-stat-card">
          <div className="analytics-stat-top">
            <div className="analytics-stat-icon purple">
              <Building2 size={19} />
            </div>

            <TrendingUp size={15} />
          </div>

          <span>Companies Hired</span>

          <strong>86</strong>

          <small>
            <b>+12</b> companies this year
          </small>
        </div>

        <div className="glow-card glow-card-green analytics-stat-card">
          <div className="analytics-stat-top">
            <div className="analytics-stat-icon green">
              <CircleDollarSign size={19} />
            </div>

            <TrendingUp size={15} />
          </div>

          <span>Average Package</span>

          <strong>₹7.2 LPA</strong>

          <small>
            <b>+9.6%</b> annual growth
          </small>
        </div>

        <div className="glow-card glow-card-orange analytics-stat-card">
          <div className="analytics-stat-top">
            <div className="analytics-stat-icon orange">
              <BriefcaseBusiness size={19} />
            </div>

            <TrendingUp size={15} />
          </div>

          <span>Highest Package</span>

          <strong>₹18.5 LPA</strong>

          <small>
            <b>Top offer</b> this academic year
          </small>
        </div>
      </section>

      {/* =====================================================
          SECONDARY METRICS
      ====================================================== */}

      <section className="analytics-mini-grid">
        <div className="analytics-mini-card blue">
          <FileText size={17} />

          <div>
            <span>Total Applications</span>
            <strong>1,842</strong>
          </div>
        </div>

        <div className="analytics-mini-card purple">
          <Users size={17} />

          <div>
            <span>Shortlisted</span>
            <strong>526</strong>
          </div>
        </div>

        <div className="analytics-mini-card green">
          <CheckCircle2 size={17} />

          <div>
            <span>Offers Issued</span>
            <strong>417</strong>
          </div>
        </div>

        <div className="analytics-mini-card orange">
          <BarChart3 size={17} />

          <div>
            <span>Selection Rate</span>
            <strong>18.6%</strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN TREND CHART
      ====================================================== */}

      <section className="glow-card analytics-panel analytics-main-chart">
        <div className="analytics-panel-header">
          <div>
            <div className="analytics-title-row">
              <div className="analytics-panel-icon purple">
                <TrendingUp size={17} />
              </div>

              <h2>Placement Trend</h2>
            </div>

            <p>
              Monthly recruitment activity and cumulative
              placement growth
            </p>
          </div>

          <div className="analytics-segmented">
            {[
              'Placement',
              'Applications',
              'Interviews',
            ].map((item) => (
              <button
                type="button"
                key={item}
                className={
                  overview === item
                    ? 'active'
                    : ''
                }
                onClick={() =>
                  setOverview(item)
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="analytics-chart-large">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={placementTrend}>
              <defs>
                <linearGradient
                  id="analyticsPlacedGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#635BFF"
                    stopOpacity={0.24}
                  />

                  <stop
                    offset="100%"
                    stopColor="#635BFF"
                    stopOpacity={0.02}
                  />
                </linearGradient>

                <linearGradient
                  id="analyticsApplicationsGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#4D9AF5"
                    stopOpacity={0.17}
                  />

                  <stop
                    offset="100%"
                    stopColor="#4D9AF5"
                    stopOpacity={0.01}
                  />
                </linearGradient>

                <linearGradient
                  id="analyticsInterviewGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#32C98B"
                    stopOpacity={0.16}
                  />

                  <stop
                    offset="100%"
                    stopColor="#32C98B"
                    stopOpacity={0.01}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                stroke="#edf1f5"
                vertical={false}
                strokeDasharray="4 4"
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: '#8E98A8',
                  fontSize: 11,
                }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: '#8E98A8',
                  fontSize: 11,
                }}
              />

              <Tooltip
                contentStyle={{
                  border: '1px solid #E8EDF2',
                  borderRadius: '12px',
                  boxShadow:
                    '0 15px 35px rgba(28,38,56,0.10)',
                  fontSize: '11px',
                }}
              />

              {overview === 'Placement' && (
                <Area
                  type="monotone"
                  dataKey="placed"
                  name="Students Placed"
                  stroke="#635BFF"
                  strokeWidth={3}
                  fill="url(#analyticsPlacedGradient)"
                  animationDuration={800}
                />
              )}

              {overview === 'Applications' && (
                <Area
                  type="monotone"
                  dataKey="applications"
                  name="Applications"
                  stroke="#4D9AF5"
                  strokeWidth={3}
                  fill="url(#analyticsApplicationsGradient)"
                  animationDuration={800}
                />
              )}

              {overview === 'Interviews' && (
                <Area
                  type="monotone"
                  dataKey="interviews"
                  name="Interviews"
                  stroke="#32C98B"
                  strokeWidth={3}
                  fill="url(#analyticsInterviewGradient)"
                  animationDuration={800}
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* =====================================================
          DEPARTMENT + STATUS
      ====================================================== */}

      <section className="analytics-two-column">
        {/* Department */}

        <div className="glow-card analytics-panel">
          <div className="analytics-panel-header">
            <div>
              <div className="analytics-title-row">
                <div className="analytics-panel-icon blue">
                  <GraduationCap size={17} />
                </div>

                <h2>
                  Department Performance
                </h2>
              </div>

              <p>
                Placement percentage and offers by
                department
              </p>
            </div>

            <ChevronDown
              size={17}
              className="analytics-muted-icon"
            />
          </div>

          <div className="department-analytics-list">
            {departmentFilteredData.map(
              (item) => (
                <div
                  className="department-analytics-row"
                  key={item.name}
                >
                  <div className="department-analytics-info">
                    <div className="department-analytics-badge">
                      {item.name}
                    </div>

                    <div>
                      <strong>
                        {item.placed}%
                      </strong>

                      <span>
                        {item.students} students •{' '}
                        {item.offers} offers
                      </span>
                    </div>
                  </div>

                  <div className="department-analytics-progress">
                    <div>
                      <span
                        style={{
                          width: `${item.placed}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              )
            )}

            {selectedDepartment && (
              <div className="department-selected-note">
                Showing analytics for{' '}
                <strong>
                  {selectedDepartment.name}
                </strong>
              </div>
            )}
          </div>
        </div>

        {/* Placement Status */}

        <div className="glow-card analytics-panel">
          <div className="analytics-panel-header">
            <div>
              <div className="analytics-title-row">
                <div className="analytics-panel-icon green">
                  <BarChart3 size={17} />
                </div>

                <h2>
                  Placement Status
                </h2>
              </div>

              <p>
                Current candidate pipeline
              </p>
            </div>
          </div>

          <div className="status-chart-wrapper">
            <div className="status-pie">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <PieChart>
                  <Pie
                    data={statusData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="64%"
                    outerRadius="86%"
                    paddingAngle={4}
                    stroke="none"
                  >
                    {statusData.map(
                      (entry, index) => (
                        <Cell
                          key={entry.name}
                          fill={
                            PIE_COLORS[index]
                          }
                        />
                      )
                    )}
                  </Pie>

                  <Tooltip
                    contentStyle={{
                      border: '1px solid #E8EDF2',
                      borderRadius: '10px',
                      fontSize: '10px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="status-pie-center">
                <strong>1,525</strong>
                <span>Active</span>
              </div>
            </div>

            <div className="status-chart-list">
              {statusData.map((item) => (
                <div
                  className="status-chart-row"
                  key={item.name}
                >
                  <div>
                    <i
                      className={`status-chart-dot ${item.className}`}
                    />

                    <span>{item.name}</span>
                  </div>

                  <strong>
                    {item.value}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY + PACKAGE
      ====================================================== */}

      <section className="analytics-two-column">
        {/* Company Hiring */}

        <div className="glow-card analytics-panel">
          <div className="analytics-panel-header">
            <div>
              <div className="analytics-title-row">
                <div className="analytics-panel-icon orange">
                  <Building2 size={17} />
                </div>

                <h2>
                  Company Hiring
                </h2>
              </div>

              <p>
                Students hired by leading recruiters
              </p>
            </div>
          </div>

          <div className="company-hiring-chart">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                data={companyHiring}
                layout="vertical"
                margin={{
                  top: 5,
                  right: 20,
                  left: 10,
                  bottom: 5,
                }}
              >
                <CartesianGrid
                  horizontal={false}
                  stroke="#eef1f4"
                />

                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#98A1B0',
                    fontSize: 10,
                  }}
                />

                <YAxis
                  type="category"
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#667085',
                    fontSize: 10,
                  }}
                  width={75}
                />

                <Tooltip
                  contentStyle={{
                    border: '1px solid #E8EDF2',
                    borderRadius: '10px',
                    fontSize: '10px',
                  }}
                />

                <Bar
                  dataKey="hired"
                  name="Students Hired"
                  fill="#635BFF"
                  radius={[
                    0,
                    6,
                    6,
                    0,
                  ]}
                  barSize={16}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Salary Package */}

        <div className="glow-card analytics-panel">
          <div className="analytics-panel-header">
            <div>
              <div className="analytics-title-row">
                <div className="analytics-panel-icon purple">
                  <CircleDollarSign size={17} />
                </div>

                <h2>
                  Salary Package Distribution
                </h2>
              </div>

              <p>
                Placement offers by CTC bracket
              </p>
            </div>
          </div>

          <div className="package-analytics-wrapper">
            <div className="package-donut">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <PieChart>
                  <Pie
                    data={packageData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="62%"
                    outerRadius="82%"
                    paddingAngle={4}
                    stroke="none"
                  >
                    {packageData.map(
                      (entry, index) => (
                        <Cell
                          key={entry.name}
                          fill={
                            [
                              '#4D9AF5',
                              '#635BFF',
                              '#32C98B',
                              '#FFA94D',
                            ][index]
                          }
                        />
                      )
                    )}
                  </Pie>

                  <Tooltip
                    contentStyle={{
                      border: '1px solid #E8EDF2',
                      borderRadius: '10px',
                      fontSize: '10px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="package-donut-center">
                <strong>342</strong>
                <span>Offers</span>
              </div>
            </div>

            <div className="package-analytics-list">
              {packageData.map(
                (item, index) => {
                  const percentage =
                    Math.round(
                      (item.value / 342) * 100
                    );

                  return (
                    <div
                      className="package-analytics-row"
                      key={item.name}
                    >
                      <div>
                        <i
                          style={{
                            background:
                              [
                                '#4D9AF5',
                                '#635BFF',
                                '#32C98B',
                                '#FFA94D',
                              ][index],
                          }}
                        />

                        <span>
                          {item.name}
                        </span>
                      </div>

                      <div>
                        <strong>
                          {item.value}
                        </strong>

                        <small>
                          {percentage}%
                        </small>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INSIGHT CARDS
      ====================================================== */}

      <section className="analytics-insights-grid">
        <div className="glow-card glow-card-green analytics-insight-card">
          <div className="insight-icon green">
            <TrendingUp size={18} />
          </div>

          <div>
            <span>Placement Growth</span>
            <strong>+18.4%</strong>
            <p>
              Placement count increased compared with
              the previous cycle.
            </p>
          </div>
        </div>

        <div className="glow-card glow-card-purple analytics-insight-card">
          <div className="insight-icon purple">
            <BriefcaseBusiness size={18} />
          </div>

          <div>
            <span>Recruitment Activity</span>
            <strong>14 Active</strong>
            <p>
              Placement drives are currently active
              across departments.
            </p>
          </div>
        </div>

        <div className="glow-card glow-card-blue analytics-insight-card">
          <div className="insight-icon blue">
            <Users size={18} />
          </div>

          <div>
            <span>Application Growth</span>
            <strong>+14.6%</strong>
            <p>
              Student applications continue to rise
              during the academic cycle.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}