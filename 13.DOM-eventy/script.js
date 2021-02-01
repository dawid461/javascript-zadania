//ZADANIE 1


let el = document.getElementById('test-event');

el.addEventListener("click", function(event1){
   console.log(event1); 
});

document.addEventListener("mousemove", function(event2){
    console.log(event2);
});
el.addEventListener("mouseover",function(event3){
   console.log(event3); 
});

document.addEventListener("keypress",function(event4){
   console.log(event4); 
});

document.addEventListener("scroll",function(event5){
       console.log(event5);                   
 });

let text = document.getElementById("input-test");

text.addEventListener("change", function(event6)
 {
    console.log(event6);
});


//ZADANIE 2


function takee() {
    const buttonEx2 = document.getElementById('ex2')
    buttonEx2.addEventListener('click', enterText => {
        let dataT = enterText.target.dataset.text;
        let below = enterText.target.nextElementSibling;
        
        below.innerText = dataT;
    })
}
takee();



//ZADANIE 3

const square = document.querySelector('div#ex3')
square.addEventListener('mouseover', blueSquare =>{
    blueSquare.target.style.backgroundColor = '#0000ff'
})
square.addEventListener('mouseout', redSquare => {
    redSquare.target.style.backgroundColor = '#ff0000'
})



//ZADANIE 4

const ex3 = document.getElementById("ex3-err");
const inputT = document.getElementById("input-test")
inputT.addEventListener("input", checkValue => {
    let value = "";
    let numbers = /[0-9]/
    const element = checkValue.target.value;
    if(numbers.test(element)){
        value = "You can't eneterd numbers here";
    } else {
       value = "";
    }

    ex3.innerHTML = value;
})


//ZADANIE 5


const divEx5 = document.getElementById('ex5');
const buttonEx5 = document.getElementById('ex5-button');
let numberClick = 0
buttonEx5.addEventListener('click', function counting() {
    numberClick++
    if(numberClick ==  10) {
        buttonEx5.removeEventListener('click', counting)
    }
    else {
        divEx5.innerHTML = numberClick
    }
})


//ZADANIE 6


document.addEventListener('scroll', bgcolor => {
    let valueTop = window.scrollY
    if (valueTop > 200) {
        document.body.style.backgroundColor = '#ff0000 '
    }
    if (valueTop < 200) {
        document.body.style.backgroundColor = "#ffffff"
    }
})


//ZADANIE 7

const calcButtons = document.querySelectorAll('#calculator div button')
const calcInput = document.querySelector('#calculator input');
let calcEval = false;
let calcClear = false;
calcButtons.forEach((button) => {
    button.addEventListener('click', e => {
        if (calcClear == true) {
            calcClear = false;
            calcInput.value = '';
        }
        calcInput.value = calcInput.value + e.target.innerText;
        if (calcEval == true) {
            calcEval = false;
            calcInput.value = eval(calcInput.value);
            calcClear = true;
        }
        if (['/', '*', '+', '-'].includes(e.target.innerText)) {
            calcEval = true;
        }
    }); 
});
