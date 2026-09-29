'use client';

import React, { useState } from 'react';
import {
  User,
  Building,
  Calendar,
  Sliders,
  Bell,
  Palette,
  Check,
  Save,
} from 'lucide-react';

import Button from '@/components/ui/Button';

type SettingsTab =
  | 'Profile'
  | 'College'
  | 'Academic'
  | 'Placement'
  | 'Notifications'
  | 'Appearance';

export default function SettingsPage() {
  const [activeTab, setActiveTab] =
    useState<SettingsTab>('Profile');

  // =========================================================
  // PROFILE
  // =========================================================

  const [officerName, setOfficerName] = useState(
    'Dr. M. Krishnamoorthy'
  );

  const [officerEmail, setOfficerEmail] = useState(
    'placement.head@college.edu'
  );

  // =========================================================
  // COLLEGE
  // =========================================================

  const [collegeName, setCollegeName] = useState(
    'National Institute of Engineering & Technology'
  );

  const [collegeCode, setCollegeCode] =
    useState('NIET-2026');

  // =========================================================
  // ACADEMIC
  // =========================================================

  const [academicYear, setAcademicYear] =
    useState('2026-2027');

  // =========================================================
  // PLACEMENT
  // =========================================================

  const [minPlacementCgpa, setMinPlacementCgpa] =
    useState('6.5');

  // =========================================================
  // NOTIFICATION SETTINGS
  // =========================================================

  const [smsAlerts, setSmsAlerts] =
    useState(true);

  const [emailAlerts, setEmailAlerts] =
    useState(true);

  const [weeklyDigest, setWeeklyDigest] =
    useState(true);

  // =========================================================
  // TABS
  // =========================================================

  const TABS = [
    {
      name: 'Profile',
      icon: User,
    },
    {
      name: 'College',
      icon: Building,
    },
    {
      name: 'Academic',
      icon: Calendar,
    },
    {
      name: 'Placement',
      icon: Sliders,
    },
    {
      name: 'Notifications',
      icon: Bell,
    },
    {
      name: 'Appearance',
      icon: Palette,
    },
  ] as const;

  // =========================================================
  // SAVE
  // =========================================================

  const handleSave = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    alert(
      'Placement Cell platform settings saved successfully!'
    );
  };

  return (
    <div
      style={{
        maxWidth: '920px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            padding: '5px 10px',
            borderRadius: '999px',
            backgroundColor: '#F0EBFF',
            color: '#635BFF',
            border: '1px solid #DDD6FE',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.07em',
          }}
        >
          <Sliders size={12} />
          SYSTEM CONFIGURATION
        </span>

        <h1
          style={{
            marginTop: '10px',
            fontSize: '1.65rem',
            fontWeight: 800,
            color: '#1C2638',
            letterSpacing: '-0.02em',
          }}
        >
          Platform Settings & Administration
        </h1>

        <p
          style={{
            fontSize: '0.885rem',
            color: '#64748B',
            marginTop: '4px',
          }}
        >
          Configure institutional parameters, placement
          policies, and portal preferences
        </p>
      </div>

      {/* =====================================================
          SETTINGS LAYOUT
      ====================================================== */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'minmax(0, 220px) minmax(0, 1fr)',
          gap: '24px',
          alignItems: 'start',
        }}
      >
        {/* ===================================================
            SETTINGS NAVIGATION
        ==================================================== */}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive =
              activeTab === tab.name;

            return (
              <button
                key={tab.name}
                type="button"
                onClick={() =>
                  setActiveTab(tab.name)
                }
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  fontSize: '0.885rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive
                    ? '#635BFF'
                    : '#FFFFFF',
                  color: isActive
                    ? '#FFFFFF'
                    : '#475569',
                  border: '1px solid',
                  borderColor: isActive
                    ? '#635BFF'
                    : '#E8EDF2',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.18s ease',
                  boxShadow: isActive
                    ? '0 7px 18px rgba(99, 91, 255, 0.18)'
                    : '0 1px 2px rgba(16, 24, 40, 0.03)',
                }}
                onMouseEnter={(event) => {
                  if (!isActive) {
                    event.currentTarget.style.backgroundColor =
                      '#F8FAFC';
                  }
                }}
                onMouseLeave={(event) => {
                  if (!isActive) {
                    event.currentTarget.style.backgroundColor =
                      '#FFFFFF';
                  }
                }}
              >
                <Icon size={18} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* ===================================================
            ACTIVE SETTINGS PANEL
        ==================================================== */}

        <div
          className="glow-card"
          style={{
            padding: '28px',
            backgroundColor: '#FFFFFF',
          }}
        >
          <form
            onSubmit={handleSave}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {/* =================================================
                PROFILE
            ================================================== */}

            {activeTab === 'Profile' && (
              <>
                <div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#1C2638',
                    }}
                  >
                    Officer Profile
                  </h3>

                  <p
                    style={{
                      marginTop: '4px',
                      fontSize: '0.78rem',
                      color: '#64748B',
                    }}
                  >
                    Manage the placement officer account
                    information.
                  </p>
                </div>

                <div>
                  <label className="form-label">
                    Placement Officer Name
                  </label>

                  <input
                    type="text"
                    value={officerName}
                    onChange={(event) =>
                      setOfficerName(
                        event.target.value
                      )
                    }
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="form-label">
                    Official Email Address
                  </label>

                  <input
                    type="email"
                    value={officerEmail}
                    onChange={(event) =>
                      setOfficerEmail(
                        event.target.value
                      )
                    }
                    className="input-field"
                  />
                </div>
              </>
            )}

            {/* =================================================
                COLLEGE
            ================================================== */}

            {activeTab === 'College' && (
              <>
                <div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#1C2638',
                    }}
                  >
                    University & Campus Info
                  </h3>

                  <p
                    style={{
                      marginTop: '4px',
                      fontSize: '0.78rem',
                      color: '#64748B',
                    }}
                  >
                    Manage institutional identity and
                    campus information.
                  </p>
                </div>

                <div>
                  <label className="form-label">
                    College / Institute Name
                  </label>

                  <input
                    type="text"
                    value={collegeName}
                    onChange={(event) =>
                      setCollegeName(
                        event.target.value
                      )
                    }
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="form-label">
                    Accreditation / College Code
                  </label>

                  <input
                    type="text"
                    value={collegeCode}
                    onChange={(event) =>
                      setCollegeCode(
                        event.target.value
                      )
                    }
                    className="input-field"
                  />
                </div>
              </>
            )}

            {/* =================================================
                ACADEMIC
            ================================================== */}

            {activeTab === 'Academic' && (
              <>
                <div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#1C2638',
                    }}
                  >
                    Academic Session
                  </h3>

                  <p
                    style={{
                      marginTop: '4px',
                      fontSize: '0.78rem',
                      color: '#64748B',
                    }}
                  >
                    Configure the active academic placement
                    cycle.
                  </p>
                </div>

                <div>
                  <label className="form-label">
                    Active Academic Cycle
                  </label>

                  <select
                    value={academicYear}
                    onChange={(event) =>
                      setAcademicYear(
                        event.target.value
                      )
                    }
                    className="input-field"
                  >
                    <option value="2026-2027">
                      2026-2027 (Active Graduating Batch)
                    </option>

                    <option value="2025-2026">
                      2025-2026
                    </option>

                    <option value="2024-2025">
                      2024-2025
                    </option>
                  </select>
                </div>
              </>
            )}

            {/* =================================================
                PLACEMENT
            ================================================== */}

            {activeTab === 'Placement' && (
              <>
                <div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#1C2638',
                    }}
                  >
                    Default Placement Policy Rules
                  </h3>

                  <p
                    style={{
                      marginTop: '4px',
                      fontSize: '0.78rem',
                      color: '#64748B',
                    }}
                  >
                    Configure the default institutional
                    eligibility policy.
                  </p>
                </div>

                <div>
                  <label className="form-label">
                    Institutional Minimum Eligibility CGPA
                  </label>

                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={minPlacementCgpa}
                    onChange={(event) =>
                      setMinPlacementCgpa(
                        event.target.value
                      )
                    }
                    className="input-field"
                  />

                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: '#94A3B8',
                      marginTop: '5px',
                      lineHeight: 1.5,
                    }}
                  >
                    Students below this threshold will be
                    flagged according to the institution&apos;s
                    placement policy.
                  </p>
                </div>
              </>
            )}

            {/* =================================================
                NOTIFICATIONS
            ================================================== */}

            {activeTab === 'Notifications' && (
              <>
                <div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#1C2638',
                    }}
                  >
                    Notification Channels
                  </h3>

                  <p
                    style={{
                      marginTop: '4px',
                      fontSize: '0.78rem',
                      color: '#64748B',
                    }}
                  >
                    Choose which placement notifications
                    should be enabled.
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: '13px',
                      border: '1px solid #E8EDF2',
                      borderRadius: '10px',
                      backgroundColor: '#F8FAFC',
                      color: '#263146',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={smsAlerts}
                      onChange={(event) =>
                        setSmsAlerts(
                          event.target.checked
                        )
                      }
                      style={{
                        marginTop: '2px',
                        accentColor: '#635BFF',
                      }}
                    />

                    <span>
                      Send SMS alerts to shortlisted students
                      before interview slots
                    </span>
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: '13px',
                      border: '1px solid #E8EDF2',
                      borderRadius: '10px',
                      backgroundColor: '#F8FAFC',
                      color: '#263146',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={emailAlerts}
                      onChange={(event) =>
                        setEmailAlerts(
                          event.target.checked
                        )
                      }
                      style={{
                        marginTop: '2px',
                        accentColor: '#635BFF',
                      }}
                    />

                    <span>
                      Send email notifications when new
                      company drives are published
                    </span>
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: '13px',
                      border: '1px solid #E8EDF2',
                      borderRadius: '10px',
                      backgroundColor: '#F8FAFC',
                      color: '#263146',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={weeklyDigest}
                      onChange={(event) =>
                        setWeeklyDigest(
                          event.target.checked
                        )
                      }
                      style={{
                        marginTop: '2px',
                        accentColor: '#635BFF',
                      }}
                    />

                    <span>
                      Automated weekly digest to department
                      heads
                    </span>
                  </label>
                </div>
              </>
            )}

            {/* =================================================
                APPEARANCE
            ================================================== */}

            {activeTab === 'Appearance' && (
              <>
                <div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#1C2638',
                    }}
                  >
                    Portal Appearance & Theme
                  </h3>

                  <p
                    style={{
                      marginTop: '5px',
                      fontSize: '0.825rem',
                      color: '#64748B',
                      lineHeight: 1.5,
                    }}
                  >
                    PlacementOS uses a colorful light theme
                    with mint accents and glowing card
                    indicators by design.
                  </p>
                </div>

                {/* LIGHT THEME ONLY */}

                <div
                  className="glow-card glow-card-purple"
                  style={{
                    padding: '22px',
                    background:
                      'linear-gradient(135deg, #F3F7F5, #FFFFFF)',
                    border:
                      '2px solid #635BFF',
                    boxShadow:
                      '0 8px 24px rgba(99, 91, 255, 0.12)',
                    cursor: 'default',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '39px',
                        height: '39px',
                        display: 'grid',
                        placeItems: 'center',
                        borderRadius: '11px',
                        color: '#635BFF',
                        backgroundColor: '#F0EBFF',
                      }}
                    >
                      <Palette size={19} />
                    </div>

                    <div>
                      <div
                        style={{
                          color: '#1C2638',
                          fontSize: '0.98rem',
                          fontWeight: 700,
                        }}
                      >
                        Light Theme
                      </div>

                      <div
                        style={{
                          marginTop: '2px',
                          color: '#64748B',
                          fontSize: '0.75rem',
                        }}
                      >
                        Default portal appearance
                      </div>
                    </div>

                    <div
                      style={{
                        marginLeft: 'auto',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '5px 9px',
                        borderRadius: '999px',
                        color: '#15803D',
                        backgroundColor: '#E7FAEF',
                        border: '1px solid #BBF7D0',
                        fontSize: '0.67rem',
                        fontWeight: 700,
                      }}
                    >
                      <Check size={12} />
                      Active
                    </div>
                  </div>

                  <p
                    style={{
                      marginTop: '15px',
                      color: '#64748B',
                      fontSize: '0.78rem',
                      lineHeight: 1.55,
                    }}
                  >
                    Pale mint background, white surfaces,
                    colorful placement cards, professional
                    charts, and soft interactive glow effects.
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      marginTop: '16px',
                    }}
                  >
                    <span
                      title="Purple"
                      style={{
                        width: '27px',
                        height: '27px',
                        borderRadius: '7px',
                        backgroundColor: '#635BFF',
                      }}
                    />

                    <span
                      title="Blue"
                      style={{
                        width: '27px',
                        height: '27px',
                        borderRadius: '7px',
                        backgroundColor: '#4D9AF5',
                      }}
                    />

                    <span
                      title="Green"
                      style={{
                        width: '27px',
                        height: '27px',
                        borderRadius: '7px',
                        backgroundColor: '#32C98B',
                      }}
                    />

                    <span
                      title="Orange"
                      style={{
                        width: '27px',
                        height: '27px',
                        borderRadius: '7px',
                        backgroundColor: '#FFA94D',
                      }}
                    />

                    <span
                      title="Pink"
                      style={{
                        width: '27px',
                        height: '27px',
                        borderRadius: '7px',
                        backgroundColor: '#E86FA8',
                      }}
                    />
                  </div>
                </div>
              </>
            )}

            {/* =================================================
                SAVE SETTINGS
            ================================================== */}

            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                borderTop:
                  '1px solid #F1F5F9',
                paddingTop: '16px',
                marginTop: '6px',
              }}
            >
              <Button
                type="submit"
                variant="primary"
                icon={<Save size={15} />}
              >
                Save Settings
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}