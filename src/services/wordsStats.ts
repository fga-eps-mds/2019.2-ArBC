interface Marker {
  key: string;
  position: { x: number, y: number, z: number };
  quaternion: { x: number, y: number, z: number, w: number };
  scale: { x: number, y: number, z: number };
}

export default {
  markersMean(markers: Marker[]): Marker {
    const length: number = markers.length;
    const resMarker: Marker = {
      key: '',
      position: { x: 0, y: 0, z: 0 },
      quaternion: { x: 0, y: 0, z: 0, w: 0 },
      scale: { x: 0, y: 0, z: 0 },
    };

    markers.forEach((marker: Marker) => {
      resMarker.position.x += marker.position.x;
      resMarker.position.y += marker.position.y;
      resMarker.position.z += marker.position.z;

      resMarker.quaternion.x += marker.quaternion.x;
      resMarker.quaternion.y += marker.quaternion.y;
      resMarker.quaternion.z += marker.quaternion.z;
      resMarker.quaternion.w += marker.quaternion.w;

      resMarker.scale.x += marker.scale.x;
      resMarker.scale.y += marker.scale.y;
      resMarker.scale.z += marker.scale.z;
    });

    resMarker.position.x /= length;
    resMarker.position.y /= length;
    resMarker.position.z /= length;

    resMarker.quaternion.x /= length;
    resMarker.quaternion.y /= length;
    resMarker.quaternion.z /= length;
    resMarker.quaternion.w /= length;

    resMarker.scale.x /= length;
    resMarker.scale.y /= length;
    resMarker.scale.z /= length;

    return resMarker;
  },
};
