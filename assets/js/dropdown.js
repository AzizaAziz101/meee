    const button = document.getElementById('menu-button');
    const menu = document.getElementById('dropdown-menu');
    const icon = button.querySelector('svg');

    button.addEventListener('click', () => {
      const isHidden = menu.classList.contains('hidden');
      menu.classList.toggle('hidden', !isHidden);
      menu.classList.toggle('opacity-100', isHidden);
      menu.classList.toggle('scale-100', isHidden);
      menu.classList.toggle('opacity-0', !isHidden);
      menu.classList.toggle('scale-95', !isHidden);
      button.setAttribute('aria-expanded', isHidden);
      icon.classList.toggle('rotate-180', isHidden);
    });

    document.addEventListener('click', (e) => {
      if (!button.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden', 'opacity-0', 'scale-95');
        menu.classList.remove('opacity-100', 'scale-100');
        button.setAttribute('aria-expanded', false);
        icon.classList.remove('rotate-180');
      }
    });