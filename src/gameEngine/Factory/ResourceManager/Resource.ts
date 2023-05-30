class Resource {
  private image: Array<any>;
  private sound: Array<any>;

  constructor() {
    this.image = [];
    this.sound = [];
  }

  addImage(asset: any): void {
    this.image.push(asset);
  }

  addSound(asset: any): void {
    this.sound.push(asset);
  }

  reset(): void {
    this.image = [];
    this.sound = [];
  }
}

export default Resource;
