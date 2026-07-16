/* ============================================================
   Dasari Ram Prasad — Portfolio interactions
   ============================================================ */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Theme toggle ── */
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const STORAGE_KEY = 'drp-theme';

  const getStoredTheme = () => {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  };
  const storeTheme = (value) => {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* no-op */ }
  };

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    if (themeToggle) {
      const isLight = theme === 'light';
      themeToggle.setAttribute('aria-pressed', String(isLight));
      themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    }
  };

  const initialTheme = getStoredTheme()
    || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(next);
      storeTheme(next);
    });
  }

  /* ── Terminal typing effect ── */
  const terminalBody = document.getElementById('terminalBody');

  const script = [
    { type: 'cmd', text: '$ whoami' },
    { type: 'out', text: 'dasari-ram-prasad' },
    { type: 'cmd', text: '$ cat role.txt' },
    { type: 'out', text: 'Aspiring DevOps & Cloud Engineer' },
    { type: 'cmd', text: '$ terraform apply' },
    { type: 'out', text: 'Plan: 12 to add, 0 to change, 0 to destroy.' },
    { type: 'ok', text: 'Apply complete! Resources: 12 added, 0 changed, 0 destroyed.' },
    { type: 'cmd', text: '$ kubectl rollout status deploy/portfolio' },
    { type: 'ok', text: 'deployment "portfolio" successfully rolled out' },
    { type: 'cmd', text: '$ echo $STATUS' },
    { type: 'amber', text: 'available for opportunities ✓' },
  ];

  const escapeHtml = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

  function renderStatic() {
    if (!terminalBody) return;
    const html = script.map((line) => {
      const cls = line.type === 'cmd' ? 'cmd' : line.type === 'ok' ? 'ok' : line.type === 'amber' ? 'amber' : '';
      return `<span class="${cls}">${escapeHtml(line.text)}</span>`;
    }).join('\n');
    terminalBody.innerHTML = html;
  }

  function typeTerminal() {
    if (!terminalBody) return;
    let lineIndex = 0;
    let charIndex = 0;
    terminalBody.innerHTML = '';

    const cursor = document.createElement('span');
    cursor.className = 'cursor';

    function typeChar() {
      if (lineIndex >= script.length) {
        terminalBody.appendChild(cursor);
        return;
      }
      const line = script[lineIndex];
      const cls = line.type === 'cmd' ? 'cmd' : line.type === 'ok' ? 'ok' : line.type === 'amber' ? 'amber' : '';

      if (charIndex === 0) {
        const span = document.createElement('span');
        span.className = cls;
        span.dataset.lineIndex = String(lineIndex);
        terminalBody.appendChild(span);
      }

      const currentSpan = terminalBody.querySelector(`span[data-line-index="${lineIndex}"]`);
      if (currentSpan) currentSpan.textContent = line.text.slice(0, charIndex + 1);

      charIndex += 1;

      if (charIndex >= line.text.length) {
        terminalBody.appendChild(document.createTextNode('\n'));
        lineIndex += 1;
        charIndex = 0;
        setTimeout(typeChar, line.type === 'cmd' ? 380 : 90);
      } else {
        const speed = line.type === 'cmd' ? 32 : 14;
        setTimeout(typeChar, speed);
      }
    }

    typeChar();
  }

  if (reduceMotion) {
    renderStatic();
  } else {
    typeTerminal();
  }

  /* ── Pipeline scrollspy ── */
  const stageLinks = Array.from(document.querySelectorAll('.stage-link'));
  const sections = stageLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  const pipelineFill = document.getElementById('pipelineFill');

  function setActiveStage(id) {
    stageLinks.forEach((link) => {
      const match = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', match);
      if (match) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveStage(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  function updatePipelineFill() {
    if (!pipelineFill) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    pipelineFill.style.width = `${pct}%`;
  }
  updatePipelineFill();
  window.addEventListener('scroll', updatePipelineFill, { passive: true });
  window.addEventListener('resize', updatePipelineFill);

})();
