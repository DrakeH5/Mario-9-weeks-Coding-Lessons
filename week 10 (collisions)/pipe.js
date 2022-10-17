var Pipe = function(x, y, height, img) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.img = img;
    this.update = function(){
        ctx.drawImage(this.img, this.x-orginX/2, this.y, 30, this.height)
        if(collisionDetection(this.x-orginX/2, this.y, 30, this.height, marioX, marioY, marioWidth, marioHeight)){
            if(marioY+marioHeight>=this.y&&marioLanded==false){
                marioY--;
                marioLanded=true;
                gravitySpeed=500;
                marioOnPipe=true;
            } else {
                direction = marioX - this.x;
                if(direction+15<0){
                    playerCanMoveRight=false;
                    marioX--;
                } else if(direction>0){
                    playerCanMoveLeft=false;
                    marioX++;
                }
            }
        }
    }
}