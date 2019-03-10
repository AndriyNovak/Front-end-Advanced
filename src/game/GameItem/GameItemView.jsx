export class GameItemView {    
    constructor(model){
        this.model = model;
    }
    animate(ctx){     // controller
        ctx.fillStyle = this.model.type;               // view
        ctx.fillarc.apply(ctx, [10,10,20,20]); // view
        ctx.fillRect.apply(ctx, [50,50,20,20]);
    }
    
   
}