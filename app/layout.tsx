import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hey Türkiye',
  description: 'Personal site',
  themeColor: '#8B5CF6',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: 'https://heyteknik.works/heytr-live/icon.jpg',
  openGraph: {
    images: 'https://heyteknik.works/heytr-live/icon.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
