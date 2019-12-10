import { assetsDPR } from './game.js'
import Sprite from './sprite.js'

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {
    this.load.multiatlas("bigBackground", `src/atlas/pdw1A@${assetsDPR}.json`, "src/atlas");
  }

  create() {
    let { width, height } = this.cameras.main
    width /= assetsDPR
    height /= assetsDPR

    // these assets are from https://www.kenney.nl/assets/toon-characters-1
    //const zombie = new Sprite(this, width / 3, height, 'atlas', 'zombie').setOrigin(0.5, 1)
    //const robot = new Sprite(this, width / 3, height, 'atlas', 'robot').setOrigin(0.5, 1)
    //robot.setX(width - 100)
        this.background  = new Sprite(this, 0,0, "bigBackground", "road2test").setOrigin(0,0);
  }
}
