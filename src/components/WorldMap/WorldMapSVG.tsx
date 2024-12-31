import React from 'react';
import { MAP_VIEWBOX } from './constants';

interface WorldMapSVGProps {
  className?: string;
}

const WorldMapSVG: React.FC<WorldMapSVGProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <img 
        src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&w=3000&q=80"
        alt="World Map Base"
        className="w-full h-full object-cover brightness-[0.85] contrast-[1.1]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-transparent to-blue-950/50" />
    </div>
  );
};

export default WorldMapSVG;