class Employee {
    private fristname : string ;
    private lastname : string ;

    constructor(fname : string , lname: string){
        this.fristname = fname ;
        this.lastname = lname ;
    }
    get  fullname(): string{
        return`${this.fristname}${this.lastname}`;
    }
    set fullname(name:string){
        const [fname,lname]=name.split(' ');
        this.fristname = fname ;
        this.lastname = lname ;
    }
}
const emp1 = new Employee("Nanthiphat","Ruamwong");
console.log(emp1.fullname);
emp1.fullname = "Hello";
console.log(emp1.fullname);

const emp2 = new Employee("มานะ","มั่งมี");
console.log(emp2.fullname);