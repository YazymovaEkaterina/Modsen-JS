async function loadDataAndSendRequest() {
    try {
        // Шаг 1: Загрузка данных с первого сервера
        let response1 = await fetch('https://api.example.com/data');
        if (!response1.ok) {
            throw new Error(`Ошибка загрузки данных: ${response1.status}`);
        }
        let data = await response1.json();

        // Извлечение необходимых данных для запроса на второй сервер
        let requestData = {
            // Пример данных для запроса на второй сервер
            someData: data.someValue
        };

        // Шаг 2: Отправка запроса на второй сервер
        let response2 = await fetch('https://api.anotherexample.com/endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        if (!response2.ok) {
            throw new Error(`Ошибка выполнения запроса: ${response2.status}`);
        }

        let responseData = await response2.json();
        return responseData; // Возвращаем полученные данные, если нужно
    } catch (error) {
        console.error('Произошла ошибка:', error);
        throw error; // Пробрасываем ошибку дальше, если нужно
    }
}

// Асинхронная самовызывающаяся функция для использования async/await
(async () => {
    try {
        let responseData = await loadDataAndSendRequest();
        console.log('Ответ от второго сервера:', responseData);
    } catch (error) {
        console.error('Произошла ошибка при выполнении запросов:', error);
    }
})();
