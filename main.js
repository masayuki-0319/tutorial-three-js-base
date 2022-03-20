import * as THREE from './build/three.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
//
// Global variables
let scene, camera, renderer, pointLight, controls;
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
// Organize device pixel
renderer.setPixelRatio(window.devicePixelRatio);
//
// Rendering Three.js
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
//
//
// ###########################
// 2. Create geometry
// ###########################
//
//
//
//
// Define texture to Geometry
let texture = new THREE.TextureLoader().load('./textures/earth.jpg');
//
// Define Geometry
let ballGeometry = new THREE.SphereGeometry(100, 64, 32);
//
// Define Material
let ballMaterial = new THREE.MeshPhysicalMaterial({ map: texture });
//
// Define Mesh
let ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
scene.add(ballMesh);
//
// Add horizontal light
let directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);
//
// Add point light
pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(-200, -200, -200);
scene.add(pointLight);
//
// View point light helper
let pointLightHelper = new THREE.PointLightHelper(pointLight, 30);
scene.add(pointLightHelper);
//
// Add mouse operation
controls = new OrbitControls(camera, renderer.domElement);
//
//
// ###########################
// Last. Rendering
// ###########################
//
// Circling point light helper
const animate = () => {
  pointLight.position.set(
    200 * Math.sin(Date.now() / 500),
    200 * Math.sin(Date.now() / 1000),
    200 * Math.sin(Date.now() / 500)
  );

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};
animate();
