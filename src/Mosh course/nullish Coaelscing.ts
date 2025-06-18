let speed : number | null=null;
let ride ={
    // speed : speed !== null ? speed :30
    speed : speed ?? 30 
}   

// A nullish "??" value means that the value can be null or undefined