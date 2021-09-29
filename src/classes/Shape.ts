import { Graphics } from "@pixi/graphics"
import { Segment } from "../segment";

export default class Shape extends Graphics{

    // segments : Segment[];
    constructor(public segments : Segment[]){
        super();

        if( segments)
            this.segments = segments;
    }
}