'use client';

import React, { ReactNode } from 'react';
import PageContainer from '@/components/layout/PageContainer';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <PageContainer role="admin">
      {children}
    </PageContainer>
  );
}
