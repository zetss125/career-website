import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'RAWAD ABI NAIM | Software & AI Developer | DevOps Engineer | Graphic Designer',
  description: 'Portfolio of Rawad Abi Naim, covering software development, AI systems, DevOps, cybersecurity-related work, and graphic design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-mesh"></div>
        <nav className="navbar">
          <div className="container">
            <div className="logo gradient-text">RAN_</div>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#portfolio">Portfolio</a>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Rawad Abi Naim. All rights reserved.</p>
          </div>
        </footer>
        <ChatWidget />
      </body>
    </html>
  );
}
