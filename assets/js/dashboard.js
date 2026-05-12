// Dashboard — Main JS
// Progress bar, sidebar toggle, active nav, heading anchors, copy buttons

(function () {
  'use strict';

  // ── Reading progress ──────────────────────────────────────────────────────
  const bar = document.querySelector('.dash-progress');
  if (bar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = docH > 0 ? (scrollTop / docH * 100) + '%' : '0%';
    }, { passive: true });
  }

  // ── Sidebar toggle (mobile) ───────────────────────────────────────────────
  const toggle = document.querySelector('.dash-topbar__toggle');
  const sidebar = document.querySelector('.dash-sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }

  // ── Active sidebar link ───────────────────────────────────────────────────
  const path = window.location.pathname;
  document.querySelectorAll('.dash-sidebar__link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path.startsWith(href) && href !== '/')) {
      a.classList.add('active');
    }
  });
  document.querySelectorAll('.dash-topbar__menu a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // ── Clock in taskbar ──────────────────────────────────────────────────────
  const clock = document.getElementById('dash-clock');
  if (clock) {
    function updateClock() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      clock.textContent = h + ':' + m;
    }
    updateClock();
    setInterval(updateClock, 30000);
  }

  // ── Heading anchors ───────────────────────────────────────────────────────
  document.querySelectorAll('.post-body h2, .post-body h3').forEach(h => {
    if (!h.id) return;
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.className = 'anchor';
    a.setAttribute('aria-hidden', 'true');
    a.textContent = '#';
    h.appendChild(a);
  });

  // ── Copy code ─────────────────────────────────────────────────────────────
  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.textContent = 'Copy';
    btn.style.cssText = [
      'position:absolute', 'top:6px', 'right:10px',
      'font-family:inherit', 'font-size:0.65rem', 'font-weight:600',
      'background:rgba(56,139,253,0.15)', 'color:#388bfd',
      'border:1px solid rgba(56,139,253,0.3)', 'border-radius:4px',
      'padding:0.2rem 0.5rem', 'cursor:pointer', 'letter-spacing:0.05em'
    ].join(';');
    pre.appendChild(btn);
    btn.addEventListener('click', () => {
      const code = pre.querySelector('code');
      navigator.clipboard.writeText(code ? code.textContent : pre.textContent).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      });
    });
  });
})();
