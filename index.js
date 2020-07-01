
function Mouse (color){
    this.color = color;
    this.dead = false;
}

Mouse.prototype.die = function(){
    this.dead = true;
}

function Cat (){
    stomath = [];
}

Cat.prototype.eat = function (mouse){
    this.stomath.push(mouse);
}

var mickey = new Mouse('white');
var jerry = new Mouse('orange');

var tom = new Cat();
console.log(tom.eat(mickey));