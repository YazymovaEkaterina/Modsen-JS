async function fetchDataWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const signal = controller.signal;
  
    const timeoutId = setTimeout(() => controller.abort(), timeout);
  
    try {
      const response = await fetch(url, { signal });
  
      clearTimeout(timeoutId);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Request aborted:', error);
      } else {
        console.error('Fetch error:', error);
      }
      throw error;
    }
  }
  
  // Пример использования
  const apiUrl = 'https://api.example.com/data';
  
  fetchDataWithTimeout(apiUrl, 5000)
    .then(data => {
      console.log('Received data:', data);
      // Далее обрабатываем полученные данные
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Обрабатываем ошибку получения данных
    });
  