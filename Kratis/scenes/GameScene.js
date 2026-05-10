

import { Scene, manager } from '@tialops/maki'
import NewScene from './NewScene.js'

export default class GameScene extends Scene {
  constructor() {
    super('GameScene')
  }

  preload() {
    this._makiPlayers = []
    super.preload()

    this.lia = this.maki.player('lia')
    manager.map(this, 'default_map')
    manager.preload(this)
  }

  create() {
    super.create()
    manager.create(this)

    // Place Lia in the center of the map.
    // 50 tiles x 16px = 800px, so the center is 400, 400.
    this.lia.sprite.setPosition(400, 400)

    this.physics.add.collider(
      this.lia.sprite,
      manager.getWallGroup(this, 'default_map')
    )

    if (!this.scene.get('NewScene')) {
      this.scene.add('NewScene', NewScene, false)
    }

    this.input.keyboard.on('keydown-T', () => {
      this.scene.stop('GameScene')
      this.scene.start('NewScene')
    })
  }

  update() {
    this.maki.move(this.lia)
  }
}