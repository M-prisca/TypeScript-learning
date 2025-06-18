interface Flyable{
    fly (): void;
}
interface Moveable{
    move():void;
}

 function renders( document : unknown){
    if (isMoveable(document)){
        document.move();
    }
    if(isFlyable(document)){
        document.fly();
    }
 }

 function isMoveable(doc : unknown): doc is Moveable{
    return(
        typeof doc ==="object" &&
        doc !== null &&
        "move" in doc &&
        typeof (doc as any).move==="function"
    );
 }

 function isFlyable(doc :unknown): doc is Flyable{
    return (
        typeof doc === "object" &&
        doc !== null &&
        "fly" in doc &&
        typeof(doc as any).fly ==="function"
    );
 }