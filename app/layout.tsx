import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BlendBerry - Your Go-To Spot for Sips and Smiles',
  description: 'Discover our delightful selection of bubble teas, smoothies, milkshakes, and bubble waffles.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cagliostro&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-cagliostro">{children}</body>
    </html>
  );
}