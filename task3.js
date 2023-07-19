// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let digit = parseInt(prompt("Введіть число"));

for (let i = 1; i <= 100; i++) {
  if ((i * i) <= digit) {
    document.write (i + " ");
  }
}