import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Hide the element initially
    gsap.set(element, { opacity: 0, y: 50 });

    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%', // Start animation when 85% of the viewport is reached
        toggleActions: 'play none none none',
        once: true,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return ref;
};