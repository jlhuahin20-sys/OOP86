class staff {
    private name :string;
    private salary : number ;

    constructor(n : string ,s : number ){
        this.name = n ;
        this.salary = s ;
    }
    getDetails():string{
        return`Name: ${this.name}, Salary: ${this.salary}บาท `;
    }
}
class Manager extends staff {
    private department : string ;
    constructor(n :string , s : number , d :string){
        super(n,s);
        this.department = d ;
    }
getDetails():string{
    return `${super.getDetails()} , Department : ${this.department}`;
}
}
const staff1 = new staff ("มานพ",120000);
console.log(staff1.getDetails());
const manager1 = new Manager ("หมวย",500000,"IT")
console.log(manager1.getDetails());