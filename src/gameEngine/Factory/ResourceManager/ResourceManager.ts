import Factory from "../Factory.base";
import Resource from "./Resource";

class ResourceManager extends Factory {
  constructor(productionLine: Function) {
    super(productionLine);
  }

  public static getInstant(): Resource {
    if (!this.instant) {
      this.instant = new Resource();
    }
    return this.instant;
  }
}

export default ResourceManager;
