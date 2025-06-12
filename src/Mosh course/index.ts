type Customer ={
    birthday?: Date
}
function getCustomer(id: number): Customer | null |undefined{
    return id ===0 ? null : { birthday: new Date()}
}
let Customer = getCustomer(1);
// Optional property access operator
console.log(Customer?.birthday?.getFullYear());

// Optional element access operator
//customer?.[0]

// Optional call
let log: any =null;
log?.('a');