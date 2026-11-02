<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Mahesa Tirtha Agung Permana — Mechatronics & IoT Engineer building end-to-end smart systems from sensor to cloud to dashboard." />
  <meta name="keywords" content="Mahesa Tirtha Agung Permana, Hessong888, Mechatronics, IoT Engineer, Robotics, Automation, Sensor to Cloud, Portfolio" />
  <meta name="author" content="Mahesa Tirtha Agung Permana" />
  <meta name="theme-color" content="#0a0a0f" />

  <meta property="og:title" content="Mahesa Tirtha Agung Permana — Mechatronics & IoT Engineer" />
  <meta property="og:description" content="Mechatronics & IoT Engineer building end-to-end smart systems (sensor → cloud → dashboard), with a practical focus on robotics and automation." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.xyzus.my.id/" />
  <meta property="og:image" content="https://www.xyzus.my.id/assets/hero_bg.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Mahesa Tirtha Agung Permana — Portfolio" />
  <meta name="twitter:description" content="Mechatronics & IoT Engineer building end-to-end smart systems across instrumentation, cloud, and dashboard layers." />
  <meta name="twitter:image" content="https://www.xyzus.my.id/assets/hero_bg.png" />

  <title>Mahesa Tirtha Agung Permana — Mechatronics & IoT Engineer</title>
  <link rel="canonical" href="https://www.xyzus.my.id/" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <link rel="stylesheet" href="./css/main.css" />
  <link rel="stylesheet" href="./css/animations.css" />
  <link rel="icon" type="image/svg+xml" href="./assets/rose.svg" />
</head>

<body>
  <a href="#main-content" class="skip-link">Skip to content</a>

  <div id="loader" class="loader">
    <img src="./assets/rose.svg" alt="Loading" class="loader-rose" />
    <div class="loader-bar"><div class="loader-bar-fill"></div></div>
    <span class="loader-text">Initializing System...</span>
  </div>

  <div class="cursor" id="cursor-dot-wrap">
    <div id="cursor-dot" class="cursor-dot"></div>
  </div>
  <div class="cursor" id="cursor-ring-wrap">
    <div id="cursor-ring" class="cursor-ring"></div>
  </div>

  <div id="mobile-nav-overlay" class="mobile-nav-overlay"></div>
  <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation">
    <button id="mobile-nav-close" class="mobile-nav-close" aria-label="Close menu">✕</button>
    <a href="#about">About</a>
    <a href="#github">Repositories</a>
    <a href="#experience">Experience</a>
    <a href="#playground">Playground</a>
    <a href="#contact">Contact</a>
    <a href="https://github.com/Hessong888" target="_blank" rel="noopener">GitHub ↗</a>
    <a href="https://www.linkedin.com/in/mahesa-tirtha-agung-permana" target="_blank" rel="noopener">LinkedIn ↗</a>
  </nav>

  <header class="nav" role="banner">
    <a href="#home" class="nav-logo" aria-label="Home">
      <img src="./assets/rose.svg" alt="Rose logo" />
      Mahesa<span style="color:var(--gold)">.</span>
    </a>

    <nav class="nav-links" aria-label="Main navigation">
      <a href="#about">About</a>
      <a href="#github">Repositories</a>
      <a href="#experience">Experience</a>
      <a href="#playground">Playground</a>
      <a href="#contact" class="nav-cta">Contact Me</a>
    </nav>

    <button id="nav-hamburger" class="nav-hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>

  <main id="main-content">
    <section class="hero" id="home" aria-label="Hero section">
      <div class="hero-bg" role="presentation"></div>
      <div id="hero-particles" class="hero-particles" aria-hidden="true"></div>

      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-badge">
            <div class="hero-badge-dot"></div>
            Available for freelance work
          </div>

          <h1 class="hero-name">
            <span class="hero-name-main">Mahesa</span>
            <span class="hero-name-glow">Tirtha</span>
          </h1>

          <p class="hero-title typing-cursor">
            <span id="hero-typing">Mechatronics Engineer</span>
          </p>

          <p class="hero-description">
            I build end-to-end systems from <span style="color:var(--gold-soft)">sensor</span> to
            <span style="color:var(--purple-glow)">cloud</span> to
            <span style="color:var(--gold-soft)">dashboard</span> — focused on robotics,
            automation, instrumentation, and practical smart systems.
          </p>

          <div class="hero-actions">
            <a href="#github" class="btn-primary" id="hero-view-work">
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
            <a href="#contact" class="btn-secondary" id="hero-connect">
              Let's Connect
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.4 2.16l-1.7 1.7a16 16 0 009.76 9.77l1.7-1.7a2 2 0 012.16-.4c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </a>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number" id="stat-exp" data-count="4" data-suffix="+">0+</div>
              <div class="stat-label">Years Active</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" id="stat-companies" data-count="3" data-suffix="">0</div>
              <div class="stat-label">Internships</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" id="stat-domains" data-count="5" data-suffix="+">0+</div>
              <div class="stat-label">Tech Domains</div>
            </div>
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="hero-rose-wrap">
            <div class="hero-rose-ring hero-rose-ring-1"></div>
            <div class="hero-rose-ring hero-rose-ring-2"></div>
            <div class="hero-rose-ring hero-rose-ring-3"></div>
            <div class="hero-rose-glow"></div>
            <img src="./assets/rose.svg" alt="Mechanical Rose" class="hero-rose-img" />
          </div>
        </div>
      </div>

      <div class="hero-scroll" aria-hidden="true">
        <span class="scroll-text">Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <div class="divider"></div>

    <section class="section about" id="about" aria-labelledby="about-title">
      <div class="container">
        <div class="about-grid">
          <div class="reveal">
            <p class="section-label">Who I Am</p>
            <h2 id="about-title" class="section-title">Building Smart Systems<br />From the Ground Up</h2>
            <div class="about-text">
              <p>
                I'm <span>Mahesa Tirtha Agung Permana</span>, a <span>Mechatronics & IoT Engineer</span>
                based in Indonesia. I design and build end-to-end systems that connect sensors,
                devices, cloud services, and dashboards into practical, usable solutions.
              </p>
              <p>
                I am currently studying <span>D4 Mechatronics, Robotics & Automation Engineering</span>
                at Politeknik Industri ATMI, and I am open to <span>paid freelance work</span> on projects
                where hardware, software, and real-world automation meet.
              </p>
              <p>
                My focus is on building connected systems from the physical layer to the digital layer —
                from instrumentation and smart devices to monitoring, control, and automation logic.
              </p>
            </div>

            <div class="about-skills">
              <p class="skill-label">Core Stack</p>
              <div class="skill-chips">
                <span class="skill-chip">Mechatronics</span>
                <span class="skill-chip">IoT Systems</span>
                <span class="skill-chip">Robotics</span>
                <span class="skill-chip">Automation</span>
                <span class="skill-chip">Sensors</span>
                <span class="skill-chip">Cloud Integration</span>
                <span class="skill-chip">Dashboarding</span>
                <span class="skill-chip">Embedded Systems</span>
              </div>
            </div>
          </div>

          <div class="reveal reveal-delay-2">
            <div class="about-card border-animated">
              <div class="about-card-avatar">MP</div>
              <div class="about-card-name">Mahesa Tirtha Agung Permana</div>
              <div class="about-card-title">// Mechatronics & IoT Engineer</div>

              <div class="about-card-info">
                <div class="about-info-item">
                  <svg class="about-info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Indonesia
                </div>
                <div class="about-info-item">
                  <svg class="about-info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.6 5.09.95 4.1 1.9A5.07 5.07 0 004 4.77 5.44 5.44 0 009.44 10c0 5.46 3.3 6.69 6.44 7A3.37 3.37 0 0116 19.13V22"/>
                  </svg>
                  <a href="https://github.com/Hessong888" target="_blank" rel="noopener" style="color:var(--purple-glow)">github.com/Hessong888</a>
                </div>
                <div class="about-info-item">
                  <svg class="about-info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                  <a href="https://www.linkedin.com/in/mahesa-tirtha-agung-permana" target="_blank" rel="noopener" style="color:var(--purple-glow)">linkedin.com/in/mahesa-tirtha-agung-permana</a>
                </div>
                <div class="about-info-item">
                  <svg class="about-info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                  Open to Remote & On-site
                </div>
              </div>

              <div class="about-card-divider"></div>

              <div class="about-social-links">
                <a href="https://github.com/Hessong888" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.6 5.09.95 4.1 1.9A5.07 5.07 0 004 4.77 5.44 5.44 0 009.44 10c0 5.46 3.3 6.69 6.44 7A3.37 3.37 0 0116 19.13V22"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/mahesa-tirtha-agung-permana" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://vercel.com/865tirthas-projects" target="_blank" rel="noopener" class="social-link" aria-label="Vercel Projects">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <section class="section github" id="github" aria-labelledby="github-title">
      <div class="container">
        <p class="section-label reveal">Code Repository</p>
        <h2 id="github-title" class="section-title reveal reveal-delay-1">Open Source<br />& Projects</h2>
        <p class="section-subtitle reveal reveal-delay-2">
          Live-synced from GitHub. Each project reflects a piece of the larger vision — connected hardware,
          automation logic, and software experiments turned into practical tools.
        </p>

        <div class="github-profile-banner reveal">
          <div class="github-avatar" id="github-avatar"></div>
          <div class="github-profile-info">
            <div class="github-profile-name" id="github-name">Mahesa Tirtha Agung Permana</div>
            <div class="github-profile-handle" id="github-handle">@Hessong888</div>
            <div class="github-profile-bio" id="github-bio">
              Mechatronics & IoT Engineer · Indonesia
            </div>
            <div style="display:flex; gap:24px; margin-top:12px;">
              <span style="font-family:var(--font-mono);font-size:0.78rem;color:var(--gray-400);">
                <span id="github-followers" style="color:var(--gold);font-weight:700">—</span>
                <span style="margin-left:4px;">followers</span>
              </span>
              <span style="font-family:var(--font-mono);font-size:0.78rem;color:var(--gray-400);">
                <span id="github-following" style="color:var(--gold);font-weight:700">—</span>
                <span style="margin-left:4px;">following</span>
              </span>
              <span style="font-family:var(--font-mono);font-size:0.78rem;color:var(--gray-400);">
                <span id="github-public-repos" style="color:var(--gold);font-weight:700">—</span>
                <span style="margin-left:4px;">public repos</span>
              </span>
            </div>
          </div>
          <a href="https://github.com/Hessong888" target="_blank" rel="noopener" class="github-profile-link" id="github-profile-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.6 5.09.95 4.1 1.9A5.07 5.07 0 004 4.77 5.44 5.44 0 009.44 10c0 5.46 3.3 6.69 6.44 7A3.37 3.37 0 0116 19.13V22"/>
            </svg>
            View on GitHub
          </a>
        </div>

        <div class="repo-grid stagger" id="repo-grid">
          <div class="repo-card shimmer" style="height:180px;"></div>
          <div class="repo-card shimmer" style="height:180px;"></div>
          <div class="repo-card shimmer" style="height:180px;"></div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <section class="section experience" id="experience" aria-labelledby="experience-title">
      <div class="container">
        <p class="section-label reveal">Field Experience</p>
        <h2 id="experience-title" class="section-title reveal reveal-delay-1">Career Path<br />& Internships</h2>
        <p class="section-subtitle reveal reveal-delay-2">
          A practical journey through production, procurement, and technical support — each role shaped by
          hands-on learning in real industrial settings.
        </p>

        <div class="timeline stagger">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="timeline-header">
                <div class="timeline-role">Vocational Internship (PKL) — Quality Control</div>
                <span class="timeline-period">2022 — 2023</span>
              </div>
              <div class="timeline-company">PT. Abacus Kencana Industries</div>
              <p class="timeline-desc">
                Conducted quality inspection and process validation for industrial manufacturing operations.
                Applied systematic inspection protocols, documented non-conformances, and collaborated
                cross-functionally to drive corrective actions and improve production quality standards.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">Quality Control</span>
                <span class="timeline-tag">Inspection</span>
                <span class="timeline-tag">Process Improvement</span>
                <span class="timeline-tag">Manufacturing</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="timeline-header">
                <div class="timeline-role">Vocational Internship (PKL) — Purchasing</div>
                <span class="timeline-period">2022</span>
              </div>
              <div class="timeline-company">PT. SGMW Motor Indonesia</div>
              <p class="timeline-desc">
                Managed procurement and purchasing operations within an automotive manufacturing environment.
                Coordinated with suppliers, tracked purchase orders, maintained inventory accuracy, and ensured
                timely delivery of components to support production line continuity.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">Purchasing</span>
                <span class="timeline-tag">Procurement</span>
                <span class="timeline-tag">Inventory</span>
                <span class="timeline-tag">Supply Chain</span>
                <span class="timeline-tag">Automotive</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="timeline-header">
                <div class="timeline-role">Vocational Internship (PKL) — IT Support</div>
                <span class="timeline-period">2021 — 2022</span>
              </div>
              <div class="timeline-company">PT. Trimitra Chitrahasta</div>
              <p class="timeline-desc">
                Provided technical infrastructure support, networking maintenance, and hardware troubleshooting to ensure
                operational continuity within the organization.
              </p>
              <div class="timeline-tags">
                <span class="timeline-tag">IT Infrastructure</span>
                <span class="timeline-tag">Networking</span>
                <span class="timeline-tag">Technical Support</span>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-top: 72px;">
          <p class="section-label reveal">Education</p>
          <div class="education-grid stagger">
            <div class="education-card">
              <div class="education-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div class="education-degree">D4 — Teknologi Rekayasa Mekatronika</div>
              <div class="education-school">Politeknik Industri ATMI Cikarang</div>
              <div class="education-year">Applied Mechatronic Engineering · Cikarang, Indonesia</div>
            </div>

            <div class="education-card">
              <div class="education-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <div class="education-degree">Elektronika Industri</div>
              <div class="education-school">SMK Ananda Mitra Industri Deltamas</div>
              <div class="education-year">Industrial Electronics · Deltamas, Cikarang</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <section class="section playground" id="playground" aria-labelledby="playground-title">
      <div class="container">
        <p class="section-label reveal">Interactive Playground</p>
        <h2 id="playground-title" class="section-title reveal reveal-delay-1">Live Projects<br />&amp; Games</h2>
        <p class="section-subtitle reveal reveal-delay-2">
          Deployed experiments and interactive experiences. Click any card to launch the live app directly from Vercel.
        </p>

        <div class="playground-carousel-wrap reveal">
          <div class="playground-carousel" id="playground-carousel">
            <div class="playground-card">
              <div class="playground-preview" style="background: linear-gradient(135deg, #2d1a0a, #4a2a10);">
                <div class="playground-preview-glow" style="background: radial-gradient(circle at center, rgba(245,158,11,0.2), transparent 70%);"></div>
                <div class="playground-preview-emoji">🍜</div>
                <span class="playground-label">Crafting Game</span>
              </div>
              <div class="playground-body">
                <div class="playground-title">Nusantara Culinary Alchemist</div>
                <div class="playground-desc">
                  A web-based culinary crafting game that celebrates the rich flavors of Nusantara.
                  Combine ingredients, discover traditional recipes, and unlock the secrets of Indonesian cuisine.
                </div>
                <div class="playground-tech">
                  <span class="playground-tech-tag">Next.js</span>
                  <span class="playground-tech-tag">React</span>
                  <span class="playground-tech-tag">TypeScript</span>
                  <span class="playground-tech-tag">Vercel</span>
                </div>
                <a href="https://nusantara-alchemist.vercel.app/" target="_blank" rel="noopener" class="playground-link" id="project-nusantara-link">
                  Play Now
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              </div>
            </div>

            <div class="playground-card">
              <div class="playground-preview">
                <div class="playground-preview-glow"></div>
                <div class="playground-preview-emoji">🔮</div>
                <span class="playground-label">Coming Soon</span>
              </div>
              <div class="playground-body">
                <div class="playground-title">Project Unlocked Soon</div>
                <div class="playground-desc">
                  The next experiment is being architected. Built on the same philosophy — systems that think,
                  adapt, and surprise. Stay tuned.
                </div>
                <div class="playground-tech">
                  <span class="playground-tech-tag">In Development</span>
                  <span class="playground-tech-tag">LLM</span>
                  <span class="playground-tech-tag">Vercel</span>
                </div>
                <a href="https://vercel.com/865tirthas-projects" target="_blank" rel="noopener" class="playground-link" id="project-soon-link">
                  View All Projects
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-controls reveal">
          <button class="carousel-btn" id="carousel-prev" aria-label="Previous project">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div class="carousel-dots" id="carousel-dots"></div>
          <button class="carousel-btn" id="carousel-next" aria-label="Next project">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <section class="section contact" id="contact" aria-labelledby="contact-title">
      <div class="container">
        <p class="section-label reveal">Get In Touch</p>
        <h2 id="contact-title" class="section-title reveal reveal-delay-1">Let's Build<br />Something Real</h2>

        <div class="contact-grid">
          <div class="reveal reveal-delay-1">
            <p style="font-size:1rem; color:var(--gray-400); line-height:1.8; margin-bottom:32px;">
              Whether you're planning a smart hardware project, an IoT platform, a robotics prototype,
              or a custom automation workflow, I'm open to well-scoped freelance work and technical collaboration.
            </p>

            <div class="contact-links">
              <a href="https://github.com/Hessong888" target="_blank" rel="noopener" class="contact-link" id="contact-github">
                <div class="contact-link-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.6 5.09.95 4.1 1.9A5.07 5.07 0 004 4.77 5.44 5.44 0 009.44 10c0 5.46 3.3 6.69 6.44 7A3.37 3.37 0 0116 19.13V22"/>
                  </svg>
                </div>
                <div class="contact-link-info">
                  <div class="contact-link-label">GitHub</div>
                  <div class="contact-link-value">github.com/Hessong888</div>
                </div>
                <div class="contact-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/mahesa-tirtha-agung-permana" target="_blank" rel="noopener" class="contact-link" id="contact-linkedin">
                <div class="contact-link-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div class="contact-link-info">
                  <div class="contact-link-label">LinkedIn</div>
                  <div class="contact-link-value">linkedin.com/in/mahesa-tirtha-agung-permana</div>
                </div>
                <div class="contact-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
              </a>

              <a href="https://vercel.com/865tirthas-projects" target="_blank" rel="noopener" class="contact-link" id="contact-vercel">
                <div class="contact-link-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
                  </svg>
                </div>
                <div class="contact-link-info">
                  <div class="contact-link-label">Vercel Deployments</div>
                  <div class="contact-link-value">vercel.com/865tirthas-projects</div>
                </div>
                <div class="contact-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div class="reveal reveal-delay-2">
            <div class="contact-card">
              <img src="./assets/rose.svg" alt="Mechanical Rose" class="contact-rose" />
              <div class="contact-card-title">Open for<br />Opportunities</div>
              <p class="contact-card-desc">
                Freelance contracts, project collaboration, open-source experimentation, or a technical conversation.
                If you're building something real, let's talk.
              </p>
              <a href="https://www.linkedin.com/in/mahesa-tirtha-agung-permana" target="_blank" rel="noopener" class="btn-primary" id="contact-cta-btn" style="display:inline-flex; justify-content:center;">
                Connect on LinkedIn
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer" role="contentinfo">
    <div class="footer-logo">Mahesa<span style="color:var(--gold)">.</span></div>
    <div class="footer-copy">
      &copy; <span id="footer-year">2026</span> Mahesa Tirtha Agung Permana · Crafted with precision &amp; 🌹
    </div>
    <img src="./assets/rose.svg" alt="Rose" class="footer-rose" aria-hidden="true" />
  </footer>

  <script type="module">
    import { PORTFOLIO_CONFIG } from './js/config.js';

    const footerYear = document.getElementById('footer-year');
    if (footerYear) {
      footerYear.textContent = new Date().getFullYear() || '2026';
    }

    document.querySelectorAll('[data-social-link]').forEach((el) => {
      const key = el.dataset.socialLink;
      if (PORTFOLIO_CONFIG.socialLinks[key]) {
        el.href = PORTFOLIO_CONFIG.socialLinks[key];
      }
    });
  </script>
  <script type="module" src="./js/main.js"></script>
</body>
</html>
