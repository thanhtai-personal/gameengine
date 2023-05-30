import AbstractObj from "../AbstractObj";

interface SpriteProps {
  context: any;
  position: any;
  imagesList: Array<any>;
  currentFrame?: number;
  time?: number;
}

class Sprite extends AbstractObj {
  protected imagesList: Array<any>;
  protected currentFrame: number;
  protected time: number;
  protected position: any;

  constructor(props: SpriteProps) {
    super();
    this.context = props.context;
    this.currentFrame = 0;
    this.time = props.time || 100;
    this.position = props.position;
  }

  draw() {
    return this.context.drawImage(
      this.imagesList[this.currentFrame],
      this.position.x || 0,
      this.position.y || 0
    );
  }

  update(time: number) {
    this.currentFrame =
      this.currentFrame + 1 > this.imagesList.length
        ? 0
        : this.currentFrame + 1;
    return this.draw();
  }
}

export default Sprite;
