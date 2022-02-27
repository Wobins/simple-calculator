let screen = document.querySelector('.screen h3')
let buttons = document.querySelectorAll('.button')
let equalSign = document.querySelector('.equalSign')
let clearBtn = document.querySelector('.clearBtn')


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