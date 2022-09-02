//1. create object using  object literals 
const player = {};
player.name='small nirob';
player.speciality='batsman'
player.bat= function(){
    console.log('swiing your bat');
}

console.log(player);
player.bat();

const student = {name: 'pandey',
                job:'eating',
            ball: function(){
                console.log('throw the ball')
            },
        salary:110000}

// 2. object constructor
        const person = new Object();
            console.log(person);

// 3. object create method 
const item = Object.create(null);
console.log(item);

// 4. class
class Person {
    name='abul';
    address= 'sodor ghat';
    constructor(age){
       this.age=age; 
    }
}

const person1 = new Person(56);
console.log(person1);

// 5. function 
function car (model, price){
    this.model = model;
    this.price =price; 
}

const tesla = new car('elon', 32);
