let digits = document.querySelectorAll('.keyboard');
let display = document.querySelector('.display');
let deleteBtn = document.querySelector('.delete');

for (const digit of digits) {
    digit.addEventListener('click', function() {
        let value = this.textContent;
        if (value !== 'c' && value !== '=' ) {
            display.append(value);
        }
    })
    digit.addEventListener('mousedown', function () {
        this.classList.add('focus')
    })
    digit.addEventListener('mouseup', function () {
        this.classList.remove('focus')
    })    
}

deleteBtn.addEventListener('mousedown', function () {
    let value = display.textContent;
    let arr = value.split("");
    //console.log(arr)
    let i = arr.length - 1;
    let newArr = arr.slice(0, i);
    //console.log(newArr)
    display.textContent = "";
    newArr.forEach(n => display.append(n));
})

const equalSign = document.querySelector('.equalSign');
const operators = document.querySelectorAll('.sign');

equalSign.addEventListener('click', function () {
    let value = display.textContent;
    let arr = value.split("");
    console.log(arr);
    
    if (arr.includes('/')) {
        //alert("division");
        let i = arr.indexOf('/');
        let term1 = parseInt(value.slice(0, i));
        let term2 = parseInt(value.slice(i + 1));
        display.textContent = term1 / term2;
    }

    if (arr.includes('x')) {
        //alert("multiplication");
        let i = arr.indexOf('x');
        let term1 = parseInt(value.slice(0, i));
        let term2 = parseInt(value.slice(i + 1));
        display.textContent = term1 * term2; 
    }

    if (arr.includes('+')) {
        //alert("addition");
        let i = arr.indexOf('+');
        let term1 = parseInt(value.slice(0, i));
        let term2 = parseInt(value.slice(i + 1));
        display.textContent = term1 + term2; 
    }

    if (arr.includes('-')) {
        //alert("substraction");
        let i = arr.indexOf('-');
        let term1 = parseInt(value.slice(0, i));
        let term2 = parseInt(value.slice(i + 1));
        display.textContent = term1 - term2; 
    }
})


