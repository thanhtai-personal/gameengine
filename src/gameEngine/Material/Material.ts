abstract class Material {
  protected context: any;
  constructor() {}

  abstract update(time: number): void;

  abstract draw(): void;
}

export default Material;
