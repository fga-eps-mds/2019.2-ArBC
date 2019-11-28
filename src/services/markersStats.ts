import { standardDeviation } from 'simple-statistics';

export default class MarkersStats {
  private verticalPositionArray: number[] = [];
  private verticalStandardDeviation: number = 0;

  public get deviation(): number {
    return this.verticalStandardDeviation;
  }

  public clearValues(): void {
    this.verticalPositionArray = [];
  }

  public async addPosition(y: number): Promise<void> {
    this.verticalPositionArray.push(y);

    await this.computeDeviation();
  }

  private async computeDeviation(): Promise<void> {
    this.verticalStandardDeviation = await standardDeviation(this.verticalPositionArray);
  }
}
