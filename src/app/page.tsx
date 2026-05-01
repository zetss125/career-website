import React from 'react';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <p className="animate-fade-in" style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Initializing protocol... Welcome to the portfolio of
            </p>
            <h1 className="animate-fade-in delay-100 gradient-text" style={{ marginBottom: '1rem' }}>
              RAWAD ABI NAIM
            </h1>
            <h3 className="animate-fade-in delay-200" style={{ color: '#aaa', fontWeight: 400, fontSize: '1.5rem', marginBottom: '2rem' }}>
              Full Stack AI Software Engineer & Cybersecurity Analyst
            </h3>
            <p className="animate-fade-in delay-300" style={{ fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px' }}>
              Bridging robust enterprise solutions with cutting-edge AI and unyielding cybersecurity protocols. Located in Oshawa, ON.
            </p>
            <div className="animate-fade-in delay-400" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#portfolio" className="btn btn-primary">View Portfolio</a>
              <a href="mailto:rawadnm15@gmail.com" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <div className="container">
          <h2>[ About_Me ]</h2>
          <div className="glass-panel" style={{ marginTop: '3rem' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              I am a results-driven technology and customer-facing professional with a broad spectrum of experience spanning <strong>cybersecurity, full stack AI development, IT operations, and sales leadership</strong>. 
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              My mission is to engineer high-quality solutions that align technical capabilities with strategic business needs, delivering both security and scalability. Whether resolving complex IT challenges or developing intelligent applications, I bring an adaptable mindset and a commitment to excellence.
            </p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Core Capabilities</h3>
            <div className="badges-container">
              <span className="badge">Cybersecurity & Risk Analysis</span>
              <span className="badge">Full Stack Development</span>
              <span className="badge">AI & Machine Learning</span>
              <span className="badge">Networking (Cisco)</span>
              <span className="badge">Cloud Computing</span>
              <span className="badge">DevOps & MLOps</span>
              <span className="badge">Git & Docker</span>
              <span className="badge">Data Science</span>
              <span className="badge">IT Support & Troubleshooting</span>
              <span className="badge">Sales Strategy</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section">
        <div className="container">
          <h2>[ Career_Journey ]</h2>
          <div style={{ marginTop: '4rem' }}>
            <div className="timeline">
              
              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Jun 2025 — Jan 2026</span>
                  <h3>IT Technician / Office Administrator / Graphic Designer</h3>
                  <div className="company">GWM Cleaning Services, Oshawa, ON</div>
                  <p>Provided end-to-end IT support including hardware/software installation, troubleshooting, and network setup. Built and maintained websites and mobile applications. Designed branding and marketing materials. Handled administrative operations, inventory control, invoicing, and digital marketing initiatives.</p>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Feb 2025 — Jun 2025</span>
                  <h3>Bank Representative</h3>
                  <div className="company">PC Financial, Whitby, ON</div>
                  <p>Opened and activated customer accounts and Mastercard credit cards. Delivered front-line customer service, resolved complaints, and met sales targets through ethical and compliant banking practices.</p>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Dec 2024 — Feb 2025</span>
                  <h3>Cybersecurity Analyst (Freelance)</h3>
                  <div className="company">InterGamma (Netherlands)</div>
                  <p>Conducted web application security testing, identified vulnerabilities, and produced professional risk assessment reports with actionable remediation recommendations.</p>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">May 2024 — Jan 2025</span>
                  <h3>Sales Manager</h3>
                  <div className="company">Rogers, North York, ON</div>
                  <p>Led sales teams selling telecom services across Ontario. Developed sales strategies, managed territories, processed online orders, and ensured consistent customer satisfaction and performance.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="section">
        <div className="container">
          <h2>[ Education_&_Certs ]</h2>
          <div className="grid grid-cols-2" style={{ marginTop: '3rem' }}>
            
            <div className="glass-panel">
              <h3 style={{ color: 'var(--accent-cyan)' }}>Education</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong>Graduate Certificate — Artificial Intelligence Analysis, Design & Implementation</strong><br/>
                  <span style={{ color: '#aaa', fontSize: '0.9rem' }}>Durham College, Oshawa, ON (Jan 2025 - Aug 2025)</span>
                </li>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong>Bachelor of Nuclear Engineering</strong><br/>
                  <span style={{ color: '#aaa', fontSize: '0.9rem' }}>Ontario Tech University, Oshawa, ON (Jan 2022 - Jan 2024)</span>
                </li>
                <li>
                  <strong>Bachelor of Mechatronics Engineering</strong><br/>
                  <span style={{ color: '#aaa', fontSize: '0.9rem' }}>University of Balamand, Lebanon (Sep 2017 - Jul 2021)</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel">
              <h3 style={{ color: 'var(--accent-purple)' }}>Certifications & Training</h3>
              <div className="badges-container" style={{ marginTop: '1.5rem' }}>
                <span className="badge">Cisco Introduction to Cybersecurity</span>
                <span className="badge">CCNA Routing & Switching</span>
                <span className="badge">Ethical Hacking (Udemy)</span>
                <span className="badge">Advanced Python</span>
                <span className="badge">Wireshark Network Analysis</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="section" style={{ marginBottom: '4rem' }}>
        <div className="container">
          <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(145deg, rgba(10,10,10,0.8) 0%, rgba(0,240,255,0.05) 100%)' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Ready to Deploy?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: '#ccc', fontSize: '1.1rem' }}>
              Review my detailed professional portfolio, featuring comprehensive technical projects, design architectures, and security audits.
            </p>
            <a 
              href="https://zetss125.github.io/professional-portfolio/PROFESSIONAL-PORTFOLIO-Rawad.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
            >
              Access Digital Portfolio
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
