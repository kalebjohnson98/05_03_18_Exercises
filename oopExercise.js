class Person{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} goes Nom Nom Nom!`);
    }
    speak(){
        console.log(`${this.name} says hello!`);
    }
    legend(){
        console.log(`${this.name} is a legend in the making.`);
    }
    pro(){
        console.log(`${this.name} is a phenomenal JavaScript teacher.`)
    }
    superCool(){
        console.log(`${this.name} has a vibe/personality that is a joy to have around. Es muy bueno.`)
    }
    jk(){
        console.log(`JK, ${this.name}'s Young Link is too good... lol not really`)
    }
}

class Student extends Person{
    constructor(name){
        super(name);
    }
    speak(){
        console.log(`A friendly student named, ${this.name}, says hello!`);
    }
    master(){
        console.log(`${this.name} is a hardworking, savage.`);
    }
    youngSav(){
        console.log(`${this.name} is a great helper to have around. His insight and guidance has been greatly appreciated.`)
    }
    meleeMonster(){
        console.log(`${this.name} is a Super Smash Bros monster?!?!?!?! Well find out as soon as Tommy brings his GameCube setup. #Luigi #vs #Fox o.O`)
    }
}

let k = new Person("Kaleb");
k.eat();
k.speak();
k.legend();
let s = new Student("DJ");
s.eat();
s.speak();
s.master();
let t = new Person("Tommy");
t.pro();
let j = new Student("Justin");
j.youngSav();
j.pro();
j.meleeMonster();
k.jk();
let kel = new Person("Kelsey");
kel.superCool();