import { Container } from "@pixi/display";
import { Graphics } from "@pixi/graphics";
import { Point } from './point';
import { Rectangle } from './rectangle';
import { Segment } from './segment';

export const drawScenePixi = (stage: Container, lightSource: Point, room: Rectangle, blocks: Rectangle[], walls: Segment[]) => {

    for (let child of stage.children) {
        child.destroy();
    }

    // stage.clear();
    let g_walls = new Graphics();
    g_walls.lineStyle(2, 0x000000, 1.0);
    g_walls.drawRect(room.x, room.y, room.width, room.height)
    for (let wall of walls) {

        g_walls.moveTo(wall.p1.x, wall.p1.y);
        g_walls.lineTo(wall.p2.x, wall.p2.y);
    }
    stage.addChild(g_walls)

    let g_blocks = new Graphics();
    for (const block of blocks) {
        g_blocks.beginFill(0x000000, 1.0);
        g_blocks.drawRect(block.x, block.y, block.width, block.height);
        g_blocks.endFill();
    }

    stage.addChild(g_blocks);
}

export const drawVisibilityTriangles = (graphic: Graphics, color: number, lightSource: Point, visibilityOutput: Point[][]) => {
    graphic.clear();
    // graphic.lineStyle(1, color, 1.0);
    for (const points of visibilityOutput) {
        graphic.beginFill(0x555555);
        graphic.moveTo(lightSource.x, lightSource.y);
        graphic.lineTo(points[0].x, points[0].y);
        graphic.lineTo(points[1].x, points[1].y);
        graphic.closePath();

        // ctx.stroke();
    }

};