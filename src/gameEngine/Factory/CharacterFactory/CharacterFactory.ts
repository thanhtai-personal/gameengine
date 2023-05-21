import Factory from "./../Factory.base";

class CharacterFactory extends Factory {
  private instant: CharacterFactory;

  constructor(productionLine: Function) {
    super(productionLine);
  }

  getInstant(): CharacterFactory {
    if (!this.instant) {
      this.instant = new CharacterFactory(this.productionLine);
    }
    return this.instant;
  }
}

export default CharacterFactory;
