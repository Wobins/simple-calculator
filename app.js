let screen = document.querySelector('.screen');
let responseScreen = document.querySelector('.response-screen');
let buttons = document.querySelectorAll('.button');
let equalSign = document.querySelector('.equal');
let clearBtn = document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete');


const getClasses = (element) => document.getElementsByClassName(element)
const getClass = (element) => document.querySelector(`.${element}`)
const getId = (element) => document.getElementById(element)
const getTags = (element) => document.getElementsByTagName(element)


const calculate = () => {
    let operation = responseScreen.textContent;
    console.log(operation)
    let new_operation = replace(operation)
    console.log(new_operation)
    let result = eval(new_operation);
    console.log(result)
    screen.textContent = responseScreen.textContent
    responseScreen.textContent = result;
}


// function to clear the screen
const clearScreen = () => ( responseScreen.textContent = '')


// function to delete the last input
function deletion(el) {
    let displayed = el.textContent;
    let arr = displayed.split("");    
    let i = arr.length - 1;
    let newArr = arr.slice(0, i);
    // console.log(newArr)
    el.textContent = "";
    newArr.forEach(n => el.append(n));
}


// function to replace HTML entities with commmon operators in JS
function replace(str) {
    const mapObj = {
        '÷': "/",
        '×': "*",
        '%': "/100",
        '−': "-"
    };
    new_str = str.replace(/\b(?:÷|×|%|−)\b/gi, matched => mapObj[matched]);
    new_str = new_str.replace("(", "*(");
    new_str = new_str.replace("÷", "/");
    new_str = new_str.replace("×", "*");
    new_str = new_str.replace("%", "/100");
    new_str = new_str.replace("−", "-");
    return new_str;
}


// Display each button value on screen
buttons.forEach(button => {
    button.addEventListener('click', () => {
        el = button.textContent;
        responseScreen.append(el);
    })
});


equalSign.addEventListener('click', calculate); // Do the operation

// Clear the screen
clearBtn.addEventListener('click', clearScreen); 

deleteBtn.addEventListener('click', () => {
    if (responseScreen.textContent == '') {
        deletion(screen)
    } else {
        deletion(responseScreen)
    } 
} ); // Delete the last item of the opeartion chain


