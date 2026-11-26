(() => {
  'use strict';

  const menuToggle = document.querySelector('.menu-toggle');
  const headerNav = document.querySelector('.header-nav');

  if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      headerNav.classList.toggle('is-open', !isOpen);
    });

    headerNav.addEventListener('click', event => {
      if (event.target.closest('a')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        headerNav.classList.remove('is-open');
      }
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        menuToggle.setAttribute('aria-expanded', 'false');
        headerNav.classList.remove('is-open');
        menuToggle.focus();
      }
    });
  }

  document.querySelectorAll('.media-section').forEach(section => {
    const tabs = Array.from(section.querySelectorAll('[role="tab"]'));
    const panels = Array.from(section.querySelectorAll('[role="tabpanel"]'));
    if (!tabs.length || tabs.length !== panels.length) return;

    const selectTab = selectedIndex => {
      tabs.forEach((tab, index) => {
        const selected = index === selectedIndex;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        panels[index].hidden = !selected;
        if (!selected) {
          panels[index].querySelectorAll('video').forEach(video => video.pause());
        }
      });
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => selectTab(index));
      tab.addEventListener('keydown', event => {
        let nextIndex = index;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') nextIndex = 0;
        else if (event.key === 'End') nextIndex = tabs.length - 1;
        else return;
        event.preventDefault();
        selectTab(nextIndex);
        tabs[nextIndex].focus();
      });
    });

    let startX = null;
    let activePointer = null;
    const viewer = section.querySelector('.media-panels');
    viewer.addEventListener('pointerdown', event => {
      if (event.button !== 0 || event.target.closest('video, button, a')) return;
      startX = event.clientX;
      activePointer = event.pointerId;
      viewer.setPointerCapture(event.pointerId);
    });
    viewer.addEventListener('pointerup', event => {
      if (startX === null || event.pointerId !== activePointer) return;
      const deltaX = event.clientX - startX;
      startX = null;
      activePointer = null;
      if (Math.abs(deltaX) < 48) return;
      const activeIndex = tabs.findIndex(tab => tab.getAttribute('aria-selected') === 'true');
      const nextIndex = deltaX < 0
        ? Math.min(activeIndex + 1, tabs.length - 1)
        : Math.max(activeIndex - 1, 0);
      if (nextIndex !== activeIndex) selectTab(nextIndex);
    });
    viewer.addEventListener('pointercancel', () => {
      startX = null;
      activePointer = null;
    });
  });
})();
