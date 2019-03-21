import {ControllerPackmen} from "./mvs_Packmen/ControllerPackmen.jsx";
import * as React from 'react';



export class Packmen extends React.Component {
    constructor(state,props) {
        super(state,props)

        this.canvas = document.getElementById('packmen');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 300;
        this.canvas.height = 300;
        this.position = {x:20 ,  y:20}
    
        this.ControllerPackmen = new ControllerPackmen("green",this.position,this.ctx,this.canvas.width,this.canvas.height);
   
        this.items = [];
        this.items.push(this.ControllerPackmen );
              
       
        this.draw();
    }


    render() {
        return (
            <div>
               
               
                <button onClick={() => this.Start()}>Start</button>
                <button onClick={() => this.Stop()}>Stop</button>
                <button onClick={() => this.Reset()}>Reset</button>

            </div>
        )
    }




    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.items.forEach((item) => item.animate(this.ctx));

        
        requestAnimationFrame(() => this.draw());
    }

    Start(){
        // this.ControllerPackmen = new ControllerPackmen("green",this.position,this.ctx,this.canvas.width,this.canvas.height);
   
       
        // this.items.push(this.ControllerPackmen );
    }

}