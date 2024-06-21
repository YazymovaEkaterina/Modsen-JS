function executeSequentially(tasks) {
    // Начнем с Promise, который уже завершен
    let result = Promise.resolve();

    // Пройдемся по каждой задаче
    tasks.forEach(task => {
        // Обновляем результат, добавляя цепочку
        result = result.then(() => task());
    });

    // Возвращаем окончательный Promise
    return result;
}

// Пример использования:

// Асинхронные функции, возвращающие Promise
function asyncTask1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Task 1 completed');
            resolve();
        }, 1000);
    });
}

function asyncTask2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Task 2 completed');
            resolve();
        }, 500);
    });
}

function asyncTask3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Task 3 completed');
            resolve();
        }, 1500);
    });
}

// Массив асинхронных задач
const tasks = [asyncTask1, asyncTask2, asyncTask3];

// Выполнение задач последовательно
executeSequentially(tasks).then(() => {
    console.log('All tasks completed');
});
