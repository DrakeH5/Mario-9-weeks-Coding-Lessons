var Pipe = function(x, y, height, img) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.img = img;
    this.update = function(){
        ctx.drawImage(this.img, this.x, this.y, 30, this.height)
    }
}