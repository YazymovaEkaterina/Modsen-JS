/**
 * Функция принимает число и выводит в консоль сумму первой и последней цифры этого числа.
 * @param {number} num - Входное число
 */
function sumFirstAndLastDigit(num) {
    // Преобразуем число в строку, чтобы было проще работать с цифрами
    let numStr = num.toString();

    // Извлекаем первую цифру
    let firstDigit = parseInt(numStr[0]);

    // Извлекаем последнюю цифру
    let lastDigit = parseInt(numStr[numStr.length - 1]);

    // Вычисляем сумму первой и последней цифры
    let sum = firstDigit + lastDigit;

    // Выводим результат в консоль
    console.log(sum);
}

// Пример использования функции
sumFirstAndLastDigit(12345); // Вывод: 6
sumFirstAndLastDigit(1001);  // Вывод: 2
sumFirstAndLastDigit(9876);  // Вывод: 15
