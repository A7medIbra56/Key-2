'use client';

import { useEffect } from 'react';

const MobileMenuHandler = () => {
  useEffect(() => {
    const handleToggle = (e: MouseEvent) => {
      const toggle = (e.target as HTMLElement).closest('.elementor-menu-toggle');
      if (!toggle) return;

      const widgetContainer = toggle.closest('.elementor-widget-container');
      const dropdown = widgetContainer?.querySelector('.elementor-nav-menu--dropdown');

      if (dropdown) {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        
        // Toggle classes
        toggle.classList.toggle('elementor-active');
        dropdown.classList.toggle('elementor-active');
        
        // Update ARIA
        toggle.setAttribute('aria-expanded', (!isExpanded).toString());
        dropdown.setAttribute('aria-hidden', isExpanded.toString());
      }
    };

    document.addEventListener('click', handleToggle);
    return () => document.removeEventListener('click', handleToggle);
  }, []);

  return null;
};

export default MobileMenuHandler;
