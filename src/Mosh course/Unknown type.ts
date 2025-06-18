// The unknow types

function render( document : unknown){

    // Check if it's a string
    if (typeof document ==="string"){
        console.log("It's a string", document.toLocaleUpperCase());
    }
    // Check if it's an object with specific methods

    if (
        typeof document ==="object" &&
        document !== null &&
        "move" in document &&
        typeof (document as any).move ==="function"

    ){
        (document as any).move();
    }
    if (
        typeof document ==="object" &&
        document !== null && "fly" in document &&
        typeof (document as any).fly === "function"
    )
    (document as any).fly();

}

// How can you define more checks? using interfaces 
// check the exercise on interface,  the continuation of unknown type