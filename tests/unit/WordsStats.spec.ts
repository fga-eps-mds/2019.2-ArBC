import 'jest';
import { Marker } from '@/store/models';
import MarkersStats from '@/services/markersStats';
import wordsStats from '@/services/wordsStats';

describe('MarkersStats.ts', () => {
  test('mean is properly calculated', () => {
    const markersStats = new MarkersStats();
    const markers: Marker[] = [{
      key: 'U',
      position: { x: 1, y: 2, z: -3 },
      quaternion: { x: -1, y: 5, z: 6, w: 4.3 },
      scale: { x: 1, y: 2, z: -3 },
    }, {
      key: 'V',
      position: { x: 8.5, y: -9, z: 5 },
      quaternion: { x: 7.2, y: 2, z: -3, w: 9 },
      scale: { x: 1, y: -2, z: 3 },
    }, {
      key: 'A',
      position: { x: -4, y: 5, z: 7 },
      quaternion: { x: 7, y: 9, z: 10, w: 3 },
      scale: { x: 5, y: -3, z: 6 },
    },
    ];

    const res: Marker = wordsStats.markersMean(markers);

    expect(res.key).toBe('');
    expect(res.position.x).toBeCloseTo(5.5 / 3, 5);
    expect(res.position.y).toBeCloseTo(-2 / 3, 5);
    expect(res.position.z).toBeCloseTo(3, 5);
    expect(res.quaternion.x).toBeCloseTo(13.2 / 3, 5);
    expect(res.quaternion.y).toBeCloseTo(16 / 3, 5);
    expect(res.quaternion.z).toBeCloseTo(13 / 3, 5);
    expect(res.quaternion.w).toBeCloseTo(16.3 / 3, 5);
    expect(res.scale.x).toBeCloseTo(7 / 3, 5);
    expect(res.scale.y).toBeCloseTo(-1, 5);
    expect(res.scale.z).toBeCloseTo(2, 5);
  });
});
