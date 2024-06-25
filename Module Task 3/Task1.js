"use strict";

function countVowels(str) {
    // Определяем регулярное выражение для поиска гласных букв (как строчных, так и прописных)
    const vowels = /[aeiouAEIOU]/g;
    
    // Используем метод match для нахождения всех гласных в строке
    const matches = str.match(vowels);
    
    // Если найдены совпадения, возвращаем длину массива совпадений, иначе возвращаем 0
    return matches ? matches.length : 0;
}

// Пример использования
const exampleString = "Hello World!";
console.log(countVowels(exampleString)); // Вывод: 3
