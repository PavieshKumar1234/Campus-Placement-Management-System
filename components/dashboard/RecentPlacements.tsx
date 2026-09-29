'use client';

import Link from 'next/link';
import {
    ArrowRight,
    Building2,
    CalendarDays,
    Trophy,
} from 'lucide-react';

const recentPlacements = [
    {
        id: 'plc-001',
        initials: 'AK',
        student: 'Arun Kumar',
        department: 'CSE',
        company: 'Tata Consultancy Services',
        role: 'Digital Software Engineer',
        package: '₹7.5 LPA',
        date: '18 Sep 2026',
    },
    {
        id: 'plc-002',
        initials: 'PS',
        student: 'Priya S',
        department: 'AIML',
        company: 'Zoho',
        role: 'Software Engineer',
        package: '₹8.0 LPA',
        date: '20 Sep 2026',
    },
    {
        id: 'plc-003',
        initials: 'RK',
        student: 'Rahul K',
        department: 'IT',
        company: 'Infosys',
        role: 'Systems Engineer',
        package: '₹6.5 LPA',
        date: '21 Sep 2026',
    },
    {
        id: 'plc-004',
        initials: 'KR',
        student: 'Kavin R',
        department: 'CSE',
        company: 'Accenture',
        role: 'Application Development Analyst',
        package: '₹7.0 LPA',
        date: '15 Sep 2026',
    },
];

export default function RecentPlacements() {
    return (
        <section className="glow-card recent-placements-card">
            <div className="recent-placements-header">
                <div>
                    <div className="recent-placements-title">
                        <div className="recent-placements-title-icon">
                            <Trophy size={16} />
                        </div>

                        <div>
                            <h2>Recent Placements</h2>

                            <p>
                                Latest students selected through campus recruitment
                            </p>
                        </div>
                    </div>
                </div>

                <Link
                    href="/admin/placements"
                    className="btn btn-secondary btn-sm"
                >
                    View All
                    <ArrowRight size={13} />
                </Link>
            </div>

            <div className="recent-placements-table-wrapper">
                <table className="recent-placements-table">
                    <thead>
                        <tr>
                            <th>STUDENT</th>
                            <th>COMPANY</th>
                            <th>ROLE</th>
                            <th>PACKAGE</th>
                            <th>PLACED ON</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {recentPlacements.map((placement) => (
                            <tr key={placement.id}>
                                <td>
                                    <div className="recent-placement-student">
                                        <div className="recent-placement-avatar">
                                            {placement.initials}
                                        </div>

                                        <div>
                                            <strong>{placement.student}</strong>
                                            <span>{placement.department}</span>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="recent-placement-company">
                                        <div className="recent-company-icon">
                                            <Building2 size={15} />
                                        </div>

                                        <span>{placement.company}</span>
                                    </div>
                                </td>

                                <td>
                                    <span className="recent-placement-role">
                                        {placement.role}
                                    </span>
                                </td>

                                <td>
                                    <strong className="recent-placement-package">
                                        {placement.package}
                                    </strong>
                                </td>

                                <td>
                                    <div className="recent-placement-date">
                                        <CalendarDays size={13} />
                                        {placement.date}
                                    </div>
                                </td>

                                <td>
                                    <span className="badge badge-green">
                                        Placed
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}