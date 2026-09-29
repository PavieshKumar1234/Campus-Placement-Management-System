"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  Award,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Eye,
  GraduationCap,
  Search,
  Users,
  X,
} from "lucide-react";

type PlacementStatus =
  | "Selected"
  | "Offer Received"
  | "Offer Accepted"
  | "Joining Pending"
  | "Joined"
  | "Offer Declined";

type PlacementRecord = {
  id: string;
  studentId: string;
  studentName: string;
  initials: string;
  department: string;
  company: string;
  role: string;
  package: number;
  offerDate: string;
  joiningDate: string;
  status: PlacementStatus;
};

const INITIAL_PLACEMENTS: PlacementRecord[] = [
  {
    id: "plc-001",
    studentId: "2023CSE042",
    studentName: "Arun Kumar",
    initials: "AK",
    department: "CSE",
    company: "Tata Consultancy Services",
    role: "Digital Software Engineer",
    package: 7.5,
    offerDate: "2026-09-18",
    joiningDate: "2027-07-05",
    status: "Offer Accepted",
  },
  {
    id: "plc-002",
    studentId: "2023AIML017",
    studentName: "Priya S",
    initials: "PS",
    department: "AIML",
    company: "Zoho",
    role: "Software Engineer",
    package: 8.0,
    offerDate: "2026-09-20",
    joiningDate: "2027-06-28",
    status: "Offer Received",
  },
  {
    id: "plc-003",
    studentId: "2023IT031",
    studentName: "Rahul K",
    initials: "RK",
    department: "IT",
    company: "Infosys",
    role: "Systems Engineer",
    package: 6.5,
    offerDate: "2026-09-21",
    joiningDate: "2027-07-12",
    status: "Joining Pending",
  },
  {
    id: "plc-004",
    studentId: "2023CSE067",
    studentName: "Kavin R",
    initials: "KR",
    department: "CSE",
    company: "Accenture",
    role: "Application Development Analyst",
    package: 7.0,
    offerDate: "2026-09-15",
    joiningDate: "2027-07-01",
    status: "Joined",
  },
  {
    id: "plc-005",
    studentId: "2023ECE028",
    studentName: "Harish M",
    initials: "HM",
    department: "ECE",
    company: "Deloitte",
    role: "Analyst",
    package: 8.4,
    offerDate: "2026-09-23",
    joiningDate: "2027-07-10",
    status: "Selected",
  },
  {
    id: "plc-006",
    studentId: "2023AIML044",
    studentName: "Swetha P",
    initials: "SP",
    department: "AIML",
    company: "Cognizant",
    role: "Program Analyst",
    package: 6.8,
    offerDate: "2026-09-19",
    joiningDate: "2027-07-15",
    status: "Offer Accepted",
  },
  {
    id: "plc-007",
    studentId: "2023CSE089",
    studentName: "Vignesh S",
    initials: "VS",
    department: "CSE",
    company: "HCLTech",
    role: "Graduate Engineer",
    package: 7.2,
    offerDate: "2026-09-17",
    joiningDate: "2027-07-08",
    status: "Offer Accepted",
  },
  {
    id: "plc-008",
    studentId: "2023IT054",
    studentName: "Naveen R",
    initials: "NR",
    department: "IT",
    company: "Wipro",
    role: "Project Engineer",
    package: 5.8,
    offerDate: "2026-09-14",
    joiningDate: "2027-07-20",
    status: "Offer Declined",
  },
];

const statusOptions: Array<"All" | PlacementStatus> = [
  "All",
  "Selected",
  "Offer Received",
  "Offer Accepted",
  "Joining Pending",
  "Joined",
  "Offer Declined",
];

const departmentOptions = [
  "All Departments",
  "CSE",
  "AIML",
  "IT",
  "ECE",
  "EEE",
];

function formatPackage(value: number) {
  return `₹${value.toFixed(1)} LPA`;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function getStatusClass(status: PlacementStatus) {
  switch (status) {
    case "Joined":
    case "Offer Accepted":
      return "badge-green";

    case "Selected":
      return "badge-purple";

    case "Offer Received":
      return "badge-blue";

    case "Joining Pending":
      return "badge-orange";

    case "Offer Declined":
      return "badge-red";

    default:
      return "badge-gray";
  }
}

export default function PlacementsPage() {
  const [placements] =
    useState<PlacementRecord[]>(INITIAL_PLACEMENTS);

  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] =
    useState<"All" | PlacementStatus>("All");

  const [selectedPlacement, setSelectedPlacement] =
    useState<PlacementRecord | null>(null);

  const [showFilters, setShowFilters] = useState(false);

  const filteredPlacements = useMemo(() => {
    return placements.filter((item) => {
      const searchableText = [
        item.studentName,
        item.studentId,
        item.company,
        item.role,
        item.department,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        searchableText.includes(searchTerm.toLowerCase());

      const matchesDepartment =
        department === "All Departments" ||
        item.department === department;

      const matchesStatus =
        status === "All" || item.status === status;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus
      );
    });
  }, [placements, searchTerm, department, status]);

  const totalPlaced = placements.length;

  const totalOffers = placements.filter(
    (item) =>
      item.status !== "Offer Declined"
  ).length;

  const averagePackage =
    placements.reduce(
      (sum, item) => sum + item.package,
      0
    ) / placements.length;

  const highestPackage = Math.max(
    ...placements.map((item) => item.package)
  );

  const acceptedOffers = placements.filter(
    (item) =>
      item.status === "Offer Accepted" ||
      item.status === "Joined"
  ).length;

  const selectedOffers = placements.filter(
    (item) => item.status === "Selected"
  ).length;

  const joiningPending = placements.filter(
    (item) => item.status === "Joining Pending"
  ).length;

  return (
    <div className="placement-page animate-fade-in">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <section className="placement-page-header">
        <div>
          <span className="placement-kicker">
            PLACEMENT MANAGEMENT
          </span>

          <h1>Placement Records</h1>

          <p>
            Track selected students, offers, packages and
            joining progress across campus placements.
          </p>
        </div>

        <div className="placement-header-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              setShowFilters((current) => !current)
            }
          >
            <ChevronDown
              size={16}
              className={
                showFilters
                  ? "rotate-180"
                  : ""
              }
            />
            More Filters
          </button>
        </div>
      </section>

      {/* =====================================================
          KPI CARDS
      ====================================================== */}

      <section className="placement-stats-grid">
        <div className="glow-card glow-card-blue placement-stat-card">
          <div className="placement-stat-top">
            <div className="placement-stat-icon blue">
              <GraduationCap size={20} />
            </div>

            <span className="placement-stat-label">
              STUDENTS
            </span>
          </div>

          <strong>{totalPlaced}</strong>

          <div className="placement-stat-bottom">
            <span className="stat-positive">
              +18.4%
            </span>
            <span>placed this season</span>
          </div>
        </div>

        <div className="glow-card glow-card-purple placement-stat-card">
          <div className="placement-stat-top">
            <div className="placement-stat-icon purple">
              <Award size={20} />
            </div>

            <span className="placement-stat-label">
              OFFERS
            </span>
          </div>

          <strong>{totalOffers}</strong>

          <div className="placement-stat-bottom">
            <span className="stat-positive">
              {acceptedOffers}
            </span>
            <span>accepted / joined</span>
          </div>
        </div>

        <div className="glow-card glow-card-green placement-stat-card">
          <div className="placement-stat-top">
            <div className="placement-stat-icon green">
              <CircleDollarSign size={20} />
            </div>

            <span className="placement-stat-label">
              AVERAGE PACKAGE
            </span>
          </div>

          <strong>
            ₹{averagePackage.toFixed(1)} LPA
          </strong>

          <div className="placement-stat-bottom">
            <span className="stat-positive">
              +9.6%
            </span>
            <span>vs previous cycle</span>
          </div>
        </div>

        <div className="glow-card glow-card-orange placement-stat-card">
          <div className="placement-stat-top">
            <div className="placement-stat-icon orange">
              <CircleDollarSign size={20} />
            </div>

            <span className="placement-stat-label">
              HIGHEST PACKAGE
            </span>
          </div>

          <strong>
            ₹{highestPackage.toFixed(1)} LPA
          </strong>

          <div className="placement-stat-bottom">
            <span className="stat-positive">
              TOP OFFER
            </span>
            <span>current academic year</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK PIPELINE
      ====================================================== */}

      <section className="placement-pipeline glow-card">
        <div className="pipeline-heading">
          <div>
            <h2>Placement Pipeline</h2>
            <p>
              Current movement of students through final
              placement stages
            </p>
          </div>
        </div>

        <div className="pipeline-grid">
          <div className="pipeline-item">
            <div className="pipeline-number blue">
              {totalPlaced}
            </div>
            <div>
              <strong>Placed</strong>
              <span>Total placement records</span>
            </div>
          </div>

          <div className="pipeline-item">
            <div className="pipeline-number purple">
              {selectedOffers}
            </div>
            <div>
              <strong>Selected</strong>
              <span>Awaiting final offer</span>
            </div>
          </div>

          <div className="pipeline-item">
            <div className="pipeline-number green">
              {acceptedOffers}
            </div>
            <div>
              <strong>Accepted</strong>
              <span>Offer confirmed</span>
            </div>
          </div>

          <div className="pipeline-item">
            <div className="pipeline-number orange">
              {joiningPending}
            </div>
            <div>
              <strong>Joining Pending</strong>
              <span>Awaiting joining date</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH / FILTER
      ====================================================== */}

      <section className="placement-filter-panel glow-card">
        <div className="placement-search">
          <Search size={18} />

          <input
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            placeholder="Search students, companies, roles..."
          />
        </div>

        <div className="placement-filter-actions">
          <div className="placement-select-wrapper">
            <select
              value={department}
              onChange={(e) =>
                setDepartment(e.target.value)
              }
            >
              {departmentOptions.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="placement-select-wrapper">
            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value as
                  | "All"
                  | PlacementStatus
                )
              }
            >
              {statusOptions.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item === "All"
                    ? "All Statuses"
                    : item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {showFilters && (
          <div className="advanced-filters">
            <div>
              <label>Package Range</label>

              <select>
                <option>All Packages</option>
                <option>Below ₹5 LPA</option>
                <option>₹5 – ₹10 LPA</option>
                <option>₹10 – ₹15 LPA</option>
                <option>Above ₹15 LPA</option>
              </select>
            </div>

            <div>
              <label>Joining Status</label>

              <select>
                <option>All</option>
                <option>Joined</option>
                <option>Joining Pending</option>
              </select>
            </div>

            <div>
              <label>Academic Year</label>

              <select>
                <option>2026–27</option>
                <option>2025–26</option>
              </select>
            </div>
          </div>
        )}
      </section>

      {/* =====================================================
          TABLE
      ====================================================== */}

      <section className="placements-table-section">
        <div className="placements-table-header">
          <div>
            <h2>Placement Records</h2>

            <p>
              Showing{" "}
              <strong>
                {filteredPlacements.length}
              </strong>{" "}
              of{" "}
              <strong>{placements.length}</strong>{" "}
              records
            </p>
          </div>

          <div className="table-summary">
            <span>
              <i className="summary-dot green" />
              {acceptedOffers} accepted
            </span>

            <span>
              <i className="summary-dot orange" />
              {joiningPending} pending
            </span>
          </div>
        </div>

        <div className="custom-table-container placement-table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Company</th>
                <th>Role</th>
                <th>Package</th>
                <th>Offer Date</th>
                <th>Joining Date</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>

            <tbody>
              {filteredPlacements.map((placement) => (
                <tr key={placement.id}>
                  <td>
                    <div className="placement-student-cell">
                      <div className="placement-avatar">
                        {placement.initials}
                      </div>

                      <div>
                        <strong>
                          {placement.studentName}
                        </strong>

                        <span>
                          {placement.studentId}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="placement-company-cell">
                      <div className="company-icon">
                        <Building2 size={16} />
                      </div>

                      <span>
                        {placement.company}
                      </span>
                    </div>
                  </td>

                  <td>{placement.role}</td>

                  <td>
                    <strong className="package-value">
                      {formatPackage(
                        placement.package
                      )}
                    </strong>
                  </td>

                  <td>
                    <div className="date-cell">
                      <CalendarDays size={14} />
                      {formatDate(
                        placement.offerDate
                      )}
                    </div>
                  </td>

                  <td>
                    <div className="date-cell">
                      <CalendarDays size={14} />
                      {formatDate(
                        placement.joiningDate
                      )}
                    </div>
                  </td>

                  <td>
                    <span
                      className={`badge ${getStatusClass(
                        placement.status
                      )}`}
                    >
                      {placement.status}
                    </span>
                  </td>

                  <td>
                    <div className="placement-actions">
                      <button
                        type="button"
                        className="btn-icon"
                        title="Quick view"
                        onClick={() =>
                          setSelectedPlacement(
                            placement
                          )
                        }
                      >
                        <Eye size={16} />
                      </button>

                      <Link
                        href={`/admin/placements/${placement.id}`}
                        className="placement-details-link"
                      >
                        View
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredPlacements.length === 0 && (
            <div className="placement-empty-state">
              <div className="placement-empty-icon">
                <Search size={22} />
              </div>

              <h3>No placement records found</h3>

              <p>
                Try changing your search or filter
                selection.
              </p>

              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setSearchTerm("");
                  setDepartment("All Departments");
                  setStatus("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          INFO CARDS
      ====================================================== */}

      <section className="placement-info-grid">
        <div className="glow-card glow-card-green placement-info-card">
          <div className="info-card-icon green">
            <CheckCircle2 size={20} />
          </div>

          <div>
            <span>Offer Acceptance</span>
            <strong>
              {Math.round(
                (acceptedOffers / placements.length) *
                100
              )}
              %
            </strong>
            <p>
              Students who have accepted or joined
            </p>
          </div>
        </div>

        <div className="glow-card glow-card-blue placement-info-card">
          <div className="info-card-icon blue">
            <Users size={20} />
          </div>

          <div>
            <span>Active Placement Records</span>
            <strong>
              {placements.filter(
                (item) =>
                  item.status !==
                  "Offer Declined"
              ).length}
            </strong>
            <p>
              Active offers in the current cycle
            </p>
          </div>
        </div>

        <div className="glow-card glow-card-purple placement-info-card">
          <div className="info-card-icon purple">
            <Building2 size={20} />
          </div>

          <div>
            <span>Recruiting Companies</span>
            <strong>
              {
                new Set(
                  placements.map(
                    (item) => item.company
                  )
                ).size
              }
            </strong>
            <p>
              Companies represented in placements
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK VIEW MODAL
      ====================================================== */}

      {selectedPlacement && (
        <div
          className="placement-modal-backdrop"
          onClick={() =>
            setSelectedPlacement(null)
          }
        >
          <div
            className="placement-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="placement-modal-header">
              <div>
                <span className="placement-kicker">
                  PLACEMENT DETAILS
                </span>

                <h2>
                  {selectedPlacement.studentName}
                </h2>

                <p>
                  {selectedPlacement.studentId} •{" "}
                  {selectedPlacement.department}
                </p>
              </div>

              <button
                type="button"
                className="btn-icon"
                onClick={() =>
                  setSelectedPlacement(null)
                }
              >
                <X size={18} />
              </button>
            </div>

            <div className="placement-detail-company">
              <div className="company-icon large">
                <Building2 size={20} />
              </div>

              <div>
                <span>Selected Company</span>
                <strong>
                  {selectedPlacement.company}
                </strong>
                <small>
                  {selectedPlacement.role}
                </small>
              </div>
            </div>

            <div className="placement-detail-grid">
              <div>
                <span>Package</span>
                <strong>
                  {formatPackage(
                    selectedPlacement.package
                  )}
                </strong>
              </div>

              <div>
                <span>Placement Status</span>
                <strong>
                  <span
                    className={`badge ${getStatusClass(
                      selectedPlacement.status
                    )}`}
                  >
                    {selectedPlacement.status}
                  </span>
                </strong>
              </div>

              <div>
                <span>Offer Date</span>
                <strong>
                  {formatDate(
                    selectedPlacement.offerDate
                  )}
                </strong>
              </div>

              <div>
                <span>Joining Date</span>
                <strong>
                  {formatDate(
                    selectedPlacement.joiningDate
                  )}
                </strong>
              </div>
            </div>

            <div className="placement-modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() =>
                  setSelectedPlacement(null)
                }
              >
                Close
              </button>

              <Link
                href={`/admin/placements/${selectedPlacement.id}`}
                className="btn btn-primary"
                onClick={() =>
                  setSelectedPlacement(null)
                }
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}