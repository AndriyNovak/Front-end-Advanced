import {ModelPackmen} from "./ModelPackmen.jsx";
import {ViewPackmen} from "./ViewPackmen";

export class ControllerPackmen  {
    
        constructor(color,position,ctx,canvas_w,canvas_h) {
            this.model = new ModelPackmen(position,ctx,canvas_w,canvas_h);
            this.view = new ViewPackmen;    
           
            this.canvas_w = canvas_w;
            this.canvas_h = canvas_h;
            this.view.setModel(this.model,canvas_w,canvas_h,ctx);
            this.model.setColor(color);

            this.position = position;
            this.ctx = ctx;
            
            this.animate(this.ctx,this.canvas_w,this.canvas_h);
           
    
        // Listen for keydown events
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 87) {
                this.moveUp();
            }
            if (e.keyCode === 83) {
                this.moveDown();
            }
            if (e.keyCode === 68) {
                this.moveRight();
            }
            if (e.keyCode === 65) {
                this.moveLeft();
            }

        });
    }
   
    moveUp() {
        this.model.moveUp();
    }

    moveDown() {
        this.model.moveDown();
    }
    moveLeft() {
        this.model.moveLeft();
    }
    moveRight() {
        this.model.moveRight();
    }

    

    animate(ctx,canvas_w,canvas_h) {
        this.canvas_w = canvas_w;
        this.canvas_h = canvas_h;
        if (this.model.isWin_Y(this.canvas_h) ) {
           
               this.model.setDefaultValues();
               this.model.posEnemyCurrent(); 
               console.log("isWin_Y()");  
               
           }else 
           if (this.model.isWin_X(this.canvas_w) ) {
            //    console.log(this.model.enemy_position_x); 
            this.model.setDefaultValues(); 
            this.model.posEnemyCurrent(); 
            console.log("isWin_X()");  
            
        }


        this.view.animate(ctx,canvas_w,canvas_h)

       
       
       
    }
}