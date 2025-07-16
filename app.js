let num1, num2, result, operation

const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')

const plus = document.getElementById('+')
const minus = document.getElementById('-')
const multiply = document.getElementById('*')
const split = document.getElementById('/')
const equal = document.getElementById('equals')

const numberButtons = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')

// Функция для добавления значения на дисплей
function appendToDisplay(value) {
    const display = document.getElementById('display')
    display.textContent = display.textContent === '0' ? value : display.textContent + value
}

// Функция для операций
function oper(num1, num2, operation){
    if(operation == '+'){
        return num1 + num2
    }
    if(operation == '-'){
        return num1 - num2
    }
    if(operation == '*'){
        return num1 * num2
    }
    if(operation == '/'){
        return num1 / num2
    }
}

// Обработчик для цифровых кнопок
numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.dataset.value || this.textContent
        appendToDisplay(value)
    })
})

// Обработчик для кнопки С
document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('display').textContent = '0'
})

// Обработчики для кнопок операторов
plus.addEventListener('click', function() {
    num1 = document.getElementById('display')
    document.getElementById('display').textContent = '0'
    operation = '+'
})

minus.addEventListener('click', function() {
    num1 = document.getElementById('display')
    document.getElementById('display').textContent = '0'
    operation = '-'
})

multiply.addEventListener('click', function() {
    num1 = document.getElementById('display')
    document.getElementById('display').textContent = '0'
    operation = '*'
})

split.addEventListener('click', function() {
    num1 = document.getElementById('display')
    document.getElementById('display').textContent = '0'
    operation = '/'
})

// Обработчик для кнопки равно
equal.addEventListener('click', function() {
    num2 = document.getElementById('display')
    document.getElementById('display').textContent = '0'
    document.getElementById('display').textContent = oper(num1, num2, operation)
})