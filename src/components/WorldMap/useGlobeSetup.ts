import { useEffect } from 'react';
import GlobeGL from 'globe.gl';
import { cities } from './cities';
import { connections } from './connections';
import { GLOBE_CONFIG, ANIMATION_CONFIG, initializeGlobeMaterial, setupLighting } from './globeConfig';

export const useGlobeSetup = (globeRef: React.RefObject<HTMLDivElement>, globe: React.MutableRefObject<any>) => {
  useEffect(() => {
    if (!globeRef.current) return;

    // Initialize globe
    globe.current = GlobeGL()(globeRef.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .backgroundColor(GLOBE_CONFIG.backgroundColor)
      .atmosphereColor(GLOBE_CONFIG.atmosphereColor)
      .atmosphereAltitude(0.3)
      .width(window.innerWidth)
      .height(window.innerHeight)
      .arcsData(connections)
      .arcColor('color')
      .arcDashLength(0.4)
      .arcDashGap(0.2)
      .arcDashAnimateTime(2000)
      .arcStroke(1) // Increased stroke width for better visibility
      .arcAltitude(0.2)
      .pointsData(cities)
      .pointColor('color')
      .pointAltitude(0.1)
      .pointRadius(0.12)
      .pointsMerge(true)
      .pointLabel(d => `
        <div class="animate-in">
          <div class="bg-white/95 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg transform scale-150 border-2 border-gray-200">
            <p class="text-xl font-bold text-gray-900">${d.name}</p>
            <div class="absolute -inset-1 rounded-xl bg-gray-100 blur-sm -z-10"></div>
          </div>
        </div>
      `)
      .onPointHover(point => {
        document.body.style.cursor = point ? 'pointer' : 'default';
      });

    // Set initial position
    globe.current.pointOfView(
      GLOBE_CONFIG.initialView,
      ANIMATION_CONFIG.transitionDuration
    );

    // Initialize material and lighting
    initializeGlobeMaterial(globe.current);
    setupLighting(globe.current);
  }, []);
};