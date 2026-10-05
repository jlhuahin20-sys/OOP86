class Product{
    private _name : string ;
    private _price : number ;
    private _stock : number ;

    constructor(n:string,p:number,s:number){
        this._name=n;
        this._price=p;
        this._stock=s;
    }
    setPrice(newprice : number): void {
        if (newprice > 0 ){
            this._price = newprice ;
        }else{
            console.error((`⚠️ Warning: ราคาต้องมากกว่า 0 (ค่าที่ส่งมา: ${newprice}) — ไม่มีการอัปเดต`));
        }
    } 
    setStock(newStock:number):void{
        if(newStock >= 0){
            this._stock =newStock;
        }else{
            console.warn(`⚠️ Warning: จำนวนสินค้าห้ามติดลบ (ค่าที่ส่งมา: ${newStock}) — ไม่มีการอัปเดต`);
        }
    }
    get inventoryValue(): number {
    return this._price * this._stock;
  }
  get price(): number {
    return this._price;
  }
  get stock(): number {
    return this._stock;
  }
}
const p = new Product("เสื้อยืด", 150, 20);
console.log("ราคาปัจจุบัน:", p.price);

p.setPrice(-50); 
console.log("ราคาหลังลองตั้งค่าติดลบ:", p.price);

console.log("มูลค่ารวมสินค้าคงคลัง:", p.inventoryValue);