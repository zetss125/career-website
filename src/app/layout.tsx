import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'RAWAD ABI NAIM | AI Software Engineer | Full Stack AI Developer',
  description: 'AI Software Engineer building scalable intelligent systems, automation, and data driven solutions. Cloud-native AI, machine learning, cybersecurity, and full stack development.',
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
              <a href="#experience">AI Projects</a>
              <a href="#projects">Engineering</a>
              <a href="#work">Experience</a>
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
