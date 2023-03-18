import Experience from '@/components/home/centerContent/indexTHREE/Experience.js'
import EventEmitter from './EventEmitter.js'

export default class Sizes extends EventEmitter
{
    constructor()
    {
        super()
        this.experience = new Experience
        this.containerDom = this.experience.containerDom
        
        
        // Setup
        this.width = this.containerDom.offsetWidth
        this.height = this.containerDom.offsetHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener('resize', () =>
        {
            this.width = this.containerDom.offsetWidth
            this.height = this.containerDom.offsetHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)
         
            
            this.trigger('resize')
        })
    }
}