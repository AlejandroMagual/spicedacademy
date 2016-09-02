
function Rectangle(width,height) {
    this.width = width;
    this.height = height;
    this.getArea = function() {
        return this.width * this.height;
    };
}

function Square(dim) {
    this.width = dim;
    this.height = dim;
    Rectangle.call(this, dim, dim);
}
