function printLastCharacter(str) {
    if (str.length > 0) {
        console.log(str.charAt(str.length - 1));
    } else {
        console.log("The string is empty");
    }
}

// Пример использования:
printLastCharacter("Hello, world!"); // Выведет "!"
printLastCharacter("JavaScript");    // Выведет "t"
printLastCharacter("");              // Выведет "The string is empty"
