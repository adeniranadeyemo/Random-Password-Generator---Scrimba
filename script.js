'use strict';
const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

const passWord1El = document.getElementById('password1');
const passWord2El = document.getElementById('password2');
const passwordGenButton = document.getElementById('button1');
const savePasswordsButton = document.getElementById('button2');
const clearPasswords = document.getElementById('button3');
const innerPasswordCon = document.querySelector('.inner-saved-passwords-con');
console.log(innerPasswordCon);
//
const passwordsArray = [];
//
const downArrow = document.querySelector('.down-arrow');

let html;

// Function to generate HTML for each password
const generateHTML = function (password, i) {
  html = `<div class="saved-password">
              <div class="num-password">
                <p class="password-numb">${i}.</p>
                <p class="password">${password}</p>
              </div>
                <button class="delBtn">Delete</button>
          </div>`;
};

// Function that generated random passwords from the characters array
function randomPassword() {
  let array = Array(15)
    .fill()
    .map(() => characters[Math.floor(characters.length * Math.random())]);

  return array.join('');
}

// Function that adds/pushes the passwords to the passwordsArray
const addPasswords = function () {
  if (
    passWord1El.textContent &&
    !passwordsArray.includes(passWord1El.textContent) &&
    !passwordsArray.includes(passWord2El.textContent)
  ) {
    passwordsArray.push(passWord1El.textContent, passWord2El.textContent);
  }

  renderPasswords();
};

// Function that shows the passwords in the innerPasswordCon
const renderPasswords = function () {
  innerPasswordCon.innerHTML = '';

  passwordsArray.forEach(function (password, index) {
    generateHTML(password, index + 1);

    innerPasswordCon.insertAdjacentHTML('beforeend', html);
  });
};

// Event listener to display the passwords and the savePasswordsButton
passwordGenButton.addEventListener('click', function () {
  passWord1El.textContent = randomPassword();
  passWord2El.textContent = randomPassword();

  savePasswordsButton.style.visibility = 'visible';
});

// Event listener to clear the displayed passwords
clearPasswords.addEventListener('click', function () {
  passWord1El.textContent = passWord2El.textContent = '';
  savePasswordsButton.style.visibility = 'hidden';
});

// Event listener that triggers the addPasswords function
savePasswordsButton.addEventListener('click', function () {
  addPasswords();

  passWord1El.textContent = passWord2El.textContent = '';
});

const togglePasswordCon = function () {
  innerPasswordCon.classList.toggle('active');
  downArrow.classList.toggle('rotate');
};

downArrow.addEventListener('click', togglePasswordCon);

const passwordsMessage = document.querySelector('.saved-passwords-message');

passwordsArray.length === 0
  ? (passwordsMessage.textContent = 'No saved passwords yet.')
  : '';

// Function that deletes password
function deletePassword(index) {
  if (index !== -1) {
    passwordsArray.splice(index, 1);
    renderPasswords();
  }
}

let delIndex;

const findDelIndex = function (e) {
  const pElem = e.target.parentNode.querySelector('.password');

  const parentText = pElem.textContent;

  delIndex = passwordsArray.findIndex((password) => password === parentText);
};

const del = function (e) {
  if (e.target.classList.contains('delBtn')) {
    findDelIndex(e);

    deletePassword(delIndex);
  }
};

innerPasswordCon.addEventListener('click', del);
