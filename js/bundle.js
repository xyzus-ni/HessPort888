// ============================================================
//  CYBER-BOTANICAL PORTFOLIO — Bundled Script (No ES Modules)
//  bundle.js — All JS in one file, works with file:// protocol
// ============================================================

// ── LOADER ──────────────────────────────────────────────────
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => { loader.classList.add('hidden'); }, 1600);
}

// ── CUSTOM CURSOR ────────────────────────────────────────────
function initCursor() {
  const cursorDot  = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  if (!cursorDot || !cursorRing) return;
  if (window.matchMedia('(pointer: coarse)').matches) {
    document.body.style.cursor = 'auto';
    return;
  }

  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  (function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  })();

  const interactives = 'a, button, .glass-card, .repo-card, .playground-card, .timeline-card, .contact-link, .skill-chip, .social-link, .carousel-btn, .carousel-dot';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactives)) {
      cursorDot.style.width  = '12px';
      cursorDot.style.height = '12px';
      cursorDot.style.background = 'var(--purple-glow)';
      cursorRing.classList.add('hovered');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactives)) {
      cursorDot.style.width  = '8px';
      cursorDot.style.height = '8px';
      cursorDot.style.background = 'var(--gold)';
      cursorRing.classList.remove('hovered');
    }
  });
}

// ── PARTICLES ────────────────────────────────────────────────
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  const colors = [
    'rgba(124,58,237,0.6)', 'rgba(168,85,247,0.4)',
    'rgba(245,158,11,0.4)', 'rgba(251,191,36,0.3)', 'rgba(255,255,255,0.2)'
  ];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size  = Math.random() * 4 + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = `
      width:${size}px; height:${size}px; background:${color};
      left:${Math.random()*100}%; top:${Math.random()*100}%;
      --duration:${(Math.random()*8+4).toFixed(1)}s;
      --delay:${(Math.random()*6).toFixed(1)}s;
      --opacity-start:${(Math.random()*0.3+0.1).toFixed(2)};
      --opacity-end:${(Math.random()*0.5+0.3).toFixed(2)};
      box-shadow:0 0 ${size*3}px ${color};
    `;
    container.appendChild(p);
  }
}

// ── PARALLAX ─────────────────────────────────────────────────
function initParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ── NAV ──────────────────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
  }
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay   = document.getElementById('mobile-nav-overlay');
  const closeBtn  = document.getElementById('mobile-nav-close');

  function openMobileNav()  { mobileNav?.classList.add('open'); overlay?.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeMobileNav() { mobileNav?.classList.remove('open'); overlay?.classList.remove('open'); document.body.style.overflow = ''; }

  hamburger?.addEventListener('click', openMobileNav);
  closeBtn?.addEventListener('click', closeMobileNav);
  overlay?.addEventListener('click', closeMobileNav);
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));
}

// ── TYPING EFFECT ────────────────────────────────────────────
function initTyping() {
  const el = document.getElementById('hero-typing');
  if (!el) return;
  const phrases = [
    'Mechatronic Engineer', 'IT Support Specialist', 'Quality Control Expert',
    'Prompt Engineer', 'Web3 Builder', 'Game Developer'
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false, paused = false;

  function type() {
    if (paused) return;
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      el.textContent = phrase.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === phrase.length) {
        paused = true;
        setTimeout(() => { deleting = true; paused = false; type(); }, 2200);
        return;
      }
      setTimeout(type, 65);
    } else {
      el.textContent = phrase.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
      setTimeout(type, 38);
    }
  }
  setTimeout(type, 1400);
}

// ── SCROLL REVEAL ────────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        if (!entry.target.classList.contains('stagger')) observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .stagger').forEach(el => observer.observe(el));
  window.observeReveal = el => observer.observe(el);
}

// ── COUNTERS ─────────────────────────────────────────────────
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const start  = performance.now();
      const dur    = 1500;
      (function update(now) {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if (p < 1) requestAnimationFrame(update);
      })(start);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(c => obs.observe(c));
}

// ── CAROUSEL ─────────────────────────────────────────────────
function initCarousel() {
  const carousel = document.getElementById('playground-carousel');
  const prevBtn  = document.getElementById('carousel-prev');
  const nextBtn  = document.getElementById('carousel-next');
  const dotsWrap = document.getElementById('carousel-dots');
  if (!carousel) return;

  const cards = carousel.querySelectorAll('.playground-card');
  if (cards.length === 0) return;

  let current = 0;
  const gap = 24;

  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap?.appendChild(dot);
  });

  function getW() { return cards[0].getBoundingClientRect().width + gap; }

  function goTo(idx) {
    current = Math.max(0, Math.min(idx, cards.length - 1));
    carousel.style.transform = `translateX(-${current * getW()}px)`;
    dotsWrap?.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  prevBtn?.addEventListener('click', () => goTo(current - 1));
  nextBtn?.addEventListener('click', () => goTo(current + 1));

  let auto = setInterval(() => goTo((current + 1) % cards.length), 5000);
  carousel.addEventListener('mouseenter', () => clearInterval(auto));
  carousel.addEventListener('mouseleave', () => { auto = setInterval(() => goTo((current + 1) % cards.length), 5000); });

  let startX = 0;
  carousel.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (dx < -40) goTo(current + 1);
    if (dx >  40) goTo(current - 1);
  });
  window.addEventListener('resize', () => goTo(current));
}

// ── GITHUB API ───────────────────────────────────────────────
const GITHUB_USERNAME = 'Hessong888';
const LANG_COLORS = {
  JavaScript:'#f7df1e', TypeScript:'#3178c6', Python:'#3572A5',
  'C++':'#f34b7d', C:'#555555', Rust:'#dea584', Go:'#00ADD8',
  HTML:'#e34c26', CSS:'#563d7c', Shell:'#89e051', Solidity:'#AA6746',
  default:'#7c3aed'
};

async function initGitHub() {
  // Fetch profile
  try {
    const r = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (r.ok) {
      const p = await r.json();
      const avatarEl = document.getElementById('github-avatar');
      if (avatarEl && p.avatar_url) {
        const img = document.createElement('img');
        img.src = p.avatar_url; img.alt = p.login;
        avatarEl.appendChild(img);
      }
      const n = document.getElementById('github-name');
      const h = document.getElementById('github-handle');
      const b = document.getElementById('github-bio');
      const fl = document.getElementById('github-followers');
      const fg = document.getElementById('github-following');
      const rp = document.getElementById('github-public-repos');
      if (n)  n.textContent  = p.name || p.login;
      if (h)  h.textContent  = `@${p.login}`;
      if (b)  b.textContent  = p.bio || 'Mechatronic Engineer & Prompt Engineer · Cikarang, Indonesia';
      if (fl) fl.textContent = (p.followers || 0).toLocaleString();
      if (fg) fg.textContent = (p.following || 0).toLocaleString();
      if (rp) rp.textContent = (p.public_repos || 0).toLocaleString();
    }
  } catch(e) { console.warn('GitHub profile error', e); }

  // Fetch repos
  const grid = document.getElementById('repo-grid');
  if (!grid) return;
  try {
    const r = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);
    const repos = r.ok ? await r.json() : [];
    if (!repos || repos.length === 0) {
      grid.innerHTML = `
        <div class="repos-empty reveal">
          <div class="repos-empty-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div class="repos-empty-title">Repositories Loading Soon™</div>
          <div class="repos-empty-desc">
            Proyek sedang di-architect dalam mode stealth.<br>
            Follow profil untuk notifikasi saat kode dirilis. 🌹
          </div>
          <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" rel="noopener"
             class="btn-secondary" style="display:inline-flex;margin-top:20px;">
            Follow on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>`;
    } else {
      grid.innerHTML = repos.map(repo => {
        const color = LANG_COLORS[repo.language] || LANG_COLORS.default;
        const desc  = (repo.description || 'No description.').slice(0, 100);
        return `
          <a href="${repo.html_url}" target="_blank" rel="noopener" class="repo-card reveal">
            <div style="display:flex;align-items:center;gap:12px;">
              <div class="repo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <span class="repo-name">${repo.name}</span>
            </div>
            <p class="repo-desc">${desc}</p>
            <div class="repo-footer">
              <div class="repo-lang">
                ${repo.language ? `<span class="lang-dot" style="background:${color}"></span><span>${repo.language}</span>` : '<span style="color:var(--gray-600)">—</span>'}
              </div>
              <div class="repo-stats">
                <span class="repo-stat">⭐ ${repo.stargazers_count}</span>
                <span class="repo-stat">🍴 ${repo.forks_count}</span>
              </div>
            </div>
          </a>`;
      }).join('');
    }
  } catch(e) {
    grid.innerHTML = '<div class="repos-empty reveal"><div class="repos-empty-title">Could not load repositories</div></div>';
    console.warn('GitHub repos error', e);
  }

  document.querySelectorAll('.reveal').forEach(el => {
    if (window.observeReveal) window.observeReveal(el);
  });
}

// ── BOOTSTRAP ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initParticles();
  initParallax();
  initNav();
  initTyping();
  initCounters();
  initCarousel();
  setTimeout(() => {
    initScrollReveal();
    initGitHub();
  }, 100);
});
