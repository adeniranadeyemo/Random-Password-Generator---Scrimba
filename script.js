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

function randomPassword() {
  let array = Array(15)
    .fill()
    .map(() => characters[Math.floor(characters.length * Math.random())]);

  return array.join('');
}

passwordGenButton.addEventListener('click', function () {
  passWord1El.textContent = randomPassword();
  passWord2El.textContent = randomPassword();

  savePasswordsButton.style.visibility = 'visible';
});

clearPasswords.addEventListener('click', function () {
  passWord1El.textContent = passWord2El.textContent = '';
  savePasswordsButton.style.visibility = 'hidden';
});
