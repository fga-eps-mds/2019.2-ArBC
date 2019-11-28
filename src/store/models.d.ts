
export interface Letter {
  name: string;
  image: string;
}

export interface Word {
  name: string;
  image: Image;
}

export interface Image {
  url: string;
  isValid: boolean;
}

export interface Marker {
  key: string;
  position: { x: number, y: number, z: number };
  quaternion: { x: number, y: number, z: number, w: number };
  scale: { x: number, y: number, z: number };
}
