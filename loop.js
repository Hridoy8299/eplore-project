const numbers = [12, 65, 46, 95, 45 ,45]
// for(const number of numbers){
//     console.log(number);
// }

const bottlev={color:'yellow', price:50, isCleaned:true, capacity:1}
// for of can not be use in objects 

const keys = Object.keys(bottlev);
// console.log(keys);

// for off for array
for (const key of keys){
    console.log(key);
    // console.log(key, bottlev[key]);
}

// for in loop for object
 for(const key in bottlev){
    console.log(key, bottlev[key]);
}

/* 3 ways to read an object properties
1. bottle.color
bottle['color']
bottle[key]
*/
