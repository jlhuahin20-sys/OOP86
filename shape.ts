class Shape {
    constructor(public color : string){}
}
class Circle extends Shape {
    constructor(color :string ,public radius : number){
        super(color);
    }
    area(): number{
        return Math.PI * this.radius*this.radius ;
    }
}
class Square extends Shape {
    constructor(color : string , public side : number){
        super(color);
    }
    area():number{
        return this.side * this.side ;
    }
}
const circle1 = new Circle ("Blue",20);
console.log(`Circle - Color: ${circle1.color},Area: ${circle1.area()}`);
const Square1 = new Square ("Red",5);
console.log(`Square - Color: ${Square1.color},Area: ${Square1.area()}`);
