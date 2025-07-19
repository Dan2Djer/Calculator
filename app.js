let num1, num2, result, operation;

const numberButtons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const dotButton = document.getElementById('dot');

// Функция для добавления значения на дисплей
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Функция для операций
function calculate(num1, num2, operation) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    switch(operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error';
            }
            return num1 / num2;
        default:
            return num2;
    }
}

// Обработчик для цифровых кнопок
numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.dataset.value || this.textContent;
        appendToDisplay(value);
    });
});

// Обработчик для точки
dotButton.addEventListener('click', function() {
    const display = document.getElementById('display');
    if (!display.textContent.includes('.')) {
        appendToDisplay('.');
    }
});

// Обработчик для кнопки С
clearButton.addEventListener('click', function() {
    document.getElementById('display').textContent = '0';
    num1 = undefined;
    num2 = undefined;
    operation = undefined;
});

// Обработчики для кнопок операторов
operators.forEach(operator => {
    operator.addEventListener('click', function() {
        num1 = document.getElementById('display').textContent;
        operation = this.textContent === '×' ? '*' : this.textContent;
        document.getElementById('display').textContent = '0';
    });
});

// Обработчик для кнопки равно
equal.addEventListener('click', function() {
    if (num1 !== undefined && operation !== undefined) {
        num2 = document.getElementById('display').textContent;
        const result = calculate(num1, num2, operation);
        document.getElementById('display').textContent = result;
        num1 = result.toString();
    }
});