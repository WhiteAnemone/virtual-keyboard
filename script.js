const main = document.createElement('main');
const container = document.createElement('section');
const title = document.createElement('h1');
const input = document.createElement('textarea');
const keyboardWrapper = document.createElement('div');

document.body.append(main);

main.append(container);
container.className = 'container';

container.append(title);
title.className = 'title';
title.textContent = 'RSS Виртуальная клавиатура';

container.append(input);
input.className = 'input';
input.setAttribute('rows', '15');

container.append(keyboardWrapper);
keyboardWrapper.className = 'keyboard-wrapper';

// Создание рядов клавиатуры
for (let i = 0; i < 5; i++) {
  let keyboardRow = document.createElement('div');
  keyboardRow.className = 'keyboard-row';
  keyboardWrapper.append(keyboardRow);
}

// Массив рядов клавиатуры
const keyboardRowArray = Array.from(document.querySelectorAll('.keyboard-row'));

// Функция создания клавиатуры
const createKeyboard = () => {
  for (let i = 0; i < 14; i++) {
    key = document.createElement('div');
    keyboardRowArray[0].append(key);
    key.className = 'key-button';
  }
  for (let i = 14; i < 29; i++) {
    key = document.createElement('div');
    keyboardRowArray[1].append(key);
    key.className = 'key-button';
  }
  for (let i = 29; i < 42; i++) {
    key = document.createElement('div');
    keyboardRowArray[2].append(key);
    key.className = 'key-button';
  }
  for (let i = 42; i < 55; i++) {
    key = document.createElement('div');
    keyboardRowArray[3].append(key);
    key.className = 'key-button';
  }
  for (let i = 55; i < 64; i++) {
    key = document.createElement('div');
    keyboardRowArray[4].append(key);
    key.className = 'key-button';
  }
};

// Первоначальное создание клавиатуры
createKeyboard();

// Массив всех клавиш
let arrayKeys = Array.from(document.querySelectorAll('.key-button'));

// Назначение классов спецклавишам
arrayKeys[13].classList.add('key-button_backspace');
arrayKeys[14].classList.add('key-button_tab');
arrayKeys[28].classList.add('key-button_del');
arrayKeys[29].classList.add('key-button_capslock');
arrayKeys[41].classList.add('key-button_enter');
arrayKeys[42].classList.add('key-button_left-shift');
arrayKeys[53].classList.add('key-button_up-arrow');
arrayKeys[54].classList.add('key-button_right-shift');
arrayKeys[55].classList.add('key-button_left-ctrl');
arrayKeys[56].classList.add('key-button_left-alt');
arrayKeys[57].classList.add('key-button_win');
arrayKeys[58].classList.add('key-button_space');
arrayKeys[59].classList.add('key-button_right-alt');
arrayKeys[60].classList.add('key-button_left-arrow');
arrayKeys[61].classList.add('key-button_down-arrow');
arrayKeys[62].classList.add('key-button_right-arrow');
arrayKeys[63].classList.add('key-button_right-ctrl');

// Английская клавиатура
const engKeyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'UP', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'LEFT', 'DOWN', 'RIGHT', 'Ctrl'];

// Русская клавиатура
const rusKeyboard = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'UP', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'LEFT', 'DOWN', 'RIGHT', 'Ctrl'];

// Переменная, отслеживающая язык клавиатуры
let language = 'English';

// Функция создания клавиатуры
const createKeys = (value) => {
  for (let i = 0; i < value.length; i++) {
    arrayKeys[i].innerHTML = value[i];
  }
}

createKeys(engKeyboard);