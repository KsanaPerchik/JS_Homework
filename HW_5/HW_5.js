/*Task 1.  
1. Создайте цикл, который выведет в консоль только четные цифры от 10 до 0 (10-8-6-4-2-0)
 */
let even_digit = 10;

while (even_digit >= 0) {
  if (even_digit % 2 === 0) {
    console.log(even_digit);
  }
  even_digit -= 2;
}

/*
Task 1
2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
  Пример в консоли:
  :)
  :):)
  :):):)
  :):):):)
  :):):):):)
*/
let smile = ":)";

for (let i = 0; i <= 5; i++) {
  let stroka = "";
  for (let j = 0; j < i; j++) {
    stroka += smile;
  }
  console.log("  " + stroka);
}

/*
Task 1
3. Создайте скрипт, который удалит все пробелы из строчки:
  - Создайте переменную text со значением: Hello! I am a JS student!
  - Вывелите в консоль text, заменив в ней все пробелы на 1 (единица)
  - Реализуйте с помощью метода replaceAll
  - Пример в консоли: Hello!1I1am1a1JS1student!)
*/

const text = "Hello! I am a JS student!";
console.log(text.replaceAll(' ', ''));
console.log(text.replaceAll(' ', 1));

/*
Task 2
Вам нужно вывести в консоль числа от 1 до 100.
    Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
    Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
    Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
    Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.
*/

for (let chislo = 1; chislo <= 100; chislo++) {
  if (chislo % 3 === 0 && chislo % 5 === 0){
    console.log(chislo + "число - делится и на 3 на 5");
  }
  else if (chislo % 5 === 0)
    console.log(chislo + "число - делится на 5");
  else if (chislo % 3 === 0)
    console.log(chislo + "число - делится на 3");
  else (chislo + "число не подходит заданным условиям")
}
