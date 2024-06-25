function delayedPromise() {
    return new Promise((resolve, reject) => {
        // Генерируем случайное число от 1 до 10
        const randomNumber = Math.ceil(Math.random() * 10);

        // Используем сгенерированное число как задержку для setTimeout
        setTimeout(() => {
            // Проверяем условия для успешного выполнения или ошибки
            if (randomNumber >= 1 && randomNumber <= 5) {
                resolve(`Success: Generated number is ${randomNumber}`);
            } else {
                reject(`Error: Generated number is ${randomNumber}`);
            }
        }, randomNumber * 1000); // setTimeout работает в миллисекундах, поэтому умножаем на 1000
    });
}

// Пример использования функции
delayedPromise()
    .then((result) => {
        console.log(result); // Выведет сообщение об успешном выполнении
    })
    .catch((error) => {
        console.error(error); // Выведет сообщение об ошибке
    });
