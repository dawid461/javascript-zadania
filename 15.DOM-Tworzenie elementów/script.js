//ZADANIE 1

const newdiv = document.createElement('div');
newdiv.innerHTML = "To jest nowy element"
document.body.appendChild(newdiv);

//ZADANIE 2

let favFruits = ['Pomarańcza', 'Banan', 'Brzoskwinia', 'Truskawka', 'Kiwi', 'Śliwka']
const newUl = document.createElement('ul');
for (let i = 0; i < 6; i++) {
	const newLi = document.createElement('li');
    newLi.innerText = favFruits[i];
	newUl.appendChild(newLi);
}
document.body.appendChild(newUl);


//ZADANIE 3
document.body.addEventListener('click', () => {
    const lis = document.querySelectorAll('ul li');
    lis.forEach((child, i) => {
        if (i % 2 === 0) child.remove();
    });
});

//ZADANIE 4

let newButton = document.createElement('button');
    newButton.innerText = 'Button to remove';
    newButton.className = 'removeTask';
    root.appendChild(newButton);
let removingButton = document.querySelectorAll('.removeTask')
newButton.addEventListener('click', (remove) => {
    remove.target.remove();
})


//ZADANIE 5

const randomNumber = Math.round(Math.random()*20)
for(let i = 0; i < randomNumber; i++) {
    newDiv = document.createElement('div')
    root.appendChild(newDiv);
    newDiv.innerHTML = `To jest div numer ${i + 1}`;
}


//ZADANIE 6

const oneDiv = document.createElement('div');
const twoDiv = document.createElement('div');
const threeDiv = document.createElement('div');
const oneSpan = document.createElement('span');
const twoSpan = document.createElement('span');
document.body.appendChild(oneDiv);
oneDiv.innerHTML = 'To jest div';
document.body.appendChild(oneSpan);
oneSpan.innerHTML = 'To jest span';
document.body.appendChild(twoDiv);
twoDiv.appendChild(threeDiv);
threeDiv.innerHTML = 'To jest div';
document.body.appendChild(twoSpan);
twoSpan.innerHTML = 'To jest span';



//ZADANIE 7

const liContent = ['pierwszy', 'drugi', 'trzeci', 'czwarty', 'piąty', 'szósty'];
const createDiv = document.createElement('div');
const firstList = document.createElement('ul');
const secondList = document.createElement('ul');
liContent.forEach((element) => {
    const firstListElement = document.createElement('li');
    firstListElement.innerText = element;
    firstList.append(firstListElement);
});
const firstButton = document.createElement('button');
const secondButton = document.createElement('button');
firstButton.innerText = 'First List';
secondButton.innerText = 'Second List';
firstButton.addEventListener('click', () => {
    secondList.append(firstList.lastElementChild);
    secondButton.disabled = false;
    if (!firstList.children.length) {
        firstButton.disabled = true;
    }
});
secondButton.addEventListener('click', () => {
    firstList.append(secondList.lastElementChild);
    firstButton.disabled = false;
    if (!secondList.children.length) {
        secondButton.disabled = true;
    }
});
secondButton.disabled = true;
createDiv.append(firstList);
createDiv.append(firstButton);
createDiv.append(secondList);
createDiv.append(secondButton);
document.body.append(createDiv, document.querySelector('#root'));


//ZADANIE 8

function createForm(param) {
    let newLabel = document.createElement('label');
    newLabel.innerHTML = param;
    return newLabel;
}
const result = document.createElement('div');
const form = document.createElement('form');
const whichElement = document.createElement('input');
const whichColor = document.createElement('input');
const content = document.createElement('input');
const numbersOfElements = document.createElement('input');
const makeBr = document.createElement('br')
form.appendChild(createForm('Which element should create?'));
form.appendChild(whichElement);
form.appendChild(makeBr)
form.appendChild(createForm('Which color should be have?'));
form.appendChild(whichColor);
form.appendChild(makeBr)
form.appendChild(createForm('What should be in element content?'));
form.appendChild(content);
form.appendChild(createForm('How many elements should be create?'));
form.appendChild(numbersOfElements);
root.appendChild(form);
root.appendChild(result);
let button = document.createElement('button');
button.innerText = "Run query";
button.type = "submit";
button.addEventListener('click', (event) => {
    event.preventDefault();
    for (let i = 0; i < parseInt(numbersOfElements.value); i++) {
        let newElement = document.createElement(`${whichElement.value}`);
        newElement.style.color = `${whichColor.value}`;
        newElement.innerText = content.value;
        root.appendChild(newElement);
    }
});
form.appendChild(button);


//ZADANIE 9



const div = document.createElement('div');
const form = document.createElement('form');
const surname = document.createElement ('input');
const name = document.createElement ('input');
const age = document.createElement ('input');
const numberOfKids = document.createElement ('input');
const button = document.createElement ('button');
const button2 = document.createElement ('button');
function createForm(param) {
    let newLabel = document.createElement('label');
    newLabel.innerHTML = param;
    return newLabel;
}
root.appendChild(form)
form.appendChild(createForm('Name: '))
form.appendChild(name)
form.appendChild(createForm('Surame: '))
form.appendChild(surname)
form.appendChild(createForm('Age: '))
form.appendChild(age)
form.appendChild(createForm('Numbers of Kids: '))
form.appendChild(numberOfKids)
form.appendChild(button)
form.appendChild(button2)
button.innerHTML = 'Więcej'
button2.innerHTML = "Utwórz"


//ZADANIE 11


function CreateDivNumbers(param) {
  const numbersString = param.match(/[0-9]+/g);
  
  if (numbersString.length > 0) {
  const numbers = numbersString.map(item => Number(item));
    
  const addingNumbers = numbers.reduce( (x,y) => x + y )
  console.log(addingNumbers)
  const multiplingNumbers = numbers.reduce( (x,y) => x * y )
      for (let i = 0; i < multiplingNumbers; i++) {
        const resultDiv = document.createElement("div");
        resultDiv.textContent = param;
        document.body.appendChild(resultDiv);
        }
     }
  }
 CreateDivNumbers('2bb7c9af3bb')


//ZADANIE 12


function checkt(valueT) {
    let firstObject = {};
  
    firstObject.firstValue = valueT;
  
    firstObject.checkString = function () {
        let checkAla = this.firstValue.indexOf('Ala') > -1;
      
        if (checkAla == false) {
            let alaDoesntExist = document.createElement('div');
            root.appendChild(alaDoesntExist);
            alaDoesntExist.innerHTML = 'Słowo Ala nie występuje w tekście.';
        }
        this.firstValue = this.firstValue.replaceAll('Ala', 'Ola');
      console.log(firstObject)
    }
firstObject.checkString();
}
checkt("Ola uczy się zdalnie.")
checkt("Ala  nie uczy się zdalnie.")





//ZADANIE 13
const dataArray = ['Lorem', 'L0r3m', 'g8 b8 m8', 'foo2bar4ever'];
function returnHowManyLetters(arr) {
    let numberCounter = 0;
    arr.forEach(v => {
        const str = v.replace(/[^a-z]/gi, '');
        numberCounter += str.length;
    });
    return numberCounter;
}

function sumNumbers(arr) {
    const numbers = arr.map(v => v.match(/[0-9]+/g));
    const allNumbers = numbers.flat();
    return allNumbers.reduce((a, b) => Number(a) + Number(b));
}

function avgNumbers(arr) {
    const numbers = arr.map(v => v.match(/[0-9]+/g));
    const allNumbers = numbers.flat().filter(v => v);
    const sum = allNumbers.reduce((a, b) => Number(a) + Number(b));
    return sum / allNumbers.length;
}

console.log(returnHowManyLetters(dataArray));
console.log(sumNumbers(dataArray));
console.log(avgNumbers(dataArray));




// Zadanie 14
let obj = {
    name: '',
    surname: ''
};

function modifyObj(name, surname) {
    obj.name = name;
    obj.surname = surname;
    obj.nameLength = name.length;
    obj.surnameLength = surname.length;
    if (name.length > 5 || surname.length > 5) {
        const btn = document.createElement('button');
        btn.innerText = 'Restore';
        btn.addEventListener('click', (e) => {
            obj = {
                name: '',
                surname: ''
            }
        });
        document.body.appendChild(btn)
    }
}

modifyObj('Dawid', 'Czuba');
