// ============================================================
//  CYBER-BOTANICAL PORTFOLIO — Main Entry Point
//  main.js
// ============================================================

import { initCursor }                                        from './cursor.js';
import { initParticles, initScrollReveal, initParallax,
         initNav, initCarousel, initCounters,
         initTyping, initLoader }                            from './animations.js';
import { initGitHub }                                        from './github.js';

// ── BOOTSTRAP ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  initLoader();
  initCursor();
  initParticles();
  initParallax();
  initNav();
  initTyping();
  initCounters();
  initCarousel();

  // Defer GitHub API call slightly so above UI renders first
  setTimeout(() => {
    initScrollReveal();
    initGitHub();
  }, 100);
});
