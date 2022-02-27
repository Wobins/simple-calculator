let screen = document.querySelector('.screen p')
let buttons = document.querySelectorAll('.button')
let equalSign = document.querySelector('.equal')
let clearBtn = document.querySelector('.clear')
let deleteBtn = document.querySelector('.delete')


// const display = () => {

// }

buttons.forEach(button => {
    button.addEventListener('click', () => {
        el = button.textContent
        screen.append(el)
    })
});

equalSign.addEventListener('click', () => {
    operation = screen.textContent;
    result = eval(operation)
    screen.textContent = result
})

clearBtn.addEventListener('click', () => {
    screen.textContent = ''
})

deleteBtn.addEventListener('click', function () {
    let displayed = screen.textContent;
    let arr = displayed.split("");
    //console.log(arr)
    let i = arr.length - 1;
    let newArr = arr.slice(0, i);
    //console.log(newArr)
    screen.textContent = "";
    newArr.forEach(n => screen.append(n));
})