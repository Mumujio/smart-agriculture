import Experience from "../Experience";
import * as THREE from "three";
import EventEmitter from "@/utils/threejs/EventEmitter";

export default class Raycaster extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.camera = this.experience.camera.instance;
    this.scene = this.experience.scene;
    this.sign = this.experience.sign;
    this.tween = this.experience.tween;
    this.process = this.experience.process;
    this.setClickRaycaster();
    // 地球模型
  }
  setClickRaycaster() {
    this.raycaster = {};
    this.raycaster.pointer = { x: 0, y: 0 };
    this.raycaster.instance = new THREE.Raycaster();
    this.raycaster.intersect = null;
    this.on("rayClick", (event) => {
      this.raycaster.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.raycaster.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
      this.raycaster.instance.setFromCamera(
        this.raycaster.pointer,
        this.camera
      );

      // 保存待检测的地球部分
      let shouldIntersect = this.experience.world.earth.model.scene.children
     
      
      let intersects = this.raycaster.instance.intersectObjects(
        shouldIntersect,
        true
      );
      if (intersects.length > 0) {
        this.raycaster.intersect = intersects[0].object;
        this.process.addSelectedObject(this.raycaster.intersect);
        this.process.outlinePass.selectedObjects = this.process.selectedObjects;
       

        this.useIntersect(this.raycaster.intersect.name);
      } else {
        this.process.selectedObjects = [];
      }
    });
    // 开启点击检测
    window.addEventListener("dblclick", (event) => {
      this.trigger("rayClick", [event]);
      // this.camera.position.set(1,1,1)
    });
  }
  useIntersect(intersectName) {
    switch (intersectName) {
      case "南美洲001":
        console.log("南美洲");
        break;
      case "北美洲001":
        this.tween.jumpAtNorthAmerica();
        break;
      case "亚洲001":
        console.log("亚洲");
        break;
      case "欧洲001":
        console.log("欧洲");
        break;
      case "非洲001":
        console.log("非洲");
        break;
      case "大洋洲001":
        console.log("大洋洲");
        break;
      case "南极洲001":
        this.tween.jumpAtAntarctica();
        // this.openScene('openAntarctica');
        break;
    }
  }
  openScene(type) {
    // 请求修改sign
    // this.sign.changeSign(type, true);
    this.trigger("sceneChange", [type]);
  }
  destroye() {
    // 取消点击事件
    this.off("rayClick");
    // 清除射线
    this.raycaster = null;
  }
}
