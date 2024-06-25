function fetchMultipleAPIs(urls) {
    // Создаем массив промисов, используя fetch для каждого URL
    const fetchPromises = urls.map(url => fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
      }
      return response.json();
    }));
  
    // Используем Promise.all для ожидания завершения всех промисов
    return Promise.all(fetchPromises)
      .then(results => {
        // Объединяем результаты в один объект
        return results.reduce((acc, result, index) => {
          acc[urls[index]] = result;
          return acc;
        }, {});
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  }
  
  // Пример использования
  const apiUrls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
  ];
  
  fetchMultipleAPIs(apiUrls)
    .then(combinedResult => {
      console.log('Combined result:', combinedResult);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  