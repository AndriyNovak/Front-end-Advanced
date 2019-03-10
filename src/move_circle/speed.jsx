export class speedClass {
    constructor() {

        this.canvas = document.getElementById('move_circle');
        this.ctx = this.canvas.getContext('2d');					
        this.canvas.width=500;
        this.canvas.height= 500;
        this.ctx.strokeRect(0,0,this.canvas.width,this.canvas.height);
        
        this.obj = {
                position_X : 100,
                position_Y : 100,
                speed_X : 0,
                speed_Y : 0
        }
         
        
       
        setInterval(()=>(this.animate(this.obj.position_X,this.obj.position_Y,this.obj.speed_X,this.obj.speed_Y)),25)
        
    }

    animate(position_X,position_Y,speed_X,speed_Y){ 
       
        // console.log("x = " + position_X);
        // console.log("y = " + position_Y);
        // console.log("speed_X = " + speed_X);
        // console.log("speed_Y = " + speed_Y);
         
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.strokeRect(0,0,this.canvas.width,this.canvas.height);
        
        var W = 87;
        var S = 83;
        var A = 65;
        var D = 68;
        this.x = position_X;
        this.y = position_Y;
        
        let arr = [];

        var keys = {
        W: false,
        S: false,
        A: false,
        D: false
        };
        
        document.addEventListener('keydown', function(e) {
        if (e.keyCode === W) {
            keys.W = true;            
            speed_Y = - 0.1;
            this.y +=  speed_Y;
            
            console.log("W");
            
        }
        if (e.keyCode == S) {
            keys.S = true;
            speed_Y =  0.1;
            this.y +=  speed_Y;
            
        }
        if (e.keyCode == A) {
            keys.A = true;
            speed_X = - 0.1;
            this.x +=  speed_X;
            
        }
        if (e.keyCode == D) {
            keys.D = true;
            speed_X =  0.1;
            this.x +=  speed_X;
           
        }
        });

        
        document.addEventListener('keyup', function(e) {
        if (e.keyCode == W) {
            keys.W = false;
           
        }
        if (e.keyCode == S) {
            keys.S = false;
        }
        if (e.keyCode == A) {
            keys.A = false;
        }
        if (e.keyCode == D) {
            keys.D = false;
        } 
        });

        
        
        this.ctx.beginPath();
        this.ctx.arc( this.x , this.y , 20, 0, Math.PI * 2, true); 
        this.ctx.closePath();
        this.ctx.fillStyle = "blue";
        this.ctx.fill();
        
       
          
    }


    


}
