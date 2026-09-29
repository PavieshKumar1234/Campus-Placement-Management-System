'use client';

import React, { ReactNode } from 'react';
import PageContainer from '@/components/layout/PageContainer';

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <PageContainer role="student">
      {children}
    </PageContainer>
  );
}
