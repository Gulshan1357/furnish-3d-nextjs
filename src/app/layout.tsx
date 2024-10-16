import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/globals.css';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/app/components/Navbar';
import { Layout } from '@/app/components/dom/Layout';

const alpino = localFont({
  src: '../../public/fonts/Alpino-Variable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-alpino',
});

export const metadata: Metadata = {
  title: 'Furnish3D',
  description:
    'Furnish3D is a web platform that lets users view, customize, and buy furniture. It offers an immersive experience with interactive configurations of colors, materials, and sizes, enhancing online shopping through realistic 3D visualization.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${alpino.className} overflow-x-hidden antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main>
            <Layout>{children}</Layout>
          </main>
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
