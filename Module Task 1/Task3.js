/**
 * Функция для сравнения двух объектов на эквивалентность значений свойств.
 * @param {Object} obj1 - Первый объект для сравнения.
 * @param {Object} obj2 - Второй объект для сравнения.
 * @returns {boolean} - Возвращает true, если первый объект содержит эквивалентные значения свойств, иначе false.
 */
function areObjectsEqual(obj1, obj2) {
    // Получаем массивы ключей для обоих объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Если количество ключей разное, объекты не могут быть эквивалентны
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Проверяем значения всех ключей в obj1 и сравниваем с соответствующими значениями в obj2
    for (let key of keys1) {
        // Проверка, содержит ли второй объект данный ключ
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }

        // Проверка на вложенные объекты, для рекурсивного сравнения объектов
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            if (!areObjectsEqual(obj1[key], obj2[key])) {
                return false;
            }
        } else {
            // Прямое сравнение значений
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
    }

    // Если все проверки пройдены, объекты эквивалентны
    return true;
}

// Пример использования функции
const object1 = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zip: '10001'
    }
};

const object2 = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zip: '10001'
    }
};

console.log(areObjectsEqual(object1, object2)); // true
