interface City {
  name: string;
  lat: number;
  lng: number;
  color: string;
  size?: number;
}

export const cities: City[] = [
  {
    name: 'Bangalore',
    lat: 12.9716,
    lng: 77.5946,
    color: '#1a1a1a',
    size: 1.2
  },
  {
    name: 'Chennai',
    lat: 13.0827,
    lng: 80.2707,
    color: '#1a1a1a',
    size: 1.2
  },
  {
    name: 'Madurai',
    lat: 9.9252,
    lng: 78.1198,
    color: '#1a1a1a',
    size: 1.2
  },
  {
    name: 'Malaysia',
    lat: 4.2105,
    lng: 101.9758,
    color: '#1a1a1a',
    size: 1.2
  }
];