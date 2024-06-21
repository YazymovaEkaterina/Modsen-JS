async function fetchData(url) {
    try {
        // Ждем ответа от сервера с помощью fetch
        let response = await fetch(url);

        // Проверяем, что ответ успешный (статус 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Ждем преобразования ответа в JSON формат
        let data = await response.json();

        // Возвращаем полученные данные
        return data;
    } catch (error) {
        // Ловим ошибки, например сетевые ошибки или ошибки парсинга JSON
        console.error('Error fetching data:', error);
        throw error; // Можно выбросить ошибку выше, чтобы обработать ее в вызывающем коде
    }
}

// Пример использования функции
async function fetchAndProcessData() {
    let url = 'https://api.example.com/data'; //Надо замените на реальный URL API

    try {
        let data = await fetchData(url);
        console.log('Received data:', data);

        // Здесь можно обрабатывать данные дальше
        // Например, обновить интерфейс страницы или что-то еще
    } catch (error) {
        // Обработка ошибок при вызове fetchData
        console.error('Error in fetchAndProcessData:', error);
    }
}

// Вызываем функцию для загрузки и обработки данных
fetchAndProcessData();
