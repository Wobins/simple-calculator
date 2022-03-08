let screen = document.querySelector('.screen p');
let buttons = document.querySelectorAll('.button');
let equalSign = document.querySelector('.equal');
let clearBtn = document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete');


const calculate = () => {
    try {
        operation = screen.textContent;

        let arr = operation.split("");

        while (arr.includes('(')) {
            let index = arr.indexOf('(');

            if (index !== -1) {
                arr[index] = '*(';
            }
        }

        operation = arr.join("");
        result = eval(operation);

        if (result === Infinity || isNaN(result)) {
            console.log(result);
            screen.textContent = "MATH ERROR";
        } else{
            screen.textContent = result;
        }

    } catch (error) {
        console.log(error.message);
        screen.textContent = "SYNTAX ERROR";
    }
}


const clearScreen = () => {
    // window.location.reload();
    screen.textContent = '';
}


function deletion() {
    let displayed = screen.textContent;
    let arr = displayed.split("");    
    let i = arr.length - 1;
    let newArr = arr.slice(0, i);
    // console.log(newArr)
    screen.textContent = "";
    newArr.forEach(n => screen.append(n));
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