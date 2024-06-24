async function fetchParallel(urls) {
    // Массив для хранения промисов запросов
    let promises = [];

    // Создание промисов для каждого URL
    urls.forEach(url => {
        let promise = new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
                    }
                    return response.text();
                })
                .then(data => resolve({ url, data }))
                .catch(error => reject(error));
        });

        promises.push(promise);
    });

    try {
        // Выполнение всех промисов параллельно и ожидание их завершения
        let results = await Promise.all(promises);
        return results;
    } catch (error) {
        console.error('Failed to fetch data from some URLs:', error);
        throw error;
    }
}

// Пример использования функции
let urls = [
    'https://learn.modsen.app/courses/14'
];

fetchParallel(urls)
    .then(results => {
        console.log('Results:', results);
        // Здесь можно обработать полученные результаты
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
