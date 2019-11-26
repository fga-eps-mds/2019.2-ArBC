import { Marker } from '@/store/models';

const generateFakeLetter = (): string => {
  const max: number = 'A'.charCodeAt(0);
  const min: number = 'Z'.charCodeAt(0);
  const letterCode: number = Math.random() * (max - min) + min;

  return String.fromCharCode(letterCode);
};

const randomNum = (): number => Math.random() * 10;

export default (numberOfMarkers: number, orderedByX: boolean = false): Marker[] => {
  const fakeMarkers: Marker[] = [];
  let i: number;

  for (i = 0; i < numberOfMarkers; i++) {
    const fakeMarker: Marker = {
      key: generateFakeLetter(),
      position: { x: randomNum(), y: randomNum(), z: randomNum() },
      quaternion: { x: randomNum(), y: randomNum(), z: randomNum(), w: randomNum() },
      scale: { x: randomNum(), y: randomNum(), z: randomNum() },
    };

    fakeMarkers.push(fakeMarker);
  }

  if (orderedByX) {
    fakeMarkers.sort((a: Marker, b: Marker) => {
      return (a.position.x >= b.position.x) ? 1 : -1;
    });
  }

  return fakeMarkers;
};