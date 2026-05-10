import { Scene, manager } from '@tialops/maki'

export default class NewScene extends Scene {
  constructor() {
    super('NewScene')
    manager.map(this, 'Home')
  }

  preload() {
    super.preload()

    this.lia = this.maki.player('lia')
    manager.preload(this)

    console.log('NewScene constructor')
  }

  create() {
    super.create()
    manager.create(this)

    this.lia.sprite.setPosition(500, 400)

    this.input.keyboard.on('keydown-Y', () => {
      this.scene.stop('NewScene')
      this.scene.start('GameScene')
    })
  }

  update() {
    this.maki.move(this.lia)
  }
}