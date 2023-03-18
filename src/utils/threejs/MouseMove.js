import * as THREE from 'three'
import EventEmitter from "./EventEmitter"
export default class MouseMove extends EventEmitter{
    constructor(camera,scene,time) {
        // 需要提供相机
        super()
        this.camera = camera
        this.scene = scene
        this.time = time
        this.cursor = {}
        this.cameraScene = new THREE.Group()
        this.scene.add(this.cameraScene)
        this.cameraScene.add(this.camera)

        

        this.initMouseMove()
        
    }
    initMouseMove() {
        window.addEventListener('mousemove', (event) => {
            this.trigger('mouseMove',[event])
        })
        this.on('mouseMove', (event) => {
            
            this.cursor.x = event.clientX/window.innerWidth-0.5
            this.cursor.y = -(event.clientY/window.innerHeight-0.5)
            

            // 视差
            const parallaxX = this.cursor.x
            const parallaxY = this.cursor.y

                this.cameraScene.position.x += (parallaxX - this.cameraScene.position.x) *0.001 *this.time.delta;
                this.cameraScene.position.y += (parallaxY - this.cameraScene.position.y)*0.001 *this.time.delta;
             
                    
            
            // this.camera.position.x = parallaxX
            // this.camera.position.y = parallaxY
        })
        
    }
    destroy() {
        this.off('mouseMove')
    }
}