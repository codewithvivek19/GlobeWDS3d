export const GLOBE_CONFIG = {
  backgroundColor: '#f0f0f0', // Light gray background
  globeColor: '#ffffff', // White globe
  ambientLightColor: '#cccccc', // Soft gray ambient light
  pointLightColor: '#ffffff', // White point light for better contrast
  atmosphereColor: '#e0e0e0', // Light gray atmosphere
  pointColor: '#FF6B00', // Orange point color
  ringColor: '#FFA500', // Orange ring color
  initialView: {
    lat: 20,
    lng: 80,
    altitude: 2.5
  }
} as const;

export const ANIMATION_CONFIG = {
  rotationSpeed: 0.5,
  transitionDuration: 1000,
  hoverAnimationDuration: 200,
  hoverAltitude: 0.3,
  defaultAltitude: 0.12
} as const;

