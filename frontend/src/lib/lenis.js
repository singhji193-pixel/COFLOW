import Lenis from 'lenis';

let lenisInstance = null;

export function initLenis() {
  if (typeof window === 'undefined') return null;
  
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

export function scrollTo(target, options = {}) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset: 0,
      duration: 1.2,
      ...options
    });
  }
}
