// Объявление переменной с использованием var
var x = 10;
console.log(x); // Вывод: 10

// Повторное объявление переменной с использованием var
var x = 20;
console.log(x); // Вывод: 20
// Это допустимо, переменная x будет переопределена

// Объявление переменной с использованием let
let y = 10;
console.log(y); // Вывод: 10

// Повторное объявление переменной с использованием let
try {
    let y = 20; // Это вызовет ошибку
} catch (e) {
    console.error("Ошибка при объявлении let:", e.message); // Вывод: Identifier 'y' has already been declared
}

// Объявление переменной с использованием const
const z = 10;
console.log(z); // Вывод: 10

// Повторное объявление переменной с использованием const
try {
    const z = 20; // Это вызовет ошибку
} catch (e) {
    console.error("Ошибка при объявлении const:", e.message); // Вывод: Identifier 'z' has already been declared
}
