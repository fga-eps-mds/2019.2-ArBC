import { mean, standardDeviation } from 'simple-statistics';

export default class MarkersStats {
  private verticalAverage: number = 0;
  private verticalPositionArray: number[] = [];
  private verticalStandardDeviation: number = 0;
  private verticalCoefficientOfVariation: number = 0; // TODO use CV as name

  public get verticalAxisAverage() {
    return this.verticalAverage;
  }

  public get deviation() {
    return this.verticalStandardDeviation;
  }

  public get verticalCV() {
    return this.verticalCoefficientOfVariation;
  }

  public async addPosition(y: number) {
    this.verticalPositionArray.push(y);

    await this.computeAverage();
    await this.computeDeviation();
    this.computeCoefficient();
  }

  private async computeAverage() {
    this.verticalAverage = await mean(this.verticalPositionArray);
  }

  private async computeDeviation() {
    this.verticalStandardDeviation = await standardDeviation(this.verticalPositionArray);
  }

  private computeCoefficient() {
    this.verticalCoefficientOfVariation =
      (this.verticalStandardDeviation / this.verticalAverage) * 100;
  }
}
