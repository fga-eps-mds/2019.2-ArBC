import { standardDeviation } from 'simple-statistics';

export default class MarkersStats {
  private verticalPositionArray: number[] = [];
  private verticalStandardDeviation: number = 0;

  public get deviation() {
    return this.verticalStandardDeviation;
  }

  public clearValues() {
    this.verticalPositionArray = [];
  }

  public async addPosition(y: number) {
    this.verticalPositionArray.push(y);
    await this.computeDeviation();
  }

  private async computeDeviation() {
    this.verticalStandardDeviation = await standardDeviation(this.verticalPositionArray);
  }
}
