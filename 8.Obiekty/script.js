//Zadanie 1
var car = {
    make: "Mercedes",
    color: "Grey",
    year: "2020"
};

console.log(car);
console.log(car.color);

//Zadanie 2
var car = {
    make: "Mercedes",
    color: "Grey",
    year: "2020",
    changeMake: function newMake(newMake)
    {
        this.make = newMake;
    }
};

car.changeMake("BMW");
console.log(car.make);



//Zadanie 3
let obj = {
    sum: 0,
    calculateSum(testArray) {
        this.sum = testArray.reduce((a, b) => {return a + b});
    }
}

obj.calculateSum([20, 50, 30]);
console.log(obj.sum);


//Zadanie 4
var car = {
    type:'Audi',
    name_driver:'Steven',
    age: '15'
}

for(let key in car) {
    console.log(key +":"+ car[key]);
}



//Zadanie 5
var car = {
    make: "Mercedes",
    color: "Grey",
    year: "2020"
};

car.newColors = {
    color1: "Brown",
    color2: "Green"
};

console.log(car.newColors);


//Zadanie 6
var car = {
    make: "Mercedes",
    color: "Grey",
    year: "2020"
};

car.wheels = "super";

car.sayHello = () => console.log("Hello");

car.sayHello();
console.log(car.wheels)