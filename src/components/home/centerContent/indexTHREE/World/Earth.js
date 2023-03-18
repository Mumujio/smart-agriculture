import Experience from '../Experience.js'
import * as THREE from 'three'
export default class Earth{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
     
        this.resources = this.experience.resources
        this.setModel()
    }
    setModel()
    {     
        this.model = this.resources.items.earthModel   
        this.scene.add(this.model.scene)
    }

    update() {
        this.elapsed = this.experience.time.elapsed
        this.delta = this.experience.time.delta
        // this.model.scene.rotation.y += -Math.PI * this.elapsed * 0.001
        this.model.scene.rotation.y = -Math.PI * this.elapsed * 0.1
    }
}