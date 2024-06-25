function findFirstNonRepeatingCharacter(str) {
    const charCount = {};

    // Считаем количество вхождений каждого символа
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Ищем первый символ с количеством вхождений 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Если неповторяющихся символов нет
}

// Пример использования:
const inputString = "abacabad";
const result = findFirstNonRepeatingCharacter(inputString);
console.log(result); // Output: "c"
