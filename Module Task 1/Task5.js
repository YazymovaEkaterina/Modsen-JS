/**
 * Функция для выполнения заданной операции через фиксированные интервалы времени.
 * @param {Function} operation - Функция, которую нужно выполнять.
 * @param {number} interval - Интервал времени в миллисекундах между выполнениями.
 */
function repeatOperation(operation, interval) {
    // Проверяем, что operation является функцией и interval является числом
    if (typeof operation !== 'function') {
        throw new Error('operation должна быть функцией');
    }
    if (typeof interval !== 'number' || interval <= 0) {
        throw new Error('interval должен быть положительным числом');
    }

    // Используем setInterval для выполнения операции через указанные интервалы времени
    const intervalId = setInterval(() => {
        // Выполняем переданную операцию
        operation();
    }, interval);

    // Возвращаем идентификатор интервала, чтобы его можно было остановить при необходимости
    return intervalId;
}

// Пример использования функции repeatOperation
const operation = () => {
    console.log('Операция выполнена:', new Date().toLocaleTimeString());
};

// Запускаем операцию каждые 2 секунды
const intervalId = repeatOperation(operation, 2000);

// Через 10 секунд останавливаем выполнение операции
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Интервал остановлен');
}, 10000);
