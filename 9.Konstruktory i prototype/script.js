//Zadanie 1
function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
    this.setAge = (age) => {
        this.age = age;
    }
    this.setCity = (city) => {
        this.city = city;
    }
}

const personOne = new Person("dawid", "kowal", 20, "Polska", "Krakow", "PL");
const personTwo =  new Person("artur", "rojek", 12, "Polska", "Warszawa", "FR");
const personThree =  new Person("patryk", "dobry", 22, "Polska", "Łódź", "DE");
const personFour =  new Person("magda", "cich", 31, "Polska", "Katowice", "AU");
const personFive =  new Person("julia", "kowalska", 44, "Polska", "Gdańsk", "PL");

personOne.setAge(15);
personOne.setCity("Warszawa");

console.log(personOne);
console.log(personTwo);
console.log(personThree);
console.log(personFour);
console.log(personFive);



//Zadanie 2


function Calculator() {
    this.memory = [];
    this.sum = function(a, b) {
        this.memory.push('Dodawanie');
        return a + b;
    }
    
    this.sub = function(a, b) {
        this.memory.push('Odejmowanie');
        return a - b;
    }
    
    this.mult = function(a, b) {
        this.memory.push('Monożenie');
        return a * b;
    }
    
    this.div = function(a, b) {
        this.memory.push('Dzielnie');
        return a / b;
    }
    
    this.clear = function(a, b) {
        this.memory = [];
    }
    
}

const calc = new Calculator();
console.log(calc.sum(2,5));
console.log(calc.sum(5,5));
console.log(calc.memory)
calc.clear();
console.log(calc.memory)


//Zadanie 3
function Constructor() { 
    this.number = 0;
    this.myInterval = undefined;
    
    this.init = function(){
        this.myInterval = setInterval(() => {
            this.setNumber()
        }, 1000);
    }
    
    this.setNumber = function() { 
        this.number = Math.floor(Math.random() * 10);
        this.checkNumber();
    }
    
    this.checkNumber = function() { 
        console.log(this.number)
        if(this.number > 5) {
            clearInterval(this.myInterval);
        }     
    }
}

const newProg = new Constructor();
newProg.init();




