import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hey Türkiye',
  description: 'Personal site',
  themeColor: '#8B5CF6',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: 'https://cdn.discordapp.com/avatars/718374283642011728/fa3062ddd3397e3a1f188bc6e3dec4fb.png?size=1024',
  openGraph: {
    images: 'https://cdn.discordapp.com/avatars/718374283642011728/fa3062ddd3397e3a1f188bc6e3dec4fb.png?size=1024',
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
