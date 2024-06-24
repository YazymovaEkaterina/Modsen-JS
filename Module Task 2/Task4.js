function sumFirstHalf(arr) {
    // Находим длину массива
    const length = arr.length;
    
    // Определяем, сколько элементов составляет половина массива
    const half = Math.floor(length / 2);
    
    // Инициализируем переменную для суммы
    let sum = 0;
    
    // Проходим по первой половине массива и суммируем элементы
    for (let i = 0; i < half; i++) {
      sum += arr[i];
    }
    
    // Возвращаем сумму
    return sum;
  }
  
  // Пример использования:
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(sumFirstHalf(numbers)); // Вывод: 6 (1 + 2 + 3)
  