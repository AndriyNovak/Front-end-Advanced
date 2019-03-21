// import {View} from "../mvc/View.jsx";

export class ViewPackmen  {
    setModel(model,canvas_w,canvas_h,ctx) {
        this.model = model;
        this.canvas_w = canvas_w;
        this.canvas_h = canvas_h;
        
        
        
    }
    animate(ctx,canvas_w,canvas_h) { 
        
          
        ctx.fillStyle = this.model.color;
        ctx.fillRect.apply(ctx, [this.model.position.x, this.model.position.y, 20, 20]);
        
          
        ctx.fillStyle = "blue";
         
        this.model.enemy(ctx,canvas_w,canvas_h); 
        
        ctx.fillRect( this.model.enemy_position_x, this.model.enemy_position_y, 20, 20);
        
   
       
       
    }

    
}