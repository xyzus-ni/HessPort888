// ============================================================
//  CYBER-BOTANICAL PORTFOLIO — Custom Cursor
//  cursor.js
// ============================================================

export function initCursor() {
  const cursorDot  = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  if (!cursorDot || !cursorRing) return;
  if (window.matchMedia('(pointer: coarse)').matches) {
    // Touch device — hide custom cursor and restore default
    document.body.style.cursor = 'auto';
    return;
  }

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  let raf;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    raf = requestAnimationFrame(animateRing);
  }

  animateRing();

  // Hover effect on interactive elements
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

  document.addEventListener('mousedown', () => {
    cursorDot.style.transform += ' scale(0.8)';
  });

  document.addEventListener('mouseup', () => {
    cursorDot.style.transform = cursorDot.style.transform.replace(' scale(0.8)', '');
  });
}
