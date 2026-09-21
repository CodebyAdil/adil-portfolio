import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adil Usman Saeed — Full-Stack Developer',
  description:
    'Full-Stack Developer building AI-integrated web applications. MERN → AI Engineering. Solving problems first, choosing the stack second.',
  openGraph: {
    title: 'Adil Usman Saeed — Full-Stack Developer',
    description:
      'Full-Stack Developer building AI-integrated web applications.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adil Usman Saeed — Full-Stack Developer',
    description:
      'Full-Stack Developer building AI-integrated web applications.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
