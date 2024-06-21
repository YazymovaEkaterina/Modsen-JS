/**
 * Функция принимает массив чисел и увеличивает каждое число на 10 процентов.
 * @param {number[]} arr - Массив чисел.
 * @return {number[]} - Новый массив чисел, увеличенных на 10 процентов.
 */
function incrementByTenPercent(arr) {
    // Создаем новый массив для хранения результатов
    let incrementedArr = [];

    // Проходим по каждому элементу входного массива
    for (let i = 0; i < arr.length; i++) {
        // Увеличиваем элемент на 10 процентов и добавляем в новый массив
        incrementedArr.push(arr[i] * 1.1);
    }

    // Возвращаем новый массив
    return incrementedArr;
}

// Пример использования функции
let numbers = [10, 20, 30, 40];
let incrementedNumbers = incrementByTenPercent(numbers);
console.log(incrementedNumbers); // [11, 22, 33, 44]
