export{};
class Employee{
    constructor(public name : string){}
}

class Programmer extends Employee {
    constructor(name:string, public lang: string){
        super(name);
    }
}

class Manager extends Employee {
    constructor(name:string , public dept : string){
        super(name);
    }
}
const emp1 = new Employee ("DevillRat");
console.log(emp1.name);
const Programmer1 = new Programmer("Anutin","typrscript");
console.log(Programmer1.name);
console.log(Programmer1.lang);
const man1 = new Manager ("Rat","IT");
console.log(`${man1.name}เป็นผู้จัดการแผนก ${man1.dept}`);