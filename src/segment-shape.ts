
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

        console.log(this.getGlobalPosition())


        // this.clear();
        // for (let seg of this.segments) {
        //     this.lineStyle(1, 0x0000ff, 1.0)
        //     this.moveTo(seg.p1.x, seg.p1.y);
        //     this.lineTo(seg.p2.x, seg.p2.y)
        // }
    }

    getSegmentsGlobalPosition(): Segment[] {

        let segs = this.segments.map((value, index) => {
            let p1_x = value.p1.x * this.scale.x + this.getGlobalPosition().x
            let p1_y = value.p1.y * this.scale.y + this.getGlobalPosition().y
            let p2_x = value.p2.x * this.scale.x + this.getGlobalPosition().x
            let p2_y = value.p2.y * this.scale.y + this.getGlobalPosition().y
            return new Segment(p1_x, p1_y, p2_x, p2_y);
        })
        return segs
    }
}