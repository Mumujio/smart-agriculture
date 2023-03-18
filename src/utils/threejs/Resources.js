import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import EventEmitter from "./EventEmitter.js";

export default class Resources extends EventEmitter {
  constructor(sources) {
    super();

    this.sources = sources;

    this.items = {};
    this.toLoad = this.sources.length;
    this.loaded = 0;
    this.loadProgress = 0;
    // 管理器进度
    this.manager = new THREE.LoadingManager(
      () => {},
      (url, loaded, total) => {
        this.loadProgress = (loaded / total) * 100;
        this.trigger("sourceOnReady", [this.loadProgress]);
        // 加载好
        if (this.loadProgress == 100) this.trigger("sourceReady");
      }
    );

    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader(this.manager);
    this.loaders.textureLoader = new THREE.TextureLoader(this.manager);
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader(this.manager);
  }

  startLoading() {
    //    // 设置管理器函数
    //     this.manager.onProgress((url, itemsLoaded, itemsTotal) => {
    //         this.loadProgress = parseInt((itemsLoaded / itemsTotal) * 100);
    //     })

    // 如果没有资源需要加载，也准备好
    if (this.toLoad == 0) {
      setTimeout(() => {
        console.log("sourceReady");
        this.trigger("sourceReady");
        return;
      }, 100);
    }
    // Load each source
    for (const source of this.sources) {
      if (source.type === "gltfModel") {
        this.loaders.gltfLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "texture") {
        this.loaders.textureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "cubeTexture") {
        this.loaders.cubeTextureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      }
    }
  }

  sourceLoaded(source, file) {
    this.items[source.name] = file;

    this.loaded++;

    // if (this.loaded === this.toLoad) {
    //   this.trigger("ready");
    // }
  }
}
