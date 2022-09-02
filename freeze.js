const bottlev={color:'yellow', price:50, isCleaned:true, capacity:1}
const keys = Object.keys(bottlev);
console.log(keys);

const values =Object.values(bottlev);
console.log(values);
console.log(bottlev);

const pair = Object.entries(bottlev);
console.log(pair);
console.log(bottlev);
Object.seal(bottlev);
// seal er pore object property add kora jay na, value mpdify kora jay
// freeze diye ekdom fixed kora jay, kono kisu change hobe na
delete bottlev.isCleaned;
console.log(bottlev);