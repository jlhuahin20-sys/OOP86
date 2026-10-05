class Printer{
    print(){
        console.log('I am a printer');
    }
}
class ColorPrintr extends Printer{
    print(){
        console.log('I am a color printer');
    }
}
const print1 = new Printer ();
print1.print();
const ColorPrintr1 = new ColorPrintr ();
ColorPrintr1.print();