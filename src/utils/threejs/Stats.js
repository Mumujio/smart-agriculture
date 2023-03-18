import stats from 'stats.js'
export default class Stats {
    constructor(dom) {
        // dom为canvas画布
        this.statsInstance = new stats()
        this.statsInstance.showPanel(0)
        // 在canvas画布的父节点上增加帧率器
        dom.parentNode.appendChild(this.statsInstance.dom)
    }
    update() {
        this.statsInstance.update()
    }
}