// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Mobile Nav — единственный обработчик (onclick в HTML убран)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('mainNav');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('open');
  });
  // Закрыть при клике вне меню
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('open');
    }
  });
  // Закрыть при клике на ссылку в меню (мобайл)
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}

// Scroll-появление элементов
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.casino-card, .bonus-card, .step-card, .trust-item, .slot-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Копирование промокода
document.querySelectorAll('.promo-code').forEach(el => {
  el.style.cursor = 'pointer';
  el.title = 'Kopyalamak için tıkla';
  el.addEventListener('click', () => {
    const text = el.textContent.trim();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        const orig = el.textContent;
        el.textContent = '✓ Kopyalandı!';
        setTimeout(() => el.textContent = orig, 1500);
      }).catch(() => fallbackCopy(el, text));
    } else {
      fallbackCopy(el, text);
    }
  });
});

function fallbackCopy(el, text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  const orig = el.textContent;
  el.textContent = '✓ Kopyalandı!';
  setTimeout(() => el.textContent = orig, 1500);
}

// Sticky CTA после скролла
const stickyCta = document.querySelector('.sticky-cta');
if (stickyCta) {
  window.addEventListener('scroll', () => {
    const show = window.scrollY > 300;
    stickyCta.style.opacity = show ? '1' : '0';
    stickyCta.style.pointerEvents = show ? 'all' : 'none';
  }, { passive: true });
}

// ─── PREMIUM FEATURES ───────────────────────────

// 1. Scroll progress bar
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.prepend(progressBar);
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (window.scrollY / max * 100) + '%';
}, { passive: true });

// 2. Navbar scrolled class
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// 3. Анимация чисел в stats bar
function animateCounter(el) {
  const text = el.textContent.trim();
  const match = text.match(/^(\D*?)(\d[\d.,]*)(.*?)$/);
  if (!match) return;
  const [, prefix, numStr, suffix] = match;
  const target = parseFloat(numStr.replace(/[.,]/g, ''));
  if (isNaN(target) || target === 0) return;
  const duration = 1500;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const cur = Math.round(target * ease);
    el.textContent = prefix + (numStr.includes('.') ? cur.toLocaleString('tr-TR') : cur) + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = prefix + numStr + suffix;
  }
  requestAnimationFrame(tick);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(el => statsObserver.observe(el));

// 4. Lazy load images — добавить класс loaded после загрузки
document.querySelectorAll('img').forEach(img => {
  img.setAttribute('loading', 'lazy');
  if (img.complete) {
    img.classList.add('loaded');
  } else {
    img.addEventListener('load', () => img.classList.add('loaded'));
  }
});

// 5. Активный пункт меню по текущей странице
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});
