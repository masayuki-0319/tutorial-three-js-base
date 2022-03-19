import * as THREE from './build/three.module.js';
//
//
// ###########################
// 1. Base Materials
// ###########################
//
//
//
// Define Scene
//
let scene = new THREE.Scene();
//
// Define Camera
//
let camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
//
// Define Renderer
//
let renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
