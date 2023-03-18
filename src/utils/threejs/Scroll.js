import EventEmitter from "@/utils/threejs/EventEmitter.js"


export default class Scroll extends EventEmitter {
    constructor() {
        super()
        this.scrollContent = { scrollX: 0, scrollY: 0 }
        this.newSection = 0
        
        addEventListener('scroll', () => {
            this.scrollContent.scrollY = window.scrollY
            this.trigger('scroll',[this.newSection])
        })
    }
}