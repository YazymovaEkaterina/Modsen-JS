async function fetchDataFromMultipleServers(urls) {
    try {
        const promises = urls.map(async (url) => {
            let response = await fetch(url);
            return response.json(); // Предполагаем, что данные в формате JSON
        });

        const results = await Promise.all(promises);

        return results;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Пример использования функции fetchDataFromMultipleServers:

let urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
];

fetchDataFromMultipleServers(urls)
    .then((results) => {
        console.log('All data loaded successfully:', results);
        // Далее обрабатываем полученные данные
    })
    .catch((error) => {
        console.error('Failed to fetch data from multiple servers:', error);
        // Обрабатываем ошибку
    });
