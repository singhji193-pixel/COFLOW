import Lenis from 'lenis';

let lenisInstance = null;

export function initLenis() {
  if (typeof window === 'undefined') return null;
  
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.8,
    touchMultiplier: 1.5,
    infinite: false,
    lerp: 0.1,
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
      duration: 2,
      ...options
    });
  }
}
