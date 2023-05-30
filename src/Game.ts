import Scene from "./gameEngine/Material/abstract/Scene/Scene";
import ResourceManager from "./gameEngine/Factory/ResourceManager/ResourceManager";

export const ResourceType = {
  SOUND: "sound",
  IMAGE: "image",
};

class Game {
  private currentScene: Scene;
  private scenes: Array<Scene>;
  private canvas: any;
  private container: any;
  private then: number;
  private reset: Function;
  private context: any;
  private assets: any;
  private loadedAssets: number;
  private progressBarId: string;
  private resourceManager: any;

  constructor(props: {
    scenes: Array<Scene>;
    width?: number;
    height?: number;
    containerId?: string;
    then?: number;
    reset?: Function;
    assets?: Array<any>;
    progressBarId?: string;
  }) {
    this.scenes = props.scenes;
    this.currentScene = props.scenes[0];
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.assets = props.assets || [];
    this.canvas.width = props.width || 512;
    this.canvas.height = props.height || 480;
    this.then = props.then || 100;
    this.reset = props.reset || (() => {});
    this.resourceManager = ResourceManager.getInstant();
    this.loadedAssets = 0;
    this.progressBarId = props.progressBarId || "loading-progress";
    if (props?.containerId) {
      this.container = document.getElementById(props.containerId);
    } else {
      this.container = document.body;
    }
  }

  setScene(index: number) {
    this.currentScene = this.scenes[index];
  }

  update(time: number): void {
    this.currentScene.update(time);
  }

  draw(): void {
    this.currentScene.draw();
  }

  render(): void {
    this.container.appendChild(this.canvas);
  }

  loop(): void {
    var now = Date.now();
    var delta = now - this.then;

    this.update(delta / 1000);
    this.draw();

    this.then = now;

    // Request to do this again ASAP
    window.requestAnimationFrame(this.loop);
  }

  preload(): void {
    this.loadedAssets = 0;
    var self = this;
    function preloadAssets() {
      for (var i = 0; i < self.assets.length; i++) {
        let asset: any = self.assets[i];
        switch (self.assets[i].type) {
          case ResourceType.SOUND:
            asset = new Audio();
            asset.onload = assetLoaded;
            asset.src = self.assets[i];
            self.resourceManager.addSound(asset);
            break;
          default:
            asset = new Image();
            asset.onload = assetLoaded;
            asset.src = self.assets[i];
            self.resourceManager.addImage(asset);
        }
      }
    }

    function assetLoaded() {
      self.loadedAssets++;
      var progress = Math.floor(
        (self.loadedAssets / (self.assets.length || 1)) * 100
      );
      updateProgress(progress);

      if (self.loadedAssets === self.assets.length) {
        return true;
      }
    }

    function updateProgress(percentage: number | string) {
      var progressBar: any = document.getElementById(self.progressBarId);
      if (progressBar) {
        progressBar.style.width = percentage + "%";
      }
    }

    preloadAssets();
  }

  start(): void {
    this.then = Date.now();
    this.reset();
    this.loop();
  }
}

export default Game;
