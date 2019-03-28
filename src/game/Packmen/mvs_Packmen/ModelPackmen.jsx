// import {Model} from "../mvc/Model.jsx";



export class ModelPackmen {
    
    constructor(position,ctx,canvas_w,canvas_h) {
        this.color = '';
        this.position = position;
        this.ctx = ctx;
        this.canvas_w = canvas_w;
        this.canvas_h = canvas_h;
       
        this.random_w = Math.floor(Math.random() * (canvas_w-20));
        this.random_h = Math.floor(Math.random() * (canvas_h-20));
        this.enemy_position_x = this.random_w;
        this.enemy_position_y = this.random_h;
        // this.enemy_position_x = 50;
        // this.enemy_position_y = 50;
       
        
    }

  
    setDefaultValues() {
        
        this.enemy_position_x = 150;
        this.enemy_position_y = 150;
    }
    

    setColor(color) {
        this.color = color;
    }
   

    moveUp() {
        this.position.y -= 5;
    }

    moveDown() {
        this.position.y += 5;
    }
    moveLeft() {
        this.position.x += -5;
    }
    moveRight() {
        this.position.x += 5;
    }

    isWin_Y() {
       
       
        
        return ((this.enemy_position_y  < 0) || (this.enemy_position_y > (300)));
    }
    isWin_X(){
      
       
        return ((this.enemy_position_x < 0) || (this.enemy_position_x > (300)));
    }





    enemy(ctx,canvas_w,canvas_h){
       
       
        this.enemy_position_x += 1;
        
        this.posEnemyCurrent();
        
        

        if (this.direction ===0){
            this.enemy_position_y += -1;
           
       }
       else if (this.direction ===1){
            this.enemy_position_x += 1;
            
       }
       else if (this.direction ===2){
           this.enemy_position_y += 1;
         
      }
      else if (this.direction ===3){
       this.enemy_position_x += -1;
     
       }
    }

    posEnemyCurrent(){
        // this.direction = direction;
        // while(this.isWin_X() || this.isWin_Y){
            if (this.enemy_position_y % 20 == 0 || this.enemy_position_x % 20 == 0 ){
            this.direction =  Math.floor(Math.random() * 4);
            
           
            }
        // }
        
         
    }
    


    
   
}