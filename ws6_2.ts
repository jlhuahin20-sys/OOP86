class WeatherStation {
    private celsius : number ;

    constructor(c:number ){
        this.celsius = c;
    }
    get farenheit(): number {
        return (this.celsius*9/5)+32 ;
    }
    get celsuis(): number {
        return this.celsuis ;

    }
    set farenheit (f:number) {
        if(f<-459.67){
            console.error("ค่าอุณหภูมิต้องไม่ต่ำกว่าค่าศูนย์สัมบูรณ์")
        }else{
        this.celsius = (f-32)*5/9 ;
        }
    }
}

const station1 = new WeatherStation(32);
console.log(`Celsuis: ${station1.celsuis} Farenheit: %{station.farenheit}`);
station1.farenheit = 200 ;
console.log(`Celsuis: ${station1.celsuis} Farenheit: %{station.farenheit}`);
station1.farenheit = -500 ;