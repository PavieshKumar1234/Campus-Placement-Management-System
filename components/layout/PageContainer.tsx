'use client';

import React, { useState, ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface PageContainerProps {
  children: ReactNode;
  title?: string;
  role?: 'admin' | 'student';
}

export default function PageContainer({ children, title, role = 'admin' }: PageContainerProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar
        role={role}
        isMobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />
      <div className="main-content-wrapper">
        <Navbar
          role={role}
          title={title}
          onOpenMobile={() => setMobileOpen(true)}
        />
        <main className="page-body animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
}
