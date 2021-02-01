// Zadanie 1
let a = 2;
let b = 3;

if(a > b){
    console.log(a);
}else
{
    console.log(b);
}


// Zadanie 2
let a = 12;
let b = 25;
let c = 17;

if(a > b && a > c)
{
    console.log(a);
}
else if(b> a && b > c)
{
    console.log(b);
}
else
{
    console.log(c);
}


//zadanie3
let string = "Lubię JavaScript";

for(let i = 0; i<10;i++)
  {
    console.log(string);
  }


// Zadanie 4
let result = 0;

for(let i = 1; i<= 10; i++)
{
    result += i;
}
console.log(result);



// Zadanie 5
var n = 5;

for (let i= 0; i<= n; i++)
{
    if(i%2==0)
    {
        console.log(i + " - parzysta");
    }
    else
    {
        console.log(i + " - nieparzysta");
    }
}


// Zadanie 6
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log("i= " + i + ", j= " + j);
    }
}



// Zadanie 7
for(let i= 0; i<= 100; i++)
{
    if( i % 15 == 0)
    {
        console.log(" FizzBuzz ");
    }
    else if(i % 5 == 0)
    {
        console.log(" Buzz ");
    }
    else if( i % 3 == 0)
    {
        console.log(" Fizz ");
    }
    else
    {
        console.log(i + " ");
    }
}

//Zadanie 8 
// a)
let stars = '*';
let spacer = ' ';
for (var a = 0; a < 5; a++) {
    var result = '';
    for (var b = 0; b <= a; b++) {
        result += stars;
    }
    console.log(result);
}

//b)
var x = '*';
var z = 5;
for(var i = 0; i < z; i++)
  {
    var space = '';
    for(var k = 0; k < z-i; k++)
      {
        space += ' ';
      }
    console.log(space + x);
    x += ' *';
  }

// c)
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars;
        result += (e < c) ? stars : '';
    }
    console.log(result);
}