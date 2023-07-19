// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let change = 27;

for (let dollar = 10; dollar <= 100; dollar += 10) {
  let uah = dollar * change;
  document.write("Result:" + " " + dollar + " " + "=" + " " + uah + "uah" + "<br>");
}