export{};
class  Character {
    constructor(protected name:string ,protected health:number ,protected level :number){}
    takeDamage(damage:number){
        this.health -= damage;
    }
    attack():void{}
    get detail():string {
        return `${this.name},Health: ${this.health},Level: ${this.level}`;
    }
}
class Mage extends Character {
    constructor(name:string ,health :number , level : number ,private mana:number){
        super(name,health,level);
    }
    attack(): void {
        console.log(`${this.name}กำลังร่ายเวท`)
    }
    get detail():string {
        return `${super.detail},Mana : ${this.mana}`;
    }
}
class Warrior extends Character {
    constructor(name:string,health:number,level:number,private stamina:number){
        super(name,health,level);
    }
    attack(): void {
        console.log(`${this.name}กำลังฟันดาบ`)
    }
    get detail():string {
        return `${super.detail},stamina : ${this.stamina}`;
    }
}
const mage1 = new Mage("ดา",50,20,100);
console.log(mage1.detail);
mage1.takeDamage(20);
console.log(mage1.detail);
mage1.attack();

const Warrior1 = new Mage("อำพล",500,100,900);
console.log(Warrior1.detail);
Warrior1.takeDamage(480);
console.log(Warrior1.detail);
Warrior1.attack();