
import { GameItemController } from "./GameItem/GameItemController.jsx";

export class Game {
   	
   	//	static ID = "game";  статичний метод  this.canvas = document.getElementById(Game.ID);
    //	id = "game"; динамічний метод  this.canvas = document.getElementById(this.id);
		
   		constructor(){
					this.canvas = document.getElementById('game');
					this.ctx = this.canvas.getContext('2d');					
					this.canvas.width=300;
					this.canvas.height= 300;

					this.items = [];
					this.items.push(this.GameItemController = new GameItemController("blue"));
					 
					
					this.draw();
					
				
					}

					changeColor() {
						this.items.forEach((item) => item.setNewColor());
					}
		 
					draw() {
							this.ctx.clearRect(0, 0, 300, 300);
							this.items.forEach((item) => item.animate(this.ctx));
							requestAnimationFrame(() => this.draw());
					}
					
	 
		}