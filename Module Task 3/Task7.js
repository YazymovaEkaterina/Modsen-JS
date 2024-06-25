// Создание пользовательского класса ошибки
class DivisionByZeroError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DivisionByZeroError';
    }
}

// Функция, которая принимает два числа и выбрасывает ошибку, если второе число равно нулю
function divide(a, b) {
    if (b === 0) {
        throw new DivisionByZeroError('Деление на ноль невозможно.');
    }
    return a / b;
}

// Пример использования функции и обработки ошибки
try {
    let result = divide(10, 0);
    console.log(result);
} catch (error) {
    if (error instanceof DivisionByZeroError) {
        console.error(error.message);
    } else {
        console.error('Произошла неизвестная ошибка.');
    }
}
