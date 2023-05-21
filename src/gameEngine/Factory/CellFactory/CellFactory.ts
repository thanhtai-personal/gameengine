import Factory from "./../Factory.base";

class CellFactory extends Factory {
  private instant: CellFactory;

  constructor(productionLine: Function) {
    super(productionLine);
  }

  private createCell() {}

  getInstant(): CellFactory {
    if (!this.instant) {
      this.instant = new CellFactory(this.createCell);
    }
    return this.instant;
  }
}

export default CellFactory;
