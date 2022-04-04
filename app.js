let screen = document.querySelector('.screen p');
let buttons = document.querySelectorAll('.button');
let equalSign = document.querySelector('.equal');
let clearBtn = document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete');


const calculate = () => {
    operation = screen.textContent;
    console.log(operation)
    new_operation = replace(operation)
    console.log(new_operation)
    result = eval(new_operation);
    screen.textContent = result;
}


// function to clear the screen
const clearScreen = () => {
    // window.location.reload();
    screen.textContent = '';
}


// function to delete the last input
function deletion() {
    let displayed = screen.textContent;
    let arr = displayed.split("");    
    let i = arr.length - 1;
    let newArr = arr.slice(0, i);
    // console.log(newArr)
    screen.textContent = "";
    newArr.forEach(n => screen.append(n));
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
        screen.append(el);
    })
});


equalSign.addEventListener('click', calculate); // Do the operation

clearBtn.addEventListener('click', clearScreen); // Clear the screen

deleteBtn.addEventListener('click', deletion ); // Delete the last item of the opeartion chain


