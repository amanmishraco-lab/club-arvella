/* Lightweight, dependency-free accessible dropdown navigation */
(() => {
  const nav = document.querySelector('.nav-links');
  const menuButton = document.querySelector('.menu-btn');
  if (!nav) return;

  const closeDropdowns = (except) => {
    nav.querySelectorAll('.nav-dropdown.is-open').forEach((item) => {
      if (item !== except) {
        item.classList.remove('is-open');
        item.querySelector('.nav-drop-trigger')?.setAttribute('aria-expanded', 'false');
      }
    });
  };

  nav.querySelectorAll('.nav-drop-trigger').forEach((button) => {
    button.addEventListener('click', () => {
      const wrapper = button.closest('.nav-dropdown');
      const willOpen = !wrapper.classList.contains('is-open');
      closeDropdowns(wrapper);
      wrapper.classList.toggle('is-open', willOpen);
      button.setAttribute('aria-expanded', String(willOpen));
    });
  });

  menuButton?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-mobile-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'CLOSE' : 'MENU';
    if (!isOpen) closeDropdowns();
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-links') && !event.target.closest('.menu-btn')) closeDropdowns();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeDropdowns();
      nav.classList.remove('is-mobile-open');
      menuButton?.setAttribute('aria-expanded', 'false');
      if (menuButton) menuButton.textContent = 'MENU';
    }
  });

  nav.querySelectorAll('.nav-mega a').forEach((link) => {
    link.addEventListener('click', () => {
      closeDropdowns();
      nav.classList.remove('is-mobile-open');
      menuButton?.setAttribute('aria-expanded', 'false');
      if (menuButton) menuButton.textContent = 'MENU';
    });
  });
})();
