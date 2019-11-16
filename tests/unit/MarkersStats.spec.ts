import 'jest';
import { Marker } from '@/store/models';
import MarkersStatsClass from '@/services/markersStats';

describe('MarkersStats.ts', () => {
  test('mean is properly calculated', async () => {
    const markersStats = new MarkersStatsClass();
    await markersStats.addPosition(3.7);
    await markersStats.addPosition(2.9);
    await markersStats.addPosition(2.5);
    await markersStats.addPosition(2.3);
    await markersStats.addPosition(0.9);

    expect(markersStats.deviation).toBeCloseTo(0.915642, 5);
  });

  test('if values aren\'t cleared', async () => {
    const markersStats = new MarkersStatsClass();
    await markersStats.addPosition(3.7);
    await markersStats.addPosition(2.9);
    await markersStats.addPosition(2.5);
    await markersStats.addPosition(2.3);
    await markersStats.addPosition(0.9);

    await markersStats.addPosition(2.3);
    await markersStats.addPosition(1.5);
    await markersStats.addPosition(6.4);
    await markersStats.addPosition(0.2);
    await markersStats.addPosition(0.7);

    expect(markersStats.deviation).not.toBeCloseTo(2.208529, 5);
  });

  test('values are properly cleared', async () => {
    const markersStats = new MarkersStatsClass();
    await markersStats.addPosition(3.7);
    await markersStats.addPosition(2.9);
    await markersStats.addPosition(2.5);
    await markersStats.addPosition(2.3);
    await markersStats.addPosition(0.9);

    markersStats.clearValues();

    await markersStats.addPosition(2.3);
    await markersStats.addPosition(1.5);
    await markersStats.addPosition(6.4);
    await markersStats.addPosition(0.2);
    await markersStats.addPosition(0.7);

    expect(markersStats.deviation).toBeCloseTo(2.208529, 5);
  });
});
