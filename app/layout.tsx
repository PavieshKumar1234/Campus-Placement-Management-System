import './globals.css';
import { ReactNode } from 'react';
import EntryVideo from '@/components/EntryVideo';

export const metadata = {
  title: 'Campus Placement Management System',
  description:
    'Enterprise digital platform for university placement drives, students, and companies.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EntryVideo />
        {children}
      </body>
    </html>
  );
}