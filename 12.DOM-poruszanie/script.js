//Zadanie 1
var parent = document.getElementById("buz").parentElement;
console.log('aaa', parent);

var brat = document.getElementById("buz").nextElementSibling;
console.log(brat);

var dzieci = document.getElementById("foo").children;
console.log(dzieci);

var rodzic = document.getElementById("foo").parentNode;
console.log(rodzic);

var pierwszeDziecko = document.getElementById("foo").children[0];
console.log(pierwszeDziecko);

var srodkoweDziecko = document.getElementById("foo").children[1];
console.log(srodkoweDziecko);


//Zadanie 2
const listenEvent = (element) => {
    element.addEventListener("click", () => {
        console.log(element.children[0].children[0].children[0].children[1].
                   children[0].children[0].textContent);
    })
}

ex2Element = document.querySelector("#ex2");
listenEvent(ex2Element);


//Zadanie 3
const add = (elements) => {
    for(var i = 0; i < elements.length; i++){
       
        elements[i].addEventListener("click", function(){
            this.nextElementSibling.style.display = "block";
        })
   }
}

add(document.querySelectorAll('#ex3 button'));


//zadanie 4

const divElements = document.querySelectorAll('#ex3 button');
divElements.forEach((divFunc) => {
    divFunc.addEventListener('click', changeColor => {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    const parentColor = changeColor.target.parentElement
    parentColor.style.backgroundColor = randomColor;
    })
})


//zadanie 5

let liElements = document.querySelectorAll('div#ex5 ul li')
let divElements = document.querySelectorAll('div#ex5 div')

//a)
divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
        let divColor = event.target.style.backgroundColor
        liElements[0].style.backgroundColor = divColor;
    })
})


//b)
divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
        let divColor = event.target.style.backgroundColor
        liElements[liElements.length - 1].style.backgroundColor = divColor;
    })
})


//c)
divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
    let divColor = event.target.style.backgroundColor
    for(let i = 0; i>liElements.length; i++) {
        if(i % 2 == 1) {
            liElements[i].style.backgroundColor = divColor;
        }
    }
    })
})

//d)
divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
    let divColor = event.target.style.backgroundColor
    for(let i = 0; i<liElements.length; i++) {   
    liElements[i].style.backgroundColor = divColor;
    }
    })
})


//e)

divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
    let divColor = event.target.style.backgroundColor
    liElements[0].parentElement.style.backgroundColor = divColor
    })
})




//zadanie 6


const taskone = document.getElementById('ex6').firstElementChild.firstElementChild.firstElementChild
console.log(taskone)

const tasktwo = document.getElementById('ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
console.log(tasktwo);

const taskthree = document.getElementById('ex6').parentElement.firstElementChild.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild
console.log(taskthree)

