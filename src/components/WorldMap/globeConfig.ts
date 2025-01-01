import * as THREE from 'three';

export const initializeGlobeMaterial = (globe: any) => {
  const globeMaterial = globe.globeMaterial();
  globeMaterial.color = new THREE.Color('#e0e0e0'); // Light gray base
  globeMaterial.emissive = new THREE.Color('#FF8C00'); // Dark orange emissive
  globeMaterial.emissiveIntensity = 0.1;
  globeMaterial.shininess = 0.7;
  globeMaterial.opacity = 0.9;
  globeMaterial.transparent = true;
};

export const setupLighting = (globe: any) => {
  const ambientLight = globe.scene().children.find(
    (obj: any) => obj.type === 'AmbientLight'
  );
  if (ambientLight) {
    ambientLight.intensity = 0.6;
    ambientLight.color = new THREE.Color('#FFF5E6'); // Warm white
  }

  const pointLight = globe.scene().children.find(
    (obj: any) => obj.type === 'PointLight'
  );
  if (pointLight) {
    pointLight.intensity = 0.8;
    pointLight.color = new THREE.Color('#FFD700'); // Gold
  }
};

export const GLOBE_CONFIG = {
  backgroundColor: '#ffffff', // Dark blue-gray background
  globeColor: '#e0e0e0', // Light gray globe
  ambientLightColor: '#FFF5E6', // Warm white ambient light
  pointLightColor: '#FFD700', // Gold point light
  atmosphereColor: '#FFFFFF', // Dark orange atmosphere
  pointColor: '#FF4500', // Bright orange point color
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

export const createGlobeTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const context = canvas.getContext('2d');
  if (context) {
    // Create a gradient background
    const gradient = context.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, '#e0e0e0'); // Light gray
    gradient.addColorStop(1, '#FFfff'); // Peach
    context.fillStyle = gradient;
    context.fillRect(0, 0, 1024, 512);

    // Add some subtle texture
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 1.5;
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI);
      context.fillStyle = `rgba(255, 165, 0, ${Math.random() * 0.03})`; // Very subtle orange dots
      context.fill();
    }
  }
  return new THREE.CanvasTexture(canvas);
};

export const applyGlobeTexture = (globe: any) => {
  const globeMaterial = globe.globeMaterial();
  globeMaterial.map = createGlobeTexture();
  globeMaterial.needsUpdate = true;
};

