import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealProvider from '@/components/RevealProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quantum Simplex — AI Transformation Advisory',
  description:
    'Dr. Michael Wu helps organizations move from AI anxiety to AI action through strategic keynotes, advisory, and workforce transformation.',
  icons: {
    icon: '/assets/icon-q-black.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <RevealProvider />
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
