import EventEmitter from "./EventEmitter";

export default class Text extends EventEmitter{
    constructor() {
        super()
        setTimeout(() => {
            this.trigger('text')
        }, 5000);
        
    }
}