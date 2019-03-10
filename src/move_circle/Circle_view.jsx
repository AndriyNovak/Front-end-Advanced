

export class Circle_view {
    constructor(model,ctx){
        this.model = model;
        this.ctx = ctx;
        this.move( this.model.position_X, this.model.position_Y);
    }


    move(position_X,position_Y){
        this.W = false;
        this.S = false;
        this.A = false;
        this.D = false;
        
        document.addEventListener('keydown', function(e) {
            
            if (e.keyCode == 87) {
                this.W = true;            
                this.speed_Y = - 5;
                position_Y +=  this.speed_Y;
                
                // console.log(position_Y);
                // console.log(this.speed_Y);
                // console.log("W");
                
            }
            if (e.keyCode == 83) {
                this.S = true;
                this.speed_Y =  5;
                position_Y +=  this.speed_Y;
                
            }
            if (e.keyCode == 65) {
                this.A = true;
                this.speed_X = - 5;
                position_X +=  this.speed_X;
                
            }
            if (e.keyCode == 68) {
                this.D = true;
                this.speed_X = 5;
                position_X +=  this.speed_X;
               
            }
            });
    
            
            document.addEventListener('keyup', function(e) {
            if (e.keyCode == 87) {
                this.W = false;
               
            }
            if (e.keyCode == 83) {
                this.S = false;
            }
            if (e.keyCode == 65) {
                this.A = false;
            }
            if (e.keyCode == 68) {
                this.D = false;
            } 
            });
           
           
                setInterval(()=>{
                    if (position_X > 500 || position_Y > 500 ||
                        position_X < 0 || position_Y < 0){
                        console.log("Game over");          
                        position_X = 500/5;
                        position_Y = 500/5;
                        this.animate(this.ctx,position_X,position_Y);
                    } else {
                        this.animate(this.ctx,position_X,position_Y);
                    }
                    
                },20);
                   
}
    animate(ctx,position_X,position_Y){ 
        
        ctx.clearRect(0,0,500,500);
        ctx.beginPath();
        ctx.lineWidth =5;
        ctx.strokeStyle = "blue";
        ctx.fillStyle = "lightgray";
        ctx.fillRect(0,0,500,500); 
        ctx.strokeRect(0,0,500,500);
        ctx.stroke();  
        
        ctx.arc(position_X , position_Y , 20, 0, Math.PI * 2, true);        
        ctx.fillStyle = this.model.color;
        ctx.fill();

    }
    

}