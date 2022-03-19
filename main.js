import * as THREE from './build/three.module.js';
//
// Global variables
let scene, camera, renderer, pointLight;
//
//
// ###########################
// 1. Base Materials
// ###########################
//
//
//
// Define Scene
scene = new THREE.Scene();
//
// Define Camera
camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(0, 0, +500);
//
// Define Renderer
renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
//
// Rendering Three.js
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
