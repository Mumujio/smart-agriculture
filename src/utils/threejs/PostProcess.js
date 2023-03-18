// 后处理类
import * as THREE from "three";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";
export default class Process {
    // 需要传入场景和相机
    constructor(scene,camera,renderer) {
        this.composer
        this.renderPass
        this.outlinePass
        this.effectFXAA
        this.scene = scene
        this.camera = camera
        this.renderer = renderer

        this.initProcess()
  }
  initProcess() {
    // 选中特效
    this.composer = new EffectComposer(this.renderer);
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);
    this.outlinePass = new OutlinePass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      this.scene,
      this.camera
    );
    this.outlinePass.visibleEdgeColor.set("#00ff00"); //包围线颜色
    this.composer.addPass(this.outlinePass);
    this.effectFXAA = new ShaderPass(FXAAShader);
    this.effectFXAA.uniforms["resolution"].value.set(
      1 / window.innerWidth,
      1 / window.innerHeight
    );
      this.composer.addPass(this.effectFXAA);
    }
    addSelectedObject(object) {
        this.selectedObjects = []
        this.selectedObjects.push(object)
    }
    
}
