//Zadanie1
const tab = [1, 2, 3, 4];

for(let i of tab){
    console.log(i);
}


//Zadanie2
const tab = ["Dawid", "Karol", "Tomasz", 4, 5, 6];

console.log(tab[0] + " " + tab[1]);

console.log(tab[tab.length -1]);

for(let i of tab){
    console.log(i);
}

for(let i = 0; i < tab.length; i += 2){
    console.log(tab[i]);
}

for(let i of tab){
    if(typeof i === 'string'){
        console.log(i);
    }
}

for(let i of tab){
    if(typeof i === 'number'){
        console.log(i);
    }
}



// Zadanie 3
//1
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let sum = 0; 
for(let i of tab){
    sum += i;
}
console.log(sum);

//2
let sum1 = 0; 
for(let i of tab){
    sum1 -= i;
}
console.log(sum);

//3
let sum2 = 0; 
for(let i of tab){
    sum2 += i;
}
console.log(sum / tab.length);

//4
tab.forEach((i)=>{
    if((tab[i] % 2) != 0)
        console.log(i);
})

//5
tab.forEach((i)=>{
    if((tab[i] % 2) == 0)
        console.log(i);
})

//6
let min = tab[0]; 

for(let i = 0; i < tab.length; i++){
    if(min > tab[i]){
        min = tab[i]
    }
}
console.log(min);

//7
let max = tab[0]; 

for(let i = 0; i< tab.length; i++){
    if(max < tab[i]){
        max = tab[i]
    }
}
console.log(max);

//8
for(let i = tab.length - 1; i >= 0; i--){
    console.log(tab[i]);
}



//Zadanie 4
function table(t){
    let sum = 0;
  for(let i of t){
    sum += i;
    }
console.log(sum);
}

const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

table(tab);


//Zadanie 5
function table(t){
    let sum = 0;
  for(let i of t){
    sum += i;
    }
  let avg = sum/t.length;
  
   for(let i of t){
     i= i*avg;
     console.log(i);
    }
}



const tab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

table(tab1);


//Zadanie 6
function showAverage(t){

    let count = 0;
    let sum = 0;

    t.forEach(i => {
     
        if((tab3[i] % 2) == 0){

            sum += t[i];
            count++;
        }
    });
    console.log(sum / count);
}
   const tab3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
showAverage(tab3);



// Zadanie 7
const tab4 = [6, 3, 8, 26, 12, 21, 1];

const sortTab = tab4.sort((a , b) => a - b);
console.log(sortTab);




//Zadanie 8
const array3 = [7,8,9];
const array4 = [10,11,12];

function sumArrayValue(array3, array4){
    let newArray = [];

    array3.forEach((num1, i) => {
        newArray.push(num1 + array4[i]);
    });
    return newArray;
}
console.log(sumArrayValue(array3, array4));


//Zadanie 9

let numArray12 = [1,2,3,4,5,-21,-10,0];

function reverseNumber(t){

    let newArray = [];

    for(let i = 0; i < numArray12.length; i++){

        if( t[i] == 0)
            newArray.push(0);
        else
            newArray.push((t[i] * (-1))); 
    }

    return newArray;
}

console.log(reverseNumber(numArray12));

