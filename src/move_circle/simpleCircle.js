
window.addEventListener("load", function(){


    canvas = document.getElementById('simpleCircle');
    ctx = canvas.getContext('2d');					
    canvas.width=500;
    canvas.height= 500;
    ctx.strokeRect(0,0,canvas.width,canvas.height);
    
    var obj = {
            position_X : 100,
            position_Y : 100,
            speed_X : 0,
            speed_Y : 0
    }
    
    let timer;
    
   
        
        timer = setInterval(animate,155);
      
    

    
function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.strokeRect(0,0,canvas.width,canvas.height);

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
    obj.speed_Y = -0.1;
    obj.position_Y += obj.speed_Y;
  
}
if (e.keyCode === S) {
    keys.S = true;
    obj.speed_Y = 0.1;
    obj.position_Y += obj.speed_Y;  
}
if (e.keyCode === A) {
    keys.A = true;
    obj.speed_X = - 0.1;
    obj.position_X += obj.speed_X;    
}
if (e.keyCode === D) {
    keys.D = true;
    obj.speed_X = 0.1;
    obj.position_X += obj.speed_X;   
}


});

// Listen for keyup events
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


 if (obj.position_X > canvas.width || obj.position_Y > canvas.height
    || obj.position_X <0 || obj.position_Y < 0){
    alert("Game Over");
     
    }

ctx.beginPath();
ctx.arc(obj.position_X,obj.position_Y , 20, 0, Math.PI * 2, true); 
ctx.closePath();

ctx.fillStyle = "green";
ctx.fill();

}


  

    


})
