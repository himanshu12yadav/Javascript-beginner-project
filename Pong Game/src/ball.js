export default class Ball{
    constructor(){
        this.image = document.querySelector('#ball');
        this.position = {
            x: 10,
            y: 300
        }
        this.speed = {
            x: 4,
            y: 4
        }        
    }

    draw(ctx){
        ctx.
    }

    update(){
        this.position.x +=this.speed.x;
        this.position.y += this.speed.y;

    }
}