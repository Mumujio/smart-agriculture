import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        
        this.setSunLight()
    }

    setSunLight()
    {
        this.ambientLight = new THREE.AmbientLight(0xffffff,5)
        this.scene.add(this.ambientLight)
    }

    setEnvironmentMap()
    {
        
    }
}