import React from 'react';
import { MapPin } from 'lucide-react';

interface CityMarkerProps {
  name: string;
  x: number;
  y: number;
  color: string;
}

const CityMarker: React.FC<CityMarkerProps> = ({ name, x, y, color }) => {
  return (
    <div
      className="absolute group"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="relative">
        <MapPin
          size={32}
          className="transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-125"
          style={{ color }}
        />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
            <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">{name}</p>
          </div>
        </div>
        <div 
          className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ping"
          style={{ backgroundColor: color, opacity: 0.12 }}
        />
        <div 
          className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"
          style={{ backgroundColor: color, opacity: 0.15 }}
        />
      </div>
    </div>
  );
};

export default CityMarker;