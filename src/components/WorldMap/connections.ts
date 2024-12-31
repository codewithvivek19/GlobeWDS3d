import { cities } from './cities';

interface Connection {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
}

export const connections: Connection[] = [];

// Create connections between cities
cities.forEach((city, index) => {
  if (index < cities.length - 1) {
    connections.push({
      startLat: city.lat,
      startLng: city.lng,
      endLat: cities[index + 1].lat,
      endLng: cities[index + 1].lng,
      color: '#ffffff'
    });
  }
});