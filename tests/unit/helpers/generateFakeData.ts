import { AMarker } from './types';
import { Marker } from '@/store/models';

export const randomNum = (): number => Math.random() * 10;

export const fakeLetter = (): string => {
  const max: number = 'A'.charCodeAt(0);
  const min: number = 'Z'.charCodeAt(0);
  const letterCode: number = Math.random() * (max - min) + min;

  return String.fromCharCode(letterCode);
};

export const fakeMarkers = (numberOfMarkers: number, orderedByX: boolean = false): Marker[] => {
  const markers: Marker[] = [];
  let i: number;

  for (i = 0; i < numberOfMarkers; i++) {
    const marker: Marker = {
      key: fakeLetter(),
      position: { x: randomNum(), y: randomNum(), z: randomNum() },
      quaternion: { x: randomNum(), y: randomNum(), z: randomNum(), w: randomNum() },
      scale: { x: randomNum(), y: randomNum(), z: randomNum() },
    };

    markers.push(marker);
  }

  if (orderedByX) {
    markers.sort((a: Marker, b: Marker) => {
      return (a.position.x >= b.position.x) ? 1 : -1;
    });
  }

  return markers;
};

export const fakeAMarkers = (numberOfMarkers: number): AMarker[] => {
  const amarkers: AMarker[] = [];
  let i: number;

  for (i = 0; i < numberOfMarkers; i++) {
    const amarker: AMarker = {
      key: fakeLetter(),
      object3D: {
        quaternion: {
          x: randomNum(),
          y: randomNum(),
          z: randomNum(),
          w: randomNum(),
        },
        scale: { x: randomNum(), y: randomNum(), z: randomNum() },
        position: { x: randomNum(), y: randomNum(), z: randomNum() },
      },
    };

    amarkers.push(amarker);
  }

  return amarkers;
};
