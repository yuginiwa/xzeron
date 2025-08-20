/**
 * Performance optimization utilities for Core Web Vitals
 * Targets: LCP < 2.5s, INP < 200ms, CLS < 0.1
 */

// Core Web Vitals monitoring
export const monitorCoreWebVitals = () => {
  if ('web-vitals' in window) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
};

// Image optimization utilities
export const optimizeImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};

// Lazy loading for components
export const lazyLoadComponent = (component, loadingComponent) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(component);
    }, 100);
  });
};

// Performance budget monitoring
export const performanceBudget = {
  lcp: 2500, // 2.5 seconds
  fid: 100,  // 100ms
  cls: 0.1,  // 0.1
  ttfb: 800, // 800ms
  fcp: 1800  // 1.8 seconds
};

// Check if performance meets budget
export const checkPerformanceBudget = (metrics) => {
  const violations = [];
  
  Object.entries(performanceBudget).forEach(([metric, threshold]) => {
    if (metrics[metric] && metrics[metric] > threshold) {
      violations.push({
        metric,
        value: metrics[metric],
        threshold,
        violation: metrics[metric] - threshold
      });
    }
  });
  
  return violations;
};

// Resource hints for performance
export const addResourceHints = () => {
  const hints = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' }
  ];
  
  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.entries(hint).forEach(([attr, value]) => {
      link.setAttribute(attr, value);
    });
    document.head.appendChild(link);
  });
};

// Critical CSS inlining
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    /* Critical CSS for above-the-fold content */
    .trust-bar, .header, .hero-section {
      display: block;
    }
    
    .text-hero {
      font-size: clamp(2.5rem, 5vw, 4rem);
      line-height: 1.1;
      font-weight: 800;
    }
    
    .btn-primary {
      background: var(--smdc-blue);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
    }
  `;
  
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};

// Service Worker registration for PWA
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Performance monitoring dashboard
export const createPerformanceDashboard = () => {
  const dashboard = document.createElement('div');
  dashboard.id = 'performance-dashboard';
  dashboard.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-family: monospace;
    font-size: 12px;
    z-index: 10000;
    display: none;
  `;
  
  document.body.appendChild(dashboard);
  
  // Show dashboard on Ctrl+Shift+P
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'P') {
      dashboard.style.display = dashboard.style.display === 'none' ? 'block' : 'none';
    }
  });
  
  return dashboard;
};

// Update performance dashboard
export const updatePerformanceDashboard = (dashboard, metrics) => {
  if (!dashboard) return;
  
  const violations = checkPerformanceBudget(metrics);
  const status = violations.length === 0 ? '✅' : '❌';
  
  dashboard.innerHTML = `
    <div>Performance: ${status}</div>
    <div>LCP: ${metrics.lcp || 'N/A'}ms</div>
    <div>FID: ${metrics.fid || 'N/A'}ms</div>
    <div>CLS: ${metrics.cls || 'N/A'}</div>
    <div>TTFB: ${metrics.ttfb || 'N/A'}ms</div>
    ${violations.length > 0 ? `<div style="color: #fca5a5;">Violations: ${violations.length}</div>` : ''}
  `;
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  // Monitor Core Web Vitals
  monitorCoreWebVitals();
  
  // Add resource hints
  addResourceHints();
  
  // Inline critical CSS
  inlineCriticalCSS();
  
  // Register service worker
  registerServiceWorker();
  
  // Create performance dashboard (development only)
  if (process.env.NODE_ENV === 'development') {
    const dashboard = createPerformanceDashboard();
    
    // Simulate metrics for development
    setInterval(() => {
      const mockMetrics = {
        lcp: Math.random() * 3000,
        fid: Math.random() * 200,
        cls: Math.random() * 0.2,
        ttfb: Math.random() * 1000
      };
      updatePerformanceDashboard(dashboard, mockMetrics);
    }, 5000);
  }
};

// Export default initialization
export default initPerformanceMonitoring;
