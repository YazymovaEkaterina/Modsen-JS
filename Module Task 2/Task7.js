function accessUndefinedProperty(obj) {
    try {
        // Пытаемся получить доступ к свойству неопределенного объекта
        let value = obj.undefinedProperty;
        console.log('Значение свойства:', value); // Эта строка выполнится только если нет ошибки
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Произошла ошибка TypeError:', error.message);
            // Дополнительный код для обработки ошибки, если это необходимо
        } else {
            throw error; // Перебрасываем ошибку, если это не TypeError
        }
    }
}

// Пример использования функции
let obj1 = { definedProperty: 'value' };
let obj2 = null; // Попытка доступа к свойству у null

accessUndefinedProperty(obj1); // Вызов функции с объектом, у которого есть определенное свойство
accessUndefinedProperty(obj2); // Вызов функции с null, что приведет к ошибке TypeError
