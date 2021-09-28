import { drawScene } from './draw-scene';
import { drawScenePixi, drawVisibilityTriangles } from './draw-scene-pixi';
import { loadMap, processSegments } from './load-map';
import { calculateVisibility } from './visibility';
import { Rectangle } from './rectangle';
import { Segment } from './segment';
import { Point } from './point';
import { Application, Graphics } from 'pixi.js'
import "../style.scss"



// Prepare canvas
const canvas = document.getElementById('scene') as HTMLCanvasElement;
// if (!canvas) {
//   throw new Error('Could not get element');
// }
// const ctx = canvas.getContext('2d');
// if (!ctx) {
//   throw new Error('Could not get context');
// }
// const xOffset = 0.5;
// const yOffset = 0.5;
// ctx.translate(xOffset, yOffset);


const app = new Application({
  width: 800,
  height: 800,
  backgroundColor: 0xff0000,
  view: canvas,
  antialias: true
})
document.body.appendChild(app.view)



// // Setup scene
const room = new Rectangle(0, 0, 700, 500);

const walls = [
  new Segment(20, 20, 20, 120),
  new Segment(20, 20, 100, 20),
  new Segment(100, 20, 150, 100),
  new Segment(150, 100, 50, 100),
];

const blocks = [
  new Rectangle(50, 150, 20, 20),
  new Rectangle(150, 150, 40, 80),
  new Rectangle(400, 400, 40, 40),
];

let lightSource = new Point(500, 50)
const segments = loadMap(room, blocks, walls, lightSource);

let scene = new Graphics();
app.stage.addChild(scene);

let triangles = new Graphics();
app.stage.addChild(triangles);

drawScenePixi(scene, new Point(50, 50), room, blocks, walls);
const run = (lightSource: Point) => {

  let endpoints = processSegments(lightSource, segments);
  let visibility = calculateVisibility(lightSource, endpoints);
  drawVisibilityTriangles(triangles, 0x00ff00, lightSource, visibility);

  // requestAnimationFrame(() => { })
}

canvas.addEventListener('mousemove', ({ pageX, pageY }) => {
  run(new Point(pageX, pageY));
});

run(new Point(100, 100));
