'use client';

import React, { useState } from 'react';
import {
    Bell,
    BriefcaseBusiness,
    CheckCircle2,
    Clock3,
    FileText,
    Info,
    Megaphone,
    Trash2,
} from 'lucide-react';

type NotificationType =
    | 'placement'
    | 'interview'
    | 'application'
    | 'announcement'
    | 'general';

type Notification = {
    id: number;
    type: NotificationType;
    title: string;
    message: string;
    time: string;
    unread: boolean;
};

const INITIAL_NOTIFICATIONS: Notification[] = [
    {
        id: 1,
        type: 'placement',
        title: 'Placement Offer Received',
        message:
            'Congratulations! Your offer from Zoho has been received. Please review the offer details.',
        time: '10 minutes ago',
        unread: true,
    },
    {
        id: 2,
        type: 'interview',
        title: 'Technical Interview Scheduled',
        message:
            'Your Technical Round 1 with TCS is scheduled for 02 Oct 2026 at 10:30 AM.',
        time: '1 hour ago',
        unread: true,
    },
    {
        id: 3,
        type: 'application',
        title: 'Application Shortlisted',
        message:
            'Your application for Tata Consultancy Services has been shortlisted.',
        time: '3 hours ago',
        unread: true,
    },
    {
        id: 4,
        type: 'announcement',
        title: 'New Placement Drive',
        message:
            'A new placement drive from Accenture is now available for eligible students.',
        time: 'Yesterday',
        unread: false,
    },
    {
        id: 5,
        type: 'general',
        title: 'Resume Update Reminder',
        message:
            'Please ensure your resume and profile information are updated before the next recruitment drive.',
        time: 'Yesterday',
        unread: false,
    },
];

function getNotificationIcon(type: NotificationType) {
    switch (type) {
        case 'placement':
            return <CheckCircle2 size={19} />;

        case 'interview':
            return <Clock3 size={19} />;

        case 'application':
            return <FileText size={19} />;

        case 'announcement':
            return <Megaphone size={19} />;

        default:
            return <Info size={19} />;
    }
}

function getNotificationClass(type: NotificationType) {
    switch (type) {
        case 'placement':
            return 'notification-icon-green';

        case 'interview':
            return 'notification-icon-purple';

        case 'application':
            return 'notification-icon-blue';

        case 'announcement':
            return 'notification-icon-orange';

        default:
            return 'notification-icon-gray';
    }
}

export default function StudentNotificationsPage() {
    const [notifications, setNotifications] = useState(
        INITIAL_NOTIFICATIONS
    );

    const [activeFilter, setActiveFilter] = useState<
        'All' | 'Unread'
    >('All');

    const unreadCount = notifications.filter(
        (item) => item.unread
    ).length;

    const filteredNotifications =
        activeFilter === 'All'
            ? notifications
            : notifications.filter(
                (item) => item.unread
            );

    const markAsRead = (id: number) => {
        setNotifications((current) =>
            current.map((item) =>
                item.id === id
                    ? { ...item, unread: false }
                    : item
            )
        );
    };

    const markAllAsRead = () => {
        setNotifications((current) =>
            current.map((item) => ({
                ...item,
                unread: false,
            }))
        );
    };

    const removeNotification = (id: number) => {
        setNotifications((current) =>
            current.filter((item) => item.id !== id)
        );
    };

    return (
        <div className="student-notifications-page animate-fade-in">

            {/* =====================================================
          HEADER
      ====================================================== */}

            <section className="student-notifications-header">

                <div>
                    <span className="student-notification-kicker">
                        STUDENT UPDATES
                    </span>

                    <h1>Notifications</h1>

                    <p>
                        Stay updated with placement opportunities,
                        interviews, applications and important notices.
                    </p>
                </div>

                <div className="notification-summary">
                    <div className="notification-summary-icon">
                        <Bell size={18} />
                    </div>

                    <div>
                        <strong>{unreadCount}</strong>
                        <span>Unread notifications</span>
                    </div>
                </div>

            </section>

            {/* =====================================================
          NOTIFICATION CONTROLS
      ====================================================== */}

            <section className="glow-card notification-toolbar">

                <div className="notification-tabs">

                    <button
                        type="button"
                        className={
                            activeFilter === 'All'
                                ? 'notification-tab active'
                                : 'notification-tab'
                        }
                        onClick={() => setActiveFilter('All')}
                    >
                        All
                        <span>{notifications.length}</span>
                    </button>

                    <button
                        type="button"
                        className={
                            activeFilter === 'Unread'
                                ? 'notification-tab active'
                                : 'notification-tab'
                        }
                        onClick={() =>
                            setActiveFilter('Unread')
                        }
                    >
                        Unread
                        <span>{unreadCount}</span>
                    </button>

                </div>

                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={markAllAsRead}
                >
                    <CheckCircle2 size={14} />
                    Mark all as read
                </button>

            </section>

            {/* =====================================================
          NOTIFICATION LIST
      ====================================================== */}

            <section className="notification-list">

                {filteredNotifications.length > 0 ? (
                    filteredNotifications.map(
                        (notification) => (
                            <article
                                key={notification.id}
                                className={`glow-card student-notification-card ${notification.unread
                                        ? 'notification-unread'
                                        : ''
                                    }`}
                                onClick={() =>
                                    markAsRead(notification.id)
                                }
                            >

                                <div
                                    className={`student-notification-icon ${getNotificationClass(
                                        notification.type
                                    )}`}
                                >
                                    {getNotificationIcon(
                                        notification.type
                                    )}
                                </div>

                                <div className="student-notification-content">

                                    <div className="student-notification-top">

                                        <div>
                                            <h2>
                                                {notification.title}
                                            </h2>

                                            {notification.unread && (
                                                <span className="notification-new">
                                                    NEW
                                                </span>
                                            )}
                                        </div>

                                        <span className="notification-time">
                                            {notification.time}
                                        </span>

                                    </div>

                                    <p>
                                        {notification.message}
                                    </p>

                                    <div className="student-notification-actions">

                                        {notification.unread ? (
                                            <button
                                                type="button"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    markAsRead(
                                                        notification.id
                                                    );
                                                }}
                                            >
                                                <CheckCircle2 size={14} />
                                                Mark as read
                                            </button>
                                        ) : (
                                            <span className="notification-read">
                                                <CheckCircle2 size={14} />
                                                Read
                                            </span>
                                        )}

                                        <button
                                            type="button"
                                            className="notification-delete"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                removeNotification(
                                                    notification.id
                                                );
                                            }}
                                        >
                                            <Trash2 size={14} />
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            </article>
                        )
                    )
                ) : (
                    <div className="glow-card notification-empty-state">

                        <div className="notification-empty-icon">
                            <Bell size={24} />
                        </div>

                        <h2>No unread notifications</h2>

                        <p>
                            You're all caught up. New placement updates
                            will appear here.
                        </p>

                    </div>
                )}

            </section>

            {/* =====================================================
          QUICK NOTICE
      ====================================================== */}

            <section className="glow-card notification-info-banner">

                <div className="notification-info-icon">
                    <BriefcaseBusiness size={18} />
                </div>

                <div>
                    <strong>
                        Keep your profile updated
                    </strong>

                    <p>
                        Recruiters use your latest academic,
                        technical and resume information during
                        placement screening.
                    </p>
                </div>

            </section>

        </div>
    );
}