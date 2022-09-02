const students = {
    name: 'kodol ali',
    money: 5000,
    study: 'math',
    subjects: ['calculus', 'algebra', 'geomatry'],
    exam : function (){
        console.log(this.money);
    },
    improveExam : function(subject){
        this.exam();
        return `${this.name} is taking improve exam on ${subject}`
    } ,
    treatde:  function(amount){
        this.money = this.money - amount;
        return this.money;
    }
}

students.exam();
const reexam = students.improveExam('algebra');
console.log(reexam);

const remaining=students.treatde(100);
console.log(remaining);
