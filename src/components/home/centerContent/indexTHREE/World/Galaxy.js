import Experience from "../Experience";
import * as THREE from "three";
import * as dat from 'lil-gui'
// import vertexShader from "@/shaders/galaxy/vertex.glsl";
// import fragmentShader from "@/shaders/galaxy/fragment.glsl";
export default class Galaxy {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.renderer = this.experience.renderer
    this.time = this.experience.time
    this.parameters = {};
    this.parameters.count = 200000;
    this.parameters.size = 0.0005;
    this.parameters.radius = 5;
    this.parameters.branches = 3;
    this.parameters.spin = 1;
    this.parameters.randomness = 0.1;
    this.parameters.randomnessPower = 3;
    this.parameters.insideColor = "#ff6030";
    this.parameters.outsideColor = "#1b3984";

    this.initGalaxy();
    // this.gui()
  }
  initGalaxy() {
    let geometry = null;
    this.material = null;
    let points = null;

    if (points !== null) {
      geometry.dispose();
      this.material.dispose();
      this.scene.remove(points);
    }
    
    /**
     * Geometry
     */
    geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(this.parameters.count * 3);
    const colors = new Float32Array(this.parameters.count * 3);
    const scales = new Float32Array(this.parameters.count * 1);
    const randomness = new Float32Array(this.parameters.count * 3)
      
    const insideColor = new THREE.Color(this.parameters.insideColor);
    const outsideColor = new THREE.Color(this.parameters.outsideColor);

    for (let i = 0; i < this.parameters.count; i++) {
      const i3 = i * 3;

      // Position
      const radius = Math.random() * this.parameters.radius;

      const branchAngle =
        ((i % this.parameters.branches) / this.parameters.branches) *
        Math.PI *
        2;



      positions[i3] = Math.cos(branchAngle) * radius ;
      positions[i3 + 1] = 0
      positions[i3 + 2] = Math.sin(branchAngle) * radius;
      
      // randomness
      const randomX =
      Math.pow(Math.random(), this.parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      this.parameters.randomness *
      radius;
    const randomY =
      Math.pow(Math.random(), this.parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      this.parameters.randomness *
      radius;
    const randomZ =
      Math.pow(Math.random(), this.parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      this.parameters.randomness *
        radius;
      
      randomness[i3 + 0] = randomX
      randomness[i3 +1 ] = randomY
      randomness[i3 +2 ] = randomZ

      // Color
      const mixedColor = insideColor.clone();
      mixedColor.lerp(outsideColor, radius / this.parameters.radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
        
        scales[i] = Math.random()
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('aScale',new THREE.BufferAttribute(colors,1))
      geometry.setAttribute('aRandomness',new THREE.BufferAttribute(randomness,3))
    /**
     * Material
     */
    this.material = new THREE.ShaderMaterial({
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      vertexShader: `
      uniform float uTime;
      uniform float uSize;
      
      attribute vec3 aRandomness;
      attribute float aScale;
      
      varying vec3 vColor;
      
      void main()
      {
          /**
           * Position
           */
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
                      
          // Rotate
          float angle = atan(modelPosition.x, modelPosition.z);
          float distanceToCenter = length(modelPosition.xz);
          float angleOffset = (1.0 / distanceToCenter) * uTime *0.2;
          angle += angleOffset;
          modelPosition.x = cos(angle) * distanceToCenter;
          modelPosition.z = sin(angle) * distanceToCenter;
      
          // Randomness
          modelPosition.xyz += aRandomness;
      
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;
          gl_Position = projectedPosition;
      
          /**
           * Size
           */
          gl_PointSize = uSize * aScale;
          gl_PointSize *= (1.0 / - viewPosition.z);
      
          /**
           * Color
           */
          vColor = color;
      }
      
        `,
      fragmentShader: `
        precision mediump float;
        varying vec3 vColor;
        void main(){
            // float strength = distance(gl_PointCoord,vec2(0.5));
            // strength = step(0.5,strength);
            // strength = 1.0 - strength;

            // float strength = distance(gl_PointCoord,vec2(0.5));
            // strength *= 2.0;
            // strength = 1.0 - strength;

            float strength = distance(gl_PointCoord,vec2(0.5));
            strength = 1.0 - strength;
            strength = pow(strength,10.0);

            vec3 color = mix(vec3(0.0),vColor,strength);

            gl_FragColor = vec4(color,1.0);
        }
        `,
      uniforms: {
        uSize: { value: 30 * this.renderer.instance.getPixelRatio() },
        uTime:{value:0}
      },
    });

    /**
     * Points
     */
    points = new THREE.Points(geometry, this.material);
    points.position.y = -2
    this.scene.add(points);


  }
  update() {
    this.material.uniforms.uTime.value =  this.time.elapsed
  }
  gui() {
    // const gui = new dat.GUI()
    // gui.add(this.parameters, 'count').min(100).max(1000000).step(100).onFinishChange(this.initGalaxy)
// gui.add(this.parameters, 'radius').min(0.01).max(20).step(0.01).onFinishChange(this.initGalaxy)
// gui.add(this.parameters, 'branches').min(2).max(20).step(1).onFinishChange(this.initGalaxy)
// gui.add(this.parameters, 'randomness').min(0).max(2).step(0.001).onFinishChange(this.initGalaxy)
// gui.add(this.parameters, 'randomnessPower').min(1).max(10).step(0.001).onFinishChange(this.initGalaxy)
// gui.addColor(this.parameters, 'insideColor').onFinishChange(this.initGalaxy)
// gui.addColor(this.parameters, 'outsideColor').onFinishChange(this.initGalaxy)
  }
}
