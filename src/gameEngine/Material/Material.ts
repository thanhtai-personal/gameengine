abstract class Material {
  protected context: any;
  constructor() {}

  abstract update(): void;

  abstract draw(): void;
}

export default Material;
