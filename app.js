// Объявляем все переменные через const/let
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');

const plus = document.getElementById('+');
const minus = document.getElementById('-');
const multiply = document.getElementById('*');
const split = document.getElementById('/');
const equal = document.getElementById('equals'); 

const numberButtons = document.querySelectorAll('.number'); // исправлено название переменной

// Функция для добавления значения на дисплей
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = display.textContent === '0' ? value : display.textContent + value;
}

// Обработчик для цифровых кнопок
numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.dataset.value || this.textContent;
        appendToDisplay(value);
    });
});

// Обработчик для кнопки С
document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('display').textContent = '0'
})

// Обработчик для кнопки равно
equal.addEventListener('click', function() {

})