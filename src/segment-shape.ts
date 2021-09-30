
import * as PIXI from 'pixi.js'
import { Segment } from "./segment";

export default class SegmentShape extends PIXI.Graphics {

    segments: Segment[];
    constructor(_segments: Segment[]) {
        super();
        this.segments = []
        if (_segments) {

            this.segments = _segments;
        }

        this.position.x = 100
        console.log(this.getGlobalPosition())



    }

    getSegmentsGlobalPosition(): Segment[] {

        let segs = this.segments.map((value, index) => {
            let p1_x = value.p1.x + this.getGlobalPosition().x
            return new Segment(p1_x, 0, 0, 0);
        })
        return segs
    }
}