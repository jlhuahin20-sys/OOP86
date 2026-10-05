class Book{
    constructor(protected title : string , protected author : string ,protected price : number , protected stock : number){}
    sellBook(quantity: number){
    this.stock -= quantity;
    console.log(`ยอดเงิน: ${this.price * quantity} บาท`);
}
}
class Ebook extends Book {
      constructor( title : string , author : string ,price : number , stock : number,public fileSize : number ,public downloadLink :string ){
        super(title,author,price,stock);
       }
   sellBook(quantity: number){
        this.stock-quantity;
        console.log(`${this.price}บาท สามารถโหลดได้ที่${this.downloadLink}`); 
    }
}
class PrintedBook extends Book {
    constructor(title: string, author: string, price: number, stock: number, public weight: number, public shippingCost: number){
        super(title, author, price, stock);
    }
    sellBook(quantity: number){
        this.stock -= quantity;
        const total = this.price * quantity + this.shippingCost;
        console.log(`ยอดเงินรวมค่าจัดส่ง: ${total} บาท`);
    }
}
const book1 = new Book ("Hello","Devill Rat",599,20);
book1.sellBook(2);
const ebook1 = new Ebook("Hello","Devill Rat",599,20,25,"htpps//hello.com");
console.log(ebook1);
const printbook1 = new PrintedBook ("Hello","Devill Rat",599,20,3,50);
console.log(printbook1);