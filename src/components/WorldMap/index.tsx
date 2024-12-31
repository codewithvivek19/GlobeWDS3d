import React, { useRef } from 'react';
import { useGlobeSetup } from './useGlobeSetup';
import { useGlobeInteraction } from './useGlobeInteraction';
import MapTitle from './MapTitle';

const WorldMap: React.FC = () => {
  const globeRef = useRef<HTMLDivElement>(null);
  const globe = useRef<any>(null);

  useGlobeSetup(globeRef, globe);
  useGlobeInteraction(globeRef, globe);

  return (
    <div className="w-full h-screen bg-white">
      <div ref={globeRef} className="w-full h-full" />
      <MapTitle />
    </div>
  );
};

export default WorldMap;