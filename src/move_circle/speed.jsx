export class speedClass {
    constructor() {

        this.canvas = document.getElementById('move_circle');
        this.ctx = this.canvas.getContext('2d');					
        this.canvas.width=500;
        this.canvas.height= 500;
        this.ctx.strokeRect(0,0,this.canvas.width,this.canvas.height);
        
        
            this.position_X = 100;
            this.position_Y = 100;
            this.speed_X = 0;
            this.speed_Y = 0;
        // var W = 87;
        // var S = 83;
        // var A = 65;
        // var D = 68;
        
        
            this.W = false;
            this.S = false;
            this.A = false;
            this.D = false;
        
       
        
        document.addEventListener('keydown', function(e) {
        if (e.keyCode == 87) {
            this.W = true;            
            this.speed_Y = - 0.1;
            this.position_Y +=  this.speed_Y;
            
            console.log("W");
            
        }
        if (e.keyCode == 83) {
            this.S = true;
            this.speed_Y =  0.1;
            this.position_Y +=  this.speed_Y;
            
        }
        if (e.keyCode == 65) {
            this.A = true;
            this.speed_X = - 0.1;
            this.position_X +=  this.speed_X;
            
        }
        if (e.keyCode == 68) {
            this.D = true;
            this.speed_X =  0.1;
            this.position_X +=  this.speed_X;
           
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
         
        
        
        setInterval(()=>(this.animate(this.position_X,this.position_Y)),125);
        
    }

    animate(position_X,position_Y){ 
       
    //     console.log("x = " + position_X);
    //     console.log("y = " + position_Y);
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.strokeRect(0,0,this.canvas.width,this.canvas.height);
        
        this.ctx.beginPath();
        this.ctx.arc( position_X , position_Y , 20, 0, Math.PI * 2, true); 
        this.ctx.closePath();
        this.ctx.fillStyle = "green";
        this.ctx.fill();

        
       
          
    }


    


}
