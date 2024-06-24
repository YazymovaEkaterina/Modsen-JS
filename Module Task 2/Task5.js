function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Меняем местами arr[i] и arr[i + 1]
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Уменьшаем n на 1, потому что последний элемент уже на своем месте
        n--;
    } while (swapped);
    return arr;
}

// Пример использования
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", array);
let sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);
