import React from 'react';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <p className="animate-fade-in" style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Professional portfolio of
            </p>
            <h1 className="animate-fade-in delay-100 gradient-text" style={{ marginBottom: '1rem' }}>
              RAWAD ABI NAIM
            </h1>
            <h3 className="animate-fade-in delay-200" style={{ color: '#aaa', fontWeight: 400, fontSize: '1.5rem', marginBottom: '2rem' }}>
              Software & AI Developer | DevOps Engineer | Graphic Designer
            </h3>
            <p className="animate-fade-in delay-300" style={{ fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px' }}>
              I&apos;m drawn to technology and solving problems. My work spans software development, artificial intelligence, DevOps, and graphic design with a focus on practical, secure, and visually clear solutions. Ontario, Canada.
            </p>
            <div className="animate-fade-in delay-400" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#portfolio" className="btn btn-primary">View Professional Portfolio</a>
              <a href="/RAWAD%20ABI%20NAIM%20AI%20SOFT%20ENGINEER%20NEW.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Open PDF Portfolio</a>
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
              I&apos;ve always been drawn to technology and solving problems. Over the years, I&apos;ve worked on everything from desktop applications to AI systems, always with a focus on making things that actually work for real people and real businesses.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              My background is a mix of software development, artificial intelligence, DevOps, and graphic design. I&apos;ve built web and mobile apps for employee management, customer registration, inventory tracking, accounting, and marketing analysis. I&apos;ve also developed AI-based systems for data analysis, prediction, and lead scoring using neural networks.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              What I enjoy most is building practical, secure, and visually clear solutions. I&apos;m looking to grow my career as a Software Developer, AI Developer, DevOps Engineer, or Graphic Designer.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Technical Skills</h3>
            <div className="badges-container">
              <span className="badge">Java</span>
              <span className="badge">Python</span>
              <span className="badge">R</span>
              <span className="badge">JavaScript, HTML, CSS</span>
              <span className="badge">Full-Stack Web Development</span>
              <span className="badge">REST APIs & Backend Services</span>
              <span className="badge">Machine Learning & Deep Learning</span>
              <span className="badge">Business Intelligence Systems</span>
              <span className="badge">Linux Systems</span>
              <span className="badge">Git & Version Control</span>
              <span className="badge">Backend Security & Authentication</span>
              <span className="badge">Adobe Illustrator / Photoshop / InDesign</span>
              <span className="badge">CAD & SolidWorks</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section">
        <div className="container">
          <h2>[ Featured_Projects ]</h2>
          <div style={{ marginTop: '4rem' }}>
            <div className="timeline">
              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Featured Project</span>
                  <h3>Lead Generation Business Intelligence App</h3>
                  <div className="company"><a href="https://zetss125.github.io/moving-leads-app/" target="_blank" rel="noopener noreferrer">https://zetss125.github.io/moving-leads-app/</a></div>
                  <p>I built this project for clothing retail store owners who want to make better sense of their social media customers and improve marketing results. The application pulls engagement data from Facebook posts and uses a deep learning neural network to score each potential customer.</p>
                  <p><strong>Main functions:</strong> lead scoring and ranking, dashboard for business users, data filtering and visualization.</p>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Featured Project</span>
                  <h3>Retail Intelligence & Lead Prediction Engine</h3>
                  <div className="company"><a href="https://zetss125.github.io/retail-ai-leads/" target="_blank" rel="noopener noreferrer">https://zetss125.github.io/retail-ai-leads/</a></div>
                  <p>I developed a high-performance business intelligence and lead scoring system that connects raw social marketing data with actionable retail insights. It uses a custom machine learning pipeline to provide real-time probability scores for customer conversions.</p>
                  <p><strong>Main functions:</strong> better lead scoring, dashboard, filtering and visualization, improved marketing efficiency, reduced advertising costs, web-based access.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="section">
        <div className="container">
          <h2>[ Education_&_Background ]</h2>
          <div className="grid grid-cols-2" style={{ marginTop: '3rem' }}>
            <div className="glass-panel">
              <h3 style={{ color: 'var(--accent-cyan)' }}>Education</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong>Bachelor of Mechatronics Engineering</strong><br/>
                  <span style={{ color: '#aaa', fontSize: '0.9rem' }}>University of Balamand, Lebanon</span>
                </li>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong>Final Year Engineering Project</strong><br/>
                  <span style={{ color: '#aaa', fontSize: '0.9rem' }}>Autonomous Drones — supervised by Dr. Gilbert Tekli</span>
                </li>
                <li>
                  <strong>Project Focus</strong><br/>
                  <span style={{ color: '#aaa', fontSize: '0.9rem' }}>Design and simulation of a drone capable of flying autonomously from one coordinate location to another.</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel">
              <h3 style={{ color: 'var(--accent-purple)' }}>Additional Experience</h3>
              <div className="badges-container" style={{ marginTop: '1.5rem' }}>
                <span className="badge">Java Desktop Applications</span>
                <span className="badge">Library Management System</span>
                <span className="badge">Employee Registry System</span>
                <span className="badge">Authentication System</span>
                <span className="badge">Android Payment App</span>
                <span className="badge">Python Security & Backend Projects</span>
                <span className="badge">AI & Machine Learning Work</span>
                <span className="badge">MATLAB / Simulink / Unreal Engine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="section" style={{ marginBottom: '4rem' }}>
        <div className="container">
          <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(145deg, rgba(10,10,10,0.8) 0%, rgba(0,240,255,0.05) 100%)' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Professional Portfolio Ready</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto 1.5rem auto', color: '#ccc', fontSize: '1.1rem' }}>
              This portfolio highlights software development, AI systems, DevOps thinking, cybersecurity-related work, and creative design work aligned with the new PDF document.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto 2rem auto', maxWidth: '600px', color: '#ddd', lineHeight: 1.8 }}>
              <li>• Software development and backend systems</li>
              <li>• AI, machine learning, and business intelligence</li>
              <li>• Security testing, automation, and practical engineering</li>
            </ul>
            <a 
              href="/RAWAD%20ABI%20NAIM%20AI%20SOFT%20ENGINEER%20NEW.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
            >
              Open Professional Portfolio PDF
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
