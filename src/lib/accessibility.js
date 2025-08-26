/**
 * Accessibility utilities for WCAG 2.2 AA compliance
 * Focuses on keyboard navigation, screen readers, and focus management
 */

// Skip to main content link
export const createSkipLink = () => {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-gray-900 focus:px-4 focus:py-2 focus:rounded focus:shadow-lg';
  
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Add main content ID if not present
  const mainContent = document.querySelector('main') || document.querySelector('#main-content');
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content';
  }
};

// Focus trap for modals and dropdowns
export const createFocusTrap = (element) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

// Announce changes to screen readers
export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Enhanced focus indicators
export const enhanceFocusIndicators = () => {
  const style = document.createElement('style');
  style.textContent = `
    .focus-visible:focus {
      outline: 2px solid var(--smdc-blue);
      outline-offset: 2px;
      border-radius: 4px;
    }
    
    .focus-visible:focus:not(.focus-visible) {
      outline: none;
    }
    
    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .focus-visible:focus {
        outline: 3px solid currentColor;
        outline-offset: 3px;
      }
    }
  `;
  
  document.head.appendChild(style);
};

// Keyboard navigation for custom components
export const makeKeyboardNavigable = (element, options = {}) => {
  const {
    onEnter = () => {},
    onSpace = () => {},
    onArrowKeys = () => {},
    role = 'button',
    tabIndex = 0
  } = options;
  
  element.setAttribute('role', role);
  element.setAttribute('tabindex', tabIndex);
  
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        onEnter();
        break;
      case ' ':
        e.preventDefault();
        onSpace();
        break;
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        e.preventDefault();
        onArrowKeys(e.key);
        break;
    }
  };
  
  element.addEventListener('keydown', handleKeyDown);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
};

// ARIA label management
export const setAriaLabel = (element, label, description = '') => {
  if (label) {
    element.setAttribute('aria-label', label);
  }
  
  if (description) {
    element.setAttribute('aria-describedby', description);
  }
};

// Form accessibility enhancements
export const enhanceFormAccessibility = (form) => {
  const inputs = form.querySelectorAll('input, textarea, select');
  
  inputs.forEach(input => {
    // Ensure labels are properly associated
    if (input.id && !input.getAttribute('aria-labelledby')) {
      const label = form.querySelector(`label[for="${input.id}"]`);
      if (label) {
        input.setAttribute('aria-labelledby', label.id || input.id + '-label');
      }
    }
    
    // Add required field indicators
    if (input.hasAttribute('required')) {
      const label = form.querySelector(`label[for="${input.id}"]`);
      if (label && !label.textContent.includes('*')) {
        label.innerHTML += ' <span aria-label="required" class="text-red-500">*</span>';
      }
    }
    
    // Add error state handling
    input.addEventListener('invalid', (e) => {
      e.preventDefault();
      input.setAttribute('aria-invalid', 'true');
      
      // Announce error to screen reader
      const errorMessage = input.validationMessage;
      announceToScreenReader(`Error: ${errorMessage}`, 'assertive');
    });
    
    input.addEventListener('input', () => {
      if (input.validity.valid) {
        input.removeAttribute('aria-invalid');
      }
    });
  });
};

// Color contrast checker
export const checkColorContrast = (foreground, background) => {
  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
  
  // Calculate relative luminance
  const getLuminance = (r, g, b) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };
  
  // Calculate contrast ratio
  const getContrastRatio = (l1, l2) => {
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  };
  
  const fg = hexToRgb(foreground);
  const bg = hexToRgb(background);
  
  if (!fg || !bg) return 0;
  
  const fgLuminance = getLuminance(fg.r, fg.g, fg.b);
  const bgLuminance = getLuminance(bg.r, bg.g, bg.b);
  
  return getContrastRatio(fgLuminance, bgLuminance);
};

// Accessibility audit
export const runAccessibilityAudit = () => {
  const issues = [];
  
  // Check for missing alt text
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.alt && !img.getAttribute('aria-label')) {
      issues.push({
        type: 'missing-alt',
        element: img,
        message: 'Image missing alt text or aria-label'
      });
    }
  });
  
  // Check for proper heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;
  headings.forEach(heading => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level - previousLevel > 1) {
      issues.push({
        type: 'heading-hierarchy',
        element: heading,
        message: `Heading level ${level} follows level ${previousLevel} (should be sequential)`
      });
    }
    previousLevel = level;
  });
  
  // Check for form labels
  const formInputs = document.querySelectorAll('input, textarea, select');
  formInputs.forEach(input => {
    if (!input.id || !document.querySelector(`label[for="${input.id}"]`)) {
      issues.push({
        type: 'missing-label',
        element: input,
        message: 'Form input missing associated label'
      });
    }
  });
  
  // Check for sufficient color contrast
  const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
  textElements.forEach(element => {
    const style = window.getComputedStyle(element);
    const color = style.color;
    const backgroundColor = style.backgroundColor;
    
    if (color && backgroundColor && color !== backgroundColor) {
      const contrast = checkColorContrast(color, backgroundColor);
      if (contrast < 4.5) {
        issues.push({
          type: 'low-contrast',
          element: element,
          message: `Color contrast ratio ${contrast.toFixed(2)} is below WCAG AA standard (4.5)`
        });
      }
    }
  });
  
  return issues;
};

// Initialize accessibility features
export const initAccessibility = () => {
  // Create skip link
  createSkipLink();
  
  // Enhance focus indicators
  enhanceFocusIndicators();
  
  // Enhance form accessibility
  const forms = document.querySelectorAll('form');
  forms.forEach(enhanceFormAccessibility);
  
  // Run accessibility audit in development
  if (import.meta.env.MODE === 'development') {
    setTimeout(() => {
      const issues = runAccessibilityAudit();
      if (issues.length > 0) {
        console.group('Accessibility Issues Found:');
        issues.forEach(issue => {
          console.warn(`${issue.type}: ${issue.message}`, issue.element);
        });
        console.groupEnd();
      } else {
        console.log('✅ No accessibility issues found');
      }
    }, 1000);
  }
};

// Export default initialization
export default initAccessibility;
