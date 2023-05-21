import Material from "./gameEngine/Material/Material";
import Scene from "./gameEngine/Material/abstract/Scene/Scene";

class Game extends Material {
  private currentScene: Scene;
  private scenes: Array<Scene>;

  constructor(scenes: Array<Scene>) {
    super();
    this.scenes = scenes;
    this.currentScene = scenes[0];
  }

  setScene(index: number) {
    this.currentScene = this.scenes[index];
  }

  draw(): void {
    this.currentScene.update();
  }

  update(): void {
    this.currentScene.draw();
  }
}

export default Game;
