import React from 'react';

const listStyle = { color: '#ccc', lineHeight: 1.8, paddingLeft: '1.25rem', marginTop: '0.75rem' } as const;

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <p className="animate-fade-in" style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              AI Software Engineer
            </p>
            <h1 className="animate-fade-in delay-100 gradient-text" style={{ marginBottom: '1rem' }}>
              RAWAD ABI NAIM
            </h1>
            <h3 className="animate-fade-in delay-200" style={{ color: '#aaa', fontWeight: 400, fontSize: '1.5rem', marginBottom: '2rem' }}>
              Building Scalable Intelligent Systems, Automation, and Data Driven Solutions
            </h3>
            <p className="animate-fade-in delay-300" style={{ fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px' }}>
              Full Stack AI Engineer with mid-level experience delivering cloud-native AI solutions. Led development of an LLM-powered web application that cut data processing time by 30% and directed a security assessment that reduced high-risk vulnerabilities by 70%. Ontario, Canada.
            </p>
            <div className="animate-fade-in delay-400" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://zetss125.github.io/professional-portfolio/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Professional Portfolio</a>
              <a href="/RAWAD-ABI-NAIM-SOFTWARE-AI-ENGI-PRIM.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Open Resume PDF</a>
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
              Full Stack AI Engineer with mid-level experience delivering cloud-native AI solutions. Led development of an LLM-powered web application that cut data processing time by 30% and directed a security assessment that reduced high-risk vulnerabilities by 70%.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Proven ability to combine machine learning, RAG techniques, and secure software engineering to drive measurable business outcomes. Seeking to apply expertise to build scalable software/AI products that accelerate company growth.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Key Skills</h3>
            <div style={{ display: 'grid', gap: '1.25rem' }}>
              <div>
                <strong style={{ color: 'var(--accent-purple)' }}>Soft Skills</strong>
                <div className="badges-container" style={{ marginTop: '0.5rem' }}>
                  <span className="badge">Communication</span>
                  <span className="badge">Leadership</span>
                  <span className="badge">Teamwork</span>
                  <span className="badge">Time Management</span>
                </div>
              </div>
              <div>
                <strong style={{ color: 'var(--accent-purple)' }}>Programming Languages</strong>
                <div className="badges-container" style={{ marginTop: '0.5rem' }}>
                  <span className="badge">TypeScript</span>
                  <span className="badge">JavaScript</span>
                  <span className="badge">HTML & CSS</span>
                  <span className="badge">C</span>
                  <span className="badge">R</span>
                  <span className="badge">Python</span>
                  <span className="badge">Java</span>
                  <span className="badge">C++</span>
                  <span className="badge">C#</span>
                  <span className="badge">Dart</span>
                  <span className="badge">Kotlin</span>
                  <span className="badge">Swift</span>
                </div>
              </div>
              <div>
                <strong style={{ color: 'var(--accent-purple)' }}>Front-End</strong>
                <div className="badges-container" style={{ marginTop: '0.5rem' }}>
                  <span className="badge">Bootstrap</span>
                  <span className="badge">React</span>
                  <span className="badge">Angular</span>
                  <span className="badge">VueJS</span>
                  <span className="badge">NextJS</span>
                  <span className="badge">Tailwind CSS</span>
                </div>
              </div>
              <div>
                <strong style={{ color: 'var(--accent-purple)' }}>Back-End</strong>
                <div className="badges-container" style={{ marginTop: '0.5rem' }}>
                  <span className="badge">NodeJS</span>
                  <span className="badge">ExpressJS</span>
                  <span className="badge">.NET</span>
                  <span className="badge">Spring Boot</span>
                  <span className="badge">Spring Framework</span>
                  <span className="badge">SQL & SQL/PL</span>
                  <span className="badge">NoSQL</span>
                  <span className="badge">APIs</span>
                  <span className="badge">FastAPI</span>
                </div>
              </div>
              <div>
                <strong style={{ color: 'var(--accent-purple)' }}>AI & Data</strong>
                <div className="badges-container" style={{ marginTop: '0.5rem' }}>
                  <span className="badge">Scikit-Learn</span>
                  <span className="badge">R Tidymodels & Caret</span>
                  <span className="badge">Keras & TensorFlow</span>
                  <span className="badge">PyTorch</span>
                  <span className="badge">Tableau</span>
                  <span className="badge">Microsoft Power BI</span>
                  <span className="badge">Apache Hadoop</span>
                  <span className="badge">Apache Spark</span>
                  <span className="badge">Docker</span>
                  <span className="badge">Kubernetes</span>
                </div>
              </div>
              <div>
                <strong style={{ color: 'var(--accent-purple)' }}>Cloud, DevOps & Security</strong>
                <div className="badges-container" style={{ marginTop: '0.5rem' }}>
                  <span className="badge">GitHub</span>
                  <span className="badge">Vercel</span>
                  <span className="badge">Render</span>
                  <span className="badge">Railway</span>
                  <span className="badge">AWS</span>
                  <span className="badge">Google Cloud Platform</span>
                  <span className="badge">Microsoft Azure</span>
                  <span className="badge">Linux</span>
                  <span className="badge">Burp Suite</span>
                  <span className="badge">OWASP ZAP</span>
                </div>
              </div>
              <div>
                <strong style={{ color: 'var(--accent-purple)' }}>Design</strong>
                <div className="badges-container" style={{ marginTop: '0.5rem' }}>
                  <span className="badge">Adobe Illustrator</span>
                  <span className="badge">Photoshop</span>
                  <span className="badge">InDesign</span>
                  <span className="badge">CAD</span>
                  <span className="badge">SolidWorks</span>
                  <span className="badge">Logo & UI Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC & PERSONAL PROJECTS (Durham College) */}
      <section id="experience" className="section">
        <div className="container">
          <h2>[ Academic_&_Personal_Projects ]</h2>
          <p style={{ marginTop: '1rem', color: '#aaa', maxWidth: '800px' }}>
            Projects from the Graduate Program in Artificial Intelligence Analysis, Design and Implementation at Durham College, aligned with the professional resume and portfolio.
          </p>
          <div style={{ marginTop: '3rem' }}>
            <div className="timeline">
              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Durham College · Academic & Personal Project</span>
                  <h3>Lead Generation App (Business Intelligence System)</h3>
                  <div className="company">
                    <a href="https://github.com/zetss125/SmartLeads-BI-Advanced" target="_blank" rel="noopener noreferrer">
                      https://github.com/zetss125/SmartLeads-BI-Advanced
                    </a>
                  </div>
                  <ul style={listStyle}>
                    <li>Developed a web-based business intelligence platform that helps retailers and sales teams identify, score, and prioritize high-value leads using AI-powered analytics. The application ingests customer and engagement data, normalizes lead information, and applies predictive scoring models to highlight prospects with the greatest purchase potential.</li>
                    <li>Designed and deployed an AI-driven lead intelligence system that ranks potential customers based on behavioral engagement, conversion likelihood, and marketing value.</li>
                    <li>Built an interactive dashboard with search, filtering, lead management, score analysis, and live business growth insights to support faster marketing decisions.</li>
                    <li>Integrated AI-assisted lead scoring, marketing recommendations, social analytics, and approval workflows into a single decision-support platform.</li>
                    <li>Reduced marketing costs by approximately 38 percent by helping businesses target higher quality prospects instead of broad advertising campaigns.</li>
                    <li>Increased qualified lead conversion efficiency by 31 percent through AI-driven prioritization and targeting.</li>
                    <li>Improved campaign response rates by 24 percent by identifying more relevant customer segments and outreach opportunities.</li>
                    <li>Increased average monthly sales by approximately CAD $10,000 across pilot use cases through improved lead qualification and campaign precision.</li>
                    <li>Reduced the time required to identify high-value customers by over 70 percent compared to manual review and spreadsheet-based evaluation.</li>
                    <li>Delivered a responsive, multi-device business intelligence application that enables teams to monitor leads, analyze trends, and optimize marketing performance from anywhere.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Durham College · Academic & Personal Project</span>
                  <h3>Retail Intelligence & Lead Prediction Engine</h3>
                  <div className="company">
                    <a href="https://zetss125.github.io/retail-ai-leads/" target="_blank" rel="noopener noreferrer">
                      https://zetss125.github.io/retail-ai-leads/
                    </a>
                  </div>
                  <ul style={listStyle}>
                    <li>Developed a Business Intelligence and AI powered Lead Prediction platform that transforms raw social media marketing data into actionable retail insights. The platform integrates a custom machine learning pipeline to analyze customer engagement, purchasing behavior, and demographic signals to predict conversion probability in real time.</li>
                    <li>Designed, streamlined, and implemented a custom machine learning pipeline that processes multiple customer engagement signals to generate real time lead conversion probability scores.</li>
                    <li>Built an interactive business intelligence dashboard featuring lead rankings, customer segmentation, filtering, performance visualization, and campaign analytics.</li>
                    <li>Successfully evaluated the platform with 2 clothing retail businesses during a pilot implementation.</li>
                    <li>Reduced customer acquisition and advertising costs by 42 percent through predictive lead targeting and optimized campaign recommendations.</li>
                    <li>Improved qualified lead conversion rates by 35 percent by prioritizing customers with the highest purchase probability.</li>
                    <li>Increased campaign engagement by 28 percent through AI driven audience segmentation and personalized marketing recommendations.</li>
                    <li>Increased combined monthly sales by approximately CAD $12,000 across participating businesses by improving lead quality and marketing efficiency.</li>
                    <li>Reduced manual lead qualification time by 75 percent, allowing business owners to focus on customer engagement and sales activities.</li>
                    <li>Improved marketing decision making by providing real time dashboards that support faster identification of high value customer segments.</li>
                    <li>Developed a scalable web-based architecture capable of processing thousands of lead predictions with low latency while supporting future machine learning model improvements.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO & ROBOTICS ENGINEERING PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <h2>[ Robotics,_AI_&_Engineering_Projects ]</h2>
          <p style={{ marginTop: '1rem', color: '#aaa', maxWidth: '800px' }}>
            Featured embodied robotics, offline multimodal AI, and software engineering systems.
          </p>
          <div style={{ marginTop: '3rem' }}>
            <div className="timeline">
              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Character Robot Challenge · Embodied AI & Robotics</span>
                  <h3>5-DOF Lamp Robot Character Simulation</h3>
                  <div className="company">
                    <a href="https://github.com/zetss125/lamp-robot-challenge" target="_blank" rel="noopener noreferrer">
                      https://github.com/zetss125/lamp-robot-challenge
                    </a>
                  </div>
                  <ul style={listStyle}>
                    <li>Engineered an expressive, embodied lamp robot character inspired by Pixar&apos;s <em>Luxo Jr.</em>, capable of interacting naturally with humans using real-time computer vision, offline speech recognition, local language reasoning, dynamic physical motion, and multimodal sensory cues.</li>
                    <li>Designed to run <strong>100% offline and locally</strong> on standard commodity hardware (Ubuntu 24.04 LTS, 4 CPU cores, 8 GB RAM, no discrete GPU required) for zero cloud latency and total privacy.</li>
                    <li>Integrated perception pipeline featuring <strong>Moondream Vision-Language Model (VLM)</strong> via Ollama for object/scene understanding alongside real-time <strong>OpenCV Haar cascade face tracking</strong> with debounce hysteresis for robust interaction states.</li>
                    <li>Implemented cognitive reasoning using a bounded local LLM (<strong>Qwen2:0.5B</strong> via Ollama) and offline voice interaction powered by <strong>Vosk</strong> English speech-to-text (<code>vosk-model-small-en-us</code>).</li>
                    <li>Established an authoritative systems engineering boundary decoupling <strong>Laptop Cognition</strong> from an <strong>Authoritative Body Runtime</strong> communicating via strict JSON <code>BodyCommand</code> and <code>BodyResult</code> schemas over loopback TCP sockets (port 8765).</li>
                    <li>Built 5-DOF physics and kinematic simulation in <strong>PyBullet</strong> with URDF modeling (<code>dummy_lamp_5dof.urdf</code>), lamp shade RGB illumination cues, Linux PCM audio tones, and TTS speech coordination.</li>
                    <li>Implemented a goal-directed observe-act-reobserve state machine with structured telemetry logging (<code>measurements.jsonl</code>) and full test coverage with <strong>21 unit and integration tests</strong> across protocol, transport, receiver, action controller, and runtime verification.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Portfolio Project</span>
                  <h3>Business Data and Management Applications</h3>
                  <p>
                    Java desktop work including library management with book and author registration, lease tracking, data storage and retrieval, and employee registry functionality covering employee records, departments, rankings, and task assignments. These projects strengthened object oriented design and business data management skills while demonstrating how structured software can replace fragmented record keeping with consistent workflows.
                  </p>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Portfolio Project</span>
                  <h3>Authentication and Web Application Development</h3>
                  <p>
                    Developed a freelance authentication interface for a United States company using HTML and JavaScript with backend integration. The work included front end design, backend connectivity, credential handling, and testing in a Linux environment. The project reinforced the importance of treating authentication as both a user experience and a security boundary.
                  </p>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Portfolio Project</span>
                  <h3>Python Automation and Security Engineering</h3>
                  <p>
                    Python work includes web backends, automation scripts, security testing utilities, and data processing programs. This experience strengthened the ability to build repeatable workflows and move between application development, data processing, and technical investigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section id="work" className="section">
        <div className="container">
          <h2>[ Professional_Experience ]</h2>
          <div style={{ marginTop: '3rem' }}>
            <div className="timeline">
              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Aug 2026 - Sep 2026</span>
                  <h3>Cybersecurity Analyst, Freelance</h3>
                  <div className="company">Maple Linens</div>
                  <ul style={listStyle}>
                    <li>Conducted penetration testing on full-stack web application using Burp Suite and OWASP ZAP, following OWASP Top 10 methodology, which uncovered critical security gaps that were addressed before launch.</li>
                    <li>Performed risk assessment and risk prioritization, classifying vulnerabilities by business impact, likelihood, and severity to support management decision making and remediation planning.</li>
                    <li>Improved the application&apos;s overall security posture by identifying attack vectors that could have resulted in unauthorized access, sensitive data exposure, or service disruption.</li>
                    <li>Assisted in strengthening secure development practices by providing practical mitigation guidance for authentication, authorization, input validation, and session security.</li>
                    <li>Contributed to the organization&apos;s Risk Management Operations by helping reduce operational and business risks through proactive vulnerability identification and security assurance activities.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Jul 2026 - Aug 2026</span>
                  <h3>Illustrator & Editor</h3>
                  <div className="company">Freelance</div>
                  <ul style={listStyle}>
                    <li>Designed and illustrated complete, publication-ready children&apos;s books creating original character designs, dynamic scene layouts, and atmospheric background art across multi-page spreads using digital illustration tools, which led to successful publication on KDP and positive reader engagement.</li>
                    <li>Developed consistent character model sheets and color palettes to maintain visual continuity and narrative flow throughout the entire manuscript.</li>
                    <li>Formatted cover art, typography, and interior spreads tailored to meet print-on-demand and digital self-publishing platform specs (For KDP).</li>
                    <li>Conceptualized and rendered high-resolution front and back cover artwork featuring integrated title typography, author/illustrator layout, and back-cover blurb designs.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Jun 2025 - Jan 2026</span>
                  <h3>IT Specialist & Software Engineer</h3>
                  <div className="company">GWM Cleaning Services</div>
                  <ul style={listStyle}>
                    <li>Built and maintained web apps and mobile applications using MERN stack, Python and Flutter, and Azure services which improved user satisfaction and streamlined internal processes.</li>
                    <li>Delivered efficient end-to-end IT support and services, including software/hardware installation, troubleshooting, and network setup.</li>
                    <li>Served as Business Development Manager, leading branding and marketing initiatives that improved customer engagement and supported business growth.</li>
                    <li>Led a cross functional team of 5 members, promoting ownership, collaboration, and timely project delivery.</li>
                    <li>Managed inventory and maintained 99.9% system availability through proactive monitoring and maintenance.</li>
                    <li>Managed IT assets and preventive maintenance to ensure reliable business operations.</li>
                    <li>Kept wanting to improve and learn to stay curious, motivated and knowledge-driven.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Feb 2025 - Jun 2025</span>
                  <h3>Bank Representative</h3>
                  <div className="company">PC Financial</div>
                  <ul style={listStyle}>
                    <li>Opened and activated Master credit cards and customer accounts using the bank&apos;s core banking system and verification procedures, which helped increase the number of active accounts during the period.</li>
                    <li>Delivered face-to-face customer service, troubleshooting, and complaint resolution.</li>
                    <li>Met day-to-day sales targets through banking compliance practices and guidelines.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Dec 2024 - Feb 2025</span>
                  <h3>Cybersecurity Analyst, Freelance</h3>
                  <div className="company">InterGamma</div>
                  <ul style={listStyle}>
                    <li>Conducted penetration testing on full-stack web application using Burp Suite and OWASP ZAP, following OWASP Top 10 methodology, which uncovered critical security gaps that were addressed before launch.</li>
                    <li>Identified and validated 35+ security vulnerabilities, including authentication weaknesses, input validation flaws, session management issues, and business logic risks before production deployment.</li>
                    <li>Performed risk assessment and risk prioritization, classifying vulnerabilities by business impact, likelihood, and severity to support management decision making and remediation planning.</li>
                    <li>Produced detailed executive and technical security reports with prioritized remediation recommendations, reducing the average remediation planning time by approximately 45 percent.</li>
                    <li>Collaborated with development stakeholders to validate security fixes, contributing to an estimated 70 percent reduction in high and critical security risks before release.</li>
                    <li>Improved the application&apos;s overall security posture by identifying attack vectors that could have resulted in unauthorized access, sensitive data exposure, or service disruption.</li>
                    <li>Assisted in strengthening secure development practices by providing practical mitigation guidance for authentication, authorization, input validation, and session security.</li>
                    <li>Contributed to the organization&apos;s Risk Management Operations by helping reduce operational and business risks through proactive vulnerability identification and security assurance activities.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">May 2024 - Jan 2025</span>
                  <h3>Sales Manager</h3>
                  <div className="company">Rogers</div>
                  <ul style={listStyle}>
                    <li>Analyzed territory data and performance metrics to optimize sales strategy and lead allocation for a cross-functional team of 7, which led to more focused lead targeting and improved sales coverage.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Jul 2022 - Sep 2023</span>
                  <h3>Store Manager/Business Development Manager</h3>
                  <div className="company">Suministros Multiples Nabar C.A.</div>
                  <ul style={listStyle}>
                    <li>Managed daily store operations, overseeing staff scheduling, POS transactions, and cash handling, which kept store processes running smoothly and ensured on-time opening and closing.</li>
                    <li>Developed sales strategies.</li>
                    <li>Conducted inventory quality checks & management.</li>
                    <li>Handled customer services and data-entry operations.</li>
                    <li>Worked on digital and in-person marketing and branding design.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Jan 2019 - Feb 2021</span>
                  <h3>Mechanical Engineer/ Metal Design Engineer</h3>
                  <div className="company">Primavera Company</div>
                  <ul style={listStyle}>
                    <li>Designed industrial and architectural metal structures using AutoCAD, ensuring compliance with project specifications, which enabled timely client approvals.</li>
                    <li>Prepared files for laser and plasma cutting systems.</li>
                    <li>Oversaw design-to-fabrication processes in industrial environments.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item glass-panel">
                <div className="timeline-content">
                  <span className="date">Feb 2017 - Dec 2017</span>
                  <h3>IT/Projector Operator</h3>
                  <div className="company">Empire Cinemas</div>
                  <ul style={listStyle}>
                    <li>Scheduled, installed, and ran film and promotional content for cinema screens using the theater&apos;s media server and projector control software, ensuring seamless playback throughout showtimes.</li>
                    <li>Maintained projector software and hardware systems.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="section">
        <div className="container">
          <h2>[ Education_&_Professional_Development ]</h2>
          <div className="grid grid-cols-2" style={{ marginTop: '3rem' }}>
            <div className="glass-panel">
              <h3 style={{ color: 'var(--accent-cyan)' }}>Education</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong>Graduate Program, Artificial Intelligence Analysis, Design and Implementation</strong><br/>
                  <span style={{ color: '#aaa', fontSize: '0.9rem' }}>Durham College</span>
                  <div style={{ marginTop: '1rem' }}>
                    <strong style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>Academic & Personal Projects</strong>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem' }}>
                      <li style={{ marginBottom: '1rem' }}>
                        <strong style={{ fontSize: '0.95rem' }}>Lead Generation App (Business Intelligence System)</strong><br/>
                        <a href="https://github.com/zetss125/SmartLeads-BI-Advanced" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>
                          github.com/zetss125/SmartLeads-BI-Advanced
                        </a>
                        <p style={{ color: '#aaa', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
                          Web-based business intelligence platform that helps retailers identify, score, and prioritize high-value leads using AI-powered analytics and predictive scoring models.
                        </p>
                      </li>
                      <li>
                        <strong style={{ fontSize: '0.95rem' }}>Retail Intelligence & Lead Prediction Engine</strong><br/>
                        <a href="https://zetss125.github.io/retail-ai-leads/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>
                          zetss125.github.io/retail-ai-leads
                        </a>
                        <p style={{ color: '#aaa', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
                          Business Intelligence and AI powered Lead Prediction platform that transforms social media marketing data into real-time conversion probability scores and actionable retail insights.
                        </p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong>Bachelor&apos;s Degree, Mechatronics Engineering</strong><br/>
                  <span style={{ color: '#aaa', fontSize: '0.9rem' }}>University of Balamand</span>
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>Final Year Engineering Project — Autonomous Drones</strong><br/>
                  <span style={{ color: '#aaa', fontSize: '0.9rem' }}>Supervised by Dr. Gilbert Tekli, University of Balamand</span>
                </li>
                <li>
                  <span style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    Combined MATLAB and Simulink with aerospace and UAV toolboxes, waypoint guidance, Lidar sensing, camera modules, GPS simulation, QGroundControl, and Unreal Engine environments. The autonomous simulation demonstrated point to point navigation and obstacle avoidance. Additional manual control simulation included physics based movement, throttle control, torque and force, animated control surfaces, and satellite based terrain.
                  </span>
                </li>
              </ul>
            </div>

            <div className="glass-panel">
              <h3 style={{ color: 'var(--accent-purple)' }}>Certifications & Training</h3>
              <div className="badges-container" style={{ marginTop: '1.5rem' }}>
                <span className="badge">CCNA I — Cisco</span>
                <span className="badge">CCNA II — Cisco</span>
                <span className="badge">Intro to Cybersecurity — Cisco</span>
                <span className="badge">Artificial Intelligence A-Z: 2026: Agentic AI, Gen AI, and RL — Udemy</span>
                <span className="badge">Machinery Learning A-Z — Udemy</span>
                <span className="badge">Data Science A-Z — Udemy</span>
                <span className="badge">Learn OSINT From Scratch — Udemy</span>
                <span className="badge">Website Hacking/Penetration Testing — Udemy</span>
                <span className="badge">Linux Wireshark — Udemy</span>
                <span className="badge">Bug Hunting — Udemy</span>
                <span className="badge">Penetration Testing — Udemy</span>
                <span className="badge">APISEC API Hacking — APISEC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="section" style={{ marginBottom: '4rem' }}>
        <div className="container">
          <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(145deg, rgba(10,10,10,0.8) 0%, rgba(0,240,255,0.05) 100%)' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Rawad Abi Naim Professional Portfolio</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto 1.5rem auto', color: '#ccc', fontSize: '1.1rem' }}>
              This portfolio highlights software development, AI systems, DevOps thinking, cybersecurity-related work, and creative design work.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto 2rem auto', maxWidth: '600px', color: '#ddd', lineHeight: 1.8 }}>
              <li>• Software development and backend systems</li>
              <li>• AI, machine learning, and business intelligence</li>
              <li>• Security testing, automation, and practical engineering</li>
            </ul>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://zetss125.github.io/professional-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
              >
                View Live Portfolio
              </a>
              <a
                href="/Rawad_Abi_Naim_Professional_Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
              >
                Open Portfolio PDF
              </a>
              <a
                href="/RAWAD-ABI-NAIM-SOFTWARE-AI-ENGI-PRIM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
              >
                Open Resume PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
