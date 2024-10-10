/*Task 1.  
1. Цикл for..of в массиве
  - Создайте массив [1,2,3,4,5,6,7,8,9,10]
  - Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
    если элемент четный - возведет его в квадрат
    если элемент нечетный - возведет его в 3ю степень
 */
const arr_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const arr_number of arr_numbers) {
  if (arr_number % 2 === 0) {
    console.log("элемент четный, arr_number= " + arr_number * arr_number);
  } else {
    console.log("элемент нечетный, arr_number= " + arr_number ** 3);
  }
}

/*Task 1
2. Методы массивов
  - Создайте массив [1,2,3,4,5]
  - Добавьте в конец массива число 6 соответствующим методом
  - Добавьте в начало массива число 0 соответствующим методом
  - Удалите элемент с индексом 2 из массива соответствующим методом
  - Удалите последний элемент из массива соответствующим методом
  В результате вы должны получить [0, 1, 3, 4, 5]
*/

  const chisla = [1, 2, 3, 4, 5];
  chisla.push(6);
  chisla.unshift(0);
  chisla.splice(2,1);
  let lastchisl = chisla.pop();
  console.log(chisla);

/*
Task 1
3. Деструктуризация массивов
  - Создайте массив из 5 любых чисел (придумать числа самим)
  - Через деструктуризацию получите в новые переменные первый, второй и остальные элементы массива
  - Пример: [1,2,3,4,5] => first === 1; second === 2, rest === [3,4,5]
*/
const masivChisla = [6, 2, 8, 4, 3];
const [first, second, ...rest] = masivChisla;
console.log("1 элемент массива " + first);
console.log("2 элемент массива " + second);
console.log("содержимое rest " + rest);

/*
Task 1
4. Конкатенация массивов
  - Создайте массив с числами [1,2,3,4,5]
  - Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
  - Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
  - Используйте спред оператор
*/
const masivChislaOne = [1,2,3,4,5];
const masivChislatwo = [6, 7, 8, 9, 10];
const mergedArray = [...masivChislaOne, ...masivChislatwo];
console.log("mergedArray " + mergedArray);
