

export class Circle_view {
    constructor(model){
        this.model = model;
        
    }
    animate(ctx){ 
        ctx.fillStyle = "lightgray"; 
        ctx.clearRect(0,0,500,500);
        ctx.fillRect(0,0,500,500);
        ctx.beginPath();
        console.log( "speed = " + this.model.speed);
        
        ctx.arc(this.model.position_X,this.model.position_Y , 20, 0, Math.PI * 2, true); 
        ctx.closePath();
        ctx.fillStyle = this.model.color;
        ctx.fill();
       
       
          
    }
    

}