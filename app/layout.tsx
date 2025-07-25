// app/layout.tsx
import './globals.css';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import LayoutWrapper from '@/components/LayoutWrapper'; // ✅ import here
import 'flatpickr/dist/flatpickr.min.css'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Dental Society',
  description: 'Dental practice management system',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-white`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
