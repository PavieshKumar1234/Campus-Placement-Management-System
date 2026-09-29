'use client';

import React from 'react';
import {
    Award,
    Building2,
    CalendarDays,
    CheckCircle2,
    CircleDollarSign,
    Clock3,
    BriefcaseBusiness,
    MapPin,
} from 'lucide-react';

type Offer = {
    company: string;
    role: string;
    package: string;
    offerDate: string;
    joiningDate: string;
    location: string;
    status: 'Accepted' | 'Received' | 'Joining Pending';
    color: 'purple' | 'green' | 'orange';
};

const offers: Offer[] = [
    {
        company: 'Tata Consultancy Services',
        role: 'Digital Software Engineer',
        package: '₹7.5 LPA',
        offerDate: '18 Sep 2026',
        joiningDate: '05 Jul 2027',
        location: 'Chennai',
        status: 'Accepted',
        color: 'purple',
    },
    {
        company: 'Zoho',
        role: 'Software Engineer',
        package: '₹8.0 LPA',
        offerDate: '20 Sep 2026',
        joiningDate: '28 Jun 2027',
        location: 'Chennai',
        status: 'Received',
        color: 'green',
    },
];

const applicationResults = [
    {
        company: 'Tata Consultancy Services',
        role: 'Digital Software Engineer',
        result: 'Selected',
        date: '18 Sep 2026',
        style: 'result-green',
    },
    {
        company: 'Zoho',
        role: 'Software Engineer',
        result: 'Offer Received',
        date: '20 Sep 2026',
        style: 'result-purple',
    },
    {
        company: 'Infosys',
        role: 'Systems Engineer',
        result: 'Interview Completed',
        date: '21 Sep 2026',
        style: 'result-blue',
    },
];

export default function StudentResultsPage() {
    return (
        <div className="student-results-page animate-fade-in">

            {/* =====================================================
          HEADER
      ====================================================== */}

            <section className="student-results-header">
                <div>
                    <span className="student-results-kicker">
                        ASSESSMENT & RESULTS
                    </span>

                    <h1>Offers & Results</h1>

                    <p>
                        View your placement selections, job offers and
                        final recruitment results.
                    </p>
                </div>
            </section>

            {/* =====================================================
          SUMMARY CARDS
      ====================================================== */}

            <section className="student-result-stats">

                <div className="glow-card glow-card-purple student-result-stat-card">
                    <div className="student-result-icon purple">
                        <Award size={19} />
                    </div>

                    <div>
                        <span>Offers Received</span>
                        <strong>2</strong>
                        <small>Current placement cycle</small>
                    </div>
                </div>

                <div className="glow-card glow-card-green student-result-stat-card">
                    <div className="student-result-icon green">
                        <CheckCircle2 size={19} />
                    </div>

                    <div>
                        <span>Offers Accepted</span>
                        <strong>1</strong>
                        <small>Confirmed offer</small>
                    </div>
                </div>

                <div className="glow-card glow-card-blue student-result-stat-card">
                    <div className="student-result-icon blue">
                        <CircleDollarSign size={19} />
                    </div>

                    <div>
                        <span>Highest Package</span>
                        <strong>₹8.0 LPA</strong>
                        <small>Current highest offer</small>
                    </div>
                </div>

                <div className="glow-card glow-card-orange student-result-stat-card">
                    <div className="student-result-icon orange">
                        <BriefcaseBusiness size={19} />
                    </div>

                    <div>
                        <span>Placement Status</span>
                        <strong>Placed</strong>
                        <small>Recruitment process completed</small>
                    </div>
                </div>

            </section>

            {/* =====================================================
          CURRENT OFFERS
      ====================================================== */}

            <section className="glow-card student-offers-panel">

                <div className="student-panel-heading">
                    <div>
                        <h2>My Offers</h2>

                        <p>
                            Companies where you have received a selection
                            or employment offer.
                        </p>
                    </div>

                    <span className="badge badge-green">
                        2 Active Offers
                    </span>
                </div>

                <div className="student-offer-list">

                    {offers.map((offer) => (
                        <div
                            key={offer.company}
                            className={`student-offer-card glow-card glow-card-${offer.color}`}
                        >

                            <div className="student-offer-top">

                                <div className="student-company-area">

                                    <div
                                        className={`student-company-logo ${offer.color}`}
                                    >
                                        <Building2 size={20} />
                                    </div>

                                    <div>
                                        <h3>{offer.company}</h3>
                                        <span>{offer.role}</span>
                                    </div>

                                </div>

                                <span className="badge badge-green">
                                    {offer.status}
                                </span>

                            </div>

                            <div className="student-offer-details">

                                <div>
                                    <span>
                                        <CircleDollarSign size={14} />
                                        Package
                                    </span>

                                    <strong>{offer.package}</strong>
                                </div>

                                <div>
                                    <span>
                                        <CalendarDays size={14} />
                                        Offer Date
                                    </span>

                                    <strong>{offer.offerDate}</strong>
                                </div>

                                <div>
                                    <span>
                                        <CalendarDays size={14} />
                                        Joining Date
                                    </span>

                                    <strong>{offer.joiningDate}</strong>
                                </div>

                                <div>
                                    <span>
                                        <MapPin size={14} />
                                        Location
                                    </span>

                                    <strong>{offer.location}</strong>
                                </div>

                            </div>

                            <div className="student-offer-footer">

                                {offer.status === 'Accepted' ? (
                                    <div className="offer-confirmed">
                                        <CheckCircle2 size={15} />
                                        Offer accepted successfully
                                    </div>
                                ) : (
                                    <div className="offer-pending">
                                        <Clock3 size={15} />
                                        Offer awaiting your response
                                    </div>
                                )}

                            </div>

                        </div>
                    ))}

                </div>
            </section>

            {/* =====================================================
          FINAL RESULT
      ====================================================== */}

            <section className="glow-card student-final-result">

                <div className="final-result-icon">
                    <TrophyIcon />
                </div>

                <div className="final-result-content">
                    <span>FINAL PLACEMENT RESULT</span>

                    <h2>Congratulations, Arun Kumar! 🎉</h2>

                    <p>
                        You have been selected for the role of
                        <strong> Digital Software Engineer </strong>
                        at <strong>Tata Consultancy Services</strong>.
                    </p>
                </div>

                <div className="final-result-package">
                    <span>Package</span>
                    <strong>₹7.5 LPA</strong>
                </div>

            </section>

            {/* =====================================================
          RECRUITMENT RESULTS
      ====================================================== */}

            <section className="glow-card student-results-history">

                <div className="student-panel-heading">
                    <div>
                        <h2>Recruitment Results</h2>

                        <p>
                            Your latest assessment and recruitment outcomes.
                        </p>
                    </div>
                </div>

                <div className="student-results-table-wrap">

                    <table className="student-results-table">

                        <thead>
                            <tr>
                                <th>COMPANY</th>
                                <th>ROLE</th>
                                <th>RESULT</th>
                                <th>DATE</th>
                            </tr>
                        </thead>

                        <tbody>

                            {applicationResults.map((item) => (
                                <tr key={`${item.company}-${item.role}`}>

                                    <td>
                                        <div className="result-company-cell">
                                            <div className="result-company-icon">
                                                <Building2 size={15} />
                                            </div>

                                            <strong>{item.company}</strong>
                                        </div>
                                    </td>

                                    <td>{item.role}</td>

                                    <td>
                                        <span
                                            className={`result-status ${item.style}`}
                                        >
                                            {item.result}
                                        </span>
                                    </td>

                                    <td>{item.date}</td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </section>

        </div>
    );
}

/* Small custom trophy icon wrapper */
function TrophyIcon() {
    return <Award size={28} />;
}