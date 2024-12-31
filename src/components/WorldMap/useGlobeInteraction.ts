import { useEffect } from 'react';
import { ANIMATION_CONFIG } from './globeConfig';

export const useGlobeInteraction = (
  globeRef: React.RefObject<HTMLDivElement>,
  globe: React.MutableRefObject<any>
) => {
  useEffect(() => {
    if (!globeRef.current || !globe.current) return;

    const handleResize = () => {
      globe.current
        .width(window.innerWidth)
        .height(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Auto-rotate
    globe.current.controls().autoRotate = true;
    globe.current.controls().autoRotateSpeed = ANIMATION_CONFIG.rotationSpeed;

    // Enhance hover interaction
    globe.current.controls().enableDamping = true;
    globe.current.controls().dampingFactor = 0.2;

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [globe, globeRef]);
};