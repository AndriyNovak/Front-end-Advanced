
import { Circle_model } from "./Circle_model.jsx";
import { Circle_view } from "./Circle_view.jsx";

export class Circle_controller {
    constructor(color,position_X,position_Y,ctx) {
        this.position_X = position_X;
        this.position_Y = position_Y;

        this.model = new Circle_model(this.position_X,this.position_Y);
        this.view = new Circle_view(this.model,ctx);

        this.model.setColor(color);
      
        
        // this.model.move(position_X,position_Y);
    }

   

    animate(ctx) {
       this.view.animate(ctx);
    }

    

    
}