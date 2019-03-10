
import { Circle_model } from "./Circle_model.jsx";
import { Circle_view } from "./Circle_view.jsx";

export class Circle_controller {
    constructor(color,position_X,position_Y,speed) {

        this.model = new Circle_model();
        this.view = new Circle_view(this.model);

        this.model.setColor(color);
      
        // this.model.setPosition(position_X,position_Y);
        this.model.move(position_X,position_Y,speed);
    }

   

    animate(ctx) {
       this.view.animate(ctx);
    }

    

    
}