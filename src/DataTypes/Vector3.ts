import Cell from "../gameEngine/Material/entities/Cell/Cell";

class Vector3<T> {
  private items: T[];

  constructor(...items: T[]) {
    this.items = [...items];
  }

  get length(): number {
    return this.items.length;
  }

  push(...elements: T[]): number {
    return this.items.push(...elements);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  fillEmptyItem(filledCell: Cell): void {}
}

export default Vector3;
