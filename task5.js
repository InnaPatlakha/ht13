// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let number = parseInt(prompt("Введіть число для перевірки можливості його одержання зведенням числа 3 в ступінь"));
let degreeOfThree = 1;
let isDegreeOfThree = false;

for (let degree = 0; degreeOfThree <= number; degree++) {
    if (degreeOfThree === number) {
        isDegreeOfThree = true;
        break;
    }
    degreeOfThree *= 3;
}

if (isDegreeOfThree){
    document.write("Число " + number + " можна отримати зведенням числа 3 в деякий ступінь");
} else {
    document.write("Число " + number + " не можна отримати зведенням числа 3 в деякий ступінь");
}