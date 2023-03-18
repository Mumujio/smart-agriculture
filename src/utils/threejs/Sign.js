import EventEmitter from "@/utils/threejs/EventEmitter";
export default class Sign extends EventEmitter {
  constructor() {
    super();

    // 判断是否已经切换到南极洲
    this.openAntarctica = false;
    // 大洋洲
    this.openOceania = false;
    // 北美洲
    this.openNorthAmerica = false
  }
  changeSign(type, value) {
    if (type == "openAntarctica") {
      this.type = value
      this.trigger("signChange", ["openAntarctica"]);
    } else if (type == 'openNorthAmerica') {
      this.type = value
      this.trigger("signChange", ["openNorthAmerica"]);
    }
  }
}
