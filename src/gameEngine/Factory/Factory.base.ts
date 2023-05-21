import Material from "@gameEngine/Material/Material";

abstract class Factory {
  protected productionLine: Function;

  constructor(productionLine: Function) {
    this.productionLine = productionLine;
  }

  createProduct(materials: Array<Material>): Material {
    if (this.productionLine) {
      return this.productionLine(materials);
    } else {
      throw new Error("Invalid product type.");
    }
  }

  abstract getInstant(): Factory;
}

export default Factory;
