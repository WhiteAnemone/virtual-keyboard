alert('Приветствую! Прошу дать мне ещё времени, чтобы всё доделать. Спасибо :)')

const main = document.createElement('main');
const container = document.createElement('section');
const title = document.createElement('h1');
const input = document.createElement('textarea');
const keyboardWrapper = document.createElement('div');
const OS = document.createElement('p');
const languageChange = document.createElement('p');

document.body.append(main);

main.append(container);
container.className = 'container';

container.append(title);
title.className = 'title';
title.textContent = 'RSS Виртуальная клавиатура';

container.append(input);
input.className = 'input';
input.setAttribute('rows', '10');

container.append(keyboardWrapper);
keyboardWrapper.className = 'keyboard-wrapper';

container.append(OS);
OS.className = 'OS';
OS.textContent = 'Клавиатура создана в операционной системе Windows';

container.append(languageChange);
languageChange.className = 'language';
languageChange.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';

// Создание рядов клавиатуры
for (let i = 0; i < 5; i++) {
  let keyboardRow = document.createElement('div');
  keyboardRow.className = 'keyboard-row';
  keyboardWrapper.append(keyboardRow);
}

// Массив рядов клавиатуры
const keyboardRowArray = Array.from(document.querySelectorAll('.keyboard-row'));


// Массив кодов клавиш
const codesArray = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Del',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

// Массив кодов клавиш для input
let inputCodesArray = [];
inputCodesArray = inputCodesArray.concat(codesArray.slice(0, 13), codesArray.slice(15, 28), codesArray.slice(30, 41), codesArray.slice(43, 53), codesArray.slice(58, 59));

// Функция создания клавиатуры
const createKeyboard = (codes) => {
  for (let i = 0; i < 14; i++) {
    key = document.createElement('div');
    keyboardRowArray[0].append(key);
    key.className = 'key-button';
    key.classList.add(codes[i]);
  }
  for (let i = 14; i < 29; i++) {
    key = document.createElement('div');
    keyboardRowArray[1].append(key);
    key.className = 'key-button';
    key.classList.add(codes[i]);
  }
  for (let i = 29; i < 42; i++) {
    key = document.createElement('div');
    keyboardRowArray[2].append(key);
    key.className = 'key-button';
    key.classList.add(codes[i]);
  }
  for (let i = 42; i < 55; i++) {
    key = document.createElement('div');
    keyboardRowArray[3].append(key);
    key.className = 'key-button';
    key.classList.add(codes[i]);
  }
  for (let i = 55; i < 64; i++) {
    key = document.createElement('div');
    keyboardRowArray[4].append(key);
    key.className = 'key-button';
    key.classList.add(codes[i]);
  }
};

// Первоначальное создание клавиатуры
createKeyboard(codesArray);

// Массив всех клавиш
let arrayKeys = Array.from(document.querySelectorAll('.key-button'));

// Назначение классов спецклавишам
arrayKeys[13].classList.add('key-button_backspace');
arrayKeys[13].innerHTML = 'Backspace';
arrayKeys[14].classList.add('key-button_tab');
arrayKeys[14].innerHTML = 'Tab';
arrayKeys[28].classList.add('key-button_del');
arrayKeys[28].innerHTML = 'Del';
arrayKeys[29].classList.add('key-button_capslock');
arrayKeys[29].innerHTML = 'CapsLock';
arrayKeys[41].classList.add('key-button_enter');
arrayKeys[41].innerHTML = 'Enter';
arrayKeys[42].classList.add('key-button_left-shift');
arrayKeys[42].innerHTML = 'Shift';
arrayKeys[53].classList.add('key-button_up-arrow');
arrayKeys[53].innerHTML = '>';
arrayKeys[54].classList.add('key-button_right-shift');
arrayKeys[54].innerHTML = 'Shift';
arrayKeys[55].classList.add('key-button_left-ctrl');
arrayKeys[55].innerHTML = 'Ctrl';
arrayKeys[56].classList.add('key-button_left-alt');
arrayKeys[56].innerHTML = 'Alt';
arrayKeys[57].classList.add('key-button_win');
arrayKeys[57].innerHTML = 'Win';
arrayKeys[58].classList.add('key-button_space');
arrayKeys[58].innerHTML = ' ';
arrayKeys[59].classList.add('key-button_right-alt');
arrayKeys[59].innerHTML = 'Alt';
arrayKeys[60].classList.add('key-button_left-arrow');
arrayKeys[60].innerHTML = '<';
arrayKeys[61].classList.add('key-button_down-arrow');
arrayKeys[61].innerHTML = '>';
arrayKeys[62].classList.add('key-button_right-arrow');
arrayKeys[62].innerHTML = '>';
arrayKeys[63].classList.add('key-button_right-ctrl');
arrayKeys[63].innerHTML = 'Ctrl';

const engKeyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f',
  'g', 'h', 'j', 'k', 'l', ';', '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

const rusKeyboard = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'ф', 'ы', 'в',
  'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];

// Переменная, отслеживающая язык клавиатуры
let language = 'English';

// Функция создания клавиатуры в зависимости от языка
const createKeys = (value) => {
  let j = 0;
  for (let i = 0; i < 13; i++) {
    arrayKeys[i].innerHTML = value[j];
    j++;
  }
  for (let i = 15; i < 28; i++) {
    arrayKeys[i].innerHTML = value[j];
    j++;
  }
  for (let i = 30; i < 41; i++) {
    arrayKeys[i].innerHTML = value[j];
    j++;
  }
  for (let i = 43; i < 53; i++) {
    arrayKeys[i].innerHTML = value[j];
    j++;
  }
}

createKeys(engKeyboard);

// Функция поиска элемента с классом event.code
const checkCode = (item) => {
  for (let i of arrayKeys) {
    if (i.classList.contains(item.code)) {
      input.textContent += i.textContent;
    }
  }
};

// Функия переключение языка
const changeLanguage = () => {
  if (language == 'English') {
    createKeys(rusKeyboard);
    language = 'Russian';
  } else {
    createKeys(engKeyboard);
    language = 'English';
  }
};

// Нажатие клавиши на реальной клавиатуре
document.addEventListener('keydown', function (event) {
  event.preventDefault();
  for (let i of arrayKeys) {
    if (i.classList.contains(event.code)) {
      i.classList.add('key-button_pressed')
    }
  };
  if (event.ctrlKey && event.altKey) {
    changeLanguage();
  };
  if (event.code == 'Enter') {
    input.textContent += '\n';
  };
  if (event.code == 'Tab') {
    input.textContent += '\t';
  };
  if (inputCodesArray.includes(event.code)) {
    checkCode(event);
  };
});

document.addEventListener('keyup', function (event) {
  event.preventDefault();
  for (let i of arrayKeys) {
    if (i.classList.contains(event.code) && i.classList.contains('key-button_pressed')) {
      i.classList.remove('key-button_pressed');
    }
  }
});

// Input in textarea
// document.addEventListener('keydown', function (event) {
//   // event.preventDefault();
//   if (inputCodesArray.includes(event.code)) {
//     input.textContent += event.key;
//   }
// });

// Английская клавиатура
// const engKeyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
//   'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
//   'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
//   'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'UP', 'Shift',
//   'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'LEFT', 'DOWN', 'RIGHT', 'Ctrl'];

// Русская клавиатура
// const rusKeyboard = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
//   'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
//   'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
//   'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'UP', 'Shift',
//   'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'LEFT', 'DOWN', 'RIGHT', 'Ctrl'];