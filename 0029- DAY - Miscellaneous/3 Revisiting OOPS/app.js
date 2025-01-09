//                           FACTORY FUNCTION      
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log("my name is ", this.name)
        }
    }

    return person;
}
let persson1 = PersonMaker("adam", 25)
persson1.talk();
let persson2 = PersonMaker("eve", 25)
persson2.talk();





//                           NEW Keyword
//    Constructor -> doesnt return anything & start with capital letter
function Pperson(name, age) {
    this.name = name;
    this.age = age;

}

Pperson.prototype.talk = function () {
    console.log(`Hi, my name is  ${this.name}`)
}

let pp1 = new Pperson("Tony", 21)
let pp2 = new Pperson("Steve", 21)

pp1.talk();
pp2.talk();






//                          Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, my name is  ${this.name}`)
    }
}
let p1 = new Person("Tony", 21)
let p2 = new Person("Spidy", 21)

p1.talk();
p2.talk();





//                          Inheritance

class Personn {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Myself ${this.name}`)
    }
}
class Student extends Personn {
    constructor(name, age, marks) {
        super(name, age) //calling parent class constructor
        this.marks = marks;
    }

}
let std1 = new Student("Adam", 25, 100)
std1.talk()

class Teacher extends Personn {
    constructor(name, age, subject) {
        super(name, age) //calling parent class constructor
        this.subject = subject;
    }
}
let teach1 = new Teacher("Eve", 25, 100)
teach1.talk();

//example-2
class Mammal {
    constructor(name) {
        this.type = "warm-blooded";
        this.name = name;
    }
    eat() {
        console.log(this.name, " is eating");
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name); // Calls the constructor of Mammal
    }
    bark() {
        console.log("woof.....")
    }

}
let d1 = new Dog("tommy");
d1.eat()
d1.bark()

class Cat extends Mammal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("meow.....")
    }
}

let c1 = new Cat("catty");
c1.eat()
c1.meow()