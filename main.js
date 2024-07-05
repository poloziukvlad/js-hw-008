// Створіть об'єкт, який представляє інформацію про вашого улюбленого персонажа з книги, фільму або гри. Обов'язково включіть наступні властивості:
// name (ім'я персонажа)
// universe (в якому всесвіті перебуває цей персонаж)
// occupation (рід занять або роль персонажа)
// powers (масив з переліком суперсил або особливостей персонажа)
// Виведіть у консоль інформацію про створений об'єкт, звертаючись до його властивостей окремо.
// Додайте до об'єкта метод introduce, який буде виводити в консоль рядок з привітанням, використовуючи ім'я персонажа. Наприклад, "Привіт, я {ім'я персонажа}!".
// Викликайте метод introduce() для вашого об'єкта та переконайтеся, що він виводить правильне привітання з ім'ям персонажа.
// Створіть рядок JSON, який представляє ваш об'єкт, використовуючи метод JSON.stringify(). Збережіть цей рядок у змінну.
// Виведіть у консоль змінну, в якій збережено JSON-рядок.
// Використайте метод JSON.parse() для перетворення вашого JSON-рядка назад у об'єкт. Виведіть отриманий об'єкт у консоль.
// Переконайтеся, що об'єкт, отриманий після парсингу, ідентичний по вмісту оригінальному об'єкту.
// Додатково: Спробуйте видалити одну з властивостей у вашому об'єкті за допомогою оператора delete. Виведіть об'єкт у консоль, щоб переконатися, що властивість була видалена.
// Додатково: Перевірте наявність певної властивості у вашому об'єкті за допомогою оператора in і виведіть результат у консоль.

const character = {
  name: "Spider Man",
  universe: "Marvel Comics",
  occupation: "Peter Parker",
  powers: [
    {
      power1: "Superhuman strength",
      power2: "Night vision",
      power3: "Wall Crawling",
      power4: "Agility",
    },
  ],
  introduce() {
    console.log(`Привет, меня зовут ${this.name}.`);
  },
};
character.introduce();

console.log(character.name);
console.log(character.universe);
console.log(character.occupation);

console.clear();

const characterSereliazed = JSON.stringify(character);
console.log(characterSereliazed);
console.log(typeof characterSereliazed);

const characterDesereliazed = JSON.parse(characterSereliazed);
console.log(characterDesereliazed);
console.log(typeof characterDesereliazed);

console.clear();

delete character.name;
console.log(character);
console.log("name" in character);
