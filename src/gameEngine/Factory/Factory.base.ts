abstract class Factory {
  protected productionLine: Function;
  protected static instant: any;

  constructor(productionLine: Function) {
    this.productionLine = productionLine;
  }
}

export default Factory;
