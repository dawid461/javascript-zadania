//Zadanie 1
function result(name)
{
  console.log("Udało się");
}

result();


//Zadanie 2
function sayHey(name)
{
  console.log("Hey " + name);
}

sayHey("dawid");

//Zadanie3
const tab = [1,2,3,4];

function showTab(tab1)
{
  return tab1;
}
console.log(showTab(tab));


//zadanie4
const showString = (str) => {
    let c = 0;
    let time = setInterval(() => {
        console.log(str);
    if(++c >= 5){
        clearInterval(time);
        console.log('Koniec')
    }
    }, 3000)
}
showString('Hello');
