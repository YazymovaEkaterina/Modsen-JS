"use strict"; // Включаем строгий режим

/**
 * Функция проверяет наличие значения в массиве.
 * @param {Array} arr - Массив для проверки
 * @param {*} value - Значение, которое нужно найти
 * @returns {boolean} - Возвращает true, если значение найдено, и false, если нет
 */
function contains(arr, value) {
    // Перебираем массив с помощью метода some, который проверяет,
    // соответствует ли хотя бы один элемент массива условию
    return arr.some(function(element) {
        return element === value; // Сравниваем текущий элемент с искомым значением
    });
}

// Примеры использования функции:
console.log(contains([1, 2, 3], 2)); // true
console.log(contains([1, 2, 3], 4)); // false
console.log(contains(['a', 'b', 'c'], 'b')); // true
console.log(contains(['a', 'b', 'c'], 'd')); // false
