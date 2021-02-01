//ZADANIE 1
const moreDivs = document.querySelectorAll('.more-divs');

function myFunc(paramArray) {
    let newArray = [];
    for(let i = 0; i < paramArray.length; i++) {
        newArray.push(paramArray[i].tagName)
    }
    return newArray;
}

console.log(myFunc(moreDivs));


//ZADANIE 2
var sList = document.querySelector('ul.short-list');

function zadanie2(element){
    console.log(element.innerHTML);
    console.log(element.outerHTML);
    console.log(element.className);
    console.log(element.classList);
    console.log(element.dataset);
}

zadanie2(sList)


//ZADANIE 3
var sumAndSub = (element) => {
    var num1 = parseInt(element.dataset.numberone);
    var num2 = parseInt(element.dataset.numbertwo);
    var num3 = parseInt(element.dataset.numberThree);
    var sum = num1 + num2 + num3;
    var sub = num1 - num2 - num3;
    return [sum,sub];
};
console.log(sumAndSub(document.querySelector('#datasetCheck')));


//ZADANIE 4
const span = document.getElementById('spanText');
span.innerText = 'zmieniony tekst';


//ZADANIE 5
document.querySelector('#spanText').className = 'aaaa'


//ZADANIE 6
var table = document.getElementById("classes");
function takeclass(classList) {
    console.log(classList)
    let newArray = [];
    for(var i=0; i<classList.length; i++)
        {
            console.log(classList[i]);
            newArray.push(classList[i]);
        }
        
        console.log(newArray.join(" + "));
    
    
    table.className = '';
    
    console.log('Usunięto wszystkie klasy');
    
}

takeclass(table.classList)


//ZADANIE 7

let longListElements = document.getElementById('longList')
let liElements = longListElements.querySelectorAll('li')
liElements.forEach((liDataset) => {
    if (liDataset.dataset.text == null) {
        liDataset.dataset.text = "text";    
    }
});



//ZADANIE 8	

let newObject = (fString) => {
    return {
        newClass: fString
    }
}
const addClass = (sString) => {
    const newClass = sString.newClass;
    const div = document.getElementById('myDiv');
    div.classList.add(newClass);
}
const randomObject = newObject("string_z_parametru");
addClass(randomObject);


//ZADANIE 9
const numbers = document.getElementById('numbers');
const a = (randomNumber) => {
	if (randomNumber % 2 === 0) {
		numbers.className = 'even';
	} else {
		numbers.className = 'odd';
	}
};
a(Math.round(Math.random()*10));


//ZADANIE 10
let longListID = document.getElementById('longList');
function a(longListID) {
        let longValue = [];
        const liElement = longListID.querySelectorAll('li')
        liElement.forEach((secondParam) => {
        longValue.push(secondParam.innerText.trim());
    });
        return longValue;
}
console.log(a(longListID))



//ZADANIE 11

const longList = document.getElementById('longList')
function chValue (parent) {
    const liElements = parent.querySelectorAll('li')
    liElements.forEach(childElement => {
        childElement.dataset.previousNumber = childElement.innerText;
        childElement.innerText = Math.round(Math.random() * 10);
    })
}
chValue(longList)