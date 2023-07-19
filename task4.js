// Дано ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let integer = parseInt(prompt("Введіть ціле число"));
let IsPrimeNumber = true;
if (integer <= 1) {
    IsPrimeNumber = false;
} else {
    for (j = 2; j < integer; j++) {
        if (integer % j === 0) {
            IsPrimeNumber = false;
            break;
        }
    }
}

if (IsPrimeNumber) {
    alert ("Ви ввели число:" + " " + integer + " " + "Це число є простим");
} else {
    alert ("Ви ввели число:" + " " + integer + " " + "Це число не є простим");
}