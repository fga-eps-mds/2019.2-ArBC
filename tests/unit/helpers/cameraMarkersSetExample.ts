import { AMarker } from './types';
import { randomNum } from './generateFakeData';

/*
  This file exports a possible situation of markers
  It can form a word and have 2 markers in invalid positions
  and they won't been used to form a word, because of it
  But offers a reference for algorithm functionality
*/

const letterBAmarker: AMarker = {
  key: 'B',
  object3D: {
    quaternion: {
      x: -2.0598783493041974,
      y: -0.32773080468177823,
      z: randomNum(),
      w: randomNum(),
    },
    scale: { x: randomNum(), y: randomNum(), z: randomNum() },
    position: { x: randomNum(), y: randomNum(), z: randomNum() },
  },
};

const letterOAmarker: AMarker = {
  key: 'O',
  object3D: {
    quaternion: {
      x: -0.7318720221519454,
      y: -0.30282029509544384,
      z: randomNum(),
      w: randomNum(),
    },
    scale: { x: randomNum(), y: randomNum(), z: randomNum() },
    position: { x: randomNum(), y: randomNum(), z: randomNum() },
  },
};

const letterLAmarker: AMarker = {
  key: 'L',
  object3D: {
    quaternion: {
      x: 0.6347710490226763,
      y: -0.2920381128787994,
      z: randomNum(),
      w: randomNum(),
    },
    scale: { x: randomNum(), y: randomNum(), z: randomNum() },
    position: { x: randomNum(), y: randomNum(), z: randomNum() },
  },
};

const letterAAmarker: AMarker = {
  key: 'A',
  object3D: {
    quaternion: {
      x: 2.027072429656984,
      y: -0.2581704854965208,
      z: randomNum(),
      w: randomNum(),
    },
    scale: { x: randomNum(), y: randomNum(), z: randomNum() },
    position: { x: randomNum(), y: randomNum(), z: randomNum() },
  },
};

const letterHAmarker: AMarker = {
  key: 'H',
  object3D: {
    quaternion: {
      x: randomNum(),
      y: -0.9981704854965208,
      z: randomNum(),
      w: randomNum(),
    },
    scale: { x: randomNum(), y: randomNum(), z: randomNum() },
    position: { x: randomNum(), y: randomNum(), z: randomNum() },
  },
};

const letterZAmarker: AMarker = {
  key: 'Z',
  object3D: {
    quaternion: {
      x: randomNum(),
      y: -1.2581704854965208,
      z: randomNum(),
      w: randomNum(),
    },
    scale: { x: randomNum(), y: randomNum(), z: randomNum() },
    position: { x: randomNum(), y: randomNum(), z: randomNum() },
  },
};

export default [
  letterBAmarker,
  letterOAmarker,
  letterLAmarker,
  letterAAmarker,
  letterHAmarker,
  letterZAmarker,
];
