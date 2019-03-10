
import { Circle_controller } from "./Circle_controller.jsx";

export class CircleGame {
    constructor(){
        this.canvas = document.getElementById('move_circle');
        this.ctx = this.canvas.getContext('2d');					
        this.canvas.width=500;
        this.canvas.height= 500;
        this.obj = {
                position_X : 100,
                position_Y : 100,
                speed_X : 0,
                speed_Y :0
        }
        
        this.Circle_controller = new Circle_controller("green",this.obj.position_X,this.obj.position_Y,this.ctx);
        // this.Circle_controller.animate(this.ctx);
        
        
        
        // this.items = [];
	// 	this.items.push(this.Circle_controller = new Circle_controller("blue",this.position_X,this.position_Y));
					 
				
	// 	this.draw();
        		
				
	}

        

        // draw() {
        //         // this.ctx.clearRect(0, 0, 500, 500);
        //         this.items.forEach((item) => item.animate(this.ctx));
               
        //         // requestAnimationFrame(() => this.draw());
        // }


        
        
      
        
    

}
