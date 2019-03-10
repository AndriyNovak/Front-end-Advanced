
export class Circle_model {
    constructor() {
        this.color = '';
        
       
    }

    setColor(color) {
        this.color = color;
    }
    // setPosition(position_X,position_Y) {
      
    //     this.position_X = position_X;
    //     this.position_Y = position_Y;
    //     this.move(position_X,position_Y);
    // }

    move(position_X,position_Y,speed){
        this.position_X = position_X;
        this.position_Y = position_Y;
        
        var speedValue = speed;
        
            var W = 87;
            var S = 83;
            var A = 65;
            var D = 68;
            
            // Keep track of pressed keys
            var keys = {
            W: false,
            S: false,
            A: false,
            D: false
            };
            // Listen for keydown events
            document.addEventListener('keydown', function(e) {
            if (e.keyCode === W) {
                keys.W = true;            
                speed = -1;
                speedValue += speed;
                this.speed = speedValue;
                console.log("W");
            }
            if (e.keyCode === S) {
                keys.S = true;
                speed = 1;
                console.log("S");
            }
            if (e.keyCode === A) {
                keys.A = true;
                speed = -1;
                console.log("A");
            }
            if (e.keyCode === D) {
                keys.D = true;
                speed = 1;
                console.log("D");
            }
            });
    
            // Listen for keyup events
            document.addEventListener('keyup', function(e) {
            if (e.keyCode === W) {
                keys.W = false;
                // speed = 0;
            }
            if (e.keyCode === S) {
                keys.S = false;
            }
            if (e.keyCode === A) {
                keys.A = false;
            }
            if (e.keyCode === D) {
                keys.D = false;
            }
            });
    
            
         
       
    }
    


    

}