// ============================================================
//  CYBER-BOTANICAL PORTFOLIO — Animations & Interactions
//  animations.js
// ============================================================

// ── PARTICLE SYSTEM ──────────────────────────────────────────
export function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const count = 40;
  const colors = [
    'rgba(124, 58, 237, 0.6)',
    'rgba(168, 85, 247, 0.4)',
    'rgba(245, 158, 11, 0.4)',
    'rgba(251, 191, 36, 0.3)',
    'rgba(255, 255, 255, 0.2)',
  ];

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const size  = Math.random() * 4 + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const x     = Math.random() * 100;
    const y     = Math.random() * 100;
    const dur   = (Math.random() * 8 + 4).toFixed(1);
    const delay = (Math.random() * 6).toFixed(1);

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${x}%;
      top: ${y}%;
      --duration: ${dur}s;
      --delay: ${delay}s;
      --opacity-start: ${(Math.random() * 0.3 + 0.1).toFixed(2)};
      --opacity-end:   ${(Math.random() * 0.5 + 0.3).toFixed(2)};
      box-shadow: 0 0 ${size * 3}px ${color};
    `;

    container.appendChild(p);
  }
}

// ── SCROLL REVEAL ────────────────────────────────────────────
export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          if (!entry.target.classList.contains('stagger')) {
            observer.unobserve(entry.target);
          }
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal, .stagger').forEach(el => observer.observe(el));

  // Export for dynamic content
  window.observeReveal = el => observer.observe(el);
}

// ── PARALLAX ─────────────────────────────────────────────────
export function initParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        heroBg.style.transform = `translateY(${y * 0.3}px)`;
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ── NAV SCROLL ───────────────────────────────────────────────
export function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Mobile nav
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay   = document.getElementById('mobile-nav-overlay');
  const closeBtn  = document.getElementById('mobile-nav-close');

  function openMobileNav() {
    mobileNav?.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openMobileNav);
  closeBtn?.addEventListener('click', closeMobileNav);
  overlay?.addEventListener('click', closeMobileNav);

  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMobileNav);
  });
}

// ── CAROUSEL ─────────────────────────────────────────────────
export function initCarousel() {
  const carousel = document.getElementById('playground-carousel');
  const prevBtn  = document.getElementById('carousel-prev');
  const nextBtn  = document.getElementById('carousel-next');
  const dotsWrap = document.getElementById('carousel-dots');

  if (!carousel) return;

  const cards = carousel.querySelectorAll('.playground-card');
  if (cards.length === 0) return;

  let current = 0;
  const gap    = 24;

  // Build dots
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `carousel-dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap?.appendChild(dot);
  });

  function getCardWidth() {
    return cards[0].getBoundingClientRect().width + gap;
  }

  function goTo(idx) {
    current = Math.max(0, Math.min(idx, cards.length - 1));
    carousel.style.transform = `translateX(-${current * getCardWidth()}px)`;
    dotsWrap?.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  prevBtn?.addEventListener('click', () => goTo(current - 1));
  nextBtn?.addEventListener('click', () => goTo(current + 1));

  // Auto-advance
  let autoplay = setInterval(() => goTo((current + 1) % cards.length), 5000);

  carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
  carousel.addEventListener('mouseleave', () => {
    autoplay = setInterval(() => goTo((current + 1) % cards.length), 5000);
  });

  // Touch/drag support
  let startX = 0;
  carousel.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (dx < -40) goTo(current + 1);
    if (dx >  40) goTo(current - 1);
  });

  window.addEventListener('resize', () => goTo(current));
}

// ── COUNTER ANIMATION ────────────────────────────────────────
export function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length === 0) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const dur    = 1500;
      const start  = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / dur, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
}

// ── TYPING EFFECT ─────────────────────────────────────────────
export function initTyping() {
  const el = document.getElementById('hero-typing');
  if (!el) return;

  const phrases = [
    'Web3 Prompt Engineer',
    'System Architect',
    'LLM Accelerator',
    'IoT Developer',
    'Computer Vision Builder',
  ];

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;
  let paused    = false;

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
      setTimeout(type, 60);
    } else {
      el.textContent = phrase.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting  = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
      setTimeout(type, 35);
    }
  }

  setTimeout(type, 1200);
}

// ── LOADER ────────────────────────────────────────────────────
export function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1600);
  });
}
