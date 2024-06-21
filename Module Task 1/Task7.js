// Функция для проверки, является ли число целым
function checkInteger(number) {
    // Если параметр не является числом или не является целым числом
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        // Выбрасываем пользовательскую ошибку с сообщением
        throw new Error('Параметр должен быть целым числом');
    }
    // Если проверка пройдена, выводим сообщение о том, что число является целым
    console.log('Число является целым.');
}

// Примеры использования функции
try {
    checkInteger(5); // Число является целым.
    checkInteger(5.5); // Ошибка: Параметр должен быть целым числом
} catch (error) {
    console.error(error.message); // Обрабатываем ошибку и выводим сообщение
}

try {
    checkInteger('текст'); // Ошибка: Параметр должен быть целым числом
} catch (error) {
    console.error(error.message); // Обрабатываем ошибку и выводим сообщение
}