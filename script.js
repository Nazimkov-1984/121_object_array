// const city_name = 'Kyiv'
// const API_key = "0e3f4c3098c7d2107ce581907ae44eb7";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`;
//  fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });

// 1) шаблонні строки
// 2) створення елементів за допомогою JS
// 3) об'єкти
// 4) масиви
// 5)отримання данних з серверу

const name = 'Микола';
const gr = 10;
const kop = 15;
console.log("Ціна товару:", gr, "грн", kop,"коп");
console.log(`Ціна товару: ${gr}грн ${kop}коп`);

const title = document.createElement('h1');
title.textContent = 'Hello world';
document.body.appendChild(title);

// цикл - це спосіб відтворити однотипні дії


for(let iterator = 1; iterator <= 4; iterator++ ){
        const listItem = document.createElement('img');
        listItem.src= `./footerIcon/${iterator}.jpg`;
        document.body.appendChild(listItem);
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function changeBackground() {
    console.log(randomInteger(1, 4));
    document.body.style.backgroundImage = `url(./footerIcon/${randomInteger(1, 4)}.jpg)`
}

setInterval(changeBackground, 5000);

// об'єкти та масиви (строки, числа та логічний тип данних (true, false))
// примітивні типи - вони можуть зберігати лише одне значення

// ключ : значення
const user = {
    name: "Mykola",
    age: 30,
    isStudent: false,
    city: "Poltava",
    listOfSkills: ['html', 'css', 'java Script', 'VS Code']
}

console.log(user.name);
// індекс елементу - порядковий номер в масиві (він починаєтся з 0)
const userArray = ['Mykola', 30, false, "Poltava", 'dddfd', 10]

userArray.forEach((element, i) => {
    const iterator = i + 1;
    console.log(iterator, element);
})

// стрілочна функція =>

function nameFunction () {
    console.log('Hello')
}

const greeting = () => console.log('Hello')

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))