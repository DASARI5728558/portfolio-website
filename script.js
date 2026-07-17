/* ============================================================
   Dasari Ram Prasad — Premium Portfolio interactions
   ============================================================ */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  /* ── Loader ── */
  const loader = document.getElementById('loader');
  const loaderFill = document.getElementById('loaderFill');
  let pct = 0;
  const loadTimer = setInterval(() => {
    pct = Math.min(100, pct + Math.random() * 22);
    if (loaderFill) loaderFill.style.width = pct + '%';
    if (pct >= 100) {
      clearInterval(loadTimer);
      setTimeout(() => loader && loader.classList.add('done'), 250);
    }
  }, 140);
  window.addEventListener('load', () => {
    setTimeout(() => loader && loader.classList.add('done'), 600);
  });

  /* ── Cursor glow (desktop only) ── */
  const cursorGlow = document.getElementById('cursorGlow');
  const cursorDot = document.getElementById('cursorDot');
  if (!isTouch && cursorGlow && cursorDot) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }, { passive: true });
  }

  /* ── Particle canvas (hero background) ── */
  const canvas = document.getElementById('particles');
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h, raf;

    function resize() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }

    function initParticles() {
      const count = Math.min(70, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 1.6 + 0.5) * devicePixelRatio,
        vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        hue: Math.random() > 0.5 ? '79,124,255' : (Math.random() > 0.5 ? '168,85,247' : '34,211,238'),
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, 0.55)`;
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    }

    resize();
    initParticles();
    tick();
    window.addEventListener('resize', () => { resize(); initParticles(); }, { passive: true });
  }

  /* ── Navbar scroll state + mobile toggle ── */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinksWrap = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  if (navToggle && navLinksWrap) {
    navToggle.addEventListener('click', () => {
      const open = navLinksWrap.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      navLinksWrap.style.display = open ? 'flex' : '';
    });
    navLinksWrap.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      navLinksWrap.classList.remove('open');
      navLinksWrap.style.display = '';
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ── Scrollspy for nav links ── */
  const navAnchors = Array.from(document.querySelectorAll('.nav-links a[data-nav]'));
  const spySections = navAnchors
    .map((a) => document.getElementById(a.dataset.nav))
    .filter(Boolean);

  if ('IntersectionObserver' in window && spySections.length) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navAnchors.forEach((a) => a.classList.toggle('active', a.dataset.nav === entry.target.id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    spySections.forEach((s) => spyObserver.observe(s));
  }

  /* ── Scroll reveal ── */
  const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  /* ── Animated counters ── */
  const counters = Array.from(document.querySelectorAll('.stat-number'));
  if ('IntersectionObserver' in window && counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10) || 0;
        const suffix = el.dataset.suffix || '';
        const duration = 1400;
        const start = performance.now();
        function step(now) {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach((el) => counterObserver.observe(el));
  }

  /* ── 3D tilt on project cards ── */
  if (!isTouch && !reduceMotion) {
    document.querySelectorAll('.tilt').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)';
      });
    });
  }

  /* ── Testimonial carousel ── */
  const slidesWrap = document.getElementById('testimonialSlides');
  const dotsWrap = document.getElementById('testimonialDots');
  if (slidesWrap && dotsWrap) {
    const slides = Array.from(slidesWrap.children);
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', `Show testimonial ${i + 1}`);
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);
    let current = 0;
    let timer;

    function goTo(i) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }

    function autoplay() {
      timer = setInterval(() => goTo(current + 1), 5500);
    }
    if (!reduceMotion) autoplay();

    dotsWrap.addEventListener('click', () => {
      if (timer) { clearInterval(timer); if (!reduceMotion) autoplay(); }
    });
  }

  /* ── Certificate modal ── */
  const certButtons = Array.from(document.querySelectorAll('.cert-card'));
  const certModal = document.getElementById('certModal');
  const certModalImg = document.getElementById('certModalImg');
  const certModalTitle = document.getElementById('certModalTitle');
  const certModalMeta = document.getElementById('certModalMeta');
  let lastFocused = null;

  function openCertModal(btn) {
    if (!certModal) return;
    lastFocused = document.activeElement;
    certModalImg.src = btn.dataset.certImg || '';
    certModalImg.alt = btn.dataset.certTitle || 'Certificate';
    certModalTitle.textContent = btn.dataset.certTitle || '';
    certModalMeta.textContent = `${btn.dataset.certIssuer || ''} · ${btn.dataset.certDate || ''}`;
    certModal.hidden = false;
    document.body.style.overflow = 'hidden';
    certModal.querySelector('.modal-close').focus();
  }
  function closeCertModal() {
    if (!certModal) return;
    certModal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  certButtons.forEach((btn) => btn.addEventListener('click', () => openCertModal(btn)));
  document.querySelectorAll('[data-close-modal]').forEach((el) => el.addEventListener('click', closeCertModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal && !certModal.hidden) closeCertModal();
  });

  /* ── Contact form (client-side validation only) ── */
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  if (form && formNote) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        formNote.textContent = 'Please fill in all fields with a valid email.';
        formNote.className = 'form-note error';
        return;
      }
      formNote.textContent = 'Message ready — connect a backend (e.g. Formspree) to actually send it.';
      formNote.className = 'form-note success';
      form.reset();
    });
  }

})();
