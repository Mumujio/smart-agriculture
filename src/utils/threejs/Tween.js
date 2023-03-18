// 补间动画类
import TWEEN from '@tweenjs/tween.js'
export default class Tween {
    // 传入场景相机，场景轨道控制器
    constructor(camera,controls) {
        this.tween
        this.camera = camera
        this.controls = controls
    }
    jumpAtAntarctica() {
       this.tween = new TWEEN.Tween({
            x1: this.camera.position.x, // 相机当前位置x
            y1: this.camera.position.y, // 相机当前位置y
            z1: this.camera.position.z, // 相机当前位置z
            x2: 0, // 控制当前的中心点x
            y2: 0, // 控制当前的中心点y
            z2: 0, // 控制当前的中心点z
          });
          this.tween.to(
            {
              x1: 0, // 新的相机位置x
              y1: -1.4, // 新的相机位置y
              z1: 0, // 新的相机位置z
              x2: 0, // 新的控制中心点位置x
              y2: 0, // 新的控制中心点位置x
              z2: 0, // 新的控制中心点位置x
            },
            1000
          );
        this.tween.onUpdate((nowPlace) => {
            this.camera.position.x = nowPlace.x1;
            this.camera.position.y = nowPlace.y1;
            this.camera.position.z = nowPlace.z1;
            this.controls.target.x = nowPlace.x2;
            this.controls.target.y = nowPlace.y2;
            this.controls.target.z = nowPlace.z2;
          });
          this.tween.onComplete(() => {
          });
          this.tween.start();
  }
  jumpAtNorthAmerica() {
    this.tween = new TWEEN.Tween({
         x1: this.camera.position.x, // 相机当前位置x
         y1: this.camera.position.y, // 相机当前位置y
         z1: this.camera.position.z, // 相机当前位置z
         x2: 0, // 控制当前的中心点x
         y2: 0, // 控制当前的中心点y
         z2: 0, // 控制当前的中心点z
       });
       this.tween.to(
         {
           x1: -0.2, // 新的相机位置x
           y1: 1.4, // 新的相机位置y
           z1: 1.2, // 新的相机位置z
           x2: 0, // 新的控制中心点位置x
           y2: 0, // 新的控制中心点位置x
           z2: 0, // 新的控制中心点位置x
         },
         1000
       );
     this.tween.onUpdate((nowPlace) => {
         this.camera.position.x = nowPlace.x1;
         this.camera.position.y = nowPlace.y1;
         this.camera.position.z = nowPlace.z1;
         this.controls.target.x = nowPlace.x2;
         this.controls.target.y = nowPlace.y2;
         this.controls.target.z = nowPlace.z2;
       });
       this.tween.onComplete(() => {
       });
       this.tween.start();
 }
    update() {
        TWEEN.update();
    }
}