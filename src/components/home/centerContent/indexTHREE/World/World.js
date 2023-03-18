import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Earth from "./Earth.js";
import Raycaster from "./Raycaster";


export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Wait for resources
    // this.scene.add(new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshStandardMaterial()))

    this.experience.resources.on('sourceReady', () => {
      this.earth = new Earth();
      this.environment = new Environment();
      this.raycaster = new Raycaster();
    })

  }
}
